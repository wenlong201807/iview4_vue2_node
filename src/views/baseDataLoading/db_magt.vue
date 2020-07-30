<template>
  <div class="dbMageWrap">
    <Docs></Docs>
    <div class="titleWrap">
      <span class="title">{{changeTitle}}</span>
      <span class="changeCla"><img :src="changeIconUrl" class="" alt="icon" srcset=""></span>
      <span @click="systemLimitHandler" class="limitCla">+ 新增系统权限</span>
      <span @click="otherSystemLimitHandler" class="limitRightCla">+ 其他组件空间权限申请</span>
    </div>
    <div class="btnRowCla">
      <div class="btnRowleft">
        <Button type="primary" class="btnR20" @click="addRulHandler">
          <Icon class="iconBRM" type="md-add" />新增数据库</Button>
        <Button type="error" class="btnR20" @click="delHadler">删除</Button>
        <Button @click="inportHandler" type="primary" class="btnR20">
          导出</Button>

      </div>
      <div class="btnRowright">
        <Select @on-change="querySelChange" v-model="querySelVal" placeholder="数据库名称" class="baseSelectW150">
          <Option v-for="item in querySelList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Input v-model="queryVal" placeholder="请输入数据库名称" class="baseInputW200 btnL20" />
        <Button @click="queryTableHandle" type="primary" class="btnL20">查询</Button>
      </div>

    </div>
    <div class="tableWrap">
      <div class="tableHead">
        <div class="checkBoxCla">
          <Checkbox :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll"></Checkbox>
        </div>
        <div class="orderCla">序号</div>
        <div class="ruleNameCla">数据库名称</div>
        <div class="decsCla">云类型</div>
        <div class="loadWayCla">流水线环境</div>
        <div class="dbCla">数据库连接串</div>
        <div class="tableNameCla">用户名</div>
        <div class="dataCla">密码</div>
        <!-- <div class="controlCla">{{item.control}}</div> -->
        <div class="amendCla">修改人</div>
        <div class="amendTimeCla">修改时间</div>
        <div class="actionHeadCla">操作</div>
      </div>
      <div class="tablebody" v-for="(item,index) in tableData" :key="item.id">
        <div class="checkBoxCla">
          <Checkbox v-model="item.isChecked" @on-change="changeItemCheckBox(item.id,item.isChecked)"></Checkbox>
        </div>
        <div class="orderCla">{{item.id}}</div>
        <div class="ruleNameCla ruleNameDetailCla" @click="ediCopytHandler(item,'detail')">{{item.ruleName}}</div>
        <div class="decsCla">{{item.decs}}</div>
        <div class="loadWayCla">{{item.loadWay}}</div>
        <div class="dbCla">{{item.db}}</div>
        <div class="tableNameCla">{{item.tableName}}</div>
        <div class="dataCla">{{item.data}}</div>
        <!-- <div class="controlCla">{{item.control}}</div> -->
        <div class="amendCla">{{item.amend}}</div>
        <div class="amendTimeCla">{{item.amendTime}}</div>
        <div class="actionBodyCla">
          <span class="tableAuthAction" @click="ediCopytHandler(item,'detail')">详情</span>
          <span class="tableAuthAction" @click="ediCopytHandler(item,'edit')">编辑</span>
          <span class="tableAuthAction" @click="ediCopytHandler(item,'copy')">密码设置</span>
          <span class="tableAuthAction" @click="ediCopytHandler(item,'copy')">密码连接</span>
        </div>
      </div>
    </div>
    <div class="pageWrap">
      <Page :current="curPageNum" :total="totalPages" @on-change="changeCurPage" @on-page-size-change="changeCurSize" show-total show-elevator show-sizer />
    </div>

  </div>
</template>

<script>
import { debounceCom, testCom } from './utils/com_fn'
import Docs from './component/docs'
import downloadIconUrl from './imgs/dwonloadIcon.png'
import changeIconUrl from './imgs/changeIcon.png'
export default {
  components: { Docs },
  data() {
    return {
      changeTitle: '物理子系统名称 N-IMAN',
      checkedArr: [],
      checkAll: false,
      indeterminate: false,
      curPageNum: 1,
      totalPages: 100,
      curPageSize: 10,

      downloadIconUrl: downloadIconUrl,
      changeIconUrl: changeIconUrl,
      queryVal: '',
      querySelList: [
        {
          value: 'db1',
          label: '数据库1',
        },
        {
          value: 'db2',
          label: '数据库2',
        },
      ],
      querySelVal: 'db1',
      tableData: [
        {
          id: 1,
          isChecked: false,
          ruleName: 'user_info1',
          decs: '标准区1',
          loadWay: 'sqlldr',
          db: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          tableName: 'XXX11',
          data: 'abc1.data abc1.data111',
          control: 'XXX111',
          amend: 'XXXX111',
          amendTime: '2020-07-01 12:09:11111',
        },
        {
          id: 2,
          isChecked: false,
          ruleName: 'user_i222',
          decs: '222',
          loadWay: 'sqlldr',
          db: 'xxx222xxxx',
          tableName: 'XXXXXX222',
          data: 'abc1.data abc1.dat222',
          control: 'XXX222',
          amend: 'XXX222',
          amendTime: '2020-07-01 12:09:1222',
        },
        {
          id: 3,
          isChecked: false,
          ruleName: 'user_in3333',
          decs: '标3333',
          loadWay: 'sqlldr',
          db: 'xxx3333xxxxx',
          tableName: 'XXXX3333',
          data: 'abc1.data abc1.data3333',
          control: 'XXX3333',
          amend: 'XXXX3333',
          amendTime: '2020-07-01 12:09:113333',
        },

      ],
    }
  },
  created() {
    this.getInitData()
  },
  methods: {
    inportHandler() {
      this.$Message.info('导入待定。。')
    },
    systemLimitHandler() {
      this.$Message.info('系统权限待定。。')
    },
    otherSystemLimitHandler() {
      this.$Message.info('other系统权限待定。。')
    },
    debounceComtest() {
      this.$Message.success('测试连续点击时的控制')
    },
    getInitData() {
      console.log('init...')
    },
    delHadler() {
      if (this.checkedArr.length) {
        this.$Modal.confirm({
          title: '删除前友情提示',
          content: '<p>确认要删除吗？</p>',
          onOk: () => {
            this.$Message.info('Clicked ok')
            this.checkedArr = []
            this.checkAll = false
            this.indeterminate = false
            this.getInitData()
          },
          onCancel: () => {
            this.$Message.info('Clicked cancel')
          },
        })
      } else {
        this.$Message.warning('请先勾选您要删除的数据')
      }
    },
    queryTableHandle() {
      testCom()
      if (this.querySelVal && this.queryVal) {
        // debounceCom(this.debounceComtest())
        this.$Message.success('查询成功')
        this.getInitData()
      } else {
        this.$Message.warning('请填写完整查询条件')
      }
    },
    changeItemCheckBox(id, isChecked) {
      console.log(id, isChecked)
      if (isChecked) {
        this.checkedArr.push(id)
      } else {
        let index = this.checkedArr.findIndex(ind => ind === id)
        index > -1 && this.checkedArr.splice(index, 1)
      }
      let tableLen = this.tableData.length
      let checkedArrLen = this.checkedArr.length
      this.checkAll = checkedArrLen === tableLen
      this.indeterminate = this.checkAll ? false : checkedArrLen !== 0
    },
    handleCheckAll() {
      if (this.indeterminate) {
        this.checkAll = false
      } else {
        this.checkAll = !this.checkAll
      }
      this.indeterminate = false

      if (this.checkAll) {
        this.tableData.forEach(item => {
          item.isChecked = true
          this.checkedArr.push(item.id)
        })
      } else {
        this.checkedArr = []
        this.tableData.forEach(item => {
          item.isChecked = false
        })
      }
    },
    ediCopytHandler(row, type) {
      console.log(row, type)
      this.$router.push({ name: 'ruleAddAmend', params: { row, type } }) // 只能用 name
    },
    addRulHandler() {
      this.$router.push({ name: 'ruleAddAmend', params: { type: 'add' } }) // 只能用 name
      // script 取参 this.$route.params.id
    },
    querySelChange(val) {
      console.log(val)
      this.querySelVal = val
    },
    changeCurPage(pageNum) {
      console.log(pageNum)
      this.curPageNum = pageNum
      this.getInitData()
    },
    changeCurSize(pageSize) {
      this.curPageNum = 1
      console.log(pageSize)
      this.getInitData()
    },
  },
}
</script>

<style  scoped lang="less">
@import './styles/db_magt.less';
</style>
