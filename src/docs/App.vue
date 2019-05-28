<template>
  <div id="app">
    <div class="wrapper">
      <div class="sidebar-menu" style="width:220px">
        <div class="logo">
          <img src="./assets/logo.png" alt>
        </div>
        <x-menu :all-opend="true">
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
            <x-menu-group :title="menu.title" v-for="(menu, i) in nav" :key="i">
              <x-menu-item :name="i+'-'+k" :to="submenu.path" v-for="(submenu,k) in menu.route" :key="k">
                {{submenu.meta.text}}
              </x-menu-item>
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
import nav from "./router/routeTemp";
export default {
  name: "App",
  data() {
    return {
      nav: nav
    };
  }
};
</script>
