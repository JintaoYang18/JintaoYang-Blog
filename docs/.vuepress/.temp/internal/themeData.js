export const themeData = {
  "navbar": [
    {
      "text": "Python学习-未完成",
      "link": "https://jintaoyang18.github.io/JintaoYang-LearningPython/"
    },
    {
      "text": "Vuepress学习-未完成",
      "link": "https://jintaoyang18.github.io/JintaoYang-LearningVuePress/"
    },
    {
      "text": "读论文笔记-暂无",
      "children": [
        {
          "text": "攻击1",
          "children": [
            "/group/sub/foo.md",
            "/group/sub/bar.md"
          ]
        },
        {
          "text": "防御2",
          "children": [
            "/group/sub/foo.md",
            "/group/sub/bar.md"
          ]
        }
      ]
    },
    {
      "text": "navbar-暂无",
      "children": [
        {
          "text": "Always active",
          "link": "/",
          "activeMatch": "/"
        },
        {
          "text": "Active on /foo/",
          "link": "/not-foo/",
          "activeMatch": "^/foo/"
        }
      ]
    }
  ],
  "logo": "/images/logo2.png",
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}
