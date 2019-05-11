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

      <RelaxTag name="禁用">
        <template slot="temp">
          <x-checkbox label="Checkbox" disabled/>       
        </template>
        <template slot="desc">添加disabled属性 禁用checkbox </template>
        <textarea slot="code">
        <template>
          <x-checkbox label="Checkbox"/>
        </template>
      </textarea>
      </RelaxTag>

      <RelaxTag name="Checkbox组">
        <template slot="temp">
          <x-checkbox-group v-model="options">
            <x-checkbox label="A">Jack</x-checkbox>
            <x-checkbox label="B">Rick</x-checkbox>
            <x-checkbox label="C">Xinp</x-checkbox>
          </x-checkbox-group>
          <div style="margin-top:5px;">
            选中的值：{{options}}
          </div>
        </template>
        <template slot="desc">使用CheckboxGroup配合数组来生成组合。在组合使用时，Checkbox 使用 label 来自动判断选中状态。每个 Checkbox 的内容可以自定义，如不填写则默认使用 label 的值。</template>
        <textarea slot="code">
        <template>
          <x-checkbox-group v-model="options">
            <x-checkbox label="A">Jack</x-checkbox>
            <x-checkbox label="B">Rick</x-checkbox>
            <x-checkbox label="C">Xinp</x-checkbox>
          </x-checkbox-group>
        </template>

        <script>
          export default {
            data() {
              return {
                options: ['A']
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
      checked: false,
      options: ['A']
    };
  },
};
</script>
