<template>
  <div class='second-main'>
    <div class="main-nav" id="particles-js">
      <div class="header-nav">
        <div class="title-div">
          <i class="el-icon-video-camera-solid"></i> {{title}}
        </div>
        <div class="header-nav-button">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <div class="my-menu" v-for="(button,index) in navButtons" :key="index">
              <el-submenu v-if="button.children" :index="index+''">
                <template slot="title">{{button.label}}</template>
                <el-menu-item v-for="(subButton,subIndex) in button.children" :key="subIndex" :index="subIndex+''">{{subButton.label}}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="index+''">{{button.label}}</el-menu-item>
            </div>
          </el-menu>
        </div>
        <div class="sign" @click="signDialogVisible = true">
          Sign In
          <i class="el-icon-right"></i>
        </div>
      </div>
    </div>
    <div class="waves-div">
      <svg width="100%" height="20%" version="1.1" class="wave">
          <defs></defs>
          <path id="feel-the-wave" d="" />
        </svg>
    </div>
    <div class="product-display-div">
      <div v-for="(product,index) in productInfos" :key="index" class="product" @click="productInfo =product">
        <img class="hover-image" :src="product.image" alt="">
        <div class="hover-mask">
          <h2 class="product-title">{{product.title}}</h2>
          <p class="product-content">{{product.content}}</p>
        </div>
      </div>
    </div>
    <sign-in :signDialogVisible="signDialogVisible" @signDialogVisible="signDialogVisible=arguments[0]"></sign-in>
    <product-info :productInfo="productInfo" @clearProductInfo="productInfo = null"></product-info>
  </div>
</template>

<script>
  import * as wavifyUtlis from "@/utils/otherUtils/wavify"
  import * as particlesUtils from 'particlesjs'
  import signIn from "./SignIn"
  import productInfo from "./ProductInfo"
  export default {
    name: 'second-main',
    directives: {},
    components: {
      signIn,
      productInfo
    },
    props: {},
    data() {
      return {
        title: "SECOND",
        activeIndex: "1",
        navButtons: [{
            label: "Info",
            value: "info",
          },
          {
            label: "Download",
            value: "download"
          },
          {
            label: "Language",
            value: "language",
            children: [{
                label: "简体中文",
                value: "simple-chinese"
              },
              {
                label: "English",
                value: "english"
              }
            ]
          }
        ],
        productInfos: [{
            image: "/static/images/product/1.jpg",
            title: "marketing",
            content: "xxx",
            date: ""
          },
          {
            image: "/static/images/product/2.jpg",
            title: "branding",
            content: "xxx",
            date: ""
          },
          {
            image: "/static/images/product/3.jpg",
            title: "solution",
            content: "xxx",
            date: ""
          }
        ],
        productInfo:null,
        signDialogVisible:false
      }
    },
    computed: {},
    watch: {},
    methods: {
      init() {
        this.initWaves();
        this.initParticles();
      },
      initWaves() {
        wavifyUtlis.wavify($('#feel-the-wave'), {
          height: 45,
          bones: 3,
          amplitude: 60,
          color: '#79BBFF',
          speed: .25
        });
      },
      initParticles(){
        particlesJS('particles-js', {
          "particles": {
            "number": {
              "value": 80, // 20,//80
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "fff",
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 100,
                "size_min": 10,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#fff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 3,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab",
              },
              "onclick": {
                "enable": true,
                "mode": "repulse",
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 150,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true,
          "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
          }
        })
      },
      handleSelect() {}
    },
    brforeCreate() {},
    //app created=>map created =>mapSwitch created=> map mounted=> mapSwitch mounted=>app mounted
    created() {},
    mounted() {
      this.init();
    },
    beforeDestroy() {}
  }
</script>

<style lang='postcss'>
  .second-main {
    position: relative;
    width: 100%;
    height: 100%;
    & .main-nav {
      position: position;
      width: 100%;
      height: 50%;
      min-height: 330px;
      z-index:98;
      background: linear-gradient(#409EFF, #79BBFF);
      & .header-nav {
        position: absolute;
        width: 100%;
        min-width: 960px;
        height: 60px;
        color: #fff;
        font-size: 24px;
        font-weight: 600;
        display: inline-block;
        & .title-div {
          position: absolute;
          width: 20%;
          height: 100%;
          line-height: 100px;
          text-align: right;
          & i {
            font-size: 2.5em;
          }
        }
        & .header-nav-button {
          position: absolute;
          width: 60%;
          height: 100%;
          left: 20%;
          line-height: 100px;
          & .el-menu-demo {
            background-color: rgba(255, 255, 255, 0);
            margin-left: 10%;
            & .my-menu {
              display: inline-block;
              & .el-menu-item {
                color: #fff;
                font-size: 24px;
              }
              & .el-menu-item:hover,.el-menu-item:focus {
                color: #fff;
                background-color: rgba(255, 255, 255, 0);
              }
              & .el-submenu {
                & .el-submenu__title {
                  color: #fff;
                  font-size: 24px;
                  background-color: rgba(255, 255, 255, 0);
                  padding: 0 25px;
                }
                & .el-submenu__icon-arrow {
                  color: #fff;
                  font-size: 24px;
                  font-weight: 600;
                  right: 0px;
                  margin-top: -10px;
                }
              }
            }
          }
          & .el-menu.el-menu--horizontal {
            border-bottom: 0px;
          }
        }
        & .sign {
          position: absolute;
          width: 20%;
          height: 100%;
          line-height: 100px;
          right: 0px;
          text-align: center;
          transition: all 0.3s;
          cursor: pointer;
        }
        & .sign:hover {
          font-size: 1.25em;
        }
      }
    }
    & .waves-div {
      & .wave {
        position: absolute;
        left: 0;
        right: 0;
        top: 49%;
        z-index: 1;
        transform: rotate(180deg);
      }
      .wave+.wave {
        z-index: 2;
      }
      @media screen and (max-height: 660px) {
        /*当屏幕尺寸小于600px时，应用下面的CSS样式*/
        & .wave {
          top: 325px;
        }
      }
    }
    & .product-display-div {
      width: 100%;
      height: 50%;
      min-height: 330px;
      bottom: 0;
      background-color: #FFF;
      text-align: center;
      & .product {
        position: relative;
        width: 25%;
        height: 50%;
        min-width: 320px;
        min-height:230px;
        display: inline-block;
        top: 50%;
        margin: 25px;
        transform: translate(0%, -50%);
        z-index: 99;
        overflow: hidden;
        & .hover-mask {
          position: absolute;
          padding: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: #000;
          opacity: 0;
          filter: alpha(opacity=0);
          -webkit-transition: all 0.3s ease-out;
          transition: all 0.3s ease-out;
          color: #fff;
          & .product-title {
            margin: 0;
            padding: 16px;
            font-size: 24px;
            line-height: 24px;
            font-weight: 500;
            text-align:left;
          }
          & .product-content{
          }
        }
        & .hover-image{
          width:100%;
          height:100%;
          webkit-transform: scale(1);
          transform: scale(1);
          -webkit-transition: -webkit-transform 0.3s ease-out;
          transition: transform 0.3s ease-out;
        }
      }
      & .product:hover{
        & .hover-mask{
          width: calc(100% - 50px);
          height: calc(100% - 50px);
          top: 25px;
          left: 25px;
          opacity: 0.6;
        }
        & .hover-image{
          webkit-transform: scale(1.4);
          transform: scale(1.4);
        }
      }
    }
  }
</style>
