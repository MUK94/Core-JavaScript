const addNum = require(`./testingJest`);

test('adds num1 + num2 to equal 7', ()=> {
    expect(addNum(2, 5)).toBe(7);
})