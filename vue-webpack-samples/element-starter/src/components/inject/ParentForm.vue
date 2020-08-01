<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ParentForm",
        provide() {
            return {
                parentForm: this
            }
        },
        data() {
            return {
                myName: 'otary'
            }
        },
        methods: {
            callMe() {
                return "otary"
            }
        },
        props: {
            day: Number
        }
    }
</script>

<style scoped>

</style>