module.exports = {
    // 站点配置
    base: '/JintaoYang-Blog/',
    lang: 'zh-CN',
    title: 'Yang\'s Blog',
    description: '日有寸进 📈 ',
    head: [['link', { rel: 'icon', href: './images/logo2.png' }]],
    
  
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        navbar: [
            {
              text: 'Python学习',
              link: 'https://jintaoyang18.github.io/JintaoYang-LearningPython/',
            },
            {
              text: 'Vuepress学习',
              link: 'https://jintaoyang18.github.io/JintaoYang-LearningVuePress/',
            },
            {
              text: 'GitHub',
              link: 'https://github.com/JintaoYang18',
            }

            // 嵌套 Group - 最大深度为 2
            // {
            //   text: '读论文笔记-暂无',
            //   children: [
            //     {
            //         text: '攻击1',
            //         children: ['/group/sub/foo.md', '/group/sub/bar.md'],
            //     },
            //     {
            //         text: '防御2',
            //         children: ['/group/sub/foo.md', '/group/sub/bar.md'],
            //       },
            //   ],
            // },
            // 控制元素何时被激活
            // {
            //   text: 'navbar-暂无',
            //   children: [
            //     {
            //       text: 'Always active',
            //       link: '/',
            //       // 该元素将一直处于激活状态
            //       activeMatch: '/',
            //     },
            //     {
            //       text: 'Active on /foo/',
            //       link: '/not-foo/',
            //       // 该元素在当前路由路径是 /foo/ 开头时激活
            //       // 支持正则表达式
            //       activeMatch: '^/foo/',
            //     },
            //   ],
            // },
        ],
        logo: '/images/logo2.png',
    },
  }