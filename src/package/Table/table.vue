<template>
  <div :class="['x-table']">
    <table>
      <colgroup>
        <col v-for="item in columns" :key="item.dataIndex">
      </colgroup>
      <thead>
        <tr>
          <th v-for="item in columns" :key="item.dataIndex">{{item.title}}</th>
        </tr>
      </thead>
      <tbody class="content">
        <tr v-for="(item) in list" :key="item.key">
          <td v-for="(i) in columns" :key="i.dataIndex">
            <div>
              <slot v-if="i.slot" :name="i.slot" :record="item" :keyName="i.dataIndex"></slot>
              <template v-else>{{ item[i.dataIndex] }}</template>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "xTable",
  props: {
    list: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    }
  },
  data(){
    return {
    }
  },
  methods: {
  },
  render(){

  }
}
</script>
