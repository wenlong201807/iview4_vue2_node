<template>
  <div class="BDLactionWrap aptActionWrap">

    <action-page-top-title parTitle="新增预约加载"></action-page-top-title>

    <div class="contentWrap">

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
            <Select disabled @on-change="selectChangeLoadWay" v-model="curItem.loadWay" class="baseInputW75">
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
          <div :class=" curType === 'detail' ? 'subTitle' : 'subTitle validateBeforeSign'">数据批次</div>
          <template v-if="curType === 'detail'">
            <div class="baseInputW75">{{curItem.tableName}}</div>
          </template>

          <template v-else>
            <Select @on-change="selectChangeTableName" v-model="curItem.tableName" placeholder="请选择数据批次" class="baseInputW75">
              <Option value="xxx111">xxx111</Option>
              <Option value="xxx222">xxx222</Option>
              <Option value="xxx333">xxx333</Option>
              <!-- <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option> -->
            </Select>
            <span class="validateCla">{{ curItem.tableName === '' ? '' : '必填'}}</span>
          </template>
        </div>
        <div class="contentItem">
          <div :class=" curType === 'detail' ? 'subTitle' : 'subTitle validateBeforeSign'">流水线环境</div>
          <template v-if="curType === 'detail'">
            <div class="baseInputW75">{{curItem.data}}</div>
          </template>

          <template v-else>
            <Input v-model="curItem.data" placeholder="请输入流水线环境" class="baseInputW75" />
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

    <div class="addedAptRuleListWrap">
      <div class="listTitle">已添加预约规则列表</div>
      <div class="listContent">

        <div class="btnRowCla">
          <div class="btnRowleft">
            <Button type="primary" class="btnR20" @click="aptEditHandler">
              <Icon class="iconBRM" type="md-add" />编辑</Button>

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
            <!-- <div class="checkBoxCla">
              <Checkbox :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll"></Checkbox>
            </div> -->
            <div class="orderCla">序号</div>
            <div class="ruleNameCla">规则名称</div>
            <div class="decsCla">描述</div>
            <div class="loadWayCla">加载方式</div>
            <div class="dbCla">数据库</div>
            <div class="tableNameCla">表名</div>
            <div class="dataCla">数据名称</div>
            <div class="controlCla">控制表名称</div>
            <div class="amendCla">修改人</div>
            <div class="amendTimeCla">修改时间</div>
            <!-- <div class="actionHeadCla">操作</div> -->
          </div>

          <div class="tablebody" v-for="(item,index) in tableData" :key="item.id">
            <!-- <div class="checkBoxCla">
              <Checkbox v-model="item.isChecked" @on-change="changeItemCheckBox(item.id,item.isChecked)"></Checkbox>
            </div> -->
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
            <!-- <div class="actionBodyCla">
              <span class="tableAuthAction" @click="ediCopytHandler(item,'detail')">详情</span>
              <span class="tableAuthAction" @click="ediCopytHandler(item,'edit')">编辑</span>
              <span class="tableAuthAction" @click="ediCopytHandler(item,'copy')">复制</span>
            </div> -->
          </div>
        </div>
        <!-- <div class="pageWrap">
          <Page :current="curPageNum" :total="totalPages" @on-change="changeCurPage" @on-page-size-change="changeCurSize" show-total show-elevator show-sizer />
        </div> -->

        <template v-if="curType !== 'detail'">
          <div class="btnActionWrap">
            <Button @click="cancelHandle">取消</Button>
            <Button type="primary" @click="saveHandle">提交</Button>
          </div>
        </template>
      </div>
    </div>

    <LongModal :parentModalIsOpen="modalAction" parentModalTitle="添加规则" @closeLongModal="pageCloseLongModalHandler">
      <div slot="longModalBody" class="aptActionModalWrap">
        <div class="tipWrap">
          <img :src="aptTipIconUrl" class="tipIconCla" alt="icon" srcset="">
          <span class="aptTipWord">请将本次需要进行数据加载的数据库移动到右侧。</span>
        </div>

        <div class="transFormWrap">
          <div class="twoBoxWrap">
            <div class="totalNumCla">
              <div>
                <Checkbox :indeterminate="leftindeterminate" :value="leftIscheckAll" @click.prevent.native="lefthandleCheckAll"></Checkbox>
              </div>
              <div> 未添加数据库（{{lefttableData.length}}个）</div>
            </div>
            <div class="itemListWrap" v-for="(item) in lefttableData" :key="item.id">
              <div class="eachItemCla">
                <Checkbox v-model="item.isChecked" @on-change="leftchangeItemCheckBox(item.id,item.isChecked)"></Checkbox> <span>{{item.content}}</span>
              </div>
            </div>
          </div>
          <div class="transBtnWrap">
            <Button @click="toRightHandler" class="rightBtn" type="primary">
              加入右侧 &gt;</Button>
            <Button @click="toLeftHandler" type="primary">
              &lt; 加入左侧</Button>
          </div>
          <div class="twoBoxWrap">
            <div class="totalNumCla">
              <div>
                <Checkbox :indeterminate="rightindeterminate" :value="rightIscheckAll" @click.prevent.native="righthandleCheckAll"></Checkbox>
              </div>
              <div> 未添加数据库（{{righttableData.length}}个）</div>
            </div>
            <div class="itemListWrap" v-for="(item) in righttableData" :key="item.id">
              <div class="eachItemCla">
                <Checkbox v-model="item.isChecked" @on-change="rightchangeItemCheckBox(item.id,item.isChecked)"></Checkbox> <span>{{item.content}}</span>
              </div>
            </div>

          </div>
        </div>

        <div class="transfBtnBottomWrap">
          <Button @click="cancelTransfHandler" class="leftBtn" type="primary">
            取消</Button>
          <Button @click="saveTransfHandler" type="primary">
            保存</Button>
        </div>

      </div>
    </LongModal>

  </div>
</template>

<script>
import actionPageTopTitle from './component/action_page_top_title'
import LongModal from './component/long_modal'
import aptTipIconUrl from './imgs/aptModalTip.png'
import {
  checkBoxAllGlobal,
  changeItemCheckBoxGlobal,
} from './utils/com_checkBox'
export default {
  components: { actionPageTopTitle, LongModal },
  data() {
    return {
      lefttableData: [
        { id: 1, content: 'yyy1', isChecked: false },
        { id: 2, content: 'yyy2', isChecked: true },
        { id: 3, content: 'yyy3', isChecked: false },
      ],
      leftcheckedArr: [{ id: 2, content: 'yyy2', isChecked: true }],
      leftindeterminate: false,
      leftIscheckAll: false,

      righttableData: [
        { id: 1, content: 'xxx1', isChecked: false },
        { id: 2, content: 'xxx2', isChecked: true },
        { id: 3, content: 'xxx3', isChecked: false },
      ],
      rightcheckedArr: [{ id: 2, content: 'xxx2', isChecked: true }],
      rightindeterminate: false,
      rightIscheckAll: false,

      aptTipIconUrl: aptTipIconUrl,
      modalAction: false,
      curType: '',
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
          data: 'abc1.ta111',
          control: 'XXX111',
          amend: 'XXX111',
          amendTime: '20201111',
        },
        {
          id: 2,
          isChecked: false,
          ruleName: '规则名称2',
          decs: '规则概述2',
          loadWay: 'sqlldr',
          db: 'xxx222',
          tableName: 'xxx222',
          data: 'abta222',
          control: 'XX22',
          amend: 'XXX22',
          amendTime: '20211222',
        },
        {
          id: 3,
          isChecked: false,
          ruleName: '规则名称3',
          decs: '规则概述3',
          loadWay: 'sqlldr',
          db: 'xxx333',
          tableName: 'xxx333',
          data: 'abcata333',
          control: 'XX333',
          amend: 'XXX333',
          amendTime: '202333',
        },
      ],
    }
  },
  created() {
    const { type, id } = this.$route.params
    console.log('id, type', type, id)

    this.curType = type

    if (type === 'detail' || type === 'edit') {
      this.curItem = row || this.curItem
    } else if (type === 'add') {
      this.resetRowHandle(this.curItem)
      this.curItem.loadWay = 'sqlldr'
    } else {
      // copy
      console.log(row, type)
      this.curItem = row || this.curItem
      this.curItem.ruleName = ''
      this.curItem.decs = ''
    }
  },
  methods: {
    leftchangeItemCheckBox(id, curIsChecked) {
      const {
        parentIsExistChecked,
        parentIsCheckAll,
        checkedArr,
        currentDataArr,
      } = changeItemCheckBoxGlobal(
        id,
        curIsChecked,
        this.leftindeterminate,
        this.leftIscheckAll,
        this.leftcheckedArr,
        this.lefttableData
      )
      this.leftindeterminate = parentIsExistChecked
      this.leftIscheckAll = parentIsCheckAll
      this.leftcheckedArr = checkedArr
      this.lefttableData = currentDataArr
      console.log('中间状态leftindeterminate：', this.leftindeterminate)
      console.log('是否全部被选中 leftIscheckAll：', this.leftIscheckAll)
      console.log('被选中的数组 leftcheckedArr', this.leftcheckedArr)
      console.log('参选的数组 lefttableData：', this.lefttableData)
    },
    lefthandleCheckAll() {
      const {
        isExistChecked,
        isCheckAll,
        checkedArr,
        currentDataArr,
      } = checkBoxAllGlobal(
        this.leftindeterminate,
        this.leftIscheckAll,
        this.leftcheckedArr,
        this.lefttableData
      )

      this.leftindeterminate = isExistChecked
      this.leftIscheckAll = isCheckAll
      this.leftcheckedArr = checkedArr
      this.lefttableData = currentDataArr
      console.log(
        '顶部点击时 中间状态leftindeterminate：',
        this.leftindeterminate
      )
      console.log(
        '顶部点击时 是否全部被选中 leftIscheckAll：',
        this.leftIscheckAll
      )
      console.log('顶部点击时 被选中的数组 leftcheckedArr', this.leftcheckedArr)
      console.log('顶部点击时 参选的数组 lefttableData：', this.lefttableData)
    },
    rightchangeItemCheckBox(id, curIsChecked) {
      const {
        parentIsExistChecked,
        parentIsCheckAll,
        checkedArr,
        currentDataArr,
      } = changeItemCheckBoxGlobal(
        id,
        curIsChecked,
        this.rightindeterminate,
        this.rightIscheckAll,
        this.rightcheckedArr,
        this.righttableData
      )
      this.rightindeterminate = parentIsExistChecked
      this.rightIscheckAll = parentIsCheckAll
      this.rightcheckedArr = checkedArr
      this.righttableData = currentDataArr
      console.log('中间状态rightindeterminate：', this.rightindeterminate)
      console.log('是否全部被选中 rightIscheckAll：', this.rightIscheckAll)
      console.log('被选中的数组 rightcheckedArr', this.rightcheckedArr)
      console.log('参选的数组 righttableData：', this.righttableData)
    },
    righthandleCheckAll() {
      const {
        isExistChecked,
        isCheckAll,
        checkedArr,
        currentDataArr,
      } = checkBoxAllGlobal(
        this.rightindeterminate,
        this.rightIscheckAll,
        this.rightcheckedArr,
        this.righttableData
      )

      this.rightindeterminate = isExistChecked
      this.rightIscheckAll = isCheckAll
      this.rightcheckedArr = checkedArr
      this.righttableData = currentDataArr
      console.log(
        '顶部点击时 中间状态rightindeterminate：',
        this.rightindeterminate
      )
      console.log(
        '顶部点击时 是否全部被选中 rightIscheckAll：',
        this.rightIscheckAll
      )
      console.log('顶部点击时 被选中的数组 rightcheckedArr', this.rightcheckedArr)
      console.log('顶部点击时 参选的数组 righttableData：', this.righttableData)
    },
    cancelTransfHandler() {
      console.log('cancel...transf')
    },
    saveTransfHandler() {
      console.log('save...transf')
    },
    toRightHandler() {
      console.log('to..right')
      // 两个数组相加  // 两个数组相减
    },
    toLeftHandler() {
      console.log('to..left')
    },
    pageCloseLongModalHandler(closeChildModal) {
      this.modalAction = closeChildModal
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

    aptEditHandler() {
      this.modalAction = true
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
  },
}
</script>
<style  scoped lang="less">
@import './styles/table_com.less';
@import './styles/action_com.less';
@import './styles/apt_action.less';
@import './styles/apt_action_modal.less';
</style>
