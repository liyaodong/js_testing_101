const $ = require('jquery');

exports.parseString = str => {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    result.push(str[i]);
  }

  return result;
};

exports.testAjax = (errCb, successCb) => {
  $.ajax({
    url: 'http://www.baidu.com',
    success: successCb,
    error: errCb,
  });
};
