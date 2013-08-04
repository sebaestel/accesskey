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

    var ua = navigator.userAgent.toLowerCase(),
        os = detect('os'),
        browser = detect('browser'),
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
        }

    // Loop trought every element that has an accesskey attribute defined
    $('[accesskey]').each(function(){
        var accesskey = this.accessKey.split(' ') || ''
        this.title += ' ' + keystrokes[os][browser].replace( /%s/, accesskey[0] )
    });

    /**
     * Run any detection needed
     *
     * @param  string what What you want to be detected
     * @return mixed
     */
    function detect( what ){
        switch ( what ) {
            case 'browser' :
                var browserArray = /(chrome)(?:.*chrome)?[ \/]([\w.]+)/.exec(ua)
                    || /(safari)(?:.*version)?[ \/]([\w.]+)/.exec(ua)
                    || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua)
                    || /(ie) ([\w.]+)/.exec(ua)
                    || !/compatible/.test(ua) && /(firefox)(?:.*firefox)?[ \/]([\w.]+)/.exec(ua)
                    || []
                return browserArray[1] || undefined;
            case 'os' :
                return ua.indexOf('macintosh') !== -1 ? 'machintosh' :
                       ua.indexOf('windows') !== -1 ? 'windows' :
                       ua.indexOf('linux') !== -1 ? 'linux' :
                       undefined;
        }
    }
})(jQuery);