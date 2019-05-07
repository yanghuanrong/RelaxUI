<template >
  <div>
    <div class="topbar">
      <div class="topbar">
        <div class="page-title-box">
          <h4 class="page-title">Checkbox 多选框</h4>
          <p class="page-title-decs">多选框</p>
        </div>
      </div>
    </div>
    <div class="components-select-demo">
      <RelaxTag name="基本用法">
        <template slot="temp">
          <x-checkbox v-model="checked" label="Checkbox"/>
        </template>
        <template slot="desc">最简单的使用</template>
        <textarea slot="code">
        <template>
          <x-checkbox v-model="checked" label="Checkbox"/>
        </template>

        <script>
          export default {
            data() {
              return {
                checked: false
              };
            },
          };
          </script>
      </textarea>
      </RelaxTag>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      checked: false
    };
  },
};
</script>
