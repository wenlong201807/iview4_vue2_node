<template>
  <div class="batchWindowWrap">
    <Docs></Docs>
    <div class="aptMT20"></div>
    <div class="btnRowCla">
      <div class="btnRowleft">
        <Button type="primary" class="btnR20" @click="addRulHandler">
          <Icon class="iconBRM" type="md-add" />新增规则</Button>

      </div>
      <div class="btnRowright">
        <Select @on-change="querySelChange" v-model="querySelVal" placeholder="数据库" class="baseSelectW150">
          <Option v-for="item in querySelList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Input v-model="queryVal" placeholder="请输入数据库" class="baseInputW200 btnL20" />
        <Button @click="queryTableHandle" type="primary" class="btnL20">查询</Button>
      </div>

    </div>
    <div class="tableWrap">
      <div class="tableHead">
        <div class="checkBoxCla">
          <Checkbox :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll"></Checkbox>
        </div>
        <div class="orderCla">序号</div>
        <div class="ruleNameCla">数据批次</div>
        <div class="decsCla">流水线环境</div>
        <div class="loadWayCla">时间窗口</div>
        <!-- <div class="dbCla">数据库</div>
        <div class="tableNameCla">表名</div>
        <div class="dataCla">数据名称</div>
        <div class="controlCla">控制表名称</div> -->
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
        <!-- <div class="dbCla">{{item.db}}</div>
        <div class="tableNameCla">{{item.tableName}}</div>
        <div class="dataCla">{{item.data}}</div>
        <div class="controlCla">{{item.control}}</div> -->
        <div class="amendCla">{{item.amend}}</div>
        <div class="amendTimeCla">{{item.amendTime}}</div>
        <div class="actionBodyCla">
          <span class="tableAuthAction" @click="ediCopytHandler(item,'detail')">详情</span>
          <span class="tableAuthAction" @click="ediCopytHandler(item,'edit')">编辑</span>
        </div>
      </div>
    </div>
    <div class="pageWrap">
      <Page :current="curPageNum" :total="totalPages" @on-change="changeCurPage" @on-page-size-change="changeCurSize" show-total show-elevator show-sizer />
    </div>


     <template v-if="modalAction">
       <div class="selfMask"  @click="ModalcloseHandler"></div>
     </template>


    <div :class="modalAction ? 'modalShow' : 'modalHide'">
      <div class="actionHeadWrap">
        <div class="actionTitleCla">添加串口</div>
        <div>
          <Icon @click="ModalcloseHandler" class="actionIconCla" type="md-close" />
        </div>
      </div>



      <div class="actionBodyWrap">
        <div class="actionContentWrap">
          <div class="actionContentCla">
            <div :class=" curType === 'detail' ? 'subTitle' : 'subTitle validateBeforeSign'">数据批次</div>
            <template v-if="curType === 'detail'">
              <div class="baseInputW75">{{curItem.ruleName}}</div>
            </template>

            <template v-else>
              <Input v-model="curItem.ruleName" placeholder="请选择数据批次" class="baseInputW75" />
              <span class="validateCla">必填</span>
            </template>
          </div>
          <div class="actionContentCla">
            <div :class=" curType === 'detail' ? 'subTitle' : 'subTitle validateBeforeSign'">流水线环境</div>
            <template v-if="curType === 'detail'">
              <div class="baseInputW75">{{curItem.ruleName}}</div>
            </template>

            <template v-else>
              <Input v-model="curItem.ruleName" placeholder="请选择流水线环境" class="baseInputW75" />
              <span class="validateCla">必填</span>
            </template>
          </div>
          <div class="actionContentCla">
            <div :class=" curType === 'detail' ? 'subTitle' : 'subTitle validateBeforeSign'">窗口开始时间</div>
            <template v-if="curType === 'detail'">
              <div class="baseInputW75">{{curItem.ruleName}}</div>
            </template>

            <template v-else>
              <Input v-model="curItem.ruleName" placeholder="请选择窗口开始时间" class="baseInputW75" />
              <span class="validateCla">必填</span>
            </template>
          </div>
          <div class="actionContentCla">
            <div :class=" curType === 'detail' ? 'subTitle' : 'subTitle validateBeforeSign'">窗口结束时间</div>
            <template v-if="curType === 'detail'">
              <div class="baseInputW75">{{curItem.ruleName}}</div>
            </template>

            <template v-else>
              <Input v-model="curItem.ruleName" placeholder="请选择窗口开始时间" class="baseInputW75" />
              <span class="validateCla">必填</span>
            </template>
          </div>

        </div>
        <div class="btnActionWrap">
          <Button @click="cancelHandle">取消</Button>
          <Button type="primary" @click="saveHandle">保存</Button>
        </div>

      </div>

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
      curType: 'detaila',
      curItem: {
        id: 0,
        isChecked: false,
        ruleName: '',
        decs: '',
        loadWay: 'sqlldr',
        db: '',
        tableName: '',
        data: '',
        control: '',
        amend: '',
        amendTime: '',
      },
      modalAction: false,
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
    this.getInitData()
  },
  methods: {
    ModalcloseHandler() {
      this.modalAction = false
    },
    exportHandler() {
      this.$Message.info('导出待定。。')
    },
    inportHandler() {
      this.$Message.info('导入待定。。')
    },
    downTemHandler() {
      this.$Message.info('下载模板。。')
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
      this.modalAction = true
      // this.$router.push({ name: 'ruleAddAmend', params: { type: 'add' } }) // 只能用 name
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
@import './styles/batch_window.less';
.bbb {
  height: 300px;
  background: pink;
}
</style>

