<template>
  <div>
    <h6 class="page-title">通道报表</h6>
    <div class="card m-b-lg">
      <el-form v-model="option" :inline="true" label-position="top" style="overflow:hidden">
        <el-form-item label="分组展示" class="group-display">
          <el-checkbox-group v-model="columns">
            <!-- <el-checkbox label="paySourceName">通道分组</el-checkbox> -->
            <el-checkbox label="affName">渠道分组</el-checkbox>
            <el-checkbox label="productName">产品分组</el-checkbox>
            <el-checkbox label="date">按天分组</el-checkbox>
            <el-checkbox label="month">按月分组</el-checkbox>
            <!-- <el-checkbox label="country">按国家分组</el-checkbox> -->
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="国家列表">
          <el-select v-model="option.country" multiple collapse-tags placeholder="请选择">
            <el-option v-for="(item, index) in countryOption" :key="index" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="渠道列表">
          <el-select v-model="option.affiliateIds" multiple collapse-tags placeholder="请选择">
            <el-option v-for="item in affiliateIdsOption" :key="item.id" :label="item.companyInfo" :value="item.id">
              <div style="float: left">
                [{{item.id}}] {{item.companyInfo}}
                <span class="option-tips">{{item.company}}</span>
              </div>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="通道列表">
          <el-select v-model="option.paySourceIds" multiple collapse-tags placeholder="请选择">
            <el-option v-for="item in paySourceIdsOption" :key="item.id" :label="item.sourceName" :value="item.id">
              <div style="float: left">
                [{{item.id}}] {{item.sourceName}}
              </div>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品列表">
          <el-select v-model="option.productIds" multiple collapse-tags placeholder="请选择">
            <el-option v-for="item in cpidsOption" :key="item.id" :label="item.productName" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期">
          <el-date-picker v-model="date" type="daterange" unlink-panels range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions" value-format="yyyy-MM-dd"></el-date-picker>
        </el-form-item>

        <el-form-item style="padding-top:50px; float:right">
          <el-button type="primary" @click="searchData" round>查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-tabs v-model="activeTab">
      <el-tab-pane label="通道订阅表" name="Subscribe">
        <el-table stripe :data="subscribe.tableData" border class="table" v-loading='subscribe.loading'>
          <el-table-column label="通道Id" prop="paysourceId"></el-table-column>
          <el-table-column label="通道名称" prop="paysourceName"></el-table-column>
          <el-table-column v-for="(item, index) in tableHead" :key="index" :label="item.label" :prop="item.prop"></el-table-column>
          <el-table-column label="国家" prop="country"></el-table-column>
          <el-table-column label="订阅转化率" prop="conversionRate" >
            <template slot-scope="scope">{{ scope.row.conversionRate | percentage }}</template>
          </el-table-column>
          <el-table-column label="总订阅用户数" prop="subUserCount" ></el-table-column>
          <el-table-column label="现存订阅用户" prop="retainUserCount" ></el-table-column>
          <el-table-column label="订阅用户留存比" prop="subRetainUserRate" >
            <template slot-scope="scope">{{ scope.row.subRetainUserRate | percentage }}</template>
          </el-table-column>
          <el-table-column label="退订订阅用户数" prop="unsubUserCount" ></el-table-column>
          <el-table-column label="订阅用户退订比例" prop="unsubRate" >
            <template slot-scope="scope">{{ scope.row.unsubRate | percentage }}</template>
          </el-table-column>
          <el-table-column label="总付费用户数" prop="payUserCount" ></el-table-column>
          <el-table-column label="用户付费比" prop="userPayRate" >
            <template slot-scope="scope">{{ scope.row.userPayRate | percentage }}</template>
          </el-table-column>
          <el-table-column label="现存付费用户数" prop="existingPayUserCount" ></el-table-column>
          <el-table-column label="现存用户付费比" prop="existingPayUserRate" >
            <template slot-scope="scope">{{ scope.row.existingPayUserRate | percentage }}</template>
          </el-table-column>
          <el-table-column label="计费成功率" prop="paySuccessRate" >
            <template slot-scope="scope">{{ scope.row.paySuccessRate | percentage }}</template>
          </el-table-column>
          <el-table-column label="分成比例" prop="deuceRate" >
            <template slot-scope="scope">{{ scope.row.deuceRate | percentage }}</template>
          </el-table-column>
          <el-table-column label="用户ARPU" prop="userArpu" >
          </el-table-column>
          <el-table-column label="用户ARPPU" prop="userArppu" >
          </el-table-column>
          <el-table-column label="用户CPA" prop="userCpa" >
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            prev-text="上一页"
            next-text="下一页"
            @current-change="subscribeChange"
            :current-page="subscribe.page"
            :page-count="subscribe.tablePage.page"
            :page-size="subscribe.tablePage.pageSize"
            :total="subscribe.tablePage.total">
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="通道包月表" name="Month">
        <el-table stripe :data="month.tableData" border class="table" v-loading='month.loading'>
          <el-table-column label="通道Id" prop="paysourceId"></el-table-column>
          <el-table-column label="通道名称" prop="paysourceName"></el-table-column>
          <el-table-column v-for="(item, index) in tableHead" :key="index" :label="item.label" :prop="item.prop"></el-table-column>
          <el-table-column label="国家" prop="country"></el-table-column>
          <el-table-column label="现存订阅用户" prop="retainUserCount" ></el-table-column>
          <el-table-column label="订阅用户留存比" prop="subRetainUserRate" >
            <template slot-scope="scope">{{ scope.row.subRetainUserRate | percentage }}</template>
          </el-table-column>
          <el-table-column label="退订订阅用户数" prop="unsubUserCount" ></el-table-column>
          <el-table-column label="订阅用户退订比例" prop="unsubRate" >
            <template slot-scope="scope">{{ scope.row.unsubRate | percentage }}</template>
          </el-table-column>
          <el-table-column label="总付费用户数" prop="payUserCount" ></el-table-column>
          <el-table-column label="用户付费比" prop="userPayRate" >
            <template slot-scope="scope">{{ scope.row.userPayRate | percentage }}</template>
          </el-table-column>
          <el-table-column label="现存付费用户数" prop="existingPayUserCount" ></el-table-column>
          <el-table-column label="现存用户付费比" prop="existingPayUserRate" >
            <template slot-scope="scope">{{ scope.row.existingPayUserRate | percentage }}</template>
          </el-table-column>
          <el-table-column label="计费成功率" prop="paySuccessRate" >
            <template slot-scope="scope">{{ scope.row.paySuccessRate | percentage }}</template>
          </el-table-column>
          <el-table-column label="分成比例" prop="deuceRate" >
            <template slot-scope="scope">{{ scope.row.deuceRate | percentage }}</template>
          </el-table-column>
          <el-table-column label="用户ARPU" prop="userArpu" >
          </el-table-column>
          <el-table-column label="用户ARPPU" prop="userArppu" >
          </el-table-column>
          <el-table-column label="用户CPA" prop="userCpa" >
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            prev-text="上一页"
            next-text="下一页"
            @current-change="monthChange"
            :current-page="month.page"
            :page-size="month.tablePage.pageSize"
            :page-count="month.tablePage.page"
            :total="month.tablePage.total">
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="通道点播表" name="Iod">
        <el-table stripe :data="iod.tableData" border class="table" v-loading='iod.loading'>
          <el-table-column label="通道Id" prop="paysourceId"></el-table-column>
          <el-table-column label="通道名称" prop="paysourceName"></el-table-column>
          <el-table-column v-for="(item, index) in tableHead" :key="index" :label="item.label" :prop="item.prop"></el-table-column>
          <el-table-column label="日均用户数" prop="avgSubUserCount" ></el-table-column>
          <el-table-column label="点播转化率" prop="conversionRate" ></el-table-column>
          <el-table-column label="分成比例" prop="deuceRate" >
            <template slot-scope="scope">{{ scope.row.deuceRate | percentage }}</template>
          </el-table-column>
          <el-table-column label="用户ARPU" prop="userArpu" >
          </el-table-column>
          <el-table-column label="用户ARPPU" prop="userArppu" >
          </el-table-column>
          <el-table-column label="用户CPA" prop="userCpa" >
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            prev-text="上一页"
            next-text="下一页"
            @current-change="iodChange"
            :current-page="iod.page"
            :page-count="iod.tablePage.page"
            :page-size="iod.tablePage.pageSize"
            :total="iod.tablePage.total">
          </el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
import {datePicker} from './option'

export default {
  data () {
    return {
      activeTab: 'Subscribe',
      option: {
        paySourceIds: [],
        affiliateIds: [],
        productIds: [],
        country: [],
        columns: [],
        sorting: '',
        page: 1
      },
      columns: [],
      paySourceIdsOption: [],
      affiliateIdsOption: [],
      cpidsOption: [],
      countryOption: [],
      date: '',
      pickerOptions: datePicker,
      orderType: ['Month', 'Iod', 'Subscribe'],
      tableHead: [],
      iod: {
        tableData: [],
        tablePage: {},
        loading: false,
        page: 1
      },
      month: {
        tableData: [],
        tablePage: {},
        loading: false,
        page: 1
      },
      subscribe: {
        tableData: [],
        tablePage: {},
        loading: false,
        page: 1
      }
    }
  },
  created () {
    this.$store.dispatch('getPaySource').then(({data}) => {
      this.paySourceIdsOption = data
    })
    this.$store.dispatch('getAffiliate').then(({data}) => {
      this.affiliateIdsOption = data
    })
    this.$store.dispatch('getCpid').then(({data}) => {
      this.cpidsOption = data
    })
    this.$store.dispatch('getCountry').then(({data}) => {
      this.countryOption = data
    })
  },
  methods: {
    searchData () {
      this.option.columns = this.columns
      if (this.date && this.date !== '') {
        this.option.startTime = this.date[0]
        this.option.endTime = this.date[1]
      } else {
        this.$message('请选择日期')
        return
      }
      let isDate = true
      this.tableHead = []
      this.option.columns.map(item => {
        if (item === 'date' || item === 'month') {
          if (isDate) {
            isDate = false
            let item = {label: '日期', prop: 'date'}
            this.tableHead.unshift(item)
          }
        }
        if (item === 'affName') {
          let item = {label: '渠道', prop: 'affName'}
          this.tableHead.push(item)
        }
        if (item === 'productName') {
          let item = {label: '产品', prop: 'productName'}
          this.tableHead.push(item)
        }
      })
      this.getIodData(Object.assign({}, this.option))
      this.getMonthData(Object.assign({}, this.option))
      this.getSubscribeData(Object.assign({}, this.option))
    },
    getIodData (option) {
      this.iod.loading = true
      option.page = this.iod.page
      this.$store.dispatch('paySourceIod', option).then(({data, page, total}) => {
        this.iod.tableData = data
        this.iod.tablePage = page
        this.iod.loading = false
        console.log(data, page, total)
      })
    },
    getMonthData (option) {
      this.month.loading = true
      option.page = this.month.page
      this.$store.dispatch('paySourceMonth', option).then(({data, page, total}) => {
        this.month.tableData = data
        this.month.tablePage = page
        this.month.loading = false
        console.log(data, page, total)
      })
    },
    getSubscribeData (option) {
      this.subscribe.loading = true
      option.page = this.subscribe.page
      this.$store.dispatch('paySourceSubscribe', option).then(({data, page, total}) => {
        this.subscribe.tableData = data
        this.subscribe.tablePage = page
        this.subscribe.loading = false
      })
    },
    iodChange (val) {
      this.iod.page = val
      this.getIodData(this.option)
    },
    monthChange (val) {
      this.month.page = val
      this.getIodData(this.option)
    },
    subscribeChange (val) {
      this.subscribe.page = val
      this.getIodData(this.option)
    }
  }
}
</script>
