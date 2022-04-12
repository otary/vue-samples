<template>
    <div>
        Home
    </div>
</template>

<script>
    import { get, set, createStore, getMany, del, entries } from 'idb-keyval';

    export default {
        name: "Home",
        mounted() {
          // 使用默认数据库"keyval-store"
          set('hello', 'world').then(()=> {

          });

          // 自定义数据库
          const customStore = createStore('custom-db-name', 'custom-store-name');
          set('hello', 'world2!', customStore);

          get('hello').then((val) => console.log(val));
          get('hello', customStore).then((val) => console.log(val));

          // 获取多个
          getMany([123, 'hello']).then(([firstVal, secondVal]) =>
              console.log(firstVal, secondVal),
          );

          // 删除
          // del('hello');

          // 遍历
          entries().then((entries) => console.log(entries));
        }
    }
</script>

<style scoped>

</style>
·
