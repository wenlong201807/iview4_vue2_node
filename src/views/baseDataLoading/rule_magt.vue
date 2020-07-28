<template>
  <div class="ruleMageWrap">
    <Docs></Docs>
    <div class="titleWrap">
      <span class="title">物理子系统名称 N-IMAN</span>
      <span class="changeCla"><img :src="changeIconUrl" class="" alt="icon" srcset=""></span>
      <span class="limitCla">+ 新增系统权限</span>
    </div>
    <div class="btnRowCla">
      <div class="btnRowleft">
        <Button type="primary" class="btnR20" @click="addRulHandler">
          <Icon class="iconBRM" type="md-add" />新增规则</Button>
        <Button type="error" class="btnR20">删除</Button>
        <Button type="primary" class="btnR20">
          导入</Button>
        <Button type="primary" class="btnR20">
          导出</Button>
        <Button type="primary" class="btnR20 reBTN">
          <img :src="downloadIconUrl" class="downloadIconCla" alt="icon" srcset="">
          <span class="btnWord">下载模板</span>
        </Button>

      </div>
      <div class="btnRowright">
        <Select @on-change="selectChange" v-model="selectDBVal" placeholder="数据库" class="baseSelectW150">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Input v-model="value" placeholder="请输入数据库" class="baseInputW200 btnL20" />
        <Button type="primary" class="btnL20">查询</Button>
      </div>

    </div>
    <div class="tableWrap">
      <div class="tableHead">
        <div class="checkBoxCla">11</div>
        <div class="orderCla">序号</div>
        <div class="ruleNameCla">规则名称</div>
        <div class="decsCla">规则概述</div>
        <div class="loadWayCla">加载方式</div>
        <div class="dbCla">数据库</div>
        <div class="tableNameCla">表名</div>
        <div class="dataCla">数据名称</div>
        <div class="controlCla">控制表名称</div>
        <div class="amendCla">修改人</div>
        <div class="amendTimeCla">修改时间</div>
        <div class="actionHeadCla">操作</div>
      </div>
      <div class="tablebody" v-for="(item,index) in tableData" :key="item.id">
        <div class="checkBoxCla"></div>
        <div class="orderCla">{{item.id}}</div>
        <div class="ruleNameCla">{{item.ruleName}}</div>
        <div class="decsCla">{{item.decs}}</div>
        <div class="loadWayCla">{{item.loadWay}}</div>
        <div class="dbCla">{{item.db}}</div>
        <div class="tableNameCla">{{item.tableName}}</div>
        <div class="dataCla">{{item.data}}</div>
        <div class="controlCla">{{item.control}}</div>
        <div class="amendCla">{{item.amend}}</div>
        <div class="amendTimeCla">{{item.amendTime}}</div>
        <div class="actionBodyCla">
          <span class="btnEditAction" @click="ediCopytHandler(item,'edit')">编辑</span>
          <span class="btnCopyAction" @click="ediCopytHandler(item,'copy')">复制</span>
        </div>
      </div>
    </div>
    <div class="pageWrap">
      <Page :current="curPageNum" :total="totalPages" @on-change="changeCurPage" @on-page-size-change="changeCurSize" show-total show-elevator show-sizer />
    </div>

  </div>
</template>

<script>
import Docs from './component/docs'
import downloadIconUrl from './imgs/dwonloadIcon.png'
import changeIconUrl from './imgs/changeIcon.png'
export default {
  components: { Docs },
  data() {
    return {
      curPageNum: 1,
      totalPages: 100,
      curPageSize: 10,

      downloadIconUrl: downloadIconUrl,
      changeIconUrl: changeIconUrl,
      value: '',
      cityList: [
        {
          value: 'db1',
          label: '数据库1',
        },
        {
          value: 'db2',
          label: '数据库2',
        },
      ],
      selectDBVal: 'db1',
      tableData: [
        {
          id: 1,
          ruleName: '规则名称1',
          decs: '规则概述1',
          loadWay: 'sqlldr',
          db: 'xxx',
          tableName: 'xxx',
          data: 'abc1.data abc1.data',
          control: 'XXXXXXX',
          amend: 'XXXXXXX',
          amendTime: '2020-07-01 12:09:11',
        },
        {
          id: 2,
          ruleName: '规则名称2',
          decs: '规则概述2',
          loadWay: 'sqlldr',
          db: 'xxx',
          tableName: 'xxx',
          data: 'abc1.data abc1.data',
          control: 'XXXXXXX',
          amend: 'XXXXXXX',
          amendTime: '2020-07-01 12:09:11',
        },
        {
          id: 3,
          ruleName: '规则名称3',
          decs: '规则概述3',
          loadWay: 'sqlldr',
          db: 'xxx',
          tableName: 'xxx',
          data: 'abc1.data abc1.data',
          control: 'XXXXXXX',
          amend: 'XXXXXXX',
          amendTime: '2020-07-01 12:09:11',
        },
      ],
    }
  },
  methods: {
    ediCopytHandler(row, type) {
      console.log(row, type)
      this.$router.push({ name: 'ruleAddAmend', params: { row, type } }) // 只能用 name
    },
    addRulHandler() {
      this.$router.push({ name: 'ruleAddAmend', params: { type: 'add' } }) // 只能用 name
      // script 取参 this.$route.params.id
    },
    selectChange(val) {
      console.log(val)
      this.selectDBVal = val
    },
    changeCurPage(pageNum) {
      console.log(pageNum)
      this.curPageNum = pageNum
    },
    changeCurSize(pageSize) {
      this.curPageNum = 1
      console.log(pageSize)
    },
  },
}
</script>

<style  scoped lang="less">
@import './styles/rule_magt.less';
</style>
