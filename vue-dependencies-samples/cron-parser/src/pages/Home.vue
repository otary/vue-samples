<template>
    <div>
        Home
    </div>
</template>

<script>
    export default {
        name: "Home",
        mounted() {
            var parser = require('cron-parser');
            var interval = parser.parseExpression('*/2 * * * *');
            console.log('Date: ', interval.next().toString());


            var interval = parser.parseExpression('0 */12 * * *');
            console.log('Date: ', interval.next().toString());

            var interval = parser.parseExpression('0 0 18 28-31 * ?');
            console.log('Date: ', interval.next().toString());


            var interval = parser.parseExpression('0 0 18 L * ?');
            console.log('Date: ', interval.next().toString());
        }
    }
</script>

<style scoped>

</style>
