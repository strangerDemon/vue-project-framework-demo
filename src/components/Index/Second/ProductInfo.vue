<template>
  <div class='product-info'>
  </div>
</template>
<script>
  export default {
    name: 'product-info',
    directives: {},
    components: {},
    props: {
      productInfo:Object
    },
    data() {
      return {}
    },
    computed: {},
    watch: {
      productInfo(info){
        //to do request more info
      }
    },
    methods: {},
    brforeCreate() {},
    //app created=>map created =>mapSwitch created=> map mounted=> mapSwitch mounted=>app mounted
    created() {},
    mounted() {},
    beforeDestroy() {}
  }
</script>
<style lang='postcss'>
  .product-info {}
</style>
