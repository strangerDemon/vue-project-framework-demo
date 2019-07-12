<template>
  <div class='second-main'>
    <div class="main-nav">
      <div class="header-nav">
        <div class="title-div">
          <i class="el-icon-video-camera-solid"></i> {{title}}
        </div>
        <div class="header-nav-button">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <div class="my-menu" v-for="(button,index) in navButtons" :key="index">
              <el-submenu v-if="button.children" :index="index">
                <template slot="title">{{button.label}}</template>
                <el-menu-item v-for="(subButton,subIndex) in button.children" :key="subIndex" :index="subIndex">{{subButton.label}}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="index">{{button.label}}</el-menu-item>
            </div>
          </el-menu>
        </div>
        <div class="sign" @click="openSign">
          sign
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
    </div>
  </div>
</template>

<script>
  import * as wavifyUtlis from "@/utils/otherUtils/wavify"
  export default {
    name: 'second-main',
    directives: {},
    components: {},
    props: {},
    data() {
      return {
        title: "SECOND",
        activeIndex:1,
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
        ]
      }
    },
    computed: {},
    watch: {},
    methods: {
      initWaves() {
        wavifyUtlis.wavify($('#feel-the-wave'), {
          height: 45,
          bones: 3,
          amplitude: 60,
          color: '#79BBFF',
          speed: .25
        });
      },
      handleSelect(){

      },
      openSign() {}
    },
    brforeCreate() {},
    //app created=>map created =>mapSwitch created=> map mounted=> mapSwitch mounted=>app mounted
    created() {},
    mounted() {
      this.initWaves();
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
      position: relative;
      width: 100%;
      height: 50%;
      background: linear-gradient(#409EFF, #79BBFF);
      & .header-nav {
        position: absolute;
        width: 100%;
        min-width:1500px;
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
          left:20%;
          line-height: 100px;
          & .el-menu-demo{
            background-color: rgba(255,255,255,0);
            margin-left: 10%;
            & .my-menu{
              display: inline-block;
              & .el-menu-item{
                color:#fff;
                font-size:24px;
              }
              & .el-menu-item:hover{
                color:#fff;
                background-color: rgba(255,255,255,0);
              }
              & .el-submenu{
                & .el-submenu__title{
                  color:#fff;
                  font-size:24px;
                  background-color: rgba(255,255,255,0);
                  padding: 0 25px;
                }
                & .el-submenu__icon-arrow{
                  color:#fff;
                  font-size:24px;
                  font-weight: 600;
                  right: 0px;
                  margin-top: -10px;
                }
              }
            }
          }
          & .el-menu.el-menu--horizontal{
            border-bottom:0px;
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
    }
    & .product-display-div {
      position: relative;
      width: 100%;
      height: 50%;
      bottom: 0;
      background-color: #FFF;
    }
  }
</style>
