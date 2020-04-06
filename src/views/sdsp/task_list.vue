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
        <FormItem label="任务名称:" prop="JobName">
          <i-input
            v-model="formValidate.JobName"
            placeholder="Enter something..."
          ></i-input>
        </FormItem>

        <FormItem label="任务描述:" prop="JobDesc">
          <i-input
            v-model="formValidate.JobDesc"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 5 }"
            placeholder="Enter something..."
          ></i-input>
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
// import { checkbox } from "iview";
export default {
  // components: { checkbox },
  data() {
    return {
      taskModel: false,
      formValidate: {
        JobName: '',
        JobDesc: ''
      },
      ruleValidate: {
        JobName: [
          {
            required: true,
            message: 'The name cannot be empty',
            trigger: 'blur'
          }
        ],
        JobDesc: [
          {
            required: true,
            message: 'The name cannot be empty',
            trigger: 'blur'
          }
        ]
      },
      handleTableStyle: {
        height: '30px',
        width: '60px',
        textAlign: 'center',
        'line-height': '30px',
        cursor: 'pointer'
        // background: 'red'
      },
      columns: [
        {
          title: 'ID',
          width: 80,
          key: 'JobId'
        },
        {
          title: '任务名称',
          width: 160,
          key: 'JobName'
        },
        {
          title: '任务描述',
          align: 'center',
          key: 'JobDesc'
        },

        {
          title: '操作',
          width: 210,
          key: 'isActived',
          render: (h, params) => {
            return h('div', [
              h(
                'Button',
                {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      // this.show(params.index)
                      this.$router.push({name: 'task_detail', params: {id: '1'}}) /// 只能用 name/
                    }
                  }
                },
                '查看数据库列表'
              ),
              h(
                'Button',
                {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.confirm()
                      // this.remove(params.index)
                    }
                  }
                },
                '删除'
              )
            ])
          }
        }

      ],
      data: [
        {
          JobId: '23',
          JobName: 'GP-PL2',
          JobDesc: 'GP-PL2'
        },
        {
          JobId: '24',
          JobName: 'CP-PL3',
          JobDesc: 'scan-test'
        },
        {
          JobId: '25',
          JobName: 'CRMC-PL2-0123',
          JobDesc: 'TEST'
        }
      ]
    }
  },
  created() {
    this.initGet()
  },
  methods: {
    initGet() {
      this.$axios.get('/api/job')
        .then(res => {
          console.log(res)
        })
    },
    confirm () {
      this.$Modal.confirm({
        title: '删除提示框',
        content: '<p>您确定要删除吗？</p>',
        onOk: () => {
          this.$Message.info('删除成功')
        },
        onCancel: () => {
          this.$Message.info('取消删除')
        }
      })
    },
    openTaskModel() {
      this.taskModel = true
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success('Success!')
          this.taskModel = false
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset(name) {
      this.taskModel = false
      this.$refs[name].resetFields()
    },
    changeCheckBoxState(stateBol, index, selfAttr) {
      this.data[index][selfAttr] = stateBol
    },
    orgin() {
      //   render: (h, params) => {
      //         // console.log(params)
      //         // console.log(params.index)
      //         return (
      //           <div>
      //             <i-input
      //               type="checkbox"
      //               checked={!!params.row.isAdmin}
      //               onClick={e => this.changeAdmin(e, params.index)}
      //             ></i-input>
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
