describe('mySuite', function() {
    it('myTest', function() {
        browser.get('https://angularjs.org/');
        browser.sleep(5000);
        browser.manage().window().maximize();
        browser.sleep(5000);
        expect(browser.getCurrentUrl()).toBe('https://angularjs.org/');
    });


    it('validateTitle', function() {
        browser.get('https://angularjs.org/');
        browser.sleep(5000);
        browser.manage().window().maximize();
        browser.sleep(3000);
        expect(browser.getTitle()).toBe('AngularJS — Superheroic JavaScript MVW Framework');
    });

    it('validateTextBox', function() {
        browser.get('https://angularjs.org/');
        browser.sleep(5000);
        browser.manage().window().maximize();
        browser.sleep(3000);
        element(by.model('yourName'))
        
    });

});