<template lang="html">
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">Buttons 按钮</h4>
        <p class="page-title-decs">按钮用于开始一个即时操作</p>
      </div>
    </div>
    <div class="components-button-demo">
    <RelaxTag name="基础按钮">
      <template slot="temp">
          <x-dragGroup style="height: 500px; height: 500px; position:relative; background: #ccc;">
            <x-drag>
              <div style="width: 40px; height: 40px; background: #000;"></div>
            </x-drag>
            <x-drag>
              <div style="width: 50px; height: 50px; background: blue;"></div>
            </x-drag>
          </x-dragGroup>
      </template>
      <template slot="desc">
        
      </template>
      <textarea slot="code">
        <template>
          <x-button>default</x-button>
          <x-button type='primary'>primary</x-button>
          <x-button type='success'>success</x-button>
          <x-button type='info'>info</x-button>
          <x-button type='danger'>danger</x-button>
          <x-button type='danger'>danger</x-button>
          <x-button type='warning'>warning</x-button>
        </template>
      </textarea>
    </RelaxTag>
</div>
</div>
  
</template>

<script>

</script>

<style lang="css" scoped>
</style>
