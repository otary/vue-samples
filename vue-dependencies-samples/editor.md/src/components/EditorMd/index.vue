<template>
   <!-- <div
            :id="id"
            :editorConfig="editorConfig"
    >

    </div>-->


    <div id="editorMd" style="width: 100%; height: 100%;">

        <link
                href="static/editor.md/css/editormd.css"
                rel="stylesheet"
        />

    </div>
</template>

<script>
    import scriptjs from 'scriptjs';

    export default {
        name: "EditorMd",
        props: {
            id: {
                type: String,
                default: 'editor-md'
            },
            editorConfig: {
                type: Object,
                default: () => {
                    return {

                    }
                }
            }
        },
        mounted() {
            scriptjs([
                `static/jquery/jquery-3.5.1.min.js`,
                `static/prism/prism.js`,
                `static/editor.md/lib/raphael.min.js`,
                `static/editor.md/lib/flowchart.min.js`,
            ], ()=> {
                scriptjs([
                    `static/xss/xss.min.js`,
                    `static/editor.md/lib/marked.min.js`,
                    `static/editor.md/lib/prettify.min.js`,
                    `static/editor.md/lib/underscore.min.js`,
                    `static/editor.md/lib/sequence-diagram.min.js`,
                    `static/editor.md/lib/jquery.flowchart.min.js`,
                ], ()=> {
                    scriptjs(`static/editor.md/editormd.js`, () => {
                        this.initEditor()
                    })
                })
            })

        },
        methods: {
            initEditor() {
                this.$nextTick((editorMD = window.editormd) => {
                    if (editorMD) {
                        /*if (this.type == 'editor') {
                            this.instance = editorMD(this.id, this.editorConfig)
                        } else {
                            this.instance = editorMD.markdownToHTML(this.id, this.editorConfig)
                        }*/

                        editorMD('editorMd', {
                            path: 'static/editor.md/lib/',
                        });

                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
