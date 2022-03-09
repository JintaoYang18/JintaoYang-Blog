import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"主页"},["/index.html","/README.md"]],
  ["v-6ce48554","/contributing.html",{"title":"页面的标题"},["/contributing","/contributing.md"]],
  ["v-fffb8e28","/guide/",{"title":"页面的标题"},["/guide/index.html","/guide/README.md"]],
  ["v-fb0f0066","/guide/getting-started.html",{"title":"页面的标题"},["/guide/getting-started","/guide/getting-started.md"]],
  ["v-0978b044","/guide/markdown.html",{"title":"页面的标题"},["/guide/markdown","/guide/markdown.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
