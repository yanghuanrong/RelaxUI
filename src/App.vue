<template>
<div id="app">
  <div class="yi-sidebar-menu" style="width:200px">
    <yi-menu active-name="2-1">
      <yi-menu-item name="1">
        <yi-icon type="home"></yi-icon>
        <span>首页</span>
      </yi-menu-item>
      <yi-submenu name="2">
        <template slot="title">
          <yi-icon type="facebook"></yi-icon>
          <span>首页</span>
        </template>
        <yi-menu-group>
          <yi-menu-item name="2-1">首页</yi-menu-item>
          <yi-menu-item name="2-2">首页</yi-menu-item>
          <yi-menu-item name="2-3">首页</yi-menu-item>
          <yi-menu-item name="2-4">首页</yi-menu-item>
          <yi-menu-item name="2-5">首页</yi-menu-item>
        </yi-menu-group>
      </yi-submenu>
      <yi-submenu name="3">
        <template slot="title">
          <yi-icon type="github"></yi-icon>
          <span>首页</span>
        </template>
        <yi-menu-group>
          <yi-menu-item name="3-1">首页</yi-menu-item>
          <yi-menu-item name="3-2">首页</yi-menu-item>
          <yi-menu-item name="3-3">首页</yi-menu-item>
          <yi-menu-item name="3-4">首页</yi-menu-item>
        </yi-menu-group>
      </yi-submenu>

    </yi-menu>
  </div>
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
