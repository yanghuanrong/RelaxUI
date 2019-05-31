<template>
  <div id="app">
    <div class="start" ref="loader" v-if="this.loader">
      <div class="logo-center">
        <div class="logo-img">
          <span>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
        <p>一套基于 Vue.js UI组件库</p>
      </div>
    </div>
    <div class="wrapper">
      <div class="sidebar-menu" style="width:220px">
        <div style="padding: 20px">
        <router-link to="/">
          <div class="logo-img">
            <span>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>
          </router-link>
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
              <x-menu-item
                :name="i+'-'+k"
                :to="submenu.path"
                v-for="(submenu,k) in menu.route"
                :key="k"
              >{{submenu.meta.text}}</x-menu-item>
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
import nav from "./router/routeTemp"
import Cookies from 'js-cookie'

const LOADING = 'RelaxUI'
export default {
  name: "App",
  data() {
    return {
      nav: nav,
      loader: true
    }
  },
  created() {
    const page = Cookies.get(LOADING)
    if(page){
      this.loader = false
    }
  },
  mounted() {
    setTimeout(this.closeLoader, 4600)
  },
  methods: {
    closeLoader() {
      this.loader = false
      Cookies.set(LOADING, 'true', { expires: 1 });
    }
  }
}
</script>