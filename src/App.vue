<template>
<div id="app">
  <div class="yi-sidebar-menu" style="width:200px">
    <Menu active-name="2-1">
      <MenuItem name="1">
        <Icon type="home"></Icon>
        <span>首页</span>
      </MenuItem>
      <Submenu name="2">
        <template slot="title">
          <Icon type="facebook"></Icon>
          <span>首页</span>
        </template>
        <MenuGroup title="牛逼啊">
          <MenuItem name="2-1">首页</MenuItem>
          <MenuItem name="2-2">首页</MenuItem>
          <MenuItem name="2-3">首页</MenuItem>
          <MenuItem name="2-4">首页</MenuItem>
          <MenuItem name="2-5">首页</MenuItem>
        </MenuGroup>
      </Submenu>
      <Submenu name="3">
        <template slot="title">
          <Icon type="facebook"></Icon>
          <span>首页</span>
        </template>
        <MenuGroup>
          <MenuItem name="3-1">首页</MenuItem>
          <MenuItem name="3-2">首页</MenuItem>
        </MenuGroup>
      </Submenu>
    </Menu>
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
