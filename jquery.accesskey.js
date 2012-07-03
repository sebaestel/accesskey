 /**
 * Accesskey user support
 * 
 * Adds a hint to the title attribute of elements that support 
 * accesskey shortcuts
 * 
 * @author      Gabriel Izaias <gabriel.izaias@gmail.com>
 */
;(function($){
    $('[accesskey]').each(function(){
        var element = $(this),
            accesskey = element.attr('accesskey'),
            title = element.attr('title') || '',
            os = (function(){
                var agent = navigator.userAgent.toLowerCase();
                return agent.indexOf('macintosh') !== -1 ? 'machintosh' :
                       agent.indexOf('windows') !== -1 ? 'windows' :
                       agent.indexOf('linux') !== -1 ? 'linux' :
                       undefined;
            })(),
            newTitle = '';

        switch(os){
            case 'windows' :
                newTitle = $.browser.msie || $.browser.webkit ? title + ' [alt+' + accesskey + ']' :
                     $.browser.opera ? title + ' [shift+esc+' + accesskey + ']' :
                     $.browser.mozilla ? title + ' [alt+shift+' + accesskey + ']' :
                     title;
                break;
            case 'machintosh' :
                newTitle = $.browser.msie || $.browser.webkit ? title + ' [cmd+alt+' + accesskey + ']' :
                     $.browser.opera ? title + ' [shift+esc+' + accesskey + ']' :
                     $.browser.mozilla ? title + ' [cmd+' + accesskey + ']' :
                     title;
                break;
            default:
        }

        return element.attr('title', newTitle);
    });
})(jQuery);