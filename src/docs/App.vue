<template>
<div id="app">
  <div class='wrapper'>
    <div class="yi-sidebar-menu" style="width:240px">
      <div class="logo">
        <img src="./assets/logo.png" alt="">
      </div>
      <Menu :uniqueOpened='true'>
        <MenuItem name="1">
          <span>安装</span>
        </MenuItem>
        <MenuItem name="1">
          <span>快速开始</span>
        </MenuItem>
        <Submenu name="2">
          <template slot="title">
          <span>UI Elements</span>
        </template>
          <MenuGroup title="General">
            <MenuItem name="2-1" to='/button'>Button 按钮</MenuItem>
            <MenuItem name="2-2" to='/icon'>Icon 图标</MenuItem>
          </MenuGroup>
          <MenuGroup title="Layout">
            <MenuItem name="2-3" to='/grid'>Grid 栅格</MenuItem>
          </MenuGroup>
          <MenuGroup title="Data Entry">
            <MenuItem name="2-4" to='/input'>Input 输入框</MenuItem>
            <MenuItem name="2-5" to='/checkbox'>Checkbox 多选框</MenuItem>
            <MenuItem name="2-6" to='/select'>Select 选择器</MenuItem>
            <MenuItem name="2-7" to='/message'>message 消息</MenuItem>
          </MenuGroup>
        </Submenu>
      </Menu>
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
