<template>
  <div class="sdspWrap">
    <!-- <h2>敏感数据扫描平台</h2>
    <Button type="primary" @click="handleLogin">注册</Button> -->
    <Tabs :value="name">
      <TabPane label="任务列表" name="name1">
        <!-- <component :is="TaskList"></component> -->
        <!-- <task-list></task-list> -->
        <router-view />
      </TabPane>
      <TabPane label="统计扫描" name="name2">
        <statics></statics>
      </TabPane>
      <TabPane label="用户管理" name="name3">
        <users></users>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import users from '@/views/sdsp/users'
import statics from '@/views/sdsp/statics'
export default {
  name: 'regist',
  components: {
    users,
    statics
  },
  data() {
    return {
      aa: 'test',
      name: 'name1'
      // comName: 'a'
    }
  },
  methods: {
    test() {
      // #region

      console.log('sadfasdf')
      // #
    },
    handleLogin() {
      this.$router.push({ path: '/home' })
    }
  }
}
</script>

<style scoped lang="less">
// .sdspWrap{
//   margin: 10px 20px;
// }
</style>
