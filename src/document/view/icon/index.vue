<template >
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">Icon 图标</h4>
        <p class="page-title-decs">语义化的矢量图形</p>
      </div>
    </div>
    <div class="card-box">
      <Row class="icon-list">
        <Col :sm='12' :md='8' :lg='6' :xl='4' v-for='(item,index) in icon' :key="index">
          <Icon :type="'re-icon-'+item"/>
          <span class="icon-class">re-icon-{{item}}</span>
          <input type="text" class="icon-copy" :value='`<Icon type="re-icon-${item}"/>`' readOnly/>
        </Col>
      </Row>
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
