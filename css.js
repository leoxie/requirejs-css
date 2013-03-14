define(['module'], function(module) {

    'use strict';

    var theCache = {}, theme = "default";

    //API
    var css = {
        version: '0.0.1',

        parseName: function(name, req) {
            name = req.toUrl(name.replace(/\*/g, theme));
            if (name in theCache) return null;
            else {
                theCache[name] = true;
                return name;
            }
        },

        load: function(name, req, onLoad, config) {
            config = config || {};
            if (config.isBuild || config.cssDisabled) {
                onLoad();
                return;
            }

            if(config.theme)
                theme = config.theme;

            var url = css.parseName(name,req);
            if(url!=null){
                var doc = document;
                var link = doc.createElement("link");
                link.setAttribute("rel", "stylesheet");
                link.setAttribute("type", "text/css");
                link.setAttribute("href", url);
                doc.getElementsByTagName("head")[0].appendChild(link);
            }
            onLoad();
        }
    };

    return css;
});