const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/JanGoeger/Desktop/CBS/FC-Rottenburg/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/JanGoeger/Desktop/CBS/FC-Rottenburg/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/JanGoeger/Desktop/CBS/FC-Rottenburg/src/pages/404.js"))),
  "component---src-pages-data-protection-js": hot(preferDefault(require("/Users/JanGoeger/Desktop/CBS/FC-Rottenburg/src/pages/data-protection.js"))),
  "component---src-pages-imprint-js": hot(preferDefault(require("/Users/JanGoeger/Desktop/CBS/FC-Rottenburg/src/pages/imprint.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/JanGoeger/Desktop/CBS/FC-Rottenburg/src/pages/index.js"))),
  "component---src-pages-jugend-js": hot(preferDefault(require("/Users/JanGoeger/Desktop/CBS/FC-Rottenburg/src/pages/Jugend.js"))),
  "component---src-pages-newsfeed-js": hot(preferDefault(require("/Users/JanGoeger/Desktop/CBS/FC-Rottenburg/src/pages/Newsfeed.js"))),
  "component---src-pages-references-js": hot(preferDefault(require("/Users/JanGoeger/Desktop/CBS/FC-Rottenburg/src/pages/References.js"))),
  "component---src-pages-shop-js": hot(preferDefault(require("/Users/JanGoeger/Desktop/CBS/FC-Rottenburg/src/pages/Shop.js"))),
  "component---src-pages-tickets-js": hot(preferDefault(require("/Users/JanGoeger/Desktop/CBS/FC-Rottenburg/src/pages/Tickets.js"))),
  "component---src-pages-tabelle-js": hot(preferDefault(require("/Users/JanGoeger/Desktop/CBS/FC-Rottenburg/src/pages/Tabelle.js")))
}

