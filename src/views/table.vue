<template>
  <div>
    <Row>
      <Col span="1">
      <Button type="primary" @click="openTaskModel">添加</Button>
      </Col>
      <Col offset=3 span="8">
      <Input v-model.trim="searchValue">
      <Select v-model="searchItem" slot="prepend" style="width: 90px">
        <Option value="name">姓名</Option>
        <Option value="phone">手机号</Option>
        <Option value="sex">性别[0/1]</Option>
      </Select>
      <!-- <span slot="prepend">姓名</span> -->
      <Button slot="append" icon="ios-search" @click.native="searchOne">{{searchBtn}}</Button>
      </Input>
      </Col>

    </Row>

    <!-- <Button type="primary" @click="searchOne">id查询</Button> -->
    <Table class="tableMargin" border :columns="columns" :data="data"></Table>
    <Modal v-model="addModel" title="添加" footer-hide>
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="110">
        <FormItem label="姓名:" prop="name">
          <i-input v-model="formValidate.name"></i-input>
        </FormItem>

        <FormItem label="手机号:" prop="phone">
          <i-input v-model="formValidate.phone"></i-input>
        </FormItem>
        <FormItem label="性别:" prop="sex">
          <i-select v-model="formValidate.sex" style="width:200px">
            <Option v-for="(item,index) in sexState" :value="index" :key="index">{{ item }}</Option>
          </i-select>
        </FormItem>
        <div class="tfbtnCla">
          <Button class="okBtnCla" type="primary" @click="handleSubmit('formValidate')">确定</Button>
          <Button class="cancelBtnCla" @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
        </div>
      </Form>
    </Modal>
    <Modal v-model="updateModel" title="修改" footer-hide>
      <Form ref="updateRef" :model="formValidate" :rules="ruleValidate" :label-width="110">
        <FormItem label="姓名:" prop="name">
          <i-input v-model="formValidate.name"></i-input>
        </FormItem>

        <FormItem label="手机号:" prop="phone">
          <i-input v-model="formValidate.phone"></i-input>
        </FormItem>
        <FormItem label="性别:" prop="sex">
          <!-- <i-input
            v-model="formValidate.sex"
          ></i-input> -->
          <i-select v-model="formValidate.sex" style="width:200px">
            <Option v-for="(item,index) in sexState" :value="index" :key="index">{{ item }}</Option>
          </i-select>
        </FormItem>
        <div class="tfbtnCla">
          <Button class="okBtnCla" type="primary" @click="handleSubmit('updateRef')">确定</Button>
          <Button class="cancelBtnCla" @click="handleReset('updateRef')" style="margin-left: 8px">取消</Button>
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
    const validatePhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'))
      } else if (!/^1[34578]\d{9}$/.test(value)) {
        // eslint-disable-next-line standard/no-callback-literal
        callback('手机号格式不正确')
      } else {
        callback()
      }
    }
    return {
      searchState: {
        name: '姓名',
        phone: '手机号',
        sex: '性别'
      },
      searchBtn: '查询',
      searchItem: 'name',
      searchValue: '',
      addModel: false,
      updateModel: false,
      currentId: 0,
      sexState: ['男生', '女生'],
      formValidate: {
        name: '',
        phone: '',
        sex: ''
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: '姓名不能为空',
            trigger: 'blur'
          }
        ],
        phone: [
          {
            required: false,
            validator: validatePhone,
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
          key: 'id'
        },
        {
          title: '姓名',
          width: 160,
          key: 'name'
        },
        {
          title: '手机号',
          align: 'center',
          key: 'phone'
        },
        {
          title: '性别',
          align: 'center',
          key: 'sex',
          render: (h, params) => {
            return h('div', {}, this.sexState[params.row.sex])
          }
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
                      this.updateModel = true
                      this.currentId = params.row.id
                      this.formValidate.name = params.row.name
                      this.formValidate.phone = params.row.phone
                      this.formValidate.sex = params.row.sex
                      // this.$router.push({name: 'task_detail', params: {id: '1'}}) /// 只能用 name/
                    }
                  }
                },
                '修改'
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
                      this.confirm(params.row.id)
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
          id: '23',
          name: 'GP-PL2',
          phone: 'GP-PL2'
        },
        {
          id: '24',
          name: 'CP-PL3',
          phone: 'scan-test'
        },
        {
          id: '25',
          name: 'CRMC-PL2-0123',
          phone: 'TEST'
        }
      ]
    }
  },
  watch: {
    searchValue: {
      handler(a, b) {
        // console.log(a, b)
        if (a) {
          this.searchBtn = '查询' + this.searchState[this.searchItem]
        } else {
          this.searchBtn = '查询所有'
        }
      }
    }
  },
  created() {
    this.initGet()
    // this.testGet()
  },
  methods: {
    testGet() {
      this.$axios.get('/cors/api/').then(res => {
        console.log(res)
      })
    },
    initGet() {
      this.$axios
        .get('/cors/api/table/list')
        .then(res => {
          // console.log(res)
          // console.log(res.data.data)
          this.data = res.data.data
        })
        .catch(e => {
          console.log(e)
        })
    },
    searchOne() {
      // let params = {
      //   id: 1
      // }
      let key = this.searchItem
      let value = this.searchValue
      let params
      if (value) {
        params = `one?${key}=${value}`
      } else {
        params = 'list'
      }
      this.$axios
        .get('/cors/api/table/' + params)
        .then(res => {
          // console.log(res)
          this.data = res.data.data
          this.$Message.success('查询成功')
          this.searchValue = ''
        })
        .catch(e => {
          console.log(e)
          this.$Message.error('查询失败')
        })
    },
    confirm(id) {
      this.$Modal.confirm({
        title: '删除提示框',
        content: '<p>您确定要删除吗？</p>',
        onOk: () => {
          this.$axios
            .delete('/cors/api/table/delete?id=' + id)
            .then(res => {
              this.$Message.info('删除成功')
              this.initGet()
            })
            .catch(e => {
              console.log(e)
            })
        },
        onCancel: () => {
          this.$Message.info('取消删除')
        }
      })
    },
    openTaskModel() {
      this.addModel = true
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          let params = {
            name: this.formValidate.name,
            phone: this.formValidate.phone,
            sex: this.formValidate.sex
          }
          let url, method
          if (name === 'formValidate') {
            url = 'add'
            method = 'post'
          } else {
            url = 'update?id=' + this.currentId
            method = 'put'
          }
          this.$axios[method]('/cors/api/table/' + url, params)
            .then(res => {
              console.log(res)
              // console.log(res.data.msg)
              this.$Message.success(res.data.msg)
              this.initGet()
              this.addModel = false
              this.updateModel = false
              this.$refs[name].resetFields()
            })
            .catch(e => {
              console.log(e)
            })
        } else {
          this.$Message.error('Fail!')
          this.$refs[name].resetFields()
        }
      })
    },
    handleReset(name) {
      this.addModel = false
      this.updateModel = false
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
@import '../libs/styles/common.css';
.tfbtnCla {
  margin: 10px auto;
  width: 120px;
  /* background: red; */
}
.okBtnCla {
  float: left;
}
</style>
