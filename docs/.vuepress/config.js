module.exports = {
  base: "/",
  locales: {
    "/": {
      lang: "en-US",
      title: "sf-monkey",
      description:
        "Tutorials, knowledge articles and links to learn Salesforce.com and related technologies.."
    }
  },
  description:
    "Tutorials, knowledge articles and links to learn Salesforce.com and related technologies.",
  head: [
    ["meta", { name: "google-site-verification", content: "" }],
    ["link", { rel: "icon", href: `/images/logo.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/images/icons/icon-152x152.png` }
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/images/icons/icon-144x144.png"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#ffffff" }]
  ],
  themeConfig: {
    locales: {
      "/": {
        label: "English",
        selectText: "Languages",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        nav: require("./nav/en")
      }
    },
    repo: "crmcog/learn-sf",
    editLinks: true
  },
  plugins: {
    "@vuepress/last-updated": {},
    "@vuepress/back-to-top": {},
    "@vuepress/google-analytics": { ga: "UA-5388048-9" },
    "vuepress-plugin-auto-sidebar": {
      titleMap: {
        "salesforce-for-students": "Salesforce for Students",
        "pd1-guide": "Platform Developer I Certification Guide",
        "admin-guide": "Admin Certification Guide",
        "why-learn-salesforce": "Why Learn Salesforce?"
      }
    },
    "vuepress-plugin-clean-urls": {
      normalSuffix: "/",
      indexSuffix: "/",
      notFoundPath: "/404.html"
    },
    "@silvanite/tailwind": {}
  },
  evergreen: true
};
