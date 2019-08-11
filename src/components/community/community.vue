<template>
    <div id="community">
      <div class="title-body">
        <h1>欢迎来到互动社区</h1>
      </div>
      <el-divider></el-divider>

      <el-card shadow="hover" style="background-color: darkgray" class="box-card" @click.native="turnToAskAndAnswer">
        师生答疑
      </el-card>
      <el-card shadow="hover" style="background-color: darkgray" class="box-card" @click.native="turnToCommunityRank">
        社区积分排行
      </el-card>
      <el-card shadow="hover" style="background-color: darkgray" class="box-card">
        师生专区
      </el-card>
      <el-card shadow="hover" style="background-color: darkgray" class="box-card" @click.native="turnToBigMath">
        大数世界
      </el-card>
      <el-card shadow="hover" style="background-color: darkgray" class="box-card">
        师生灌水专区
      </el-card>
    </div>
</template>

<script>
export default {
  name: 'community',
  methods: {
    turnToAskAndAnswer () {
      this.$router.replace({
        path: '/community/ask_and_answer'
      })
    },
    turnToCommunityRank () {
      this.$router.replace({
        path: '/community/community_rank'
      })
    },
    turnToBigMath () {
      this.$router.replace({
        path: '/community/BigMath'
      })
    }
  }
}
</script>

<style scoped>
  #community{
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
