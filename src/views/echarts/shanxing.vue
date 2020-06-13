<template>
  <div class="shanxingContainer" id="shanxingContainerId">
    <DatePicker :value="value2" format="yyyy-MM-dd" type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
    <!-- <Date-picker :value="value2" v-model="value2" @on-change="aa($event)" format="yyyy-MMd-dd" type="daterange" placement="bottom-end" placeholder="选择日期"
      style="width: 200px"></Date-picker> -->
    <div id="ringId" class="ring"></div>

  </div>
</template>
<script>
export default {
  name: 'echartContainer2',
  data() {
    return {
      myChartRing: '',
      value2: ['2016-01-01', '2016-02-15']
    }
  },
  methods: {
    aa(e) {
      console.log(e)
    },
    // 日期时间计算
    getBeforeDate(n) {
      var d = new Date()
      var year = d.getFullYear()
      var mon = d.getMonth() + 1
      var day = d.getDate()
      if (day <= n) {
        if (mon > 1) {
          mon = mon - 1
        } else {
          year = year - 1
          mon = 12
        }
      }
      d.setDate(d.getDate() - n)
      year = d.getFullYear()
      mon = d.getMonth() + 1
      day = d.getDate()
      let s =
        year +
        '-' +
        (mon < 10 ? '0' + mon : mon) +
        '-' +
        (day < 10 ? '0' + day : day)
      return s
    },

    drawChartRing(_this) {
      // 基于准备好的dom，初始化echarts实例
      _this.myChartRing = this.$echarts.init(document.getElementById('ringId'))

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
      this.myChartRing.setOption(option)
    }
  },
  mounted() {
    console.log(this.getBeforeDate(1)) // 昨天的日期
    console.log(this.getBeforeDate(7)) // 前七天的日期
    this.drawChartRing(this)

    // 交叉监听
    // https://zhuanlan.zhihu.com/p/31863605

    let option = {
      root: document.querySelector('#shanxingContainerId'),
      rootMargin: '500px 0px'
    }
    var io = new IntersectionObserver(item => {
      console.log('item:', item)
    }, option)

    // 开始观察
    io.observe(document.getElementById('shanxingContainerId'))
    // 停止观察
    io.unobserve(document.querySelector('#shanxingContainerId'))
    // 关闭观察器
    io.disconnect()
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
