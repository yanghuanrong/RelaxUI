<template >
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">Grid 栅格</h4>
        <p class="page-title-decs">24 栅格系统</p>
      </div>
    </div>
    <div class="card-box">
      <x-row :gutter='20'>
        <x-col :span='16' :offset='4'>
          <div style="background:#ccc">x-col-span-16</div>
        </x-col>
        <x-col :span='12' :offset='4'>
          <div style="background:#ccc">x-col-span-12</div>
        </x-col>
        <x-col :xl='6' :sm='5' :md='7'>
          <div style="background:#ccc">x-col-xl-12,x-col-sm-5,x-col-md-7</div>
        </x-col>
        <x-col :sm='{span:6,offset:4}'>
          <div style="background:#ccc">x-col-sm-12</div>
        </x-col>
        <x-col :md='12'>
          <div style="background:#ccc">x-col-md-12</div>
        </x-col>
      </x-row>

      <x-row type="flex" justify="space-between">
        <x-col :span='2'><div style="background:#ccc">x-col-span-16</div></x-col>
        <x-col :span='2'><div style="background:#ccc">x-col-span-16</div></x-col>
        <x-col :span='2'><div style="background:#ccc">x-col-span-16</div></x-col>
      </x-row>
    </div>
  </div>
</template>
