<template>
    <div>
      <div id="tab-bar">
        <tab-bar-item path="/home">
            <img slot="item-icon" src="../images/tabbar/home.svg" alt="">
            <img slot="item-icon-active" src="../images/tabbar/home_active.svg" alt="">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/message">
            <img slot="item-icon" src="../images/tabbar/category.svg" alt="">
            <img slot="item-icon-active" src="../images/tabbar/category_active.svg" alt="">
            <div slot="item-text">消息</div>
        </tab-bar-item>
        <tab-bar-item path="/cart">
            <img slot="item-icon" src="../images/tabbar/shopcart.svg" alt="">
            <img slot="item-icon-active" src="../images/tabbar/shopcart_active.svg" alt="">
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile">
            <img slot="item-icon" src="../images/tabbar/profile.svg" alt="">
            <img slot="item-icon-active" src="../images/tabbar/profile_active.svg" alt="">
            <div slot="item-text">我的</div>
        </tab-bar-item>
      </div>
    </div>
</template>
<script>
import TabbarItem from './Tabbaritem.vue'
export default {
    components:{
    'tab-bar-item':TabbarItem
  }
}
</script>
<style lang="scss">
    
</style>