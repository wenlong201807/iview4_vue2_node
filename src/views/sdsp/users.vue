<template>
  <div>
    <Button type="primary" @click="openTaskModel">添加</Button>
    <Table class="tableMargin" border :columns="columns" :data="data"></Table>
    <Modal v-model="taskModel" title="任务管理" footer-hide>
      <Form
        ref="formValidate"
        :model="formValidate"
        :rules="ruleValidate"
        :label-width="110"
      >
        <FormItem label="用户名:" prop="DbaUser">
          <Input
            v-model="formValidate.DbaUser"
          ></Input>
        </FormItem>

        <FormItem label="密码:" prop="DbaPass">
          <Input
            v-model="formValidate.DbaPass"
          ></Input>
        </FormItem>
        <FormItem label="邮件地址:" prop="Email">
          <Input
            v-model="formValidate.Email"
          ></Input>
        </FormItem>
        <FormItem label="激活:" prop="">
          <Input
            v-model="formValidate.isActived"
          ></Input>
        </FormItem>
        <FormItem label="管理员:" prop="">
          <Input
            v-model="formValidate.isAdmin"
          ></Input>
        </FormItem>
        <div class="tfbtnCla">
          <Button
            class="okBtnCla"
            type="primary"
            @click="handleSubmit('formValidate')"
            >确定</Button
          >
          <Button
            class="cancelBtnCla"
            @click="handleReset('formValidate')"
            style="margin-left: 8px"
            >取消</Button
          >
        </div>
      </Form>
    </Modal>
  </div>
</template>

<script>
import { checkbox } from 'iview'
export default {
  components: { checkbox },
  data () {
    return {
      taskModel: false,
      formValidate: { // 字段不确定，后面修改
        DbaUser: '',
        DbaPass: '',
        Email: '',
        isActived: '',
        isAdmin: ''
      },
      ruleValidate: {
        DbaUser: [
          {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
          }
        ],
        DbaPass: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          }
        ],
        Email: [
          {
            required: true,
            message: '邮件地址不能为空',
            trigger: 'blur'
          }
        ]
        // isActived: [
        //   {
        //     required: true,
        //     message: '密码不能为空',
        //     trigger: 'blur'
        //   }
        // ],
        // isAdmin: [
        //   {
        //     required: true,
        //     message: '密码不能为空',
        //     trigger: 'blur'
        //   }
        // ],
      },
      columns: [
        {
          title: 'ID',
          key: 'TargetDbId'
        },
        {
          title: '用户名',
          key: 'DbaUser'
        },
        {
          title: 'Email',
          key: 'Email'
        },

        {
          title: '激活',
          width: 100,
          key: 'isActived',
          render: (h, params) => {
            return h(
              'Checkbox',
              {
                props: {
                  // checked: params.row.isActived
                  value: params.row.isActived
                },
                styles: {
                  display: 'inline-block',
                  background: 'red'
                },
                on: {
                  'on-change': e => {
                    console.log(e)
                    this.changeCheckBoxState(e, params.index, 'isActived')
                  }
                }
              }
              // params.row.isActived ? 'true' : 'false'
            )
          }
        },
        {
          title: '管理员',
          width: 100,
          key: 'isAdmin',
          render: (h, params) => {
            return h(
              'Checkbox',
              {
                props: {
                  // checked: params.row.isAdmin
                  value: params.row.isAdmin
                },
                styles: {
                  display: 'inline-block',
                  background: 'red'
                },
                on: {
                  'on-change': e => {
                    console.log(e)
                    this.changeCheckBoxState(e, params.index, 'isAdmin')
                  }
                }
              }
              // params.row.isAdmin ? 'true' : 'false'
            )
          }
        }
      ],
      data: [
        {
          TargetDbId: '123456',
          DbaUser: 'admin',
          Email: 'wangruozeng.zh@ccb.com',
          isActived: false,
          isAdmin: false
        },
        {
          TargetDbId: '123457',
          DbaUser: 'wangruozeng.zh',
          Email: 'wangruozeng.zh@ccb.com',
          isActived: false,
          isAdmin: false
        }

      ]
    }
  },
  methods: {
    openTaskModel () {
      this.taskModel = true
    },
    handleSubmit (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success('Success!')
          this.taskModel = false
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.taskModel = false
      this.$refs[name].resetFields()
    },
    changeCheckBoxState (stateBol, index, selfAttr) {
      this.data[index][selfAttr] = stateBol
    },
    initGet () {
      console.log(666)
    },
    orgin () {
      //   render: (h, params) => {
      //         // console.log(params)
      //         // console.log(params.index)
      //         return (
      //           <div>
      //             <input
      //               type="checkbox"
      //               checked={!!params.row.isAdmin}
      //               onClick={e => this.changeAdmin(e, params.index)}
      //             ></input>
      //             {this.msg + params.row.ID},{params.index},
      //             {params.row.isAdmin ? 'true' : 'false'}
      //           </div>
      //         )
      //       }
    }
  }
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
