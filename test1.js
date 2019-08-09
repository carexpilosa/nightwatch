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
        const elms = document.querySelectorAll(
          '[class="style-scope ytd-grid-video-renderer"]'
        );
        return Array.from(elms).map(elm => {
          return elm.innerHTML;
        });
      },
      ['title'],
      result => {
        result.value.forEach(html => {
          console.log(
            '=============================================>',
            html,
            '\n'
          );
        });
      }
    );
  },
  after: function(browser) {
    browser.end();
  }
};
