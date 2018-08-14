<template lang="html">
  <div class="">
    <re-row :gutter='20'>
      <re-col :span='16' :offset='4'>
        <div style="background:#ccc">col-span-16</div>
      </re-col>
      <re-col :span='12' :offset='4'>
        <div style="background:#ccc">col-span-12</div>
      </re-col>
      <re-col :xl='6' :sm='5' :md='7'>
        <div style="background:#ccc">col-xl-12,col-sm-5,col-md-7</div>
      </re-col>
      <re-col :sm='{span:6,offset:4}'>
        <div style="background:#ccc">col-sm-12</div>
      </re-col>
      <re-col :md='12'>
        <div style="background:#ccc">col-md-12</div>
      </re-col>
    </re-row>

    <re-row type="flex" justify="space-between">
      <re-col :span='2'><div style="background:#ccc">col-span-16</div></re-col>
      <re-col :span='2'><div style="background:#ccc">col-span-16</div></re-col>
      <re-col :span='2'><div style="background:#ccc">col-span-16</div></re-col>
    </re-row>
  </div>
</template>

<script>
export default {
}
</script>
