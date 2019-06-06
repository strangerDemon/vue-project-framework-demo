<template>
  <div class='index-view'>
  </div>
</template>

<script>
  export default {
    name: 'index-view',
    directives: {},
    components: {},
    props: {},
    data() {
      return {
      }
    },
    computed: {},
    watch: {},
    methods: {},
    brforeCreate() {},
    //app created=>map created =>mapSwitch created=> map mounted=> mapSwitch mounted=>app mounted
    created() {},
    mounted() {
      this.$store.commit("init");
    },
    beforeDestroy() {}
  }
</script>

<style lang='postcss'>
  .index-view {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
