const { parseString } = require('../index');

describe("index", function() {
  it("return a new array with string length", function() {
    expect(parseString('abcd')).toEqual(['a', 'b', 'c', 'd']);
  });

  it("return a new array with string length", function() {
    expect(parseString('abcd')).toEqual(['a', 'b', 'c', 'd']);
  });
});
