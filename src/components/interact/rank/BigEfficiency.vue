<template>
    <div>
      <el-row>
        <el-col :span="12">
      <h3>总得分率</h3>
      <v-chart :options="BigEfficiencyOption"></v-chart>
        </el-col>
        <el-col :span="12">
          <h3>我的得分率</h3>
          <v-chart :options="BigEfficiencyOption"></v-chart>
        </el-col>
      </el-row>
    </div>
</template>

<script>
require('echarts/lib/chart/pie')
require('echarts/lib/component/legend')
require('echarts/lib/component/tooltip')
export default {
  name: 'efficiency',
  data () {
    return {
      BigEfficiencyOption: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['30%分及以下', '60%分及以下', '70%分及以下', '80%分及以下', '80%分以上']
        },
        series: [
          {
            name: '得分率',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: 335, name: '30%分及以下'},
              {value: 310, name: '60%分及以下'},
              {value: 234, name: '70%分及以下'},
              {value: 135, name: '80%分及以下'},
              {value: 1548, name: '80%分以上'}
            ]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
