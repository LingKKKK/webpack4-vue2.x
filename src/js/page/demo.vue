<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      msg: "Welcome to Demo",
    };
  },
  created() {
    console.log("hello Demo");
  },
};
</script>

<style></style>
