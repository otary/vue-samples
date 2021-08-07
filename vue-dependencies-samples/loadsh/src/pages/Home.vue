<template>
    <transition>
        <el-button @click="handleTemplate">
            template
        </el-button>


    </transition>
</template>

<script>
    import {template} from 'lodash'
    export default {
        name: "Home",
        data() {
            return {

            }
        },
        methods: {
            handleTemplate() {
                // Simple
                const result = template('hello <%= user %>!')({ 'user': 'fred' });
                console.log(result);  // => hello fred!

                // 对象数据
                const result2 = template("Using 'with': <%= data.answer %>", {variable: 'data'})({answer: 'no'})
                console.log(result2); // => Using 'with': no

                // 使用 HTML "escape" 转义数据的值
                const result3 = template('<b><%- value %></b>')({ value: '<script>' });
                console.log(result3); // => <b>&lt;script&gt;</b>

                // 使用 ES 分隔符代替默认的 "interpolate" 分隔符
                const result4 = template('hello ${ user }!')({ 'user': 'pebbles' });
                console.log(result4); // => 'hello pebbles!'

                // 遍历
               const result5 = template('<%users.forEach(function(user) {%><li><%- user  %></li><%  })%>')({
                    'users': ['fred', 'barney']
                });
                console.log(result5);

            }
        }
    }
</script>

<style scoped>

</style>
