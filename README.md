iFrame Slideshow
=======================

Create a set of slides that render iframes and loops over them automatically.

Call http://jsanz.github.io/slideshow/?cartodb=user/table where

- `user` is your user name at [CartoDB](http://cartodb.com)
- `table` is a table on your CartoDB account, you can leave it blank if the table is named `slideshow`.

So you can load for example http://jsanz.github.io/slideshow/?cartodb=jsanz/slideshow

The table needs to have these fields:

- `url` to be loaded
- `title` for the slide
- `slide` number to order the slide show

You can see an example table [here](https://team.cartodb.com/u/jsanz/tables/slideshow/public), just upload it to your account and update it.

Things on the to-do list:

- Allow customization of the slideshow (autoloop, theming, time between slides, etc)
- I'll explore other options like passing a custom url or a CSV when I have more time.

Enjoy!<br/>
Jorge