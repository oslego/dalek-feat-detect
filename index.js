module.exports = {
  'Page title is correct': function (test) {
    test
      .open('http://localhost/test/shape-inside.html')
      .assert.css('.shape', 'shape-inside', 'circle(50% at 50% 50%)')
      .done();
  }
};
