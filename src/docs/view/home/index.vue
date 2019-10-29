<template>
  <div class="index">
    <div class="content">
      <div>
        <img src="@/docs/assets/logo.png" alt>
      </div>
      <div class="logo-title">Relax UI</div>
      <p class="logo-description">一套基于 Vue.js 的 UI组件库</p>
      <ul class="github">
        <li>
          <x-icon type="x-icon-eye"/>
          <span class="number">watch {{watch}}</span>
        </li>
        <li>
          <x-icon type="x-icon-star"/>
          <span class="number">star {{star}}</span>
        </li>
        <li>
          <x-icon type="x-icon-box"/>
          <span class="number">fork {{fork}}</span>
        </li>
        
        <!-- <iframe src="https://ghbtns.com/github-btn.html?user=yanghuanrong&amp;repo=RelaxUI&amp;type=watch&amp;count=true&amp;v=2" frameborder="0" scrolling="0" width="100px" height="20px"></iframe>
        <iframe src="https://ghbtns.com/github-btn.html?user=yanghuanrong&amp;repo=RelaxUI&amp;type=star&amp;count=true" frameborder="0" scrolling="0" width="100px" height="20px"></iframe>
        <iframe src="https://ghbtns.com/github-btn.html?user=yanghuanrong&amp;repo=RelaxUI&amp;type=fork&amp;count=true" frameborder="0" scrolling="0" width="100px" height="20px"></iframe> -->
      </ul>
      <div>
        <router-link to="/button">
          <x-button type='primary' size="lg" round style="padding-left:44px; padding-right: 44px;">开始使用</x-button>
        </router-link>
      </div>
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
    }
  },
  created(){
    jsonp({
      url: 'https://api.github.com/repos/yanghuanrong/RelaxUI',
      jsonp: 'callback',
      success: ({data}) => {
        this.watch = data.subscribers_count
        this.star = data.watchers
        this.fork = data.forks
        console.log(data)
      }
    })
  }
}
</script>