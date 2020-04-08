<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "Demo2",
  data() {
    return {
      msg: "Welcome to Demo2",
    };
  },
  created() {
    console.log("hello Demo2");
  },
};
</script>

<style></style>
