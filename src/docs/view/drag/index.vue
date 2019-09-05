<template lang="html">
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">Drag 拖拽</h4>
        <p class="page-title-decs">在范围内可拖动的元素</p>
      </div>
    </div>
    <div class="components-button-demo">
    <RelaxTag name="拖拽">
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
          <x-dragGroup style="height: 500px; height: 500px; position:relative; background: #ccc;">
            <x-drag>
              <div style="width: 40px; height: 40px; background: #000;"></div>
            </x-drag>
            <x-drag>
              <div style="width: 50px; height: 50px; background: blue;"></div>
            </x-drag>
          </x-dragGroup>
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
