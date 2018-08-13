<template lang="html">
  <div class="">
    <re-row :gutter='20'>
      <re-col :span='16'>
        <div style="background:#ccc">col-span-16</div>
      </re-col>
      <re-col :span='12'>
        <div style="background:#ccc">col-span-12</div>
      </re-col>
      <re-col :xl='12' :sm='5' :md='7'>
        <div style="background:#ccc">col-xl-12,col-sm-5,col-md-7</div>
      </re-col>
      <re-col :sm='12'>
        <div style="background:#ccc">col-sm-12</div>
      </re-col>
      <re-col :md='12'>
        <div style="background:#ccc">col-md-12</div>
      </re-col>
    </re-row>
    <div style="margin-bottom:30px;">
      <re-button>default</re-button>
      <re-button type='primary'>primary</re-button>
      <re-button type='success'>success</re-button>
      <re-button type='info'>info</re-button>
      <re-button type='danger'>danger</re-button>
      <re-button type='warning'>warning</re-button>
    </div>
    <div style="margin-bottom:30px;">
      <re-button plain>default</re-button>
      <re-button type='primary' plain>primary</re-button>
      <re-button type='success' plain>success</re-button>
      <re-button type='info' plain>info</re-button>
      <re-button type='danger' plain>danger</re-button>
      <re-button type='warning' plain>warning</re-button>
    </div>
    <div style="margin-bottom:30px;">
      <re-button round>default</re-button>
      <re-button type='primary' round>primary</re-button>
      <re-button type='success' round>success</re-button>
      <re-button type='info' round>info</re-button>
      <re-button type='danger' round>danger</re-button>
      <re-button type='warning' round>warning</re-button>
    </div>
    <div style="margin-bottom:30px;">
      <re-button plain round>default</re-button>
      <re-button type='primary' plain round>primary</re-button>
      <re-button type='success' plain round>success</re-button>
      <re-button type='info' plain round>info</re-button>
      <re-button type='danger' plain round>danger</re-button>
      <re-button type='warning' plain round>warning</re-button>
    </div>
    <div style="margin-bottom:30px;">
      <re-button round disabled>default</re-button>
      <re-button type='primary' round disabled>primary</re-button>
      <re-button type='success' round disabled>success</re-button>
      <re-button type='info'  round disabled>info</re-button>
      <re-button type='danger'  round disabled>danger</re-button>
      <re-button type='warning'  round disabled>warning</re-button>
    </div>
    <div style="margin-bottom:30px;">
      <re-button plain round disabled>default</re-button>
      <re-button type='primary' plain round disabled>primary</re-button>
      <re-button type='success' plain round disabled>success</re-button>
      <re-button type='info' plain round disabled>info</re-button>
      <re-button type='danger' plain round disabled>danger</re-button>
      <re-button type='warning' plain round disabled>warning</re-button>
    </div>
    <div style="margin-bottom:30px;">
      <re-button type='primary' size='sm'>small</re-button>
      <re-button type='warning'>normal</re-button>
      <re-button size='lg'>large</re-button>
    </div>
    <div style="margin-bottom:30px;">
      <re-button type='text'>re-button</re-button>
      <re-button type='text' disabled>re-button</re-button>
    </div>
    <div style="margin-bottom:30px;">
      <re-button icon="heart-on" circle></re-button>
      <re-button type="primary" icon="x" circle></re-button>
      <re-button type="info" icon="mic" circle></re-button>
      <re-button type="danger" icon="music" circle></re-button>
      <re-button type="warning" icon="thumbs-down" circle></re-button>
      <re-button type="success" icon="thumbs-up" circle></re-button>
    </div>
    <div style="margin-bottom:30px;">
      <re-button icon="home">default</re-button>
      <re-button type="primary" icon='star-on'>primary</re-button>
      <re-button type='success' icon='search'>success</re-button>
      <re-button type='info' icon="user">info</re-button>
      <re-button type='danger' icon="zap">danger</re-button>
      <re-button type='warning' icon="triangle">warning</re-button>
    </div>
    <div style="margin-bottom:30px;">
      <div style="width:200px; margin:0 auto">
        <re-button block>default</re-button>
        <re-button type='primary' block>primary</re-button>
        <re-button type='success' block>success</re-button>
        <re-button type='info' block>info</re-button>
        <re-button type='danger' block>danger</re-button>
        <re-button type='warning' block>warning</re-button>
      </div>
    </div>
    <div style="margin-bottom:30px;">
      <re-button-group>
        <re-button>primary</re-button>
        <re-button>success</re-button>
        <re-button>info</re-button>
      </re-button-group>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
