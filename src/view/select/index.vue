<template >
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">Select 选择器</h4>
        <p class="page-title-decs">下拉选择器</p>
      </div>
    </div>
    <div class="card-box">
      <Row>
        <Col :span='4'>
          <div style="width:200px;">
            <Select v-model='value1'>
              <Option value='蓝天'></Option>
              <Option value='白云'></Option>
              <Option value='草地'></Option>
            </Select>
          </div>
        </Col>
        <Col :span='12'>
          <div style="width:200px;">
            <Select v-model='value2'>
              <Option value='中国人'></Option>
              <Option value='法国人'></Option>
              <Option value='赛亚人'></Option>
            </Select>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: '',
      value2: ''
    }
  }
}
</script>
