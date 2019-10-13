<style lang="css" scoped>
</style>

<template>
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">Calendar 日历</h4>
        <p class="page-title-decs">按照日历形式展示数据的容器。</p>
      </div>
    </div>
    <RelaxTag name="基础效果">
      <template slot="temp">
        <x-calendar v-model="value">
          <template v-slot="{date, data}">
            <p v-if="data.day === '2019-10-31'" style="color:green">生日</p>
            <p v-if="date === 15" style="color:red">月中旬</p>
          </template>
        </x-calendar>
      </template>
      <template slot="desc">
        <p>选择的值：{{value?value:'暂时没有选择日期'}}</p>
      </template>
      <textarea slot="code">
                <template>
                    <x-calendar>
                        <template v-slot='{date, data}'>
                            <p v-if="data.day === '2019-10-31'" style="color:green">生日</p>
                            <p v-if="date === 15" style="color:red">月中旬</p>
                        </template>
                    </x-calendar>
                </template>
                <script>
                    
                </script>
            </textarea>
    </RelaxTag>

    <div class="relax-document">
      <div class="document-title">
        <h4>Attributes</h4>
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
            <td>value / v-model</td>
            <td>绑定值</td>
            <td>string</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <div class="document-title">
        <h4>dateCell scoped slot 参数</h4>
      </div>
      <table class="document-event">
        <thead>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
        </thead>
        <tbody>
          <tr>
            <td>date</td>
            <td>单元格代表的日期</td>
            <td>string</td>
          </tr>
          <tr>
            <td>data</td>
            <td>
              {day, holiday, lunar ,week}
              <br />day 是格式化的日期，格式为 yyyy-MM-dd
              <br />holiday 是节日
              <br />lunar 是农历
              <br />week 是当前所属的星期
            </td>
            <td>object</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>

