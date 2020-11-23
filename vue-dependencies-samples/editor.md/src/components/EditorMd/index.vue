<template>
   <!-- <div
            :id="id"
            :editorConfig="editorConfig"
    >

    </div>-->

    <div id="editorMd">

    </div>
</template>

<script>
    import scriptjs from 'scriptjs';
    import editorMd from 'editor.md/editormd'

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
            editorMd("editorMd", {
                width: "100%",
                height: "100%"
            })
        }
    }
</script>

<style scoped>

</style>
