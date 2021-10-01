<template lang='pug'>
COLLECTION
BANNER
</template>

<script>
export default {
  name: "home",
  components: {
    BANNER:require('./components/banner.vue').default,
    COLLECTION:require('./components/collection.vue').default
  },
};
</script>

<style>
</style>
