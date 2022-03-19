<template>
    <div>

    </div>
</template>

<script>
    import Mock from 'mockjs'
    export default {
        mounted() {
            let data = Mock.mock({
                'regexp1': /^[a-z][A-Z][0-9]$/
            });
            console.log(data);


            const RandExp = require('randexp');
            const r1 = new RandExp(/hello+ (world|to you)/).gen();
            console.log(r1);

            // 不支持中文
            const r2 = new RandExp(/[\u4e00-\u9fa5]/).gen();
            console.log(r2)

            const r3 = new RandExp(/[\u3040-\u309f]/).gen();
            console.log(r3)

            // 根据正则生成数据（支持中文）
            const ReRegExp = require('reregexp').default;
            const rr1 = new ReRegExp(/[\u4e00-\u9fa5]/);
            console.log(rr1.build())

            const rr2 = new ReRegExp(/[\u3040-\u309f]/);
            console.log(rr2.build())

        }
    }
</script>

<style scoped>

</style>
