<template >
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">Icon 图标</h4>
        <p class="page-title-decs">语义化的矢量图形</p>
      </div>
    </div>
    <div class="card-box">
      <re-row class="icon-list">
        <re-col :sm='12' :md='8' :lg='6' :xl='4' v-for='(item,index) in icon' :key="index">
          <re-icon :type="'re-icon-'+item"></re-icon>
          <span class="icon-class">re-icon-{{item}}</span>
          <input type="text" class="icon-copy" :value='`<re-icon type="re-icon-${item}"></re-icon>`' readOnly/>
        </re-col>
      </re-row>
    </div>
  </div>
</template>

<script>
import icon from './icon'
export default {
  data () {
    return {
      icon: icon
    }
  }
}
</script>
