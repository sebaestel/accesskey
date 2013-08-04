 /**
 * Accesskey user support
 *
 * Adds a hint to the title attribute of elements that support
 * accesskey shortcuts
 *
 * @author      Gabriel Izaias <gabriel.izaias@gmail.com>
 */
;(function($){
    "use strict";

    var
        /**
         * User Agent
         *
         * @type {string}
         */
        ua = navigator.userAgent.toLowerCase(),

        /**
         * Keystroke combination for every browser
         *
         * @type {Object}
         */
        keystrokes = {
            windows : {
                ie      : '[alt+%s]',
                chrome  : '[alt+%s]',
                safari  : '[alt+%s]',
                firefox : '[alt+shift+%s]',
                opera   : '[shif+esc+%s]'
            },
            machintosh : {
                chrome  : '[ctrl+alt+%s]',
                safari  : '[ctrl+alt+%s]',
                firefox : '[ctrl+alt+%s]',
                opera   : '[shif+esc+%s]'
            }
        },

        /**
         * Operating System
         *
         * @type {string}
         */
        os = (function(){
            return ua.indexOf('macintosh') !== -1 ? 'machintosh' :
                   ua.indexOf('windows') !== -1 ? 'windows' :
                   ua.indexOf('linux') !== -1 ? 'linux' :
                   undefined;
        }()),

        /**
         * Browser
         *
         * @type {string}
         */
        browser = (function(){
            var browserArray = /(chrome)(?:.*chrome)?[ \/]([\w.]+)/.exec(ua)
                    || /(safari)(?:.*version)?[ \/]([\w.]+)/.exec(ua)
                    || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua)
                    || /(ie) ([\w.]+)/.exec(ua)
                    || !/compatible/.test(ua) && /(firefox)(?:.*firefox)?[ \/]([\w.]+)/.exec(ua)
                    || []
            return browserArray[1] || undefined;
        }())

    // Loop trought every element that has an accesskey attribute defined
    $('[accesskey]').each(function(){
        var accesskey = this.accessKey.split(' ') || ''
        this.title += ' ' + keystrokes[os][browser].replace( /%s/, accesskey[0] )
    });

})(jQuery);