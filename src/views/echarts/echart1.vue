<template>
  <div class="shanxingContainer" id="shanxingContainerId">
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
        // backgroundColor: 'red',
        backgroundColor: '#fff',
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },

        series: [
          {
            type: 'gauge',
            axisLine: {
              lineStyle: {
                width: 2,
                color: [
                  [0.2, '#000000'],
                  [0.8, 'green'],
                  [1, 'red']
                ]
              }
            },
            splitLine: {
              length: 5
            },
            axisTick: {
              splitNumber: 2
            },
            pointer: {
              width: 3
            },
            title: {
              offsetCenter: ['-45%', '70%']
            },
            detail: { show: false },
            data: [{ value: 90, name: 'cpu 90 %' }]
          },
          {
            type: 'gauge',
            radius: '50%',
            axisLine: {
              lineStyle: {
                width: 2,
                color: [
                  [0.2, '#000000'],
                  [0.8, 'green'],
                  [1, 'red']
                ]
              }
            },
            splitLine: {
              length: 5,
              color: '#000000'
            },
            axisTick: {
              splitNumber: 2,
              color: '#000000'
            },
            pointer: {
              width: 3
            },
            title: {
              offsetCenter: ['-40%', '70%']
            },
            detail: { show: false }, // 表盘正下方的数字
            // detail: {
            //   formatter: function(value) {
            //     if (value !== 0) {
            //       var num = Math.round(value)
            //       return parseInt(num).toFixed(0) + '%'
            //     } else {
            //       return 0
            //     }
            //   },
            //   offsetCenter: ['-40%', '70%'],
            //   textStyle: {
            //     display: 'inline-block',
            //     height: '20px',
            //     width: '40px',
            //     padding: [3, 3, 3, 3],
            //     fontSize: 14,
            //     fontWeight: '60',
            //     background: 'green',
            //     color: 'red'
            //     // color: colorSet.color
            //   }
            // }, // 表盘正下方的数字
            data: [{ value: 50, name: '内存 50 %' }]
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      this.myChartRing.setOption(option)
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
    background: pink;
  }
}
</style>
