<template>
  <div class="BDLtopTitleWrap">
    <div class="topLeftCla">
      <Icon @click="backRuleHandler" class="titleBack" type="ios-arrow-back" />
      <span class="titleContent">{{parTitle}}</span>
    </div>
    <div class="topRightCla">
      <Icon @click="backRuleHandler" type="md-close" />
    </div>
  </div>
</template>

<script>
export default {
  name:'pageTopTitle',
  data() {
    return {
      test: 'xxx',
    }
  },
  props: ['parTitle'],
  created() {
    console.log('父组件传入的标题', this.parTitle)
  },
  methods: {
    backRuleHandler() {
      this.$router.go(-1)
    },
  },
}
</script>

<style  scoped lang="less">
@import '../styles/action_page_top_title.less';
</style>
