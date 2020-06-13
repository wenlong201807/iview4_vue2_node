<template>
  <div class="shanxingContainer" id="shanxingContainerId">
    <h2>echart2</h2>
    <div id="ringId" class="ring">

    </div>

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
          // formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
          feature: {
            restore: {},
            saveAsImage: {}
          }
        },
        series: [
          {
            name: 'cpu',
            type: 'gauge',
            // axisLine: {
            //   // 仪表盘轴线(轮廓线)相关配置。
            //   show: true, // 是否显示仪表盘轴线(轮廓线),默认 true。
            //   lineStyle: {
            //     // 仪表盘轴线样式。
            //     color: 'red', // 仪表盘的轴线可以被分成不同颜色的多段。每段的  结束位置(范围是[0,1]) 和  颜色  可以通过一个数组来表示。默认取值：[[0.2, '#91c7ae'], [0.8, '#63869e'], [1, '#c23531']]
            //     opacity: 1, // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
            //     width: 30, // 轴线宽度,默认 30。
            //     shadowBlur: 20, // (发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
            //     shadowColor: '#fff' // 阴影颜色。支持的格式同color。
            //   }
            // },

            // detail: { formatter: '{value}%' },
            data: [{ value: 50, name: 'cpu' }],
            title: {
              // 仪表盘标题。
              show: true, // 是否显示标题,默认 true。
              offsetCenter: [-30, '80%'], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              color: '#000',
              fontWeight: '100',
              fontSize: '18'
            },
            detail: {
              // 仪表盘详情，用于显示数据。
              show: true, // 是否显示详情,默认 true。
              offsetCenter: [-30, '60%'], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              color: '#000',
              fontWeight: '700',
              fontSize: '20',
              padding: [3, 3, 3, 3],
              backgroundColor: 'yellow',
              // backgroundColor: true ? 'yellow' : 'red',
              formatter: '{value}%' // 格式化函数或者字符串
            }
          },
          {
            name: '内存',
            type: 'gauge',
            // detail: { formatter: '{value}%' },
            data: [{ value: 60, name: '内存' }],
            title: {
              // 仪表盘标题。
              show: true, // 是否显示标题,默认 true。
              offsetCenter: [35, '80%'], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              color: 'black',
              fontWeight: '100',
              fontSize: '18'
            },
            detail: {
              // 仪表盘详情，用于显示数据。
              show: true, // 是否显示详情,默认 true。
              offsetCenter: [30, '60%'], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              color: 'red',
              fontWeight: '700',
              fontSize: '20',
              padding: [3, 3, 3, 3],
              backgroundColor: 'yellow',
              formatter: '{value}%' // 格式化函数或者字符串
            }
          }
          // {
          //   name: '节点名字',
          //   type: 'gauge',
          //   // detail: { formatter: '{value}%' },
          //   data: [{ value: '', name: '节点xx' }],
          //   // data: [{ value: 60, name: '内存' }],
          //   title: {
          //     // 仪表盘标题。
          //     show: true, // 是否显示标题,默认 true。
          //     offsetCenter: [0, '-110%'], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
          //     color: 'black',
          //     fontWeight: '100',
          //     fontSize: '18'
          //   },
          //   detail: {
          //     // 仪表盘详情，用于显示数据。
          //     show: false // 是否显示详情,默认 true。
          //   }
          // }
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
    width: 170px;
    // flex: 1 3 300px;
    height: 170px;
    background: bisque;
  }
}
</style>
