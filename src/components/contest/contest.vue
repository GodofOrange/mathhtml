<template>
    <div id="contest">
      <div class="title-body">
      <h1>欢迎来到精互同游戏式竞赛中心</h1>
      </div>
      <el-divider></el-divider>

      <el-card shadow="hover" style="background-color: darkgray" class="box-card">
        进入游戏竞赛
      </el-card>
      <el-card shadow="hover" style="background-color: darkgray" class="box-card">
        查看排行榜
      </el-card>
      <el-card shadow="hover" style="background-color: darkgray" class="box-card">
        进入游戏社区板块
      </el-card>
      <el-card shadow="hover" style="background-color: darkgray" class="box-card">
        知识点覆盖
      </el-card>
    </div>
</template>

<script>
export default {
  name: 'contest'
}
</script>

<style scoped>
  #contest{
    margin-top: 10px;
    margin-right: 3%;
    margin-left: 3%;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    text-align: center;
  }
  .box-card {
    margin: auto;
    width: 480px;
  }
</style>
