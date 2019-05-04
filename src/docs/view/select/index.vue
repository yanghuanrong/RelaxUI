<template >
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">Select 选择器</h4>
        <p class="page-title-decs">下拉选择器</p>
      </div>
    </div>
    <div class="components-select-demo">

    <RelaxTag name="单选">
      <template slot="temp">
        <x-select v-model='value1' placeholder="请选择语言">
          <x-option value='Javascript'>Javascript</x-option>
          <x-option value='C++'>C++</x-option>
          <x-option value='PHP' disabled>PHP</x-option>
          <x-option value='Java'>Java</x-option>
        </x-select>

        <x-select placeholder="请选择语言" disabled>
          <x-option value='Javascript'>Javascript</x-option>
          <x-option value='C++'>C++</x-option>
          <x-option value='PHP' disabled>PHP</x-option>
          <x-option value='Java'>Java</x-option>
        </x-select>

        <div class="m-t-sm">选中的值： {{value1}}</div>
      </template>
      <template slot="desc">
        <i>v-model</i>的值为当前被选中的<i>option</i>的 value 属性值
      </template>
      <textarea slot="code">
        <template>
          <x-select v-model='value1' placeholder="请选择语言">
            <x-option value='Javascript'></x-option>
            <x-option value='C++'></x-option>
            <x-option value='PHP' disabled></x-option>
            <x-option value='Java'></x-option>
          </x-select>

          <x-select placeholder="请选择语言" disabled>
            <x-option value='Javascript'>Javascript</x-option>
            <x-option value='C++'>C++</x-option>
            <x-option value='PHP' disabled>PHP</x-option>
            <x-option value='Java'>Java</x-option>
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
        <x-select v-model='value2' multiple placeholder="请选择语言">
          <x-option value='Javascript'></x-option>
          <x-option value='C++'></x-option>
          <x-option value='PHP' disabled></x-option>
          <x-option value='Java'></x-option>
        </x-select>
        <div class="m-t-sm">选中的值： {{value2}}</div>
      </template>
      <template slot="desc">
        添加<i>multiple</i>属性将开启多选 <i>v-model</i>返回一个数组
      </template>
      <textarea slot="code">
        <template>
          <x-select v-model='value2' multiple placeholder="请选择语言">
            <x-option value='Javascript'></x-option>
            <x-option value='C++'></x-option>
            <x-option value='PHP' disabled></x-option>
            <x-option value='Java'></x-option>
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
        <x-select v-model='value3' multiple placeholder="请选择">
          <x-optionGroup label="Javascript">
            <x-option value='JQuery'></x-option>
            <x-option value='Vue'></x-option>
            <x-option value='React'></x-option>
          </x-optionGroup>
          <x-optionGroup label="CSS">
            <x-option value='Less'></x-option>
            <x-option value='Sass'></x-option>
            <x-option value='Scss' disabled></x-option>
          </x-optionGroup>
        </x-select>
        <div class="m-t-sm">选中的值： {{value3}}</div>
      </template>
      <template slot="desc">
        添加<i>x-optionGroup</i>标签包裹，可以进行分组
      </template>
      <textarea slot="code">
        <template>
          <x-select v-model='value3' multiple placeholder="请选择">
            <x-optionGroup label="Javascript">
              <x-option value='JQuery'></x-option>
              <x-option value='Vue'></x-option>
              <x-option value='React'></x-option>
            </x-optionGroup>
            <x-optionGroup label="CSS">
              <x-option value='Less'></x-option>
              <x-option value='Sass'></x-option>
              <x-option value='Scss' disabled></x-option>
            </x-optionGroup>
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
        <x-select v-model='value4' multiple search="option" placeholder="请选择">
          <x-optionGroup label="Javascript">
            <x-option value='JQuery'></x-option>
            <x-option value='Vue'></x-option>
            <x-option value='React'></x-option>
          </x-optionGroup>
          <x-optionGroup label="CSS">
            <x-option value='Less'></x-option>
            <x-option value='Sass'></x-option>
            <x-option value='Scss' disabled></x-option>
          </x-optionGroup>
        </x-select>
        <div class="m-t-sm">选中的值： {{value4}}</div>
      </template>
      <template slot="desc">
        添加<i>search</i>属性将开启搜索， <i>search</i>可选值为<i>option</i> <i>optionGroup</i>，对应搜索的不同维度 <br>
      </template>
      <textarea slot="code">
        <template>
          <x-select v-model='value4' multiple search="option" placeholder="请选择颜色">
            <x-optionGroup label="Javascript">
              <x-option value='JQuery'></x-option>
              <x-option value='Vue'></x-option>
              <x-option value='React'></x-option>
            </x-optionGroup>
            <x-optionGroup label="CSS">
              <x-option value='Less'></x-option>
              <x-option value='Sass'></x-option>
              <x-option value='Scss' disabled></x-option>
            </x-optionGroup>
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

    <RelaxTag name="不同尺寸">
      <template slot="temp">
        <x-select placeholder="请选择语言" size="sm">
          <x-option value='Javascript'></x-option>
          <x-option value='C++'></x-option>
          <x-option value='PHP' disabled></x-option>
          <x-option value='Java'></x-option>
        </x-select>
        <x-select placeholder="请选择语言" size="md">
          <x-option value='Javascript'></x-option>
          <x-option value='C++'></x-option>
          <x-option value='PHP' disabled></x-option>
          <x-option value='Java'></x-option>
        </x-select>
        <x-select placeholder="请选择语言" size="lg">
          <x-option value='Javascript'></x-option>
          <x-option value='C++'></x-option>
          <x-option value='PHP' disabled></x-option>
          <x-option value='Java'></x-option>
        </x-select>
      </template>
      <template slot="desc">
        按钮根据<i>size</i>来变换尺寸，提供了<i>sm</i><i>md</i><i>lg</i>和默认的三种
      </template>
      <textarea slot="code">
        <template>
          <x-select v-model='value2' multiple placeholder="请选择语言">
            <x-option value='Javascript'></x-option>
            <x-option value='C++'></x-option>
            <x-option value='PHP' disabled></x-option>
            <x-option value='Java'></x-option>
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
  </div>
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
