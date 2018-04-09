/* http://www.jquerybyexample.net/2012/06/get-url-parameters-using-jquery.html*/
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

$(document).ready(function(){
	var template = $('#section').html();
	var slides = $('.slides');

	var cartodb_table = getUrlParameter('cartodb') || 'jsanz/slideshow';

	var cdb_comps = cartodb_table.split('/');
	var user = cdb_comps[0];
	var table = cdb_comps[1] || 'slideshow';

	// TODO support also CSV by url

	new cartodb.SQL({'user': user})
	.execute('select url,title from ' + table + ' order by slide')
	.done(function(data){
		$('h2.loading').remove();
		data.rows.forEach(function(d){
			slides.append(
				template.replace('{{title}}',d.title).replace(/{{url}}/gi,d.url)
			);
		})

		// Full list of configuration options available at:
		// https://github.com/hakimel/reveal.js#configuration
		Reveal.initialize({
			width: '100%',
			height: '100vh',
			controls: false,
			progress: true,
			history: true,
			center: true,
			loop: true,
			autoSlide: 15000,
			transition: 'slide', // none/fade/slide/convex/concave/zoom

			// Optional reveal.js plugins
			dependencies: [
				{ src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
				{ src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
				{ src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
				{ src: 'plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
				{ src: 'plugin/zoom-js/zoom.js', async: true },
				{ src: 'plugin/notes/notes.js', async: true }
			]
		});
	});
});