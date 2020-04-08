<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "Demo1",
  data() {
    return {
      msg: "Welcome to Demo1"
    };
  },
  created() {
    console.log("hello Demo1");
  }
};
</script>

<style></style>
