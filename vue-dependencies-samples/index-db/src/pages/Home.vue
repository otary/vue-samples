<template>
    <div>
        Home
    </div>
</template>

<script>
    export default {
        mounted() {
            // 1. 判断是否支持indexedDB
            const indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
            if (!indexedDB) {
                throw Error('当前不支持 indexed 数据库');
            }

            // 2. 创建数据库
            let dbName = 'test-1',
                version = '1.0';
            // 数据库存在则打开,否则创建（获取到是IDBOpenDBRequest对象）
            let request = indexedDB.open(dbName, version);

            // 请求数据库失败的回调函数
            request.onerror = function (err) {
                console.log(JSON.stringify(err));
                console.log('打开数据库失败,错误信息为:' + err.target.message);
            }

            // 请求数据库成功的回调函数
            request.onsuccess = function (success) {
                console.log(JSON.stringify(success));

                const db = success.target.result;
                console.log('打开数据库成功:' + db);
            };


            // 数据库版本更新
            request.inuparadeneeded = function (event) {
                console.log(JSON.stringify(event));
                console.log('数据库版本有变化...');

                let db = event.target.result;
                // 判断对象储存空间名称是否存在
                if (!db.objectStoreNames.contains('table')) {
                    // 创建信息对象存储空间;指定keyPath选项为Id（即主键为Id）
                    let objectStore = db.createObjectStore('table', {
                        keyPath: 'stuId',
                        autoIncrement: true
                    });
                    objectStore.createIndex('studentIndex', 'stuId', {
                        unique: true
                    });
                }
            }




        }
    }
</script>

<style scoped>

</style>
