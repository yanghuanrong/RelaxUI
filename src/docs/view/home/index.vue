<template>
  <div class="index">
    <div class="content">
      <div>
        <img src="@/docs/assets/logo.png" alt>
      </div>
      <div class="logo-title">Relax UI</div>
      <p class="logo-description">一套基于 Vue.js 的 UI组件库</p>
      <div class="github">
        <a href="https://github.com/yanghuanrong/RelaxUI/watchers" target="blank" >
          <x-button icon="x-icon-eye" round plain>Watch {{watch}}</x-button>
        </a>
        <a href="https://github.com/yanghuanrong/RelaxUI/stargazers" target="blank">
          <x-button icon="x-icon-star" round plain>Star {{star}}</x-button>
        </a>
        <a href="https://github.com/yanghuanrong/RelaxUI/network/members" target="blank">
          <x-button icon="x-icon-box" round plain>Fork {{fork}}</x-button>
        </a>
        <!-- <iframe src="https://ghbtns.com/github-btn.html?user=yanghuanrong&amp;repo=RelaxUI&amp;type=watch&amp;count=true&amp;v=2" frameborder="0" scrolling="0" width="100px" height="20px"></iframe>
        <iframe src="https://ghbtns.com/github-btn.html?user=yanghuanrong&amp;repo=RelaxUI&amp;type=star&amp;count=true" frameborder="0" scrolling="0" width="100px" height="20px"></iframe>
        <iframe src="https://ghbtns.com/github-btn.html?user=yanghuanrong&amp;repo=RelaxUI&amp;type=fork&amp;count=true" frameborder="0" scrolling="0" width="100px" height="20px"></iframe> -->
      </div>
      <div>
        <router-link to="/button">
          <x-button type='primary' size="lg" round style="padding-left:44px; padding-right: 44px;">开始使用</x-button>
        </router-link>
      </div>
    </div>
    <div class="contributors" v-if="contributors">
      <div class="title">贡献者</div>
      <ul>
        <li v-for="(item, i) in contributors" :key="i">
          <a :href="item.html_url" target="blank">
          <x-badge :value="item.contributions" :max="999">
            <img :src="item.avatar_url" :title="item.login"/>
          </x-badge>
          </a>
        </li>
      </ul>
    </div>
    <div class="element">
      <div class="triangle-move">
        <div class="triangle-rotate">
          <div class='triangle'></div>
        </div>
      </div>
      <div class='ellipse'></div>
      <div class='round'></div>
      <div class='square'></div>
      <div class='combination'></div>
      <div class='semicirce'></div>
    </div>
  </div>
</template>

<script>
import {jsonp} from './jsonp'

export default {
  data(){
    return {
      watch: 0,
      star: 0,
      fork: 0,
      contributors: null
    }
  },
  created(){
    jsonp({
      url: 'https://api.github.com/repos/yanghuanrong/RelaxUI',
      jsonp: 'callback',
    }).then(({data}) => {
      this.watch = data.subscribers_count
      this.star = data.watchers
      this.fork = data.forks
      
      return data.contributors_url
    }).then((url) => {
      jsonp({
        url: url,
        jsonp: 'callback',
      }).then(({data}) => {
        this.contributors = data
        console.log(data)
      })
    })
  }
}
</script>