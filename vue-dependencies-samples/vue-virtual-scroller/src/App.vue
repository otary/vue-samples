<template>
    <div id="app">
        <RecycleScroller
                class="scroller"
                :items="list"
                :item-size="50"
                key-field="id"
                v-slot="{ item }"
        >
            <div class="user">
                {{ item.name }}
            </div>
        </RecycleScroller>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [],
            }
        },
        mounted() {
            for (let i = 0; i < 1000; i++) {
                this.list.push({
                    id: i,
                    name: 'xxxxx' + i
                })
            }
        },
        methods: {

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

    .scroller {
        height: 800px;
        overflow: scroll;
    }

    .user {
        height: 32%;
        padding: 0 12px;
        display: flex;
        align-items: center;
    }
</style>
