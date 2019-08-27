<template xmlns:el-col="http://www.w3.org/1999/html">
  <div>
    <h1>第xxx场次比赛</h1>
    <el-row>
      <el-col :span='8'>
    <el-card @click.native="turnToTeamEnter">
      <h3>团队报名通道</h3>
    </el-card>
      </el-col>
      <el-col :span="8">
    <el-card @click.native="turnToThesis">
      <h3>论文提交通道</h3>
    </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Enter',
  methods: {
    turnToTeamEnter () {
      this.$router.push('/extract/modeling_high/teamEnter')
    },
    turnToThesis () {
      this.$router.push('/extract/modeling_high/Thesis')
    }
  }
}
</script>

<style scoped>

</style>
