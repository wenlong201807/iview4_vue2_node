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
          <Input v-model="ruleNameVal" placeholder="请输入规则名称" class="baseInputW75" />
        </div>
        <div class="contentItem">
          <div class="subTitle">规则描述</div>
          <Input v-model="ruleNameVal" placeholder="请输入规则描述" class="baseInputW75" />
        </div>
        <div class="contentItem">
          <div class="subTitle">加载方式</div>
          <Select disabled @on-change="selectChange" v-model="selectDBVal" class="baseInputW75">
            <!-- <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option> -->
          </Select>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      test: '',
      selectDBVal: 'sqlldr',
      ruleNameVal: '',
    }
  },
  created() {
    const { row, type, id } = this.$route.params
    console.log('row, type', row, type, id)
  },
  methods: {
    selectChange(val) {
      console.log(val)
      this.selectDBVal = val
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
