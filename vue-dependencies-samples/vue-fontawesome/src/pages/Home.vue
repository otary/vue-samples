<template>
    <div>
        <font-awesome-icon icon="user-secret" />
        <!-- 使用fas表示实体模块 -->
        <font-awesome-icon :icon="['fas', 'user-secret']" />

        <!-- 使用fab表示品牌模块 -->
        <font-awesome-icon :icon="['fab', 'font-awesome']" />

    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
