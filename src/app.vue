<template>
    <router-view></router-view>
</template>
<script>
import mixin from "./mixin";
export default {
    mixins: [mixin],
    created() {
        console.log($);
    },
};
</script>
<style lang="less" scoped></style>
