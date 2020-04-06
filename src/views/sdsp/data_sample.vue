<template>
  <div>
  <Button type="primary" @click="backToDetail">返回 [数据库列表] {{'GP-PL2'}}</Button>
    <div class="viewDetal">
      <div class="out">
        <span class="title">数据库名称:</span>
        <span class="content">内容</span>
        <a href="" download="excel" class="downCla">下载检查报告</a>
      </div>
      <div class="out">
        <span class="title">连接字符串:</span>
        <span class="content">http://localhost:8081/#/yuxuan/item5</span>
        <!-- <span class="downCla">下载检查报告>>></span> -->
      </div>
      <div class="out">
        <span class="title"></span>
        <span class="content">Schema数量：7 表数量：538 列数量：896 已扫描：236 已排除：145 疑似：145 状态：已完成</span>
        <!-- <span class="downCla">下载检查报告>>></span> -->
      </div>
    </div>
    <Table border :columns="columns" :data="data"></Table>

  </div>
</template>

<script>
import { checkbox } from 'iview'
export default {
  name: 'data_sample',
  components: { checkbox },
  data() {
    return {
      taskModel: false,
      formValidate: {
        taskName: '',
        taskDescript: ''
      },
      ruleValidate: {
        taskName: [
          {
            required: true,
            message: 'The name cannot be empty',
            trigger: 'blur'
          }
        ],
        taskDescript: [
          {
            required: true,
            message: 'The name cannot be empty',
            trigger: 'blur'
          }
        ]
      },
      columns: [
        {
          title: '数据采集',
          align: 'center',
          key: 'ID',

          render: (h, params) => {
            // console.log(params)
            // console.log(params.index)
            // return (
            //   <div>
            //     <p className="renderDataCla">经常项目：1、货物贸易 2、运输</p>
            //     <p>资本与金融项目：1、资本转账 2、直接投资</p>
            //   </div>
            // )
            return h(
              'div',
              {
                props: {
                  // checked: params.row.isActived
                  // value: params.row.isActived
                },
                style: {
                  // display: 'inline-block',
                  // background: 'red',
                  textAlign: 'left'
                },
                on: {
                  'on-change': e => {
                    // console.log(e)
                    // this.changeCheckBoxState(e, params.index, 'isActived')
                  }
                }
              },
              `
               经常项目：1、货物贸易 2、运输
              资本与金融项目：1、资本转账 2、直接投资
              `
              // params.row.isActived ? 'true' : 'false'
            )
          }
        },

        {
          title: 'Y',
          width: 80,
          align: 'center',
          key: 'isActived',
          render: (h, params) => {
            return h(
              'Radio',
              {
                props: {
                  // checked: params.row.isActived
                  value: params.row.isActived
                },
                style: {
                  display: 'inline',
                  paddingLeft: '13px'
                  // background: 'red'
                },
                on: {
                  'on-change': e => {
                    console.log(e)
                    this.changeCheckBoxState(e, params.index, 'isActived')
                  }
                }
              },
              ''
            )
          }
        },
        {
          title: 'N',
          width: 80,
          align: 'center',
          key: 'isAdmin',
          render: (h, params) => {
            return h('Radio', {
              props: {
                // checked: params.row.isAdmin
                value: params.row.isAdmin
              },
              style: {
                display: 'inline',
                paddingLeft: '13px'
                // background: 'red'
              },
              on: {
                'on-change': e => {
                  console.log(e)
                  this.changeCheckBoxState(e, params.index, 'isAdmin')
                }
              }
            })
          }
        }
      ],
      data: [
        {
          ID: '123456',
          username: 'admin1',
          Email: '1573511441@qq.com',
          isActived: false,
          isAdmin: false
        },
        {
          ID: '123457',
          username: 'admin1',
          Email: '1573511441@qq.com',
          isActived: false,
          isAdmin: false
        },
        {
          ID: '123458',
          username: 'admin1',
          Email: '1573511441@qq.com',
          isActived: false,
          isAdmin: false
        }
      ]
    }
  },
  methods: {
    backToDetail() {
      this.$router.push({path: '/task_detail'})
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
    initGet() {
      console.log(666)
    }
  }
}
</script>

<style scoped >
.viewDetal {
  /* display: flex; */
  margin: 20px auto;
  width: 800px;
  height: 90px;
  /* overflow-x: scroll; */
  /* background: red; */
}
.out {
  /* overflow: hidden; */
  height: 35px;
  width: 800px;

  /* background: yellowgreen; */
}
.title {
  display: inline-block;
  width: 90px;
  text-align: right;
  line-height: 20px;
  /* float: right; */
}
.downCla {
  float: right;
  margin-top: 5px;
  /* background: pink; */
}
.renderDataCla {
  text-align: left !important;
}
</style>
