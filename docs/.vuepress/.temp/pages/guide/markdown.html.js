export const data = {
  "key": "v-0978b044",
  "path": "/guide/markdown.html",
  "title": "页面的标题",
  "lang": "zh-CN",
  "frontmatter": {
    "lang": "zh-CN",
    "title": "页面的标题",
    "description": "页面的描述"
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
  "filePathRelative": "guide/markdown.md"
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
