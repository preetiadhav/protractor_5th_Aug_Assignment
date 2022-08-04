describe("mySuite", function()
{
 it("mtTest", function()
 {
    console.log("**********Hello All");
 })


 it("myTest2", function()
 {
    console.log("@@@@@@@this is my test 2");
 })

 
beforeEach(function()
{
    console.log("Execute before each test")
})

afterEach(function()
{
    console.log("Execute after each test")
})

beforeAll(function()
{
    console.log("execute in begining of test suite")
})

afterAll(function()
{
    console.log("execute after the test suite")
})

});


describe("mySuite2", function()
{
    it("suite2Test1", function()
    {
        console.log("##########suite2Test1 case")
    })
})



