module.exports = {
  'Searching nightwatch in youtube': function(browser) {
    browser
      .url('http://www.youtube.com/')
      .pause(2000)
      .setValue('#search', 'Nightwatch js')
      .pause(2000)
      .keys(browser.Keys.ENTER)
      .pause(2000);
  },
  'execute test': browser => {
    browser.execute(
      function() {
        const elm = document.querySelector(
          '[class="style-scope ytd-grid-video-renderer"]'
        );
        return elm.innerHTML;
      },
      ['title'],
      result => {
        console.log(result);
      }
    );
  },
  after: function(browser) {
    browser.end();
  }
};
