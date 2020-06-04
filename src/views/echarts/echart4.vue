<template>
  <div class="shanxingContainer" id="shanxingContainerId">
    <h2>echart4</h2>
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
        title: {
          text: '各来源数据量统计'
        },
        tooltip: {
          trigger: 'axis'
          // formatter: function(a) {
          //   console.log(a)
          //   var res = ''
          //   var nameList = a
          //   for (var i = 0; i < a.length; i++) {
          //     if (nameList[i].data != undefined) {
          //       res +=
          //         nameList[i].seriesName + ':' + nameList[i].data + '%' + '<br>'
          //     }
          //   }
          //   res = res.split('<br>')
          //   return res[0] + '<br>' + res[1]
          // }
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
          // feature: {
          //   saveAsImage: {}
          // }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: [
          {
            type: 'value',
            // min: 50, // 设置y轴刻度的最小值
            // max: 500, // 设置y轴刻度的最大值
            // splitNumber: 100, // 设置y轴刻度间隔个数
            axisLine: {
              lineStyle: {
                // 设置y轴颜色
                color: '#ccc'
              }
            },
            axisTick: {
              // ---坐标轴 刻度
              show: false, // ---是否显示
              inside: true, // ---是否朝内
              lengt: 3, // ---长度
              lineStyle: {
                // color:'red',//---默认取轴线的颜色
                width: 1,
                type: 'solid'
              }
            },
            axisLabel: {
              // ---坐标轴 标签
              show: true, // ---是否显示
              inside: false, // ---是否朝内
              rotate: 0, // ---旋转角度
              margin: 8 // ---刻度标签与轴线之间的距离
              // color:'red',//---默认取轴线的颜色
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#ccc',
                width: 1,
                marginRight: 2,
                type: 'dash'
              }
            }
          }
        ],
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
    background: bisque;
  }
}
</style>
