<template>
  <div class="echartContainer">
    <div id="barId" class="bar"></div>
    <div id="ringId" class="ring"></div>

  </div>
</template>
<script>
export default {
  name: 'echartContainer',
  data() {
    return {
      myChartBar: '',
      myChartRing: ''
    }
  },
  methods: {
    drawChart(_this) {
      // 基于准备好的dom，初始化echarts实例
      _this.myChartBar = this.$echarts.init(document.getElementById('barId'))
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: 'ECharts完美版'
        },
        grid: {
          // top: 100
          // x: 20,
          // y: 50,
          // x2: 10,
          // y2: 10
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      this.myChartBar.setOption(option)
    },
    drawChartRing(_this) {
      // 基于准备好的dom，初始化echarts实例
      _this.myChartRing = this.$echarts.init(document.getElementById('ringId'))

      var data = [
        [5000, 10000, 6785.71],
        [4000, 10000, 6825],
        [3000, 6500, 4463.33],
        [2500, 5600, 3793.83],
        [2000, 4000, 3060],
        [2000, 4000, 3222.33],
        [2500, 4000, 3133.33],
        [1800, 4000, 3100],
        [2000, 3500, 2750],
        [2000, 3000, 2500],
        [1800, 3000, 2433.33],
        [2000, 2700, 2375],
        [1500, 2800, 2150],
        [1500, 2300, 2100],
        [1600, 3500, 2057.14],
        [1500, 2600, 2037.5],
        [1500, 2417.54, 1905.85],
        [1500, 2000, 1775],
        [1500, 1800, 1650]
      ]
      var cities = [
        '北京',
        '上海',
        '深圳',
        '广州',
        '苏州',
        '杭州',
        '南京',
        '福州',
        '青岛',
        '济南',
        '长春',
        '大连',
        '温州',
        '郑州',
        '武汉',
        '成都',
        '东莞',
        '沈阳',
        '烟台'
      ]
      var barHeight = 50
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: '在中国租个房子有多贵？',
          x: 'center',
          bottom: '2%'
          // subtext: '市中心一室月租费（数据来源：https://www.numbeo.com）'
        },
        legend: {
          show: true,
          data: ['价格范围', '均值']
        },
        grid: {
          top: '12%' // 距离上边的距离
          // x: 20,
          // y: 180,
          // x2: 20,
          // y2: 20
        },
        angleAxis: {
          type: 'category',
          data: cities
        },
        tooltip: {
          show: true,
          formatter: function(params) {
            var id = params.dataIndex
            return (
              cities[id] +
              '<br>最低：' +
              data[id][0] +
              '<br>最高：' +
              data[id][1] +
              '<br>平均：' +
              data[id][2]
            )
          }
        },
        radiusAxis: {},
        polar: {},
        series: [
          {
            type: 'bar',
            center: ['50%', '60%'],
            itemStyle: {
              normal: {
                color: 'transparent'
              }
            },
            data: data.map(function(d) {
              return d[0]
            }),
            coordinateSystem: 'polar',
            stack: '最大最小值',
            silent: true
          },
          {
            type: 'bar',
            data: data.map(function(d) {
              return d[1] - d[0]
            }),
            coordinateSystem: 'polar',
            name: '价格范围',
            stack: '最大最小值'
          },
          {
            type: 'bar',
            itemStyle: {
              normal: {
                color: 'transparent'
              }
            },
            data: data.map(function(d) {
              return d[2] - barHeight
            }),
            coordinateSystem: 'polar',
            stack: '均值',
            silent: true,
            z: 10
          },
          {
            type: 'bar',
            data: data.map(function(d) {
              return barHeight * 2
            }),
            coordinateSystem: 'polar',
            name: '均值',
            stack: '均值',
            barGap: '-100%',
            z: 10
          }
        ]
        // legend: {
        //   show: true,
        //   data: ['A', 'B', 'C']
        // }
      }
      // 使用刚指定的配置项和数据显示图表。
      this.myChartRing.setOption(option)
    }
  },
  mounted() {
    this.drawChart(this)
    this.drawChartRing(this)
    window.onresize = e => {
      // console.log('改变屏幕宽度时触发', e)
      this.myChartBar.resize()
      this.drawChartRing.resize()
    }

    const boxs = document.querySelector('.echartContainer')
    const myObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const infoEl = entry.target.querySelector('.bar')
        const width = Math.floor(entry.contentRect.width)
        console.log(infoEl, width)
        this.myChartBar.resize()
        this.drawChartRing.resize()
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
  height: 460px;
  background: yellow;
  display: flex;
  justify-content: space-around;
  .bar {
    flex: 3 5 500px;
    height: 450px;
    background: blueviolet;
  }
  .ring {
    flex: 1 3 300px;
    height: 450px;
    background: bisque;
  }
}
</style>
