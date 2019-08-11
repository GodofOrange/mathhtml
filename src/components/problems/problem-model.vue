<template>
  <div id="problem_model">
    <h1>考研</h1>
    <el-divider></el-divider>
    <div style="margin-top: 20px;margin-right: 15%;margin-left: 15%">
      <el-table ref="filterTable" :data="tableData">
        <el-table-column prop="id" label="#" column-key="date"></el-table-column>
        <el-table-column prop="title" label="题目标题"></el-table-column>
        <el-table-column prop="percentage" label="通过率"></el-table-column>
        <el-table-column prop="tag" label="难度"></el-table-column>
        <el-table-column label="题目链接"><el-button size="mini" @click="turnToProblem">进入</el-button></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'problem-model',
  data () {
    return {
      tableData: [{
        id: '1',
        title: '微积分',
        percentage: '30%',
        tag: '考研'
      }, {
        id: '2',
        title: '导数',
        percentage: '30%',
        tag: '考研'
      }, {
        id: '3',
        title: '二重积分',
        percentage: '30%',
        tag: '考研'
      }, {
        id: '4',
        title: '导数',
        percentage: '30%',
        tag: '考研'
      }, {
        id: '5',
        title: '导数',
        percentage: '30%',
        tag: '考研'
      }, {
        id: '6',
        title: '导数',
        percentage: '30%',
        tag: '考研'
      }]
    }
  },
  methods: {
    turnToProblem () {
      this.$router.replace({
        path: '/problem'
      })
    }
  }
}
</script>

<style scoped>
#problem_model{
  margin-top: 10px;
  margin-right: 3%;
  margin-left: 3%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  text-align: center;
}
</style>
