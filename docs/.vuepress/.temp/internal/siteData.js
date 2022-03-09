export const siteData = {
  "base": "/JintaoYang-Blog/",
  "lang": "zh-CN",
  "title": "Yang's Blog",
  "description": "日有寸进",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "./images/logo2.png"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
