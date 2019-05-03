<template >
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">x-select 选择器</h4>
        <p class="page-title-decs">下拉选择器</p>
      </div>
    </div>

    <RelaxTag name="单选">
      <template slot="temp">
        <x-select v-model='value1' placeholder="请选择物种">
          <x-option value='蓝天'></x-option>
          <x-option value='白云'></x-option>
          <x-option value='草地'></x-option>
          <x-option value='树木' disabled></x-option>
        </x-select>
        <div class="m-t-sm">选中的值： {{value1}}</div>
      </template>
      <template slot="desc">
        <i>v-model</i>的值为当前被选中的<i>x-option</i>的 value 属性值
      </template>
      <textarea slot="code">
        <template>
          <x-select v-model='value1' placeholder="请选择物种">
            <x-option value='蓝天'></x-option>
            <x-option value='白云'></x-option>
            <x-option value='草地'></x-option>
            <x-option value='树木' disabled></x-option>
          </x-select>
        </template>

        <script>
        export default {
          data () {
            return {
              value1: ''
            }
          }
        }
        </script>
      </textarea>
    </RelaxTag>
    <RelaxTag name="多选">
      <template slot="temp">
        <x-select v-model='value2' multiple placeholder="请选择人种">
          <x-option value='中华人中华人中华人中华人'></x-option>
          <x-option value='法国人'></x-option>
          <x-option value='赛亚人'></x-option>
          <x-option value='火星人' disabled></x-option>
        </x-select>
        <div class="m-t-sm">选中的值： {{value2}}</div>
      </template>
      <template slot="desc">
        添加<i>multiple</i>属性将开启多选 <i>v-model</i>返回一个数组
      </template>
      <textarea slot="code">
        <template>
          <x-select v-model='value2' multiple placeholder="请选择人种">
            <x-option value='中华人中华人中华人中华人'></x-option>
            <x-option value='法国人'></x-option>
            <x-option value='赛亚人'></x-option>
            <x-option value='火星人' disabled></x-option>
          </x-select>
        </template>

        <script>
        export default {
          data () {
            return {
              value2: ''
            }
          }
        }
        </script>
      </textarea>
    </RelaxTag>
    <RelaxTag name="分组多选">
      <template slot="temp">
        <x-select v-model='value3' multiple placeholder="请选择颜色">
          <x-optionGroup label="绿色">
            <x-option value='深绿'></x-option>
            <x-option value='淡绿'></x-option>
            <x-option value='草绿'></x-option>
          </x-optionGroup>
          <x-optionGroup label="红色">
            <x-option value='深红'></x-option>
            <x-option value='玫红'></x-option>
            <x-option value='黄色' disabled></x-option>
          </x-optionGroup>
        </x-select>
        <div class="m-t-sm">选中的值： {{value3}}</div>
      </template>
      <template slot="desc">
        添加<i>x-optionGroup</i>标签包裹，可以进行分组
      </template>
      <textarea slot="code">
        <template>
          <x-select v-model='value3' multiple placeholder="请选择颜色">
            <x-optionGroup label="绿色">
              <x-option value='深绿'></x-option>
              <x-option value='淡绿'></x-option>
              <x-option value='草绿'></x-option>
            </x-optionGroup>
            <x-optionGroup label="红色">
              <x-option value='深红'></x-option>
              <x-option value='玫红'></x-option>
              <x-option value='黄色' disabled></x-option>
            </x-optionGroup>
          </x-select>
        </template>

        <script>
        export default {
          data () {
            return {
              value3: ''
            }
          }
        }
        </script>
      </textarea>
    </RelaxTag>
    <RelaxTag name="搜索维度">
      <template slot="temp">
        <x-select v-model='value4' multiple search="x-option" placeholder="请选择颜色">
          <x-optionGroup label="绿色">
            <x-option value='深绿'></x-option>
            <x-option value='淡绿'></x-option>
            <x-option value='草绿'></x-option>
          </x-optionGroup>
          <x-optionGroup label="红色">
            <x-option value='深红'></x-option>
            <x-option value='玫红'></x-option>
            <x-option value='黄色' disabled></x-option>
          </x-optionGroup>
        </x-select>
        <div class="m-t-sm">选中的值： {{value4}}</div>
      </template>
      <template slot="desc">
        添加<i>search</i>属性将开启搜索， <i>search</i>可选值为<i>x-option</i> <i>x-optionGroup</i>，对应搜索的不同维度
      </template>
      <textarea slot="code">
        <template>
          <x-select v-model='value4' multiple search="x-option" placeholder="请选择颜色">
            <x-optionGroup label="绿色">
              <x-option value='深绿'></x-option>
              <x-option value='淡绿'></x-option>
              <x-option value='草绿'></x-option>
            </x-optionGroup>
            <x-optionGroup label="红色">
              <x-option value='深红'></x-option>
              <x-option value='玫红'></x-option>
              <x-option value='黄色' disabled></x-option>
            </x-optionGroup>
          </x-select>
        </template>

        <script>
        export default {
          data () {
            return {
              value4: ''
            }
          }
        }
        </script>
      </textarea>
    </RelaxTag>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: ''
    }
  }
}
</script>
