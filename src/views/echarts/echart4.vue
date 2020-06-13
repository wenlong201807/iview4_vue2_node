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

      // 配置细节https://www.w3cschool.cn/echarts_tutorial/echarts_tutorial-mec528xa.html
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: '各来源数据量统计'
        },
        tooltip: {
          show: true, // 是否显示提示框组件
          trigger: 'axis', // 坐标轴触发，用在柱状图，折线图等会使用类目轴的图表中使用
          // formatter: function(datas) {
          //   return datas[0].name + ' ： ' + datas[0].data + '%'
          // eslint-disable-next-line no-irregular-whitespace
          // 由于可能有多个series，因此  params[0].name和.data表示第一个series的该坐标点 xAxis值和yAxis值
          // }
          // ————————————————
          // 版权声明：本文为CSDN博主「daixyhymn」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
          // 原文链接：https://blog.csdn.net/qq_33580178/article/details/80604313

          formatter: function(a) {
            console.log(a)
            var res = ''
            var nameList = a
            for (var i = 0; i < a.length; i++) {
              if (nameList[i].data !== undefined) {
                res +=
                  nameList[i].seriesName +
                  ':' +
                  nameList[i].data +
                  '%' +
                  '<br>' +
                  '时间' +
                  ':' +
                  '<div style="margin-left: 8px;color:red;" class="tooltipCla">hh</div>' +
                  nameList[i].data +
                  '%' +
                  '<br>'
              }
            }
            res = res.split('<br>')
            return res[0] + '<br>' + res[1]
          }
        },
        legend: {
          // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
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
              formatter: '{value}%', // y轴显示百分号
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
                // height: 15,
                // padding: 5,
                // marginRight: 9,
                type: 'dash'
              }
            }
          }
        ],
        series: [
          {
            name: '邮件营销',
            self: 'asdf',
            type: 'line',
            stack: '总量',
            itemStyle: {
              normal: {
                lineStyle: {
                  color: 'rgb(22,66,44)'
                  // color: '#112233'
                }
              }
            },
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
            // name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          }
          // {
          //   name: '搜索引擎',
          //   type: 'line',
          //   stack: '总量',
          //   data: [820, 932, 901, 934, 1290, 1330, 1320]
          // }
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

  .tooltipCla {
    height: 50px;
    width: 150px;
    background: yellow;
    color: red;
  }
}
</style>
