const fs = require("fs");
const path = require("path");

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
          "/why-learn-salesforce/": getSideBar(
            "why-learn-salesforce",
            "Why Salesforce?"
          ),
          "/admin-guide/": getSideBar(
            "admin-guide",
            "Admin Certification Guide"
          ),
          "/pd1-guide/": getSideBar("pd1-guide", "PD1 Certification Guide"),
          "/salesforce-for-students/": getSideBar(
            "salesforce-for-students",
            "Salesforce for Students"
          )
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
    sitemap: {
      hostname: "https://sf-monkey.crmcog.com"
    }
  },

  evergreen: true
};

function getSideBar(folder, title) {
  const extension = [".md"];

  const files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(
      item =>
        item.toLowerCase() != "readme.md" &&
        fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
        extension.includes(path.extname(item))
    );

  return [{ title: title, children: ["", ...files] }];
}
