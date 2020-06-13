<template>
  <div class="staticEchartContainer">
    <!-- 第一组 -->
    <div class="barRingTitleWrap">
      <div class="taskResourceTitle">任务来源分布统计</div>
      <div class="btnCompWrap">
        <Button>全部</Button>
        <Button>今天</Button>
        <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" class="dataRangeCla"></DatePicker>
      </div>
    </div>
    <div class="barRingWrap">
      <div id="barId" class="barCla">我是柱状图</div>
      <div id="ringId" class="ringCla">我是环形图</div>
    </div>

    <!-- 第二组 -->
    <div class="brokenWrap">
      <div class="taskResourceTitle">各来源任务趋势图</div>
      <div class="btnCompWrap">
        <Select v-model="selectResource" style="width:200px;">
          <Option v-for="item in resourceList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" class="dataRangeCla"></DatePicker>
      </div>
    </div>
    <div class="brokenGraphWrap">
      <div id="brokenTotalId" class="brokenTotalCla">
        <div class="newTarget">
          <div class="totalType">1</div>
          <div class="totalNum">2</div>
        </div>
        <div class="newTarget">
          <div class="totalType">1</div>
          <div class="totalNum">2</div>
        </div>

      </div>
      <div id="brokenId" class="brokenGraphCla">折线图</div>
    </div>

    <!-- 第三组 -->
    <div class="jobDomainWrap">
      <div class="jobWrap">
        <div class="titleWrap">
          <div class="taskResourceTitle">作业节点状态</div>
          <div class="btnCompWrap">
            <RadioGroup v-model="domainChoice" type="button">
              <Radio label="large">公有云域</Radio>
              <Radio label="default">私有云域</Radio>
            </RadioGroup>
            <RadioGroup v-model="memoCpuChoice" type="button">
              <Radio label="large">内存</Radio>
              <Radio label="default">CPU</Radio>
            </RadioGroup>
          </div>
        </div>
        <div class="graphWrapRight">
          <div id="eachOneid1" class="eachOneCla">tu1</div>
          <div class="eachOneCla">我是图形2</div>
          <div class="eachOneCla">tu3</div>
          <div class="eachOneCla">我是图形4</div>
          <div class="eachOneCla">tu5</div>
          <div class="eachOneCla">我是图形6</div>
          <div class="eachOneCla">tu7</div>
          <div class="eachOneCla">我是图形8</div>
          <div class="eachOneCla">tu9</div>
          <div class="eachOneCla">我是图形10</div>
          <div class="eachOneCla">tu11</div>
          <div class="eachOneCla">我是图形12</div>

        </div>
      </div>
      <div class="domainWrap">
        <div class="titleWrap">
          <div class="taskResourceTitle">各域任务分布</div>
          <div class="btnCompWrap">
            <Button>全部</Button>
            <Button>今天</Button>
            <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" class="dataRangeCla"></DatePicker>
          </div>
        </div>
        <div id="graphWrapLeftId" class="graphWrapLeft">
          我是图形
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'echartContainer',
  data() {
    return {
      domainChoice: '',
      memoCpuChoice: '',
      selectResource: '',
      resourceList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        }
      ],
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
      _this.myChartBar1 = this.$echarts.init(document.getElementById('barId'))
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: '各来源数量统计'
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
            barWidth: 25,
            data: [50, 20, 10, 10, 5, 5]
            // data: ['50%', '20%', '10%', '10%', '5%', '5%']
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      this.myChartBar1.setOption(option)
    },
    drawChart2(_this) {
      // 基于准备好的dom，初始化echarts实例
      _this.myChartBar2 = this.$echarts.init(document.getElementById('ringId'))
      // 指定图表的配置项和数据
      let option = {
        title: {
          // 标题组件
          text: '各来源分布占比',
          left: '50px', // 标题的位置 默认是left，其余还有center、right属性
          textStyle: {
            color: '#436EEE',
            fontSize: 16
          }
        },
        tooltip: {
          // 提示框组件
          trigger: 'item', // 触发类型(饼状图片就是用这个)
          formatter: '{a} <br/>{b} : {c} ({d}%)' // 提示框浮层内容格式器
        },
        color: ['#48cda6', '#436EEE', '#11abff', '#ffdf6f', '#968ade'], // 手动设置每个图例的颜色
        legend: {
          // 图例组件
          right: 100, // 图例组件离右边的距离
          orient: '', // 布局  纵向布局 图例标记居文字的左边 horizontal vertical则反之
          width: 90,
          // height:200,      //图行例组件的宽度,默认自适应
          x: 'right', // 图例显示在右边
          y: 'center', // 图例在垂直方向上面显示居中
          itemWidth: 10, // 图例标记的图形宽度
          itemHeight: 10, // 图例标记的图形高度
          data: ['正常', '一般', '提示', '较急', '特急'],
          textStyle: {
            // 图例文字的样式
            color: '#333', // 文字颜色
            fontSize: 12 // 文字大小
          }
        },
        series: [
          // 系列列表
          {
            name: '设备状态', // 系列名称
            type: 'pie', // 类型 pie表示饼图
            center: ['35%', '50%'], // 设置饼的原心坐标 不设置就会默认在中心的位置
            radius: ['50%', '70%'], // 饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
            clockWise: false, // 默认逆时针
            avoidLabelOverlap: false, // 避免标注重叠
            hoverAnimation: true, // 移入放大
            // silent: true,// 鼠标移入无效果
            label: {
              //  饼图图形上的文本标签
              normal: {
                // normal 是图形在默认状态下的样式
                show: true,
                position: 'center',
                color: '#ccc',
                fontSize: 12,
                // fontWeight: 'bold',
                // formatter: '任务总数\n12324' // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
                // formatter: '{d}%\n{b}' // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
                formatter: function(val) {
                  console.log(val)
                  // 让series 中的文字进行换行
                  return '任务总数\n12324'
                  // return (
                  //   '<div>sdf</div>'
                  // )
                }
              },
              emphasis: {
                show: false, // 鼠标移入不变化
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },

            itemStyle: {
              // 图形样式
              normal: {
                // normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                label: {
                  // 饼图图形上的文本标签
                  show: false // 平常不显示
                },
                labelLine: {
                  // 标签的视觉引导线样式
                  show: true // 平常不显示
                }
              },
              emphasis: {
                // normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                label: {
                  // 饼图图形上的文本标签
                  show: true,
                  position: 'center',
                  textStyle: {
                    fontSize: '10',
                    fontWeight: 'bold'
                  }
                }
              }
            },
            data: [
              { value: 80, name: '正常' },
              { value: 10, name: '一般' },
              { value: 30, name: '提示' },
              { value: 20, name: '较急' },
              { value: 25, name: '特急' }
            ]
          }
        ]
      }

      // 使用刚指定的配置项和数据显示图表。
      this.myChartBar2.setOption(option)
    },
    drawChart3(_this) {
      // 基于准备好的dom，初始化echarts实例
      _this.myChartBar3 = this.$echarts.init(
        document.getElementById('brokenId')
      )
      // 指定图表的配置项和数据
      let option = {
        title: {
          // text: '折线图堆叠'
        },
        tooltip: {
          // trigger: 'axis'
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
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          // type: 'category',
          // boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          // type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            // stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            // stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            // stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            // stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            // stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      this.myChartBar3.setOption(option)
    },
    drawChart4(_this) {
      // 基于准备好的dom，初始化echarts实例
      _this.myChartBar4 = this.$echarts.init(
        document.getElementById('eachOneid1')
      )
      // 指定图表的配置项和数据
      var dataArr = 30
      var colorSet = {
        color: '#468EFD'
      }
      let option = {
        backgroundColor: '#fff',
        tooltip: {
          // formatter: '{a} <br/>{b} : {c}%'
        },

        series: [
          {
            name: '刻度环',
            type: 'gauge',
            // center: ['20%', '50%'],
            radius: '90%',

            splitNumber: 20,
            axisLine: {
              lineStyle: {
                color: [
                  [dataArr / 100, '#468EFD'],
                  [1, '#ccc']
                ],
                width: 8
              }
            },
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            itemStyle: {
              show: false
            },
            detail: {
              formatter: function(value) {
                if (value !== 0) {
                  var num = Math.round(value)
                  return parseInt(num).toFixed(0) + ' %'
                } else {
                  return 0
                }
              },
              offsetCenter: [0, '80%'],
              textStyle: {
                padding: [4, 5, 3, 5],
                fontSize: 14,
                width: 40,
                fontWeight: '80',
                backgroundColor: dataArr > 20 ? 'rgba(3, 191, 22, 1)' : 'red',
                color: '#fff'
              }
            },
            data: [
              {
                name: 'cup',
                value: dataArr
              }
            ],
            pointer: {
              show: true,
              length: '75%',
              radius: '0%',
              width: 5 // 指针粗细
            },
            animationDuration: 4000
          },
          {
            name: '刻度数字',
            type: 'gauge',
            //  center: ['20%', '50%'],
            radius: '60%',
            min: 0, // 最小刻度
            max: 100, // 最大刻度
            splitNumber: 10, // 刻度数量
            startAngle: 225,
            endAngle: -45,
            axisLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: [[1, 'rgba(0,0,0,0)']]
              }
            }, // 仪表盘轴线
            axisLabel: {
              show: true,
              color: '#333',
              distance: 10,
              formatter: function(v) {
                switch (v + '') {
                  case '0':
                    return '0'
                  // case '10':
                  //   return '10'
                  case '20':
                    return '20'
                  // case '30':
                  //   return '30'
                  case '40':
                    return '40'
                  // case '50':
                  //   return '50'
                  case '60':
                    return '60'
                  case '80':
                    return '80'
                  case '100':
                    return '100'
                }
              }
            }, // 刻度标签。
            axisTick: {
              show: false,
              splitNumber: 7,
              lineStyle: {
                color: colorSet.color, // 用颜色渐变函数不起作用
                width: 1
              },
              length: -8
            }, // 刻度样式
            splitLine: {
              show: false,
              length: -20,
              lineStyle: {
                color: colorSet.color // 用颜色渐变函数不起作用
              }
            }, // 分隔线样式
            detail: {
              show: false
            },
            pointer: {
              show: false
            }
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      this.myChartBar4.setOption(option)
      setInterval(() => {
        option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0
        this.myChartBar4.setOption(option, true)
      }, 2000)
    },
    drawChart5(_this) {
      // 基于准备好的dom，初始化echarts实例
      _this.myChartBar5 = this.$echarts.init(
        document.getElementById('graphWrapLeftId')
      )
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

    const boxes = document.querySelectorAll('.staticEchartContainer')
    const myObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        console.log('entry:', entry)
        const infoE1 = entry.target.querySelector('.aa')
        const width = Math.floor(entry.contentRect.width)
        console.log(infoE1, width)
        this.myChartBar1.resize()
        this.myChartBar2.resize()
        this.myChartBar3.resize()
        this.myChartBar4.resize()
        this.myChartBar5.resize()
      }
    })

    // console.log(boxs)

    boxes.forEach(box => {
      console.log(box)
      myObserver.observe(box)
    })
  }
}
</script>

<style lang="less" scoped>
@import './pro_echarts.less';
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
