<template>
    <div>
        Home
    </div>
</template>

<script>
    export default {
        mounted() {
            const Font = require('fonteditor-core').Font;
            let buffer = null;
            let font = Font.create(buffer, {
                type: 'ttf', // support ttf, woff, woff2, eot, otf, svg
                subset: [65, 66], // only read `a`, `b` glyf
                hinting: true, // save font hinting
                compound2simple: true, // transform ttf compound glyf to simple
                inflate: null, // inflate function for woff
                combinePath: false, // for svg path
            });
            let fontObject = font.get();
        }
    }
</script>

<style scoped>

</style>
