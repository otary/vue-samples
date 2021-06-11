<template>
    <div id="app">

        <el-alert type="success">theme: <el-tag>twilight</el-tag> | lang: <el-tag>html</el-tag></el-alert>
        <ace-editor v-model="content" @init="editorInit" lang="html" theme="twilight" width="100%"
                    height="200"></ace-editor>

        <hr/>

        <el-alert type="success">theme: <el-tag>monokai</el-tag> | lang: <el-tag>javascript</el-tag></el-alert>
        <ace-editor v-model="content" @init="editorInit" lang="javascript" theme="monokai" width="100%"
                    height="200"></ace-editor>

        <hr/>

        <el-alert type="success">theme: <el-tag>tomorrow</el-tag> | lang: <el-tag>css</el-tag></el-alert>
        <ace-editor v-model="content" @init="editorInit" lang="css" theme="tomorrow" width="100%"
                    height="200"></ace-editor>

        <hr/>

        <el-alert type="success">theme: <el-tag>github</el-tag> | lang: <el-tag>css</el-tag></el-alert>
        <ace-editor v-model="content" @init="editorInit" lang="less" theme="github" width="100%"
                    height="200"></ace-editor>

        <hr/>

        <el-alert type="success">theme: <el-tag>terminal</el-tag> | lang: <el-tag>less</el-tag></el-alert>
        <ace-editor v-model="content" @init="editorInit" lang="less" theme="terminal" width="100%"
                    height="200"></ace-editor>

        <hr/>

        <el-alert type="success">theme: <el-tag>sqlserver</el-tag> | lang: <el-tag>sql</el-tag></el-alert>
        <ace-editor v-model="content" @init="editorInit" lang="less" theme="sqlserver" width="100%"
                    height="200"></ace-editor>
    </div>
</template>

<script>
    export default {
        components: {
            aceEditor: require('vue2-ace-editor')
        },
        data() {
            return {
                content: 'xxx'
            }
        },
        mounted() {

        },
        methods: {
            editorInit: function () {
                require('brace/ext/language_tools') //language extension prerequsite...
                require('brace/mode/html')
                require('brace/mode/javascript')    //language
                require('brace/mode/less')
                require('brace/theme/chrome')
                require('brace/theme/twilight');
                require('brace/theme/monokai');
                require('brace/theme/tomorrow');
                require('brace/theme/github');
                require('brace/theme/terminal');
                require('brace/theme/sqlserver');
                require('brace/keybinding/vim');
                require('brace/snippets/javascript') //snippet
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
