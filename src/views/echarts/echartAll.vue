<template>
  <div class="echartContainer">
    <div id="ringId1" class="ring1"></div>
    <div id="ringId2" class="ring2"></div>
    <div id="ringId3" class="ring3">3</div>
    <div id="ringId4" class="ring4">4</div>
    <div id="ringId5" class="ring5">5</div>

  </div>
</template>
<script>
export default {
  name: 'echartContainer',
  data() {
    return {
      myChartBar1: '',
      myChartBar2: '',
      myChartBar3: '',
      myChartBar4: '',
      myChartBar5: ''
    }
  },
  methods: {
    drawChart1(_this) {
      // 基于准备好的dom，初始化echarts实例
      _this.myChartBar1 = this.$echarts.init(document.getElementById('ringId1'))
      // 指定图表的配置项和数据
      let option = {
        angleAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        radiusAxis: {},
        polar: {},
        series: [
          {
            type: 'bar',
            data: [1, 2, 3, 4, 3, 5, 1],
            coordinateSystem: 'polar',
            name: 'A',
            stack: 'a'
          },
          {
            type: 'bar',
            data: [2, 4, 6, 1, 3, 2, 1],
            coordinateSystem: 'polar',
            name: 'B',
            stack: 'a'
          },
          {
            type: 'bar',
            data: [1, 2, 3, 4, 1, 2, 5],
            coordinateSystem: 'polar',
            name: 'C',
            stack: 'a'
          }
        ],
        legend: {
          show: true,
          data: ['A', 'B', 'C']
        }
      }
      // 使用刚指定的配置项和数据显示图表。
      this.myChartBar1.setOption(option)
    },
    drawChart2(_this) {
      // 基于准备好的dom，初始化echarts实例
      _this.myChartBar2 = this.$echarts.init(document.getElementById('ringId2'))
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
              offsetCenter: ['30%', '70%'], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
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
              offsetCenter: ['-30%', '70%'], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              color: 'red',
              fontWeight: '100',
              fontSize: '18'
            },
            detail: {
              // 仪表盘详情，用于显示数据。
              show: true, // 是否显示详情,默认 true。
              offsetCenter: ['0', '45%'], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              color: 'red',
              fontWeight: '700',
              fontSize: '20',
              formatter: '{value}%' // 格式化函数或者字符串
            }
          }
        ]
      }

      // 使用刚指定的配置项和数据显示图表。
      this.myChartBar2.setOption(option)

      setInterval(() => {
        option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0
        option.series[1].data[0].value = (Math.random() * 100).toFixed(2) - 0
        this.myChartBar2.setOption(option, true)
      }, 2000)
    },
    drawChart3(_this) {
      // 基于准备好的dom，初始化echarts实例
      _this.myChartBar3 = this.$echarts.init(document.getElementById('ringId3'))
      // 指定图表的配置项和数据
      let option = {
        dataset: {
          source: [
            ['score', 'amount', 'product'],
            [89.3, 58212, 'Matcha Latte'],
            [57.1, 78254, 'Milk Tea'],
            [74.4, 41032, 'Cheese Cocoa'],
            [50.1, 12755, 'Cheese Brownie'],
            [89.7, 20145, 'Matcha Cocoa'],
            [68.1, 79146, 'Tea'],
            [19.6, 91852, 'Orange Juice'],
            [10.6, 101852, 'Lemon Juice'],
            [32.7, 20112, 'Walnut Brownie']
          ]
        },
        grid: { containLabel: true },
        xAxis: { name: 'amount' },
        yAxis: { type: 'category' },
        visualMap: {
          orient: 'horizontal',
          left: 'center',
          min: 10,
          max: 100,
          text: ['High Score', 'Low Score'],
          // Map the score column to color
          dimension: 0,
          inRange: {
            color: ['#D7DA8B', '#E15457']
          }
        },
        series: [
          {
            type: 'bar',
            encode: {
              // Map the "amount" column to X axis.
              x: 'amount',
              // Map the "product" column to Y axis
              y: 'product'
            }
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      this.myChartBar3.setOption(option)
    },
    drawChart4(_this) {
      // 基于准备好的dom，初始化echarts实例
      _this.myChartBar4 = this.$echarts.init(document.getElementById('ringId4'))
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          show: false
          // feature: {
          //   saveAsImage: {}
          // }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      this.myChartBar4.setOption(option)
    },
    drawChart5(_this) {
      // 基于准备好的dom，初始化echarts实例
      _this.myChartBar5 = this.$echarts.init(document.getElementById('ringId5'))
      // 指定图表的配置项和数据
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 10,
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ]
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      this.myChartBar5.setOption(option)
    }
  },
  mounted() {
    this.drawChart1(this)
    this.drawChart2(this)
    this.drawChart3(this)
    this.drawChart4(this)
    this.drawChart5(this)
    // this.drawChartRing(this)
    window.onresize = e => {
      // console.log('改变屏幕宽度时触发', e)
      this.myChartBar1.resize()
      this.myChartBar2.resize()
      this.myChartBar3.resize()
      this.myChartBar4.resize()
      this.myChartBar5.resize()
      // this.drawChartRing.resize()
    }

    const boxs = document.querySelector('.echartContainer')
    const myObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        console.log('entry:', entry)
        this.myChartBar1.resize()
        this.myChartBar2.resize()
        this.myChartBar3.resize()
        this.myChartBar4.resize()
        this.myChartBar5.resize()
      }
    })

    // console.log(boxs)

    boxs.forEach(box => {
      console.log(box)
      myObserver(box)
    })
  }
}
</script>

<style lang="less" scoped>
.echartContainer {
  height: 900px;
  min-width: 900px;
  // background: yellow;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
  .ring1 {
    // flex: 3 5 500px;
    width: 45%;
    height: 450px;
    // background: blueviolet;
  }
  .ring2 {
    width: 45%;
    height: 450px;
    // background: bisque;
  }
  .ring3 {
    width: 30%;
    height: 450px;
    // background: rgb(196, 255, 214);
  }
  .ring4 {
    width: 30%;
    height: 450px;
    // background: rgb(255, 196, 235);
  }
  .ring5 {
    width: 30%;
    height: 450px;
    // background: rgb(239, 255, 196);
  }
}
</style>
