<template>
  <div class='not-found-view'>
    <div class="wrapper">
      <div class="graphic"></div>
      <div class="not-found-text">
        <h1 class="not-found-text">抱歉,未找到资源！</h1>
      </div>
      <div class="dog-wrapper">
        <div class="dog" :style="{'background-position':position}"></div>
        <div class="dog-bubble" style="opacity: 1;">
          <p>
            <br> 你迷路了吗?
          </p>
        </div>
      </div>
      <div class="planet" :style="{'transform': 'rotate(' + degree+ 'deg)','WebkitTransform':'rotate(' + degree*2 + 'deg)','-ms-transform':'rotate(' + degree + 'deg)'}"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "not-found-view",
    directives: {},
    components: {},
    props: {},
    data() {
      return {
        count: 0,
        position: "0px 0px",
        degree: 0,
      };
    },
    computed: {},
    watch: {},
    methods: {
      start() {
        this.rotate();
        this.dogRun();
      },
      rotate() {
        let vm = this
        vm.degree -= 0.1;
        vm.count++;
        requestAnimationFrame(vm.rotate);
      },
      dogRun() {
        let vm = this
        if (vm.count % 10 == 1) {
          if (vm.position == "0px 0px") {
            vm.position = "-80px -2px"
          } else {
            vm.position = "0px 0px"
          }
        }
        requestAnimationFrame(vm.dogRun);
      }
    },
    brforeCreate() {},
    created() {},
    mounted() {
      this.start();
    },
    beforeDestroy() {}
  };
</script>
<style lang='postcss' scoped>
  .not-found-view {
    height: 100%;
    min-height: 750px;
    background: #186aa9 url(/static/js/404/images/sky-background.png) top repeat-x;
    overflow: hidden;
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  a {
    color: #3680b1;
  }
  img,
  a img {
    border: 0;
    outline: 0;
  }
  .wrapper {
    width: 980px;
    margin: 0 auto;
    position: relative;
    height: 100%;
    background: url(/static/js/404/images/sky-shine.jpg) top left no-repeat;
  }
  h1.not-found-text {
    font-size: 50px;
    color: #fff;
    font-family: singlesleeveregular, cursive;
    letter-spacing: 2px;
    margin-bottom: 20px;
  }
  div.not-found-text {
    position: absolute;
    top: 180px;
    right: 0;
    width: 500px;
  }
  div.graphic {
    position: absolute;
    top: 80px;
    left: 0;
    background: url(/static/js/404/images/404.png) top left no-repeat;
    width: 494px;
    height: 331px;
  }
  div.planet {
    position: absolute;
    bottom: -1100px;
    margin: 0 auto;
    width: 980px;
    background: url(/static/js/404/images/planet.png) center no-repeat;
    height: 1920px;
    z-index: 0;
  }
  div.dog-wrapper {
    position: absolute;
    bottom: 300px;
    left: 440px;
  }
  div.dog {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 80px;
    z-index: 999;
    background: url(/static/js/404/images/dog.png) 0 0 no-repeat;
  }
  div.search {
    position: absolute;
    top: 145px;
    right: 0;
    width: 340px;
    background: #eee;
    box-shadow: 1px 1px 0 #fff inset, 5px 5px 0 #3680b1;
    color: #555;
    font-size: 14px;
    text-shadow: 1px 1px 0 #fff;
    border-radius: 30px;
    padding: 10px;
    z-index: 999;
  }
  div.search input[type="submit"]:hover {
    background: #fff url(/static/js/404/images/search.png) center center no-repeat;
    cursor: pointer;
  }
  div.search input[type="submit"] {
    box-shadow: 1px 1px 0 #fff inset, 5px 5px 0 #3680b1;
    background: #eee url(/static/js/404/images/search.png) center center no-repeat;
    border-radius: 50px;
    position: absolute;
    top: 0;
    right: 380px;
    width: 50px;
    height: 40px;
    border: 0;
  }
  div.search input[type="text"] {
    padding: 0 10px;
    border: 0;
    background: 0 0;
    color: #999;
    width: 300px;
    height: 20px;
  }
  div.top-menu {
    position: absolute;
    top: 200px;
    right: 0;
    color: #fff;
    z-index: 998;
  }
  div.top-menu a {
    text-decoration: none;
    color: #eee;
    margin: 0 5px;
    font-size: 12px;
  }
  div.top-menu a:hover {
    color: #abd7fa;
  }
  div.dog-bubble {
    font-size: 14px;
    line-height: 1.5;
    font-style: italic;
    height: 119px;
    width: 166px;
    background: url(/static/js/404/images/bubble.png) center no-repeat;
    background-size: 70% 70%;
    padding: 20px 0;
    position: absolute;
    bottom: 25px;
    left: 40px;
    z-index: 999;
    opacity: 0;
    color: #555;
    font-size: 14px;
    text-shadow: 1px 1px 0 #fff;
  }
  div.dog-bubble>p {
    text-align: center;
    padding: 0 35px;
  }
  div.bubble-options {
    opacity: 0;
    visibility: hidden;
    display: none;
  }
  .tipsy {
    padding: 5px;
    font-size: 10px;
    position: absolute;
    z-index: 9999999999;
  }
  .tipsy-inner {
    padding: 5px 8px 4px;
    background-color: #000;
    color: #fff;
    max-width: 200px;
    text-align: center;
  }
  .tipsy-inner {
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
  }
  .tipsy-arrow {
    position: absolute;
    background: url(/static/js/404/images/tipsy.gif) no-repeat top left;
    width: 9px;
    height: 5px;
  }
  .tipsy-n .tipsy-arrow {
    top: 0;
    left: 50%;
    margin-left: -4px;
  }
  .tipsy-nw .tipsy-arrow {
    top: 0;
    left: 10px;
  }
  .tipsy-ne .tipsy-arrow {
    top: 0;
    right: 10px;
  }
  .tipsy-s .tipsy-arrow {
    bottom: 0;
    left: 50%;
    margin-left: -4px;
    background-position: bottom left;
  }
  .tipsy-sw .tipsy-arrow {
    bottom: 0;
    left: 10px;
    background-position: bottom left;
  }
  .tipsy-se .tipsy-arrow {
    bottom: 0;
    right: 10px;
    background-position: bottom left;
  }
  .tipsy-e .tipsy-arrow {
    top: 50%;
    margin-top: -4px;
    right: 0;
    width: 5px;
    height: 9px;
    background-position: top right;
  }
  .tipsy-w .tipsy-arrow {
    top: 50%;
    margin-top: -4px;
    left: 0;
    width: 5px;
    height: 9px;
  }
</style>
