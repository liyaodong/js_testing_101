require('jasmine-ajax');

const { parseString, testAjax } = require('../index');

describe("parseString", function() {
  it("return a new array with string length", function() {
    expect(parseString('abcd')).toEqual(['a', 'b', 'c', 'd']);
  });
});

describe("testAjax", function() {
  let request;
  let errCb, successCb;

  beforeEach(function() {
    jasmine.Ajax.install();

    errCb = jasmine.createSpy(errCb);
    successCb = jasmine.createSpy(successCb);

    testAjax(errCb, successCb);

    request = jasmine.Ajax.requests.mostRecent();


    request.respondWith({ status: 404, responseText: 'Not found' })

    expect(request.url).toBe('http://www.baidu.com');
    expect(request.method).toBe('GET');
  });

  it('call with errCb', function() {
    expect(errCb).toHaveBeenCalled();
  });
});
