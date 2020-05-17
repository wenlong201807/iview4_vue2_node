<template>
  <div>
    <h2>我的计算器</h2>
    <div v-for="(itemArr,index) in calc" :key="index">
      <div v-for="(item,ind) in itemArr" :key="ind">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      calc: [
        ['1', '2', '3', '-'],
        ['4', '5', '6', '+'],
        ['7', '8', '9', '*'],
        ['归零', '退格', '等于', '/']
      ]
    }
  },
  watch: {},
  created() {},
  methods: {}
}
</script>

<style scoped>
@import '../../libs/styles/common.css';
.tfbtnCla {
  margin: 10px auto;
  width: 120px;
  /* background: red; */
}
.okBtnCla {
  float: left;
}
</style>
