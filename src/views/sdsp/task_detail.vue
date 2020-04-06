<template>
  <div>
    <h2 class="datailTaskCla">任务：GP-PL2</h2>
    <Button type="primary" @click="openTaskModel">添加</Button>
    <Button type="primary" @click="backToList">返回任务列表</Button>
    <Table class="tableMargin" border :columns="columns" :data="data"></Table>
    <Modal v-model="taskModel" title="任务管理" footer-hide>
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="110">
        <FormItem label="数据库名称:" prop="TargetDbName">
          <i-input v-model="formValidate.TargetDbName"></i-input>
        </FormItem>

        <FormItem label="任务描述:" prop="taskDescript">
          <Select v-model="formValidate.taskDescript">
            <Option value="Oracle">Oracle</Option>
            <Option value="Informix">Informix</Option>
            <Option value="Teradata">Teradata</Option>
            <Option value="GreenPlum">GreenPlum</Option>
          </Select>
        </FormItem>
        <FormItem label="连接字符串:" prop="ConnectionStr">
          <i-input v-model="formValidate.ConnectionStr"></i-input>
        </FormItem>

        <FormItem label="例:">
          <p>【oracle】: https://www.baidu.com/s?wd=render=0</p>
          <p>【oracle】: e850rrsv_sug2=0</p>
        </FormItem>

        <div class="okCancelBtnWrapCla">

          <Button type="primary" @click="handleSubmit('formValidate')">确定</Button>
          <Button @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
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
      formValidate: {
        TargetDbName: '',
        taskDescript: '',
        ConnectionStr: ''
      },
      ruleValidate: {
        TargetDbName: [
          {
            required: true,
            message: '数据库名称不能为空',
            trigger: 'blur'
          }
        ],
        taskDescript: [
          {
            required: true,
            message: '任务描述不能为空',
            trigger: 'blur'
          }
        ],
        ConnectionStr: [
          {
            required: true,
            message: '连接字符串不能为空',
            trigger: 'blur'
          }
        ]
      },
      columns: [
        {
          title: 'ID',
          key: 'TargetDbId'
        },
        {
          title: '数据库名称',
          key: 'TargetDbName'
        },
        {
          title: '数据库类型',
          key: 'DbType'
        },
        {
          title: '连接字符串',
          width: 230,
          key: 'ConnectionStr'
        },
        {
          title: '检查目标表',
          key: 'JobDetailTable'
        },
        {
          title: '状态',
          key: 'Finished'
        },

        {
          title: '操作',
          width: 300,
          key: '',
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
                      this.$router.push({name: 'data_sample', params: {id: '1'}}) /// 只能用 name/
                    }
                  }
                },
                '查看目标数据库'
              ),
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
                      this.downloadExcel()
                    }
                  }
                },
                '下载扫描报告'
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
                      // this.remove(params.index)
                      this.confirm()
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
          TargetDbId: '18',
          TargetDbName: 'GP-70',
          DbType: 'GreenPlum',
          ConnectionStr: 'Driver-{PostgreSQL}',
          JobDetailTable: 'hashtable1',
          Finished: '已完成'
        },
        {
          TargetDbId: '19',
          TargetDbName: 'GP-71',
          DbType: 'Oracle',
          ConnectionStr: 'Driver-{PostgreSQL}sdgsgs',
          JobDetailTable: 'hashtable2',
          Finished: '已完成'
        },
        {
          TargetDbId: '20',
          TargetDbName: 'GP-73',
          DbType: 'GreenPlum',
          ConnectionStr: 'Driver-{PostgreSQL}sdgsfgsg',
          JobDetailTable: 'hashtable3',
          Finished: '未完成'
        }

      ]
    }
  },
  methods: {
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
    downloadExcel() {
      // let response = require('../../assets/test.xls')
      let response = ''
      var blob = new Blob([response], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'})
      var downloadElement = document.createElement('a')
      var href = window.URL.createObjectURL(blob) // 创建下载的链接
      downloadElement.href = href
      downloadElement.download = 'test.xlsx' // 下载后文件名
      document.body.appendChild(downloadElement)
      downloadElement.click() // 点击下载
      window.URL.revokeObjectURL(href) // 释放掉blob对象
    },
    backToList() {
      this.$router.push({path: '/'})
    },
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
    }
  }
}
</script>

<style scoped lang="less">
@import '../../libs/styles/common.css';

.datailTaskCla{
  text-align: center;
  font-size: 18px;
}
</style>
