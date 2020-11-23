<template>
   <!-- <div
            :id="id"
            :editorConfig="editorConfig"
    >

    </div>-->

    <div id="editorMd" style="width: 100%; height: 100%;">

    </div>
</template>

<script>
    // import scriptjs from 'scriptjs';
    import editorMd2 from 'editor.md/editormd'

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
            this.$nextTick(()=> {
             editorMd2()("editorMd", {
                    width: '100%',
                    height: '100%',
                    path: 'static/editor.md/lib/'
                })

            });

        }
    }
</script>

<style scoped>

</style>
