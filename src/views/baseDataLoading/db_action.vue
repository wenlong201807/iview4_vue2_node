<template>
  <div class="BDLactionWrap dbMagtActionWrap">

    <action-page-top-title parTitle="设置数据库信息"></action-page-top-title>

    <div class="contentWrap">

      <div class="title">基础信息</div>
      <div class="detailContentWrap">
        <div class="contentItem">
          <div :class=" curType === 'detail' ? 'subTitle' : 'subTitle validateBeforeSign'">数据库名称</div>
          <template v-if="curType === 'detail'">
            <div class="baseInputW75">{{curItem.ruleName}}</div>
          </template>

          <template v-else>
            <Input v-model="curItem.ruleName" placeholder="请输入数据库名称" class="baseInputW75" />
            <span class="validateCla">必填</span>
          </template>
        </div>
        <div class="contentItem">
          <div :class=" curType === 'detail' ? 'subTitle' : 'subTitle validateBeforeSign'">云环境</div>
          <template v-if="curType === 'detail'">
            <div class="baseInputW75">{{curItem.decs}}</div>
          </template>

          <template v-else>
            <Input v-model="curItem.decs" placeholder="请选择云环境" class="baseInputW75" />
            <span class="validateCla">必填</span>
          </template>
        </div>
        <div class="contentItem">
          <div :class=" curType === 'detail' ? 'subTitle' : 'subTitle validateBeforeSign'">流水线环境</div>
          <template v-if="curType === 'detail'">
            <div class="baseInputW75">{{curItem.loadWay}}</div>
          </template>

          <template v-else>
            <Select @on-change="selectChangeLoadWay" v-model="curItem.loadWay" class="baseInputW75">
              <Option value="sqlldr">sqlldr</Option>
              <!-- <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option> -->
            </Select>
            <span class="validateCla">{{ curItem.loadWay === '' ? '' : '必填'}}</span>
          </template>
        </div>
      </div>

      <div class="title">数据库及加载数据</div>
      <div class="dbTableWrap">
        <div class="tableHeadModal">
          <div class="orderCla onlyHead">序号</div>
          <div class="ruleNameCla onlyHead">数据库连接串</div>
          <div class="decsCla onlyHead">用户名</div>
          <div class="loadWayCla onlyHead">密码</div>
          <div class="dbCla onlyHead">状态</div>
          <div class="dbActionCla onlyHead">&nbsp;</div>
        </div>

        <div class="tablebodyModal" v-for="(item,index) in modalTableData" :key="item.id">
          <div class="orderCla onlyBody">{{item.id}}</div>
          <div class="ruleNameCla onlyBody">
            <Select @on-change="e=>selectTableChange(e,'aa',item)" v-model="item.loadWay" class="baseInputW75">
              <Option value="sqlldr">sqlldr</Option>
              <Option value="sqlldr2">sqlldr2</Option>
              <Option value="sqlldr3">sqlldr3</Option>
              <Option value=""> <a href="https://www.cnblogs.com/PHP0222wangdong/p/11646113.html" target="_blank" >预约加载页面</a> </Option>
              <!-- <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option> -->
            </Select>
          </div>
          <div class="decsCla onlyBody">{{item.decs}}</div>
          <div class="loadWayCla onlyBody">{{item.loadWay}}</div>
          <div class="dbCla onlyBody">{{item.db}}</div>
          <div class="dbActionCla ">
            <div class="delCla">x</div>
            <template v-if="item.id === modalTableData[modalTableData.length-1].id">
              <div class="addOneCla">+ 添加</div>
            </template>
            <template v-else>
              <div class="noneWord">+ 未用</div>
            </template>

          </div>
        </div>

      </div>

    </div>

    <template v-if="curType !== 'detail'">
      <div class="dbActionWrap">
        <Button @click="cancelHandle">取消</Button>
        <Button type="primary" @click="saveHandle">保存</Button>
        <Button type="primary" @click="connectTestHandler">连接测试</Button>
      </div>
    </template>

  </div>
</template>

<script>
import actionPageTopTitle from './component/action_page_top_title'
export default {
  components: { actionPageTopTitle },
  data() {
    return {
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
      modalTableData: [
        {
          id: 1,
          ruleName: 'user_info1',
          decs: '标准区1',
          loadWay: 'sqlldr',
          db: 'success1',
        },
        {
          id: 2,
          ruleName: 'user_info1',
          decs: '标准区1',
          loadWay: 'sqlldr',
          db: 'error2',
        },
        {
          id: 3,
          ruleName: 'user_info1',
          decs: '标准区1',
          loadWay: 'sqlldr',
          db: 'success3',
        },
      ],
    }
  },
  created() {
    const { type, id } = this.$route.params
    console.log('id, type', type, id)

    this.curType = type

    if (type === 'detail' || type === 'edit') {
      this.curItem = this.curItem
    } else if (type === 'add') {
      this.resetRowHandle(this.curItem)
      this.curItem.loadWay = 'sqlldr'
    } else {
      // copy
      console.log(type)
      this.curItem = this.curItem
      this.curItem.ruleName = ''
      this.curItem.decs = ''
    }
  },
  methods: {
    selectTableChange(val, key, row) {
      console.log('=====', val, key, row)
    },
    connectTestHandler() {
      console.log('connectTest...')
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
@import './styles/action_com.less';
@import './styles/db_action.less';
@import './styles/db_action_table.less';
</style>
