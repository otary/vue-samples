<template>
    <div>
        <font-awesome-icon icon="user-secret" />
        <!-- 使用fas表示实体模块 -->
        <font-awesome-icon :icon="['fas', 'user-secret']" />

        <!-- 使用fab表示品牌模块 -->
        <font-awesome-icon :icon="['fab', 'font-awesome']" />

        <!-- 图标尺寸 -->
        <font-awesome-icon icon="user-secret" size="xs" />
        <font-awesome-icon icon="user-secret" size="sm" />
        <font-awesome-icon icon="spinner" size="lg" />
        <font-awesome-icon icon="spinner" size="2x" />
        <font-awesome-icon icon="spinner" size="3x" />
        <font-awesome-icon icon="spinner" size="4x" />
        <font-awesome-icon icon="spinner" size="5x" />
        <font-awesome-icon icon="spinner" size="6x" />
        <font-awesome-icon icon="spinner" size="7x" />
        <font-awesome-icon icon="spinner" size="8x" />
        <font-awesome-icon icon="spinner" size="9x" />
        <font-awesome-icon icon="spinner" size="10x" />

        <br/>

        <!-- 固定宽度 -->
        <font-awesome-icon icon="user-secret" fixed-width />

        <br/>

        <!-- 旋转 -->
        <font-awesome-icon icon="user-secret" rotation="90" />
        <font-awesome-icon icon="user-secret" rotation="180" />
        <font-awesome-icon icon="user-secret" rotation="270" />

        <br/>

        <!-- 水平、垂直或同时翻转 -->
        <font-awesome-icon icon="user-secret" flip="horizontal" />
        <font-awesome-icon icon="user-secret" flip="vertical" />
        <font-awesome-icon icon="user-secret" flip="both" />

        <br/>

        <!-- 旋转、脉冲动画 -->
        <font-awesome-icon icon="spinner" spin />
        <font-awesome-icon icon="spinner" pulse />

        <br/>

        <!-- 增加边框 -->
        <font-awesome-icon icon="spinner" border />

        <br/>

        <!-- 左或右浮动 -->
        <font-awesome-icon icon="user-secret" pull="left" />
        <font-awesome-icon icon="user-secret" pull="right" />

        <br/>

        <!-- 反色 -->
        <font-awesome-icon icon="user-secret" inverse />

        <br/>

        <font-awesome-icon :icon="['fas', 'spinner']" swap-opacity/>

        <br/>

        <!-- 自定义transform属性 -->
        <font-awesome-icon icon="user-secret" transform="shrink-6 left-4" />
        <font-awesome-icon icon="user-secret" :transform="{ rotate: 42 }" />

        <br/>

        <!-- 组合遮罩 -->
        <font-awesome-icon icon="user-secret" :mask="['far', 'circle']" />
        <font-awesome-icon far icon="user-secret" mask="circle" />

        <br/>

        <!-- 定义svg图标（需要先定义svg图标） -->
        <font-awesome-icon icon="edit" symbol />
        <font-awesome-icon icon="edit" symbol="edit-icon" />

        <br/>

        <!-- 自定义图层（将图标和文本组合在一起） -->
        <font-awesome-layers full-width class="fa-4x">
            <font-awesome-icon icon="circle" />
            <font-awesome-layers-text class="gray8" transform="down-2 shrink-8" value="Q" />
        </font-awesome-layers>

        <br/>

        <!-- 自定义图层（将图标和Counter组合在一起） -->
        <font-awesome-layers full-width class="fa-4x">
            <font-awesome-icon icon="envelope"/>
            <font-awesome-layers-text counter value="1" position="top-right" />
        </font-awesome-layers>


    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
