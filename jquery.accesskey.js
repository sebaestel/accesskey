 /**
 * Accesskey user support
 * 
 * Adds a hint to the title attribute of elements that support 
 * accesskey shortcuts
 * 
 * @author      Gabriel Izaias <gabriel.izaias@gmail.com>
 */
;(function($){
    var ua = navigator.userAgent.toLowerCase(),
        os = detect('os'),
        browser = detect('browser');
        newTitle = '';

    console.log( browser, 'on', os );
    // Loo trought every element that has a accesskey attribute defined
    $('[accesskey]').each(function(){
        var accesskey = this.accessKey,
            newTitle = title = this.title || '';

        // switch(os){
        //     case 'windows' :
        //         newTitle = $.browser.msie || $.browser.webkit ? title + ' [alt+' + accesskey + ']' :
        //              $.browser.opera ? title + ' [shift+esc+' + accesskey + ']' :
        //              $.browser.mozilla ? title + ' [alt+shift+' + accesskey + ']' :
        //              title;
        //         break;
        //     case 'machintosh' :
        //         newTitle = $.browser.msie || $.browser.webkit ? title + ' [cmd+alt+' + accesskey + ']' :
        //              $.browser.opera ? title + ' [shift+esc+' + accesskey + ']' :
        //              $.browser.mozilla ? title + ' [cmd+' + accesskey + ']' :
        //              title;
        //         break;
        //     default:
        // }

        return this.title = newTitle;
    });

    /**
     * Run any detection needed
     * 
     * @param  String what What you want to be detected
     * @return Mixed
     */
    function detect( what ){
        switch ( what ) {
            case 'browser' :
                var browserArray = /(chrome)(?:.*chrome)?[ \/]([\w.]+)/.exec(ua) || /(safari)(?:.*version)?[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua) || /(ie) ([\w.]+)/.exec(ua) || !/compatible/.test(ua) && /(firefox)(?:.*firefox)?[ \/]([\w.]+)/.exec(ua) || []
                return browserArray[1] || undefined;
                break;
            case 'os' :
                return ua.indexOf('macintosh') !== -1 ? 'machintosh' :
                       ua.indexOf('windows') !== -1 ? 'windows' :
                       ua.indexOf('linux') !== -1 ? 'linux' :
                       undefined;
                break;
            default :
                return;
                break;
        }
    }
})(jQuery);