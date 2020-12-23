<template>
    <div id="app">

        <el-card header="js美化">
            <div ref="initialJsText" style="display: none">
                const findParentComponent=(context,componentName)=>{let parent=context.$parent;let
                name=parent.$options.name;while(parent&&(!name||[componentName].indexOf(name)<0)){parent=parent.$parent;if(parent)name=parent.$options.name;}
                return parent;};
            </div>
            <el-input type="textarea" :rows="10" v-model="srcJs">

            </el-input>


            <el-alert title="结果:" type="success" style="margin: 10px 0;"/>
            <el-input type="textarea" :rows="25" v-model="resultJs">

            </el-input>
        </el-card>

        <el-card header="css美化">
            <div ref="initialCssText" style="display: none">
                #app{font-family:Helvetica,sans-serif;} html,body{width:100%;height:100%;padding:0;margin:0;}
            </div>

            <el-input type="textarea" :rows="10" v-model="srcCss">

            </el-input>

            <el-alert title="结果:" type="success" style="margin: 10px 0;"/>
            <el-input type="textarea" :rows="25" v-model="resultCss">

            </el-input>
        </el-card>

        <el-card header="HTML美化">
            <div ref="initialHtmlText" style="display: none">
                <div><a target="_blank" href="#"><div><span>test</span></div></a><a target="_blank" href="#"><div><span>test2</span></div></a></div>
            </div>

            <el-input type="textarea" :rows="10" v-model="srcHtml">

            </el-input>

            <el-alert title="结果:" type="success" style="margin: 10px 0;"/>
            <el-input type="textarea" :rows="25" v-model="resultHtml">

            </el-input>
        </el-card>
    </div>
</template>

<script>
    import {css_beautify as cssBeautify, html_beautify as htmlBeautify, js_beautify as jsBeautify} from 'js-beautify'

    export default {
        data() {
            return {
                srcJs: '',
                srcCss: '',
                srcHtml: ''
            }
        },
        mounted() {
            this.srcJs = this.$refs.initialJsText.innerHTML.trim();
            this.srcCss = this.$refs.initialCssText.innerHTML.trim();
            this.srcHtml = this.$refs.initialHtmlText.innerHTML.trim();
        },
        methods: {},
        computed: {
            resultJs() {
                return jsBeautify(this.srcJs, {indent_size: 2, space_in_empty_paren: true})
            },
            resultCss() {
                return cssBeautify(this.srcCss, {indent_size: 2, space_in_empty_paren: true})
            },
            resultHtml() {
                return htmlBeautify(this.srcHtml, {indent_size: 4, indent_with_tabs: false, preserve_newlines: true, end_with_newline: true, indent_empty_lines: true});
            }
        }
    }
</script>

<style>
    #app {
        font-family: Helvetica, sans-serif;
    }

    html, body {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }
</style>
