<template>
    <div>

    </div>
</template>

<script>

    function getRegexFlags(re) {
        let flags = ""
        flags += re.ignoreCase ? "i" : ""
        flags += re.global ? "g" : ""
        flags += re.multiline ? "m" : ""
        return flags
    }

    import {parse, Kit, Raphael, visualize} from '../regulex/index'

    export default {
        mounted() {
            const regExp2 = /var\s+([a-zA-Z_]\w*);/
            console.log(parse(regExp2.source))


            const regExp = /var\s+([a-zA-Z_]\w*);/
            const paper = Raphael("regexpContainer", 0, 0)
            try {
                visualize(parse(regExp.source), getRegexFlags(regExp), paper)
            } catch (e) {
                console.log(e)
                if (e instanceof parse.RegexSyntaxError) {
                    // do some thing
                }
            }
        }
    }
</script>

<style scoped>

</style>
