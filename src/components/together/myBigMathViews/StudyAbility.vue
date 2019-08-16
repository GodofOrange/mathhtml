<template>
    <div>
      <el-row>
        <el-col :span="12">
      <div>
        <h3>解题分布</h3>
        <h4>总解题数量: 70</h4>
        <v-chart :options="ProblemSolveOption" style="margin: auto"></v-chart>
      </div>
        </el-col>
        <el-col :span="12">
      <div>
        <h3>题目正确率及科目分布</h3>
        <v-chart :options="trueSolveOption" style="margin: auto"></v-chart>
      </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
require('echarts/lib/component/tooltip')
require('echarts/lib/component/visualMap')
require('echarts/lib/chart/pie')
require('echarts/lib/component/visualMapPiecewise')
export default {
  name: 'StudyAbility',
  data () {
    return {
      trueSolveOption: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          x: 'center',
          y: 'bottom',
          data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
        },
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {
              show: true,
              type: ['pie', 'funnel']
            },
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        series: [
          {
            name: '面积模式',
            type: 'pie',
            roseType: 'area',
            data: [
              {value: 10, name: 'rose1'},
              {value: 5, name: 'rose2'},
              {value: 15, name: 'rose3'},
              {value: 25, name: 'rose4'},
              {value: 20, name: 'rose5'},
              {value: 35, name: 'rose6'},
              {value: 30, name: 'rose7'},
              {value: 40, name: 'rose8'}
            ]
          }
        ]
      },
      ProblemSolveOption: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: '学习能力',
            type: 'pie',
            radius: '100%',
            center: ['50%', '50%'],
            data: [
              {value: 335, name: '线性代数'},
              {value: 310, name: '高等数学'},
              {value: 274, name: '概率论'},
              {value: 235, name: '数学建模'},
              {value: 400, name: '考研题库'}
            ].sort(function (a, b) { return a.value - b.value }),
            roseType: 'radius',
            label: {
              normal: {
                textStyle: {
                  color: '#0600c2'
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: '#5fabc2'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              }
            },
            itemStyle: {
              normal: {
                color: '#8397c2',
                shadowBlur: 200,
                shadowColor: '#9aa9c2'
              }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 200
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
