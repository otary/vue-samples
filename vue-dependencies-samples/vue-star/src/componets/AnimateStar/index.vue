<template>
    <div class="animate-star">
        <div class="VueStar__ground">
            <div class="VueStar__icon" @click="toggle" :class="AnimateClass" :style='{color:ColorValue}'>
                <slot name="icon"></slot>
            </div>
            <div class="VueStar__decoration" :class="{ 'VueStar__decoration--active':active}"></div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>
