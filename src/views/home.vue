<template>
  <div>
    <div class="mainContainer">
      <div class="menuCla">
        <!-- <h1 class="test">首页home</h1> -->
        <Menu theme="primary" :open-names="['1-1']" accordion>
          <Submenu name="1-1">
            <template slot="title">
              <Icon type="ios-paper" />
              敏感数据扫描平台
            </template>
            <MenuItem to="/home/task_list" name="1-1">任务列表</MenuItem>
            <!-- <MenuItem to="/home/task_detail" name="1-1-1"
              >任务详情（隐）数据库列表</MenuItem
            >
            <MenuItem to="/home/data_sample" name="1-1-2"
              >数据采样（隐）目标数据库</MenuItem
            > -->
            <MenuItem to="/home/statics" name="1-2">扫描统计</MenuItem>
            <MenuItem to="/home/users" name="1-3">用户管理</MenuItem>
          </Submenu>
          <!-- <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people" />
              用户管理
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
            <MenuItem name="2-2">活跃用户</MenuItem>
          </Submenu> -->

          <!-- <Submenu name="3">
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
          </Submenu> -->
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
      this.$router.push({path: '/'})
    },
    aa() {
      console.log(11)
    }
  }
}
</script>

<style scoped lang="less">
@import "../libs/styles/common.css";
@import "../libs/styles/frame.less";
.loginOutCla{
  float:right;
  margin-right: 8px;
  margin-top: 3px;
}

.menuCla{
  /deep/ .ivu-menu-light{
    height: 100vh;
  }
}
</style>
