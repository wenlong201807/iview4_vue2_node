<template>
  <div class="shanxingContainer" id="shanxingContainerId">
    <h2>echart5</h2>
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
          // 标题组件
          text: '各来源分布占比',
          left: '50px', // 标题的位置 默认是left，其余还有center、right属性
          textStyle: {
            color: '#436EEE',
            fontSize: 27
          }
        },
        tooltip: {
          // 提示框组件
          trigger: 'item', // 触发类型(饼状图片就是用这个)
          formatter: '{a} <br/>{b} : {c} ({d}%)' // 提示框浮层内容格式器
        },
        color: ['#48cda6', '#fd87fb', '#11abff', '#ffdf6f', '#968ade'], // 手动设置每个图例的颜色
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
        graphic: [
          {
            // 环形图中间添加文字
            type: 'text', // 通过不同top值可以设置上下显示
            left: '20%',
            top: '45%',
            style: {
              text: '总量',
              textAlign: 'center',
              fill: 'red', // 文字的颜色
              width: 30,
              background: 'yellow',
              height: 30,
              fontSize: 20,
              fontFamily: 'Microsoft YaHei'
            }
          },
          {
            // 环形图中间添加文字
            type: 'text', // 通过不同top值可以设置上下显示
            left: '20%',
            top: '49%',
            style: {
              text: '666',
              // border:'1px solid ',
              textAlign: 'center',
              fill: 'blue', // 文字的颜色
              // width: 30,
              // height: 30,
              fontSize: 20,
              fontFamily: 'Microsoft YaHei'
            }
          }
        ],
        // ————————————————
        // 版权声明：本文为CSDN博主「风清场」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
        // 原文链接：https://blog.csdn.net/caidingnu/article/details/87880164
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
                show: false,
                position: 'center',
                color: '#ccc',
                fontSize: 12
                // fontWeight: 'bold',
                // formatter: '任务总数\n12324' // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
                // formatter: '{d}%\n{b}' // {b}:数据名； {c}：数据值； {d}：百分比，可以自定义显示内容，
                // formatter: function(val) {
                //   console.log(val)
                //   return '任务总数\n12324'
                // }
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
