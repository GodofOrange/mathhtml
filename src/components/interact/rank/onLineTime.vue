<template>
    <div>
      <el-row>
        <el-col :span="12">
      <div>
        <h3>总在线时长</h3>
      <v-chart :options="OnlineTime"></v-chart>
      </div>
        </el-col>
        <el-col :span="12">
      <div>
        <h3>我的在线时长</h3>
        <v-chart :options="OnlineTime"></v-chart>
      </div>
        </el-col>
        <el-col :span="12">
          <div>
            <h3>竞技在线总时长</h3>
            <v-chart :options="OnlineTime"></v-chart>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            <h3>我的竞技在线时长</h3>
            <v-chart :options="OnlineTime"></v-chart>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'onLineTime',
  data () {
    return {
      OnlineTime: {
        xAxis: {
          type: 'category',
          axisLine: {show: false},
          axisTick: {show: false},
          axisLabel: {color: '#999'},
          data: ['-10%以下', '-10%至-6%', '6%至-4%', '-4%至-2%', '-2%至0%', '0%至2%', '2%至4%', '4%至6%', '6%至10%', '10%以上']
        },
        yAxis: [
          {
            splitNumber: 5,
            scale: true,
            splitLine: {show: true, lineStyle: {color: ['#b6b6b6'], opacity: 0.1}},
            axisLine: {show: false},
            axisTick: {show: false},
            type: 'value',
            name: '',
            nameTextStyle: {
              fontFamily: 'MicrosoftYaHei',
              fontSize: 12,
              color: 'rgba(255,255,255,0.6)',
              align: 'left'
            },
            nameGap: 25,
            axisLabel: {formatter: '{value}', color: '#999'}
          }
        ],
        series: [
          {
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {normal: {show: true, position: 'top', color: 'rgba(255,255,255,0.6)'}},
            itemStyle: {
              normal: {
                barBorderRadius: 4,
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: '#E93D3D'
                  }, {
                    offset: 1, color: '#EE7B53'
                  }]
                }}},
            barWidth: 18,
            data: [7, 2, 20, 8, 31, '-', '-', '-', '-', '-', '-']
          },
          {
            name: '支出',
            type: 'bar',
            stack: '总量',
            label: {normal: {show: true, position: 'top', color: 'rgba(255,255,255,0.6)'}},
            itemStyle: {
              normal: {
                barBorderRadius: 4,
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: '#4CC453'
                  }, {
                    offset: 1, color: '#96D056'
                  }]
                }}},
            barWidth: 18,
            data: ['-', '-', '-', '-', '-', '-', 46, 40, 16, 8, 9]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
