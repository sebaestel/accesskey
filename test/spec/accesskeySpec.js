describe('Accesskey.js', function(){
    describe('Browser detection', function() {
        // User Agent used on the browser tests
        var ua = window.navigator.userAgent.toLowerCase();

        it('should equal to `chrome` when on Google Chrome', function(){
            if (ua.indexOf('chrome') > 0) {
                expect(Accesskey.getBrowser()).toEqual('chrome');
            } else {
                 expect(Accesskey.getBrowser()).not.toEqual('chrome');
            }
        });

        it('should equal to `firefox` when on Mozilla Firefox', function(){
            if (ua.indexOf('firefox') > 0) {
                expect(Accesskey.getBrowser()).toEqual('firefox');
            } else {
                 expect(Accesskey.getBrowser()).not.toEqual('firefox');
            }
        });

        it('should equal to `safari` when on Apple Safari', function(){
            if (ua.indexOf('safari') > 0 && ua.indexOf('chrome') < 0) {
                expect(Accesskey.getBrowser()).toEqual('safari');
            } else {
                 expect(Accesskey.getBrowser()).not.toEqual('safari');
            }
        });

        it('should equal to `opera` when on Opera', function(){
            if (ua.indexOf('opera') > 0) {
                expect(Accesskey.getBrowser()).toEqual('opera');
            } else {
                 expect(Accesskey.getBrowser()).not.toEqual('opera');
            }
        });
    });

    describe('OS detection', function() {
        // User Agent used on the OS tests
        var ua = window.navigator.userAgent.toLowerCase();

        it('should equal to `windows` when on Microsoft Windows', function(){
            if (ua.indexOf('windows') > 0) {
                expect(Accesskey.getOS()).toEqual('windows');
            } else {
                expect(Accesskey.getOS()).not.toEqual('windows');
            }
        });

        it('should equal to `macintosh` when on Apple Mac OS', function(){
            if (ua.indexOf('macintosh') > 0) {
                expect(Accesskey.getOS()).toEqual('macintosh');
            } else {
                expect(Accesskey.getOS()).not.toEqual('macintosh');
            }
        });

        it('should equal to `linux` when on Linux', function(){
            if (ua.indexOf('linux') > 0) {
                expect(Accesskey.getOS()).toEqual('linux');
            } else {
                expect(Accesskey.getOS()).not.toEqual('linux');
            }
        });
    });
});