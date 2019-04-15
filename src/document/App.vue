<template>
  <div id="app">
    <div class="wrapper">
      <div class="yi-sidebar-menu" style="width:240px">
        <div class="logo">
          <img src="./assets/logo.png" alt>
        </div>
      </div>
      <div class="content-page">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
