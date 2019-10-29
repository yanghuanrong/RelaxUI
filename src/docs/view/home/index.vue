<template>
  <div class="index">
    <div class="content">
      <div>
        <img src="@/docs/assets/logo.png" alt>
      </div>
      <div class="logo-title">Relax UI</div>
      <p class="logo-description">一套基于 Vue.js 的 UI组件库</p>
      <div class="github">
        <iframe src="https://ghbtns.com/github-btn.html?user=yanghuanrong&amp;repo=RelaxUI&amp;type=watch&amp;count=true&amp;v=2" frameborder="0" scrolling="0" width="100px" height="20px"></iframe>
        <iframe src="https://ghbtns.com/github-btn.html?user=yanghuanrong&amp;repo=RelaxUI&amp;type=star&amp;count=true" frameborder="0" scrolling="0" width="100px" height="20px"></iframe>
        <iframe src="https://ghbtns.com/github-btn.html?user=yanghuanrong&amp;repo=RelaxUI&amp;type=fork&amp;count=true" frameborder="0" scrolling="0" width="100px" height="20px"></iframe>
      </div>
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