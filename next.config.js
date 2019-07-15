const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/appointment': { page: '/appointment' },
      '/contactus': { page: '/contactus' }
    }
  }
});