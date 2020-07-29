<template>
  <div class="ruleMagtAddAmendWrap">
    <div class="topTitleCla">
      <div class="topLeftCla">
        <Icon @click="backRuleHandler" class="titleBack" type="ios-arrow-back" />
        <span class="titleContent">新建数据加载规则</span>
      </div>
      <div class="topRightCla">
        <Icon @click="backRuleHandler" type="md-close" />
      </div>
    </div>

    <div class="contentWrap">

      <div class="title">基础信息</div>
      <div class="detailContentWrap">
        <div class="contentItem">
          <div class="subTitle">规则名称</div>
          <template v-if="curType === 'detail'">
            <div class="baseInputW75">{{curItem.ruleName}}</div>
          </template>

          <template v-else>
            <Input v-model="curItem.ruleName" placeholder="请输入规则名称" class="baseInputW75" />
            <span class="validateCla">必填</span>
          </template>
        </div>
        <div class="contentItem">
          <div class="subTitle">规则描述</div>
          <template v-if="curType === 'detail'">
            <div class="baseInputW75">{{curItem.decs}}</div>
          </template>

          <template v-else>
            <Input v-model="curItem.decs" placeholder="请输入规则描述" class="baseInputW75" />
            <span class="validateCla">必填</span>
          </template>
        </div>
        <div class="contentItem">
          <div class="subTitle">加载方式</div>
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

      <div class="title">数据库及加载数据</div>
      <div class="detailContentWrap">
        <div class="contentItem">
          <div class="subTitle">数据库名称</div>
          <template v-if="curType === 'detail'">
            <div class="baseInputW75">{{curItem.db}}</div>
          </template>

          <template v-else>
            <Input v-model="curItem.db" placeholder="请选择数据库名称" class="baseInputW75" />
            <span class="validateCla">必填</span>
          </template>
        </div>
        <div class="contentItem">
          <div class="subTitle">表名</div>
          <template v-if="curType === 'detail'">
            <div class="baseInputW75">{{curItem.tableName}}</div>
          </template>

          <template v-else>
            <Select @on-change="selectChangeTableName" v-model="curItem.tableName" placeholder="请选择表名" class="baseInputW75">
              <Option value="xxx111">xxx111</Option>
              <Option value="xxx222">xxx222</Option>
              <Option value="xxx333">xxx333</Option>
              <!-- <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option> -->
            </Select>
            <span class="validateCla">{{ curItem.tableName === '' ? '' : '必填'}}</span>
          </template>
        </div>
        <div class="contentItem">
          <div class="subTitle">数据名称</div>
          <template v-if="curType === 'detail'">
            <div class="baseInputW75">{{curItem.data}}</div>
          </template>

          <template v-else>
            <Input v-model="curItem.data" placeholder="请输入数据名称" class="baseInputW75" />
            <span class="validateCla">必填</span>
            <div class="baseInputW75 subTitleDesc">
              支持多个连续文件，多个文件间使用分号(;)分割。如果文件为连续文件，可使用连接符(-)，
              如：abc[1-3].data表示3个文件：abc1.data、abc2.data、abc3.data
            </div>
          </template>
        </div>
        <div class="contentItem">
          <div class="subTitle">控制表名称</div>
          <template v-if="curType === 'detail'">
            <div class="baseInputW75">{{curItem.control}}</div>
          </template>

          <template v-else>
            <Input v-model="curItem.control" placeholder="请输入控制表名称" class="baseInputW75" />
            <span class="validateCla">必填</span>
            <div class="baseInputW75 subTitleDesc">
              支持多个连续文件，多个文件间使用分号(;)分割。如果文件为连续文件，可使用连接符(-)，
              如：abc[1-3].data表示3个文件：abc1.data、abc2.data、abc3.data
            </div>
          </template>
        </div>
      </div>

    </div>

    <template v-if="curType !== 'detail'">
      <div class="btnActionWrap">
        <Button @click="cancelHandle">取消</Button>
        <Button type="primary" @click="saveHandle">保存</Button>
      </div>
    </template>

  </div>
</template>

<script>
export default {
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
    }
  },
  created() {
    const { row, type, id } = this.$route.params
    console.log('row, type', row, type, id)
    // if (type) {
      this.curType = type
    // } else {
    //   this.$router.push('/home/ruleMagt')
    //   return false
    // }
    if (type === 'detail' || type === 'edit') {
      this.curItem = row
    } else if (type === 'add') {
      this.resetRowHandle(this.curItem)
      this.curItem.loadWay = 'sqlldr'
    } else {
      // copy
      console.log(row, type)
      this.curItem = row
      this.curItem.ruleName = ''
      this.curItem.decs = ''
    }
  },
  methods: {
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
      this.$router.push({ name: 'ruleMagt', params: { row:this.curItem } })
      // this.backRuleHandler()
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
@import './styles/rule_magt_add_amend.less';
</style>
