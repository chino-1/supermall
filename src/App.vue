<template>
  <div>
    <router-view></router-view>
   <!-- <tab-bar-item path="/home">
     <i slot="item-icon" class="iconfont icon-index"></i>
     <i slot="item-icon-active" class="iconfont icon-oA"></i>
     <div slot="item-text">首页</div>
   </tab-bar-item>
   <tab-bar-item path="/message">
     <i slot="item-icon" class="iconfont icon-xiaoxi"></i>
     <i slot="item-icon-active" class="iconfont icon-icon-test"></i>
     <div slot="item-text">消息</div>
   </tab-bar-item>
   <tab-bar-item path="/cart">
     <i slot="item-icon" class="iconfont icon-gouwuche2"></i>
     <i slot="item-icon-active" class="iconfont icon-gouwuche1"></i>
     <div slot="item-text">购物车</div>
   </tab-bar-item>
   <tab-bar-item path="/profile">
     <i slot="item-icon" class="iconfont icon-wode1"></i>
     <i slot="item-icon-active" class="iconfont icon-wode"></i>
     <div slot="item-text">我的</div>
   </tab-bar-item> -->
    <main-tab-bar></main-tab-bar>
  </div>
  
</template>

<script>
import MainTarBar from './assets/components/MainTabbar.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },components:{
    'main-tab-bar':MainTarBar
  }
}
</script>

<style lang="scss">
  @import "./assets/css/base.css"
</style>
