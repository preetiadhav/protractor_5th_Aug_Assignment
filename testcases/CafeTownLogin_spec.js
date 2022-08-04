describe("Login_Logout", function()
{
    beforeEach(function()
    {
        browser.manage().window().maximize()
        browser.get("http://juliemr.github.io/protractor-demo/")

        expect(browser.getTitle()).toBe("Super Calculator")

        element(by.model('first')).sendKeys("100");
        element(by.model('second')).sendKeys("20")

        //browser.sleep(2000)
    })


    it("add", function()
    {
        element(by.cssContainingText('option', '+')).click()
        browser.sleep(5000)
    })

    it("div", function()
    {
       element(by.model('operator')).element(by.css("option[value='DIVISION']")).click()
       browser.sleep(5000)
    })

    it("mod", function()
    {
        element(by.cssContainingText('option', '%')).click()
        browser.sleep(5000)
    })

    it("sub", function()
    {
       allOptions=  element.all(by.options('value for (key, value) in operators'))
        expect(allOptions.count()).toBe(5)
        allOptions.get(4).click()
        browser.sleep(5000)

    })



    afterEach( function()
    {
        element(by.buttonText('Go!')).click()
        browser.sleep(5000)
        
    })
})