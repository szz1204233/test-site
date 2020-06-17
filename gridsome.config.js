// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '创新实践测试网站',
  templates: {
    BlogPost: '/blog/:year/:month/:slug',
  },
  plugins: [
    {
      use: "gridsome-source-rss",
      options: {
        feedUrl: "http://101.132.159.246/rss/p/i/?a=rss&get=c_2&state=3&user=TechRSS&token=rss&hours=168",
        typeName: "fresh_rss_test",
        // Parser options, see: https://www.npmjs.com/package/rss-parser
        parser: {}
      }
    },
    {
      use: "gridsome-source-rss",
      options: {
        feedUrl: "http://101.132.159.246/rss/p/i/?a=rss&get=c_3&state=3&user=TechRSS&token=rss&hours=1680",
        typeName: "fresh_rss",
        // Parser options, see: https://www.npmjs.com/package/rss-parser
        parser: {}
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "BlogPost"
      }
    }
  ]
}
