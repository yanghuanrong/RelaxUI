<template lang="html">
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">Table 表格</h4>
        <p class="page-title-decs">表格用来展示批量列表数据</p>
      </div>
    </div>
    <div class="components-table-demo">
      <RelaxTag name="用法">
        <template slot="temp">
          <xTable :columns="columns" :list="list">
            <a slot="name" slot-scope="{ record, keyName }">
              {{ record[keyName] }}
            </a>
            <x-button slot="button" slot-scope="{ record, keyName }" @click="actionClick(record)">{{record.name}}</x-button>
          </xTable>
        </template>
        <template slot="desc">
          <div>通过设置<i>columns</i>自定义表格，根据<i>columns</i>中的<i>slot</i>属性来对应<i>xTable</i>使用过程中插入的slot</div>
        </template>
        <textarea slot="code">
          暂无演示
        </textarea>
      </RelaxTag>
    </div>
    <div class="relax-document">
      <div class="document-title">
        <h4>columns API</h4>
      </div>
      <table class="document-api">
        <thead>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </thead>
        <tbody>
          <tr>
            <td>dataIndex</td>
            <td>设置当前项的获取key值，也用来绑定vue key</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>title</td>
            <td>当前项标题</td>
            <td>string</td>
            <td>必填</td>
          </tr>
          <tr>
            <td>slot</td>
            <td>设置当前项需要使用的slot类型，该类型可以自定义选择通过从xTable插入的任意slot类型，如果没有展示默认样式</td>
            <td>string</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [{
        dataIndex: 'name',
        slot: 'name',
        title: '姓名'
      }, {
        dataIndex: 'age',
        title: '年龄'
      }, {
        dataIndex: 'address',
        title: '地址'
      }, {
        dataIndex: 'action',
        slot: 'button',
        title: '操作'
      }],
      list: [
        {
          key: '1',
          name: '张三',
          age: 28,
          address: '上海陆家嘴某写字楼11楼24号上海陆家嘴某写字楼11楼24号'
        },
        {
          key: '2',
          name: '李四',
          age: 17,
          address: '北京天安门幸福小区44号'
        },
        {
          key: '3',
          name: '王五',
          age: 88,
          address: '深圳鹅厂总部11楼'
        },
      ]
    }
  },
  methods: {
    actionClick(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
