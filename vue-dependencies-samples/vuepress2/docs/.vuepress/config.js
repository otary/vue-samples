const {getChildren} = require('./utils/sidebar-auto');

console.log(getChildren('./docs', 'resource'))

module.exports = {
    base: '/',
    lang: 'zh-CN',
    title: '大大的标题',
    description: '这是一个描述',
    head: [
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
    ],
    themeConfig: {
        // 导航栏Logo
        logo: 'https://xiao-akatsuki.github.io/axios.org/logo/logo.svg',
        /*navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '提出问题',
                link: 'https://github.com/xiao-akatsuki/axios/issues'
            },
            {
                text: '参与项目',
                link: 'https://github.com/xiao-akatsuki/axios/pulls'
            },
            {
                text: 'language',
                children: [
                    {
                        text: '中文',
                        link: '/',
                    },
                    {
                        text: 'English',
                        link: 'https://xiao-akatsuki.github.io/axios.org/',
                    },
                ]
            },
            {
                text: '版本',
                children: [
                    {
                        text: '1.0.0',
                        link: '/',
                    },
                ]
            }
        ],*/
        sidebar: [{
            title: 'General',
            collapsable: false,
            children: [
                ['/general/button', 'Button 按钮'],
                ['/翻译排版指南' ,  'test']
            ]
        }],
        sidebarDepth: 0,
        //repoLabel: 'axios',
        //repo: 'xiao-akatsuki/axios',
       /* editLink: false,
        darkMode: false,*/
    }
}
