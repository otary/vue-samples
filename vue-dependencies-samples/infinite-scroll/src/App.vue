<template>
    <div id="app">
        <div v-infinite-scroll="loadDataList"
             infinite-scroll-disabled="dataLoadStop"
             infinite-scroll-distance="50">
            <div v-for="(item, idx) in dataList" >
                <div class="comdata"><span>{{item.name}}</span></div>
            </div>
            <div class="list-load-end">
                <span>{{dataNomore ? "--我也是有底线的--" : "加载中..."}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import infiniteScroll from "vue-infinite-scroll"

    export default {
        directives: {infiniteScroll},
        data() {
            return {
                dataList: [],
                dataPageNum: 1,   //列表数据加载页码
                dataPageSize: 20,   //列表数据加载每页条数
                dataLoadStop: false,  //列表数据加载停止状态
                dataNomore: false    //列表数据加载是否完成
            }
        },
        mounted() {

        },
        methods: {
            /**
             * 加载列表数据
             */
            loadDataList(){
                //锁定数据加载状态
                 this.dataLoadStop = true;

                 // 数据加载...

                setTimeout(() => {
                    for (var i = 0, j = 10; i < j; i++) {
                        this.dataList.push({ name: i });
                    }
                    this.dataLoadStop = false;
                }, 1000);

                //
                // let requestUrl = this.dataListIntUrl
                // this.dataListLoadApi(requestUrl,{
                //     pid: this.pid,
                //     cid: this.cid,
                //     mid: this.mid,
                //     pagesize: this.dataPageSize,
                //     pagenum: this.dataPageNum
                // })
                //     .then( function(response) {
                //         let queryResult = response.data;
                //         let datas = response.data.list;
                //         this.dataList = this.dataList.concat(datas);
                //         if(queryResult.hasnextpage == 1){
                //             this.dataPageNum += 1
                //             this.dataLoadStop = false
                //         }else{
                //             this.dataNomore = true
                //         }
                //     }.bind(this))
                //     .catch(function (error) { // 请求失败处理
                //         console.log(error);
                //         this.dataLoadStop = false
                //     }.bind(this));
            }
        }
    }
</script>

<style>
    #app {
        font-family: Helvetica, sans-serif;
    }

    html, body {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }
</style>
