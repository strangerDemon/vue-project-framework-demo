<template>
  <div class='index-view' :style="{'background-image':backgroundImg}">
    <el-scrollbar ref="index">
      <div id="first" class="first">
        <div class="title">vue template demo</div>
      </div>
      <div id="second" class="second">
        <div class="head-nav">
          <div class="title">
            second
          </div>
        </div>
      </div>
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
        backgroundImg: "",
        currentPage: 0,
        pages: ["first", "second"]
      }
    },
    computed: {},
    watch: {},
    methods: {
      init() {
        let vm = this
        let random = Math.ceil(5 * Math.random());
        vm.backgroundImg = "url(/static/images/background/" + random + ".jpg)";
      }
    },
    brforeCreate() {},
    created() {},
    mounted() {
      // this.$store.dispatch("init");
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
    background-size: cover;
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
            background-image: url("/static/images/background/index.jpg");
            & .title {
              font-size: 10em;
              color: #fff;
              text-align: center;
              line-height: 300px;
              transition: all 0.6s;
            }
            & .title:hover {
              transform: scale(1.1);
            }
          }
          & .first:hover {
            /*transform: scale(1.25);*/
          }
          & .second {
            position: relative;
            width: 100%;
            height: 100%;
            & .head-nav {
              position: absolute;
              width: 100%;
              text-align: center;
              & .title {
                width: auto;
                color: #fff;
                font-size: 10em;
                text-align: center;
                transition: all 2s;
                line-height: 300px;
              }
              & .title:hover {
                transform: rotate(360deg);
              }
            }
          }
        }
      }
    }
  }
</style>
