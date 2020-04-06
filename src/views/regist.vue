
<template>
  <div>
    <h2>regist</h2>
    <Button type="primary" @click="handleLogin">注册</Button>
  </div>
</template>

<script>
export default {
  name: 'regist',
  data() {
    return {
      aa: 'test'
    }
  },
  methods: {
    handleLogin() {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style>
</style>
