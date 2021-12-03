<template>
  <div :class="['x-table']">
    <table>
      <colgroup>
        <col v-for="item in columns" :style="style(item)" :key="item.name" :width="item.witdh">
      </colgroup>
      <thead>
        <tr>
          <th v-for="item in columns" :key="item.name">{{item.title}}</th>
        </tr>
      </thead>
      <tbody class="content">
        <tr v-for="(item) in list" :key="item.name">
          <td v-for="(i) in columns" :key="i.name">
            
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
