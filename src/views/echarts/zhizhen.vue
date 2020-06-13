<template>
  <div>sdf</div>
</template>

<script>
export default {
  data() {
    return {
      /*

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
                  return parseInt(num).toFixed(0) + '%'
                } else {
                  return 0
                }
              },
              offsetCenter: [0, '80%'],
              textStyle: {
                padding: [3, 3, 3, 3],
                fontSize: 14,
                fontWeight: '80',
                backgroundColor: 'yellow',
                color: 'black'
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
    */
    }
  }
}
</script>
