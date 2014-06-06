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
});