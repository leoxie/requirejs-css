[requirejs-css](https://github.com/leoxie/requirejs-css/wiki) - Css Plugin For requirejs
==================================================

Basic usage
--------------------------------------
```js
require.config({
    paths : {
        //create alias to plugins (not needed if plugins are on the baseUrl)
        css: 'XXX/css',
    },
    theme : 'theme', //default is 'default'
    cssDisabled : true //default is false
});

//use plugins as if they were at baseUrl
define([
        'css!xxx.css',
        'css!./*/yyy.css'
    ], function(){
        // create the 'link' in the head 
        // if exists * , will replace * to theme 
    }
);
```