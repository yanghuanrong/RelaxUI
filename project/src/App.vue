<template>
<div id="app">
  <div class='wrapper'>
    <div class="yi-sidebar-menu" style="width:200px">
      <re-menu active-name="2-1" :uniqueOpened='true'>
        <re-menu-item name="1">
          <re-icon type="home"></re-icon>
          <span>首页</span>
        </re-menu-item>
        <re-submenu name="2">
          <template slot="title">
          <re-icon type="headphones"></re-icon>
          <span>首页</span>
        </template>
          <re-menu-group title="牛逼啊">
            <re-menu-item name="2-1" to='/button'>按钮组件</re-menu-item>
            <re-menu-item name="2-2" to='/icon'>图标组件</re-menu-item>
            <re-menu-item name="2-3">首页</re-menu-item>
            <re-menu-item name="2-4">首页</re-menu-item>
            <re-menu-item name="2-5">首页</re-menu-item>
          </re-menu-group>
        </re-submenu>
        <re-submenu name="3">
          <template slot="title">
          <re-icon type="twitter"></re-icon>
          <span>首页</span>
        </template>
          <re-menu-group>
            <re-menu-item name="3-1">首页</re-menu-item>
            <re-menu-item name="3-2">首页</re-menu-item>
          </re-menu-group>
        </re-submenu>
      </re-menu>
    </div>
    <div class="content-page">
      <router-view/>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>
