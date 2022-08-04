describe("mySuite1", function()
{
    it("test1", function()
    {
        let x=100
        expect(x).toEqual(100)
       // expect(x).not.toBe(100)
        expect(x).not.toEqual(100)
    })


    fit("difference", function()
    {
        x=[10,20,30]
        y=x
        //y=[10,20,30]
      

        expect(x).toEqual(y)
        expect(x).toBe(y)
    })
})