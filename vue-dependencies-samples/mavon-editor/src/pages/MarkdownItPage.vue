<template>
    <div>
        <textarea v-model="original" :style="{width: '100%', height: '300px'}"/>
        <div>
            {{result}}
        </div>

        <hr/>

        带插件：
        <div>
            {{result2}}
        </div>
    </div>
</template>

<script>

    const hljs = require('highlight.js');

    // markdown-it 插件
    const emoji = require('markdown-it-emoji');
    const anchor = require('markdown-it-anchor');
    const toc = require('markdown-it-table-of-contents');

    const container = require('markdown-it-container');


    function createContainer (klass, defaultTitle) {
        return [container, klass, {
            render (tokens, idx) {
                const token = tokens[idx]
                const info = token.info.trim().slice(klass.length).trim()
                if (token.nesting === 1) {
                    return `<div class="${klass} custom-block"><p class="custom-block-title">${info || defaultTitle}</p>\n`
                } else {
                    return `</div>\n`
                }
            }
        }]
    }

    /**
     * 自定义块容器
     */
    function custBlock(md) {
        md.use(...createContainer('tip', 'TIP'))
            .use(...createContainer('warning', 'WARNING'))
            .use(container, 'v-pre', {
                render: (tokens, idx) => tokens[idx].nesting === 1
                    ? `<div v-pre>\n`
                    : `</div>\n`
            })
    }

    export default {
        name: "MarkdownItPage",
        data() {
            return {
                original: ''
            }
        },
        mounted() {

        },
        computed: {
            result() {
                // 文档：https://markdown-it.docschina.org/
                const md = require('markdown-it')({  // 默认选项
                    html: false,        // 在源码中启用 HTML 标签
                    xhtmlOut: false,        // 使用 '/' 来闭合单标签 （比如 <br />）。
                                            // 这个选项只对完全的 CommonMark 模式兼容。
                    breaks: false,        // 转换段落里的 '\n' 到 <br>。
                    langPrefix: 'language-',  // 给围栏代码块的 CSS 语言前缀。对于额外的高亮代码非常有用。
                    linkify: false,        // 将类似 URL 的文本自动转换为链接。

                    // 启用一些语言中立的替换 + 引号美化
                    typographer: false,

                    // 双 + 单引号替换对，当 typographer 启用时。
                    // 或者智能引号等，可以是 String 或 Array。
                    //
                    // 比方说，你可以支持 '«»„“' 给俄罗斯人使用， '„“‚‘'  给德国人使用。
                    // 还有 ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] 给法国人使用（包括 nbsp）。
                    quotes: '“”‘’',

                    // 高亮函数，会返回转义的HTML。
                    // 或 '' 如果源字符串未更改，则应在外部进行转义。
                    // 如果结果以 <pre ... 开头，内部包装器则会跳过。
                    // highlight: function (/*str, lang*/) { return ''; }
                });
                return md.render(this.original)
            },
            result2() {



                const md = require('markdown-it')({
                    html: true,
                    // 代码高亮
                    highlight: function (str, lang) {
                        if (lang && hljs.getLanguage(lang)) {
                            try {
                                return '<pre class="hljs"><code>' +
                                    hljs.highlight(lang, str, true).value +
                                    '</code></pre>'
                            } catch (__) {
                            }
                        }
                        return '<pre v-pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
                    }
                })
                    // 使用 anchor 插件为标题元素添加锚点
                    .use(anchor.default, {
                        permalink: true,
                        permalinkBefore: true,
                        permalinkSymbol: '#'
                    }).use(emoji)
                    // 使用 table-of-contents 插件实现自动生成目录
                    .use(toc, {
                        includeLevel: [2, 3]
                    })
                    // 定义自定义的块容器
                    .use(custBlock);

                return md.render(this.original);
            }
        }
    }
</script>

<style scoped>

</style>
