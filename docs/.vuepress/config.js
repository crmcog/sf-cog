module.exports = {
  base: "/",
  locales: {
    "/": {
      lang: "en-US",
      title: "sf-monkey",
      description:
        "Tutorials, knowledge articles and links to learn Salesforce.com and related technologies."
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
        nav: require("./nav/en"),
        sidebar: {
          "/why-learn-salesforce/": getSideBar("why-learn-salesforce"),
          "/admin-guide/": getSideBar("admin-guide")
        }
      }
    },

    repo: "crmcog/sf-monkey",
    editLinks: true
  },

  plugins: {
    "@vuepress/last-updated": {},
    "@vuepress/back-to-top": {},
    "@vuepress/google-analytics": { ga: "UA-5388048-9" },
    "vuepress-plugin-clean-urls": {
      normalSuffix: "/",
      indexSuffix: "/",
      notFoundPath: "/404.html"
    },
    "@silvanite/tailwind": {},
    sitemap: {
      hostname: "https://sf-monkey.crmcog.com"
    }
  },

  evergreen: true
};

function getSideBar(parent) {
  const sideBar = {
    "admin-guide": {
      title: "Admin Certification Guide",
      children: [
        "",
        "05-structure",
        "10-introduction",
        "15-platform-fundamentals",
        "20-configure",
        "25-sales-cloud",
        "30-deep-dive-business-layer",
        "35-ui-customisation",
        "40-service-cloud",
        "45-data-management",
        "50-trust-security",
        "55-collaboration",
        "60-rest-of-salesforce",
        "65-workshop-conclusion",
        "70-case-studies"
      ]
    },
    "why-learn-salesforce": {
      title: "Why Learn Salesforce?",
      children: ["", "one", "two", "eg"]
    }
  };

  return [sideBar[parent]];
}
