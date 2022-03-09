export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "主页",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "home": true,
    "title": "主页",
    "heroImage": "/images/logo2.png",
    "actions": [
      {
        "text": "开始",
        "link": "/guide/getting-started.html",
        "type": "primary"
      },
      {
        "text": "介绍",
        "link": "/guide/",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "更高",
        "details": "Spring"
      },
      {
        "title": "更快",
        "details": "Summer"
      },
      {
        "title": "更强",
        "details": "Autumn"
      },
      {
        "title": "更团结",
        "details": "Winter"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2022-present Jintao Yang"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1646835172000,
    "contributors": [
      {
        "name": "JintaoYang18",
        "email": "90304586+JintaoYang18@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
