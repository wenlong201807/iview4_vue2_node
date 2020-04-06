
<template>
<div>
 <Button @click="async">同步删除</Button>
 <Button @click="confirm">异步删除</Button>
</div>

</template>

<script>
export default {
  name: 'deleteConfirm',
  data() {
    return {
      aa: 'test'
    }
  },
  props: {
    pathName: {
      require: true,
      default: '/home'
    }
  },
  methods: {
    methods: {
      confirm () {
        this.$Modal.confirm({
          title: '删除提示框',
          content: '<p>您确定要删除吗？</p>',
          onOk: () => {
            this.$Message.info('Clicked ok')
          },
          onCancel: () => {
            this.$Message.info('Clicked cancel')
          }
        })
      },

      async () {
        this.$Modal.confirm({
          title: 'Title',
          content: '<p>您确定要删除吗？</p>',
          loading: true,
          onOk: () => {
            setTimeout(() => {
              this.$Modal.remove()
              this.$Message.info('删除成功')
            }, 2000)
          }
        })
      }
    }
  },
  mounted() {
    console.log(77)
  }
}
</script>
