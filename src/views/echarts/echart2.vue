<template>
  <div class="shanxingContainer" id="shanxingContainerId">
    <h2>echart2</h2>
    <div id="ringId" class="ring"></div>

  </div>
</template>
<script>
export default {
  name: 'echartContainer2',
  data() {
    return {
      myChartRing: ''
    }
  },
  methods: {
    drawChartRing(_this) {
      // 基于准备好的dom，初始化echarts实例
      _this.myChartRing = this.$echarts.init(document.getElementById('ringId'))

      // 指定图表的配置项和数据
      let option = {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
          feature: {
            restore: {},
            saveAsImage: {}
          }
        },
        series: [
          {
            name: '业务指标',
            type: 'gauge',
            // detail: { formatter: '{value}%' },
            data: [{ value: 50, name: '完成率' }],
            title: {
              // 仪表盘标题。
              show: true, // 是否显示标题,默认 true。
              offsetCenter: [0, '90%'], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              color: '#000',
              fontWeight: '100',
              fontSize: '18'
            },
            detail: {
              // 仪表盘详情，用于显示数据。
              show: true, // 是否显示详情,默认 true。
              offsetCenter: [0, '35%'], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              color: '#000',
              fontWeight: '700',
              fontSize: '20',
              formatter: '{value}%' // 格式化函数或者字符串
            }
          },
          {
            name: '业务指标2',
            type: 'gauge',
            // detail: { formatter: '{value}%' },
            data: [{ value: 60, name: '完成率2' }],
            title: {
              // 仪表盘标题。
              show: true, // 是否显示标题,默认 true。
              offsetCenter: [0, '10%'], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              color: 'red',
              fontWeight: '100',
              fontSize: '18'
            },
            detail: {
              // 仪表盘详情，用于显示数据。
              show: true, // 是否显示详情,默认 true。
              offsetCenter: [0, '15%'], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              color: 'red',
              fontWeight: '700',
              fontSize: '20',
              formatter: '{value}%' // 格式化函数或者字符串
            }
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      // this.myChartRing.setOption(option)
      this.myChartRing.setOption(option, true)
      setInterval(() => {
        option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0
        option.series[1].data[0].value = (Math.random() * 100).toFixed(2) - 0
        this.myChartRing.setOption(option, true)
      }, 2000)
    }
  },
  mounted() {
    this.drawChartRing(this)
  }
}
</script>

<style lang="less" scoped>
.shanxingContainer {
  height: 500px;
  width: 80%;
  margin: 20px auto;
  .ring {
    width: 100%;
    // flex: 1 3 300px;
    height: 450px;
    background: bisque;
  }
}
</style>
