<template lang='pug'>
HEADER
router-view
FOOTER
</template>

<script>
export default {
  name: "App",
  components: {
    HEADER: require("./components/header.vue").default,
    FOOTER: require("./components/footer.vue").default,
  },
};
</script>

<style>
</style>
