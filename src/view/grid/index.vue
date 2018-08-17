<template >
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">Grid 栅格</h4>
        <p class="page-title-decs">24 栅格系统</p>
      </div>
    </div>
    <div class="card-box">
      <Row :gutter='20'>
        <Col :span='16' :offset='4'>
          <div style="background:#ccc">col-span-16</div>
        </Col>
        <Col :span='12' :offset='4'>
          <div style="background:#ccc">col-span-12</div>
        </Col>
        <Col :xl='6' :sm='5' :md='7'>
          <div style="background:#ccc">col-xl-12,col-sm-5,col-md-7</div>
        </Col>
        <Col :sm='{span:6,offset:4}'>
          <div style="background:#ccc">col-sm-12</div>
        </Col>
        <Col :md='12'>
          <div style="background:#ccc">col-md-12</div>
        </Col>
      </Row>

      <Row type="flex" justify="space-between">
        <Col :span='2'><div style="background:#ccc">col-span-16</div></Col>
        <Col :span='2'><div style="background:#ccc">col-span-16</div></Col>
        <Col :span='2'><div style="background:#ccc">col-span-16</div></Col>
      </Row>
    </div>
  </div>
</template>
