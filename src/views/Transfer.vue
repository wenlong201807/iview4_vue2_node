<template>
  <Transfer :data="data4"
            :target-keys="targetKeys4"
            :render-format="render4"
            @on-change="handleChange4"></Transfer>
</template>
<script>
export default {
  data () {
    return {
      data4: [
        { key: '1', username: '11', description: 'The desc of content  ' },
        { key: '2', username: '22', description: 'The desc of content  ' },
        { key: '3', username: '33', description: 'The desc of content  ' },
        { key: '4', username: '44', description: 'The desc of content  ' },
        { key: '5', username: '55', description: 'The desc of content  ' }
      ],
      // data4: this.getMockData(),
      targetKeys4: this.getTargetKeys()
    }
  },
  methods: {
    getMockData () {
      // let mockData = []
      // for (let i = 1; i <= 20; i++) {
      //   mockData.push({
      //     key: i.toString(),
      //     label: 'Content ' + i,
      //     description: 'The desc of content  ' + i,
      //     disabled: Math.random() * 3 < 1
      //   })
      // }
      // return mockData
    },
    getTargetKeys () {
      // return this.getMockData()
      //   .filter(() => Math.random() * 2 > 1)
      //   .map(item => item.key)
    },
    handleChange4 (newTargetKeys) {
      this.targetKeys4 = newTargetKeys
      console.log('this.targetKeys4 ', this.targetKeys4)
    },
    render4 (item) {
      console.log('item', item)
      return item.username + ' - ' + item.description
    }
  }
}
</script>
