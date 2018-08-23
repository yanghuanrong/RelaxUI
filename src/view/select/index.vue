<template >
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">Select 选择器</h4>
        <p class="page-title-decs">下拉选择器</p>
      </div>
    </div>

    <RelaxTag name="单选">
      <template slot="temp">
        <Select v-model='value1' placeholder="请选择物种">
          <Option value='蓝天'></Option>
          <Option value='白云'></Option>
          <Option value='草地'></Option>
          <Option value='树木' disabled></Option>
        </Select>
        <div class="m-t-sm">选中的值： {{value1}}</div>
      </template>
      <template slot="desc">
        <i>v-model</i>的值为当前被选中的<i>Option</i>的 value 属性值
      </template>
      <textarea slot="code">
        <template>
          <Select v-model='value1' placeholder="请选择物种">
            <Option value='蓝天'></Option>
            <Option value='白云'></Option>
            <Option value='草地'></Option>
            <Option value='树木' disabled></Option>
          </Select>
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
        <Select v-model='value2' multiple placeholder="请选择人种">
          <Option value='中华人中华人中华人中华人'></Option>
          <Option value='法国人'></Option>
          <Option value='赛亚人'></Option>
          <Option value='火星人' disabled></Option>
        </Select>
        <div class="m-t-sm">选中的值： {{value2}}</div>
      </template>
      <template slot="desc">
        添加<i>multiple</i>属性将开启多选 <i>v-model</i>返回一个数组
      </template>
      <textarea slot="code">
        <template>
          <Select v-model='value2' multiple placeholder="请选择人种">
            <Option value='中华人中华人中华人中华人'></Option>
            <Option value='法国人'></Option>
            <Option value='赛亚人'></Option>
            <Option value='火星人' disabled></Option>
          </Select>
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
        <Select v-model='value3' multiple placeholder="请选择颜色">
          <OptionGroup label="绿色">
            <Option value='深绿'></Option>
            <Option value='淡绿'></Option>
            <Option value='草绿'></Option>
          </OptionGroup>
          <OptionGroup label="红色">
            <Option value='深红'></Option>
            <Option value='玫红'></Option>
            <Option value='黄色' disabled></Option>
          </OptionGroup>
        </Select>
        <div class="m-t-sm">选中的值： {{value3}}</div>
      </template>
      <template slot="desc">
        添加<i>OptionGroup</i>标签包裹，可以进行分组
      </template>
      <textarea slot="code">
        <template>
          <Select v-model='value3' multiple placeholder="请选择颜色">
            <OptionGroup label="绿色">
              <Option value='深绿'></Option>
              <Option value='淡绿'></Option>
              <Option value='草绿'></Option>
            </OptionGroup>
            <OptionGroup label="红色">
              <Option value='深红'></Option>
              <Option value='玫红'></Option>
              <Option value='黄色' disabled></Option>
            </OptionGroup>
          </Select>
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
        <Select v-model='value4' multiple search="Option" placeholder="请选择颜色">
          <OptionGroup label="绿色">
            <Option value='深绿'></Option>
            <Option value='淡绿'></Option>
            <Option value='草绿'></Option>
          </OptionGroup>
          <OptionGroup label="红色">
            <Option value='深红'></Option>
            <Option value='玫红'></Option>
            <Option value='黄色' disabled></Option>
          </OptionGroup>
        </Select>
        <div class="m-t-sm">选中的值： {{value4}}</div>
      </template>
      <template slot="desc">
        添加<i>search</i>属性将开启搜索， <i>search</i>可选值为<i>Option</i> <i>OptionGroup</i>，对应搜索的不同维度
      </template>
      <textarea slot="code">
        <template>
          <Select v-model='value4' multiple search="Option" placeholder="请选择颜色">
            <OptionGroup label="绿色">
              <Option value='深绿'></Option>
              <Option value='淡绿'></Option>
              <Option value='草绿'></Option>
            </OptionGroup>
            <OptionGroup label="红色">
              <Option value='深红'></Option>
              <Option value='玫红'></Option>
              <Option value='黄色' disabled></Option>
            </OptionGroup>
          </Select>
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
