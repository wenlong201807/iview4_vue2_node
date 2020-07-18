<template>

  <div class="mainContainer">
    <div class="menuCla">
      <!-- <h1 class="test">首页home</h1> accordion -->
      <Menu theme="primary" :open-names="['4-1']">
        <Submenu name="1-0">
          <template slot="title">
            <Icon type="ios-people" />
            实现功能的
          </template>
          <MenuItem to="/home/table" name="0-1">增删改查</MenuItem>
          <MenuItem to="/home/calculate" name="0-2">计算器</MenuItem>
          <MenuItem to="/home/definedData" name="0-3">自定义数据</MenuItem>
          <MenuItem to="/home/Hightlight" name="0-4">代码高亮</MenuItem>
          <MenuItem to="/home/TreeContexMenu" name="0-5">自定义右键</MenuItem>
        </Submenu>
        <Submenu name="1-1">
          <template slot="title">
            <Icon type="ios-paper" />
            我的增删改查
          </template>
          <MenuItem to="/home/task_list" name="1-1">任务列表</MenuItem>

          <MenuItem to="/home/statics" name="1-2">扫描统计</MenuItem>
          <MenuItem to="/home/users" name="1-3">用户管理</MenuItem>
        </Submenu>
        <Submenu name="1-2">
          <template slot="title">
            <Icon type="ios-people" />
            用户管理
          </template>
          <MenuItem name="2-1">新增用户</MenuItem>
          <MenuItem name="2-2">活跃用户</MenuItem>
        </Submenu>

        <Submenu name="1-3">
          <template slot="title">
            <Icon type="ios-stats" />
            统计分析
          </template>
          <MenuGroup title="使用">
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </MenuGroup>

        </Submenu>
        <Submenu name="1-4">
          <template slot="title">
            <Icon type="ios-people" />
            echarts
          </template>
          <MenuItem to="/home/bar_ring" name="4-1">柱状图和环形</MenuItem>
          <MenuItem to="/home/shanxing" name="4-2">扇形图</MenuItem>
          <MenuItem to="/home/echart1" name="4-3">双指针示例</MenuItem>
          <MenuItem to="/home/echart2" name="4-4">echart2指针图</MenuItem>
          <MenuItem to="/home/echart3" name="4-5">echart3混合图1</MenuItem>
          <MenuItem to="/home/echart4" name="4-6">echart4折线图2</MenuItem>
          <MenuItem to="/home/echart5" name="4-7">echart5混合图2</MenuItem>
          <MenuItem to="/home/VueLazyComponent" name="4-8">交叉监听</MenuItem>
          <MenuItem to="/home/echartAll" name="4-9">echartAll混合图2</MenuItem>
          <MenuItem to="/home/pro_echarts" name="4-10">组合展示图pro</MenuItem>
        </Submenu>
      </Menu>
    </div>
    <div class="contentCla">
      <div class="navCla">
        <Button type="text" @click="loginout" class="loginOutCla">退出</Button>
      </div>
      <div class="contentPages">
        <router-view />
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      msg: 'sffd'
    }
  },
  methods: {
    loginout() {
      this.$router.push({ path: '/' })
    },
    aa() {
      console.log(11)
    }
  }
}
</script>

<style scoped lang="less">
@import '../libs/styles/common.css';
@import '../libs/styles/frame.less';
.loginOutCla {
  float: right;
  margin-right: 8px;
  margin-top: 3px;
}

.menuCla {
  /deep/ .ivu-menu-light {
    height: 100vh;
  }
}
</style>
