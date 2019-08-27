<template>
  <div id="problem_model">
    <h1>{{title}}</h1>
    <el-divider></el-divider>
    <div style="margin-top: 20px;margin-right: 15%;margin-left: 15%">
      <el-table ref="filterTable" :data="tableData">
        <el-table-column prop="id" label="#" column-key="date"></el-table-column>
        <el-table-column prop="title" label="题目标题"></el-table-column>
        <el-table-column prop="percentage" label="通过率"></el-table-column>
        <el-table-column prop="level" label="难度"></el-table-column>
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
      tableData: [],
      title: ''
    }
  },
  mounted () {
    this.$axios({method: 'GET', url: this.$baseUrl + '/ProblemclassfiyListGet/getListById?id=' + this.$route.query.id}).then((response) => {
      this.tableData = response.data // 请求成功返回的数据
    }).catch((error) => {
      console.log(error) // 请求失败返回的数据
    })
    this.title = this.$route.query.title
  },
  methods: {
    turnToProblem () {
      this.$router.push({
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
