const fs = require("fs");
const path = require("path");

module.exports = {
  base: "/",
  // prettier-ignore
  head: [
    ["link", { rel: "stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"}],
    ["link", { rel: "icon", href: "/images/sf-cog_logo.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#2196f3" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    ["link", { rel: "apple-touch-icon", href: "/images/icons/icon-152x152.png" }],
    ["link", { rel: "mask-icon", href: "/images/icons/safari-pinned-tab.svg", color: "#3eaf7c" }],
    ["meta", { name: "msapplication-TileImage", content: "/images/icons/icon-144x144.png" }],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
    ["script", { src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", "data-ad-client":"ca-pub-7210759689565565", async:true }]
  ],
  locales: {
    "/": {
      lang: "en-US",
      title: "sf-cog",
      description:
        "Tutorials, knowledge articles and links to learn Salesforce.com and related technologies.",
    },
  },
  description:
    "Tutorials, knowledge articles and links to learn Salesforce.com and related technologies.",

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
          ),
        },
      },
    },

    repo: "crmcog/sf-cog",
    editLinks: true,
  },

  Sass: {},

  plugins: {
    "@vuepress/last-updated": {},
    "@vuepress/back-to-top": {},
    "@vuepress/google-analytics": { ga: "UA-5388048-9" },
    "vuepress-plugin-clean-urls": {
      normalSuffix: "/",
      indexSuffix: "/",
      notFoundPath: "/404.html",
    },
    sitemap: {
      hostname: "https://sf-cog.crmcog.com",
    },
    "@vuepress/pwa": {
      serviceWorker: true,
      updatePopup: true,
    },
    seo: {
      siteTitle: (_, $site) => $site.title,
      title: ($page) => $page.title,
      description: ($page) => $page.frontmatter.description,
      author: (_, $site) => $site.themeConfig.author,
      tags: ($page) => $page.frontmatter.tags,
      twitterCard: (_) => "summary_large_image",
      type: ($page) =>
        [
          "admin-guide",
          "pd1-guide",
          "misc",
          "why-learn-salesforce",
          "salesforce-for-students",
        ].some((folder) => $page.regularPath.startsWith("/" + folder))
          ? "article"
          : "website",
      url: (_, $site, path) => ($site.themeConfig.domain || "") + path,
      image: ($page, $site) =>
        $page.frontmatter.image &&
        ($site.themeConfig.domain || "") + $page.frontmatter.image,
      publishedAt: ($page) =>
        $page.frontmatter.date && new Date($page.frontmatter.date),
      modifiedAt: ($page) => $page.lastUpdated && new Date($page.lastUpdated),
    },
    "@vuepress/medium-zoom": {},
  },

  evergreen: true,
};

function getSideBar(folder, title) {
  const extension = [".md"];

  const files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(
      (item) =>
        item.toLowerCase() != "readme.md" &&
        fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
        extension.includes(path.extname(item))
    );

  return [{ title: title, children: ["", ...files] }];
}
