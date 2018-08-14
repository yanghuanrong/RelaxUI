<template>
<div id="app">
  <div class='wrapper'>
    <div class="yi-sidebar-menu" style="width:240px">
      <div class="logo">
        <img src="./assets/logo.png" alt="">
      </div>
      <re-menu active-name="2-1" :uniqueOpened='true'>
        <re-menu-item name="1">
          <span>安装</span>
        </re-menu-item>
        <re-menu-item name="1">
          <span>快速开始</span>
        </re-menu-item>
        <re-submenu name="2">
          <template slot="title">
          <span>UI Elements</span>
        </template>
          <re-menu-group title="General">
            <re-menu-item name="2-1" to='/button'>Button 按钮</re-menu-item>
            <re-menu-item name="2-2" to='/icon'>Icon 图标</re-menu-item>
          </re-menu-group>
          <re-menu-group title="Layout">
            <re-menu-item name="2-3" to='/grid'>Grid 栅格</re-menu-item>
          </re-menu-group>
          <re-menu-group title="Data Entry">
            <re-menu-item name="2-4" to='/input'>Input 输入框</re-menu-item>
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
