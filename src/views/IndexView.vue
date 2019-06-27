<template>
  <div class='index-view' :style="{'background':backgroundImg}">
    <el-scrollbar>
      <div class="first">vue template demo</div>
      <div class="second">second</div>
    </el-scrollbar>
    <el-backtop target=".el-scrollbar__wrap"></el-backtop>
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
        backgroundImg: ""
      }
    },
    computed: {},
    watch: {},
    methods: {
      init() {
        let vm = this
        let random = Math.ceil(5 * Math.random());
        vm.backgroundImg = "#186aa9 url(/static/images/background/" + random + ".jpg) top repeat-x";
      }
    },
    brforeCreate() {},
    created() {},
    mounted() {
      this.init()
    },
    beforeDestroy() {}
  }
</script>

<style lang="postcss">
  .index-view {
    position: absolute;
    width: 100%;
    height: 100%;
    display: inline-block;
    overflow-y: auto;
    & .el-scrollbar {
      height: 100%;
      & .el-scrollbar__wrap {
        height: 100%;
        max-height: 100%;
        overflow-x: hidden;
        border: 0px;
        padding: 0px;
        & .el-scrollbar__view {
          height: 100%;
          & .first {
            position: relative;
            width: 100%;
            height: 100%;
            font-size: 10em;
            color: #fff;
            text-align: center;
            line-height: 800px;
          }
          & .second {
            position: relative;
            width: 100%;
            height: 100%;
            color: #fff;
            font-size: 10em;
            text-align: center;
            line-height: 800px;
          }
        }
      }
    }
  }
</style>
