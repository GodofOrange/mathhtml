<template>
    <div>
      <div>
        <h3>学习路线图</h3>
      <v-chart :options="BigMathGraph" style="margin: auto"></v-chart>
      </div>
      <el-divider/>
      <div>
        <el-row>
          <el-col :span="12">
            <h3>题库学习图</h3>
          <v-chart :options="HaveBeanStudy" style="margin: auto"></v-chart>
          </el-col>
          <el-col :span="12">
            <h3>题目解析学习图</h3>
          <v-chart :options="HaveBeanStudy" style="margin: auto"></v-chart>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
require('echarts/lib/component/tooltip')
require('echarts/lib/chart/graph')
require('echarts/lib/component/legend')
export default {
  name: 'BigMathGraph',
  data () {
    return {
      HaveBeanStudy: {
        title: {
          text: '某站点用户访问来源',
          subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['已经学完了', '学了80%', '学了60%', '学了40%', '未学']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 335, name: '已经学完了'},
              {value: 310, name: '学了80%'},
              {value: 234, name: '学了60%'},
              {value: 135, name: '学了40%'},
              {value: 1548, name: '未学'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      },
      BigMathGraph: {
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: true,
            label: {
              normal: {
                show: true
              }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              normal: {
                textStyle: {
                  fontSize: 20
                }
              }
            },
            data: [{
              name: '节点1',
              x: 300,
              y: 300
            }, {
              name: '节点2',
              x: 800,
              y: 300
            }, {
              name: '节点3',
              x: 550,
              y: 100
            }, {
              name: '节点4',
              x: 550,
              y: 500
            }],
            // links: [],
            links: [{
              source: 0,
              target: 1,
              symbolSize: [5, 20],
              label: {
                normal: {
                  show: true
                }
              },
              lineStyle: {
                normal: {
                  width: 5,
                  curveness: 0.2
                }
              }
            }, {
              source: '节点2',
              target: '节点1',
              label: {
                normal: {
                  show: true
                }
              },
              lineStyle: {
                normal: { curveness: 0.2 }
              }
            }, {
              source: '节点1',
              target: '节点3'
            }, {
              source: '节点2',
              target: '节点3'
            }, {
              source: '节点2',
              target: '节点4'
            }, {
              source: '节点1',
              target: '节点4'
            }],
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: 2,
                curveness: 0
              }
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
