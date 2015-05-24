(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['b'], function (b) {
            return (root.Accesskey = factory(b));
        });
    } else {
        // Browser globals
        root.Accesskey = factory(root.b);
    }
}(this, function (b) {
    console.log(b);
/**
 * Browser userAgent
 *
 * @type {String}
 */
    var userAgent = window.navigator.userAgent.toLowerCase();

/**
 * Detect which browser is being used
 *
 * @param  {String} ua Optional userAgent
 * @return {String}    The lowercase browser name
 */
    function getBrowser(ua) {
        var ua = ua || userAgent;
        return /(chrome)(?:.*chrome)?[ \/]([\w.]+)/.exec(ua)[1]
                || /(safari)(?:.*version)?[ \/]([\w.]+)/.exec(ua)[1]
                || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua)[1]
                || /(ie) ([\w.]+)/.exec(ua)[1]
                || !/compatible/.test(ua) && /(firefox)(?:.*firefox)?[ \/]([\w.]+)/.exec(ua)[1]
                || undefined;
    }

/**
 * Detect the OS being used
 *
 * @param  {String} ua Optional userAgent
 * @return {String}    The lowercase OS name
 */
    function getOS(ua) {
        var ua = ua || userAgent;
        return ua.indexOf('macintosh') !== -1 ? 'macintosh'
                : ua.indexOf('windows') !== -1 ? 'windows'
                : ua.indexOf('linux') !== -1 ? 'linux'
                : undefined;
    }

    return {
        getBrowser : getBrowser,
        getOS : getOS
    };
}));

// /**
//  * Accesskey user support
//  *
//  * Adds a hint to the title attribute of elements that support
//  * accesskey shortcuts
//  *
//  * @author      Gabriel Izaias <gabriel.izaias@gmail.com>
//  */
// !(function (window, undefined) {
//     "use strict";

//     var
//         /**
//          * User Agent
//          *
//          * @type {string}
//          */
//         ua = window.navigator.userAgent.toLowerCase(),

//         /**
//          * Keystroke combination for every browser
//          *
//          * @type {Object}
//          */
//         keystrokes = {
//             windows : {
//                 ie      : '[alt+%s]',
//                 chrome  : '[alt+%s]',
//                 safari  : '[alt+%s]',
//                 firefox : '[alt+shift+%s]',
//                 opera   : '[shift+esc+%s]'
//             },
//             machintosh : {
//                 chrome  : '[ctrl+alt+%s]',
//                 safari  : '[ctrl+alt+%s]',
//                 firefox : '[ctrl+alt+%s]',
//                 opera   : '[shift+esc+%s]'
//             },
//             linux : {
//                 chrome  : '[alt+%s]',
//                 firefox : '[alt+shift+%s]',
//                 opera   : '[shift+esc+%s]'
//             }
//         },

//         /**
//          * Operating System
//          *
//          * @type {string}
//          */
//         os = (function () {
//             return ua.indexOf('macintosh') !== -1 ? 'machintosh' :
//                    ua.indexOf('windows') !== -1 ? 'windows' :
//                    ua.indexOf('linux') !== -1 ? 'linux' :
//                    undefined;
//         }()),

//         /**
//          * Browser
//          *
//          * @type {string}
//          */
//         browser = (function () {
//             var browserArray = /(chrome)(?:.*chrome)?[ \/]([\w.]+)/.exec(ua) || /(safari)(?:.*version)?[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua) || /(ie) ([\w.]+)/.exec(ua) || !/compatible/.test(ua) && /(firefox)(?:.*firefox)?[ \/]([\w.]+)/.exec(ua) || []
//             return browserArray[1] || undefined;
//         }()),
//         items = window.document.querySelectorAll('[accesskey]') || [],
//         accesskey,
//         i;

//     for (i = items.length - 1; i >= 0; i--) {
//         accesskey = items[i].accessKey.split(' ') || ''
//         items[i].title += ' ' + keystrokes[os][browser].replace(/%s/, accesskey[0])
//     }

// })(window);
