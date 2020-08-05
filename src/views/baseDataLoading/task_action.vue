<template>
  <div class="BDLactionWrap taskActionWrap ">

    <action-page-top-title parTitle="任务详情页"></action-page-top-title>

    <div class="tipMsgWrap useSu">
      <div class="imgWrap">
        <img :src="suIconUrl" class="" alt="icon" srcset="">
      </div>
      <div class="contentTipWrap">
        <div class="contentResult">执行成功！</div>
        <div class="contentDetail">此处显示一些必要的日志详情信息</div>
      </div>
    </div>

    <div class="tipMsgWrap useEr">
      <div class="imgWrap">
        <img :src="erIconUrl" class="" alt="icon" srcset="">
      </div>
      <div class="contentTipWrap">
        <div class="contentResult">执行失败！</div>
        <div class="contentDetail">失败原因。如有问题，请联系系统管理员XXX。</div>
      </div>
    </div>

    <div class="tipMsgWrap useWa">
      <div class="imgWrap">
        <img :src="waIconUrl" class="" alt="icon" srcset="">
      </div>
      <div class="contentTipWrap">
        <div class="contentResult">未启动 / 进行中！</div>
        <div class="contentDetail">此处显示需要的一些状态描述</div>
      </div>
    </div>
    <div  class="taskMT30">&nbsp;</div>
    <div class="contentWrapTitle">任务详情列表</div>

    <div class="btnRowCla btnWrapMg">
      <div class="btnRowleft">
        <Select @on-change="querySelChange" v-model="querySelVal" placeholder="数据库" class="baseSelectW150">
          <Option v-for="item in querySelList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Input v-model="queryVal" placeholder="请输入数据库" class="baseInputW200 btnL20" />
        <Button @click="queryTableHandle" type="primary" class="btnL20">查询</Button>
      </div>
      <div class="btnRowright"></div>
    </div>

    <div class="detailTableWrap">
      <div class="detailTotalMsg">
        <div class="msgLeftWrap">
          <div class="msgTitle">执行状况总览</div>
          <div class="msgTotal">
            <span class="eachMsg">成功<span class="succ">12</span>条</span>
            <span class="eachMsg">失败<span class="fail">3</span>条</span>
            <span class="eachMsg">进行中<span class="wor">64</span>条</span>
            <span class="eachMsg">共计<span class="totalResult">79</span>条</span>
          </div>
        </div>
        <div class="msgRightWrap">
          <template v-if="isExpandTable">
            <div @click="expandHandler">
              <Icon size=24 type="ios-arrow-down" />展开
            </div>

          </template>
          <template v-else="isExpandTable">
            <div @click="expandHandler">
              <Icon size=24 type="ios-arrow-up" />收起
            </div>
          </template>
          <!-- {{isExpandTable ? '展开' : '收起'}} -->
        </div>
      </div>
      <div :class="isExpandTable? 'detailTaskActionTableWrap' : 'detailTableWrapHide'">
        <!-- <div class="detailTaskActionTableWrap"> -->
        <div class="tableWrap">
          <div class="tableHead">
            <div class="checkBoxCla">
              <Checkbox :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll"></Checkbox>
            </div>
            <div class="orderCla">序号</div>
            <div class="ruleNameCla">预约名称</div>
            <div class="decsCla">预约描述</div>
            <div class="loadWayCla">物理子系统</div>
            <div class="dbCla">数据批次</div>
            <div class="tableNameCla">流水线</div>
            <div class="dataCla">预约加载时间</div>
            <div class="controlCla">任务状态</div>
            <div class="amendCla">预约人</div>
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
            <div class="controlCla">{{item.control}}</div>
            <div class="amendCla">{{item.amend}}</div>
            <div class="amendTimeCla">{{item.amendTime}}</div>
            <div class="actionBodyCla">
              <span class="tableAuthAction" @click="ediCopytHandler(item,'detail')">详情</span>
              <span class="tableAuthAction" @click="ediCopytHandler(item,'detail')">重新加载</span>
              <span class="tableAuthAction" @click="ediCopytHandler(item,'detail')">日志下载</span>
              <!-- <span class="tableAuthAction" @click="ediCopytHandler(item,'edit')">编辑</span> -->
            </div>
          </div>
        </div>
        <div class="pageWrap">
          <Page :current="curPageNum" :total="totalPages" @on-change="changeCurPage" @on-page-size-change="changeCurSize" show-total show-elevator show-sizer />
        </div>
      </div>
    </div>

<div  class="taskMT30">&nbsp;</div>
    <div class="contentWrapTitle">预约单详情</div>
    <div class="contentWrap" style="paddingTop:0px">

      <div class="title">基础信息</div>
      <div class="detailContentWrap">
        <div class="contentItem">
          <div :class=" curType === 'detail' ? 'subTitle' : 'subTitle validateBeforeSign'">预约名称</div>
          <template v-if="curType === 'detail'">
            <div class="baseInputW75">{{curItem.ruleName}}</div>
          </template>

          <template v-else>
            <Input v-model="curItem.ruleName" placeholder="请输入预约名称" class="baseInputW75" />
            <span class="validateCla">必填</span>
          </template>
        </div>
        <div class="contentItem">
          <div :class=" curType === 'detail' ? 'subTitle' : 'subTitle validateBeforeSign'">预约描述</div>
          <template v-if="curType === 'detail'">
            <div class="baseInputW75">{{curItem.decs}}</div>
          </template>

          <template v-else>
            <Input v-model="curItem.decs" placeholder="请输入预约描述" class="baseInputW75" />
            <span class="validateCla">必填</span>
          </template>
        </div>
        <div class="contentItem">
          <div :class=" curType === 'detail' ? 'subTitle' : 'subTitle validateBeforeSign'">预约人</div>
          <template v-if="curType === 'detail'">
            <div class="baseInputW75">{{curItem.loadWay}}</div>
          </template>

          <template v-else>
            <Select disabled @on-change="selectChangeLoadWay" v-model="curItem.loadWay" class="baseInputW75" placeholder="请输入预约人">
              <Option value="sqlldr">sqlldr</Option>
              <!-- <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option> -->
            </Select>
            <span class="validateCla">{{ curItem.loadWay === '' ? '' : '必填'}}</span>
          </template>
        </div>
      </div>

      <div class="title">预约信息</div>
      <div class="detailContentWrap">
        <div class="contentItem">
          <div :class=" curType === 'detail' ? 'subTitle' : 'subTitle validateBeforeSign'">物理子系统名称</div>
          <template v-if="curType === 'detail'">
            <div class="baseInputW75">{{curItem.db}}</div>
          </template>

          <template v-else>
            <Input v-model="curItem.db" placeholder="请选择物理子系统名称" class="baseInputW75" />
            <span class="validateCla">必填</span>
          </template>
        </div>
        <div class="contentItem">
          <div :class=" curType === 'detail' ? 'subTitle' : 'subTitle validateBeforeSign'">投产批次</div>
          <template v-if="curType === 'detail'">
            <div class="baseInputW75">{{curItem.tableName}}</div>
          </template>

          <template v-else>
            <Select @on-change="selectChangeTableName" v-model="curItem.tableName" placeholder="请选择投产批次" class="baseInputW75">
              <Option value="xxx111">xxx111</Option>
              <Option value="xxx222">xxx222</Option>
              <Option value="xxx333">xxx333</Option>
              <!-- <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option> -->
            </Select>
            <span class="validateCla">{{ curItem.tableName === '' ? '' : '必填'}}</span>
          </template>
        </div>
        <div class="contentItem">
          <div :class=" curType === 'detail' ? 'subTitle' : 'subTitle validateBeforeSign'">流水线</div>
          <template v-if="curType === 'detail'">
            <div class="baseInputW75">{{curItem.data}}</div>
          </template>

          <template v-else>
            <Input v-model="curItem.data" placeholder="请输入流水线" class="baseInputW75" />
            <span class="validateCla">必填</span>
            <!-- <div class="baseInputW75 subTitleDesc">
              支持多个连续文件，多个文件间使用分号(;)分割。如果文件为连续文件，可使用连接符(-)，
              如：abc[1-3].data表示3个文件：abc1.data、abc2.data、abc3.data
            </div> -->
          </template>
        </div>
        <div class="contentItem">
          <div :class=" curType === 'detail' ? 'subTitle' : 'subTitle validateBeforeSign'">预约加载时间</div>
          <template v-if="curType === 'detail'">
            <div class="baseInputW75">{{curItem.control}}</div>
          </template>

          <template v-else>
            <Input v-model="curItem.control" placeholder="请输入预约加载时间" class="baseInputW75" />
            <span class="validateCla">必填</span>
            <!-- <div class="baseInputW75 subTitleDesc">
              支持多个连续文件，多个文件间使用分号(;)分割。如果文件为连续文件，可使用连接符(-)，
              如：abc[1-3].data表示3个文件：abc1.data、abc2.data、abc3.data
            </div> -->
          </template>
        </div>
      </div>

    </div>

    <!-- <template v-if="curType !== 'detail'">
      <div class="btnActionWrap">
        <Button @click="cancelHandle">取消</Button>
        <Button type="primary" @click="saveHandle">保存</Button>
      </div>
    </template> -->

  </div>
</template>

<script>
import suIconUrl from './imgs/successMsg.png'
import waIconUrl from './imgs/warningMsg.png'
import erIconUrl from './imgs/errorMsg.png'
import actionPageTopTitle from './component/action_page_top_title'
export default {
  components: { actionPageTopTitle },
  data() {
    return {
      isExpandTable: true,
      querySelVal: '',
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
      suIconUrl: suIconUrl,
      waIconUrl: waIconUrl,
      erIconUrl: erIconUrl,
      curType: '',
      curItem: {
        id: 10,
        isChecked: false,
        ruleName: 'dgnd',
        decs: 'sdg ',
        loadWay: 'sqlldr',
        db: 'drym',
        tableName: 'tu,,uo.',
        data: 'rykryk',
        control: 'rykryk',
        amend: 'rykr',
        amendTime: 'ryktu',
      },
      checkedArr: [],
      checkAll: false,
      indeterminate: false,
      curPageNum: 1,
      totalPages: 100,
      curPageSize: 10,
      tableData: [
        {
          id: 1,
          isChecked: false,
          ruleName: '规则名称1',
          decs: '规则概述1',
          loadWay: 'sqlldr',
          db: 'xxx111',
          tableName: 'xxx111',
          data: 'abc1.data abc1.data111',
          control: 'XXXXXXX111',
          amend: 'XXXXXXX111',
          amendTime: '2020-07-01 12:09:11111',
        },
        {
          id: 2,
          isChecked: false,
          ruleName: '规则名称2',
          decs: '规则概述2',
          loadWay: 'sqlldr',
          db: 'xxx222',
          tableName: 'xxx222',
          data: 'abc1.data abc1.data222',
          control: 'XXXXXXX222',
          amend: 'XXXXXXX222',
          amendTime: '2020-07-01 12:09:11222',
        },
        {
          id: 3,
          isChecked: false,
          ruleName: '规则名称3',
          decs: '规则概述3',
          loadWay: 'sqlldr',
          db: 'xxx333',
          tableName: 'xxx333',
          data: 'abc1.data abc1.data333',
          control: 'XXXXXXX333',
          amend: 'XXXXXXX333',
          amendTime: '2020-07-01 12:09:11333',
        },
      ],
    }
  },
  created() {
    const { row, type, id } = this.$route.params
    console.log('row, type', row, type, id)

    this.curType = type

    // if (type === 'detail' || type === 'edit') {
    this.curItem = row || this.curItem
    // } else if (type === 'add') {
    //   this.resetRowHandle(this.curItem)
    //   this.curItem.loadWay = 'sqlldr'
    // } else {
    //   // copy
    //   console.log(row, type)
    //   this.curItem = row || this.curItem
    //   this.curItem.ruleName = ''
    //   this.curItem.decs = ''
    // }
  },
  methods: {
    expandHandler() {
      this.isExpandTable = !this.isExpandTable
    },
    ediCopytHandler(row, type) {
      console.log(row, type)
      // this.$router.push({ path: `/taskAction/${type}/${row.id}` }) // 只能用 name

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
    getInitData() {
      console.log('init...')
    },
    queryTableHandle() {
      if (this.querySelVal && this.queryVal) {
        // debounceCom(this.debounceComtest())
        this.$Message.success('查询成功')
        this.getInitData()
      } else {
        this.$Message.warning('请填写完整查询条件')
      }
    },
    querySelChange(val) {
      console.log(val)
      this.querySelVal = val
    },
    resetRowHandle(row) {
      row.id = 0
      row.isChecked = false
      row.ruleName = ''
      row.decs = ''
      row.loadWay = ''
      row.db = ''
      row.tableName = ''
      row.data = ''
      row.control = ''
      row.amend = ''
      row.amendTime = ''
    },
    cancelHandle() {
      this.$Message.warning('取消操作')
      this.backRuleHandler()
      this.resetRowHandle(this.curItem)
    },
    saveHandle() {
      this.$Message.success('保存成功')
      console.log(this.curItem)
      this.backRuleHandler()
      // this.resetRowHandle(this.curItem)
    },
    selectChangeTableName(val) {
      console.log(val)
      this.curItem.tableName = val
    },
    selectChangeLoadWay(val) {
      console.log(val)
      this.curItem.loadWay = val
    },
    backRuleHandler() {
      this.$router.go(-1)
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
  },
}
</script>
<style  scoped lang="less">
@import './styles/table_com.less';
@import './styles/task_action.less';
@import './styles/action_com.less';
</style>
