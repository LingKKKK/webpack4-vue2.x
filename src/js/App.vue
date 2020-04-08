<template>
    <div id="app">
        <img alt="Vue logo" src="../assets/img/avatar.jpg" />
    </div>
</template>

<script>
export default {
    name: "app",
};
</script>

<style lang="less" scoped>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    img {
        width: 100px;
        height: 100px;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
