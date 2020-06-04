<template>
    <Form class="loginFromCla" ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <div class="okCancelBtnWrapCla">
            <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
            <Button type="primary" @click="handleregist" style="margin-left: 8px">注册</Button>
        </div>
    </Form>
</template>
<script>
export default {
  data () {
    return {
      formInline: {
        user: 'admin',
        password: 'admin'
      },
      ruleInline: {
        user: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 4, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleregist() {
      this.$router.push({path: '/regist'})
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('登录成功')
          this.$router.push({path: '/home/main'})
        } else {
          this.$Message.error('登录失败，请重试')
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
@import '../libs/styles/common.css';
  .loginFromCla{
    margin: 50px auto;
    padding: 30px 90px 20px;
    width: 600px;
    height: 400px;
    border: 1px solid #ccc;
    border-radius: 5px;
    // box-shadow: 1px 10px blue;
  }
</style>
