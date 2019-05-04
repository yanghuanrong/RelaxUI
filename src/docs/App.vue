<template>
<div id="app">
  <div class='wrapper'>
    <div class="sidebar-menu" style="width:220px">
      <div class="logo">
        <img src="./assets/logo.png" alt="">
      </div>
      <x-menu :all-opend='true'>
        <x-menu-item name="1">
          <span>安装</span>
        </x-menu-item>
        <x-menu-item name="1">
          <span>快速开始</span>
        </x-menu-item>
        <x-submenu name="2">
          <template slot="title">
          <span>UI Elements</span>
        </template>
          <x-menu-group title="General">
            <x-menu-item name="2-1" to='/button'>Button 按钮</x-menu-item>
            <x-menu-item name="2-2" to='/icon'>Icon 图标</x-menu-item>
          </x-menu-group>
          <x-menu-group title="Layout">
            <x-menu-item name="2-3" to='/grid'>Grid 栅格</x-menu-item>
          </x-menu-group>
          <x-menu-group title="Data Entry">
            <x-menu-item name="2-4" to='/input'>Input 输入框</x-menu-item>
            <x-menu-item name="2-5" to='/checkbox'>Checkbox 多选框</x-menu-item>
            <x-menu-item name="2-6" to='/select'>Select 选择器</x-menu-item>
          </x-menu-group>
          <x-menu-group title="Feedback">
            <x-menu-item name="2-7" to='/message'>Message 消息</x-menu-item>
            <x-menu-item name="2-8" to='/notice'>Notice 消息</x-menu-item>
          </x-menu-group>
          
        </x-submenu>
      </x-menu>
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
