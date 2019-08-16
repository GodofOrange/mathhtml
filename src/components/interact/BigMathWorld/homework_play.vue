<template>
  <div>
    <el-row>
      <el-col :span="16" style="margin:3%">
      <div class="icard">
        <el-card shadow="hover" style="background-color: snow" class="box-card"  @click.native="turnToHomeWork">
          <span style="font-weight: bold">张三的作业</span>
          <p>巴拉巴拉一堆</p>
          <div style="float: right">
            <el-button type="primary" icon="el-icon-chat-line-round" size="mini" circle></el-button>
            <el-button type="primary" icon="el-icon-star-off" size="mini" circle></el-button>
            <el-button type="primary" icon="el-icon-chicken" size="mini" circle></el-button>
          </div>
        </el-card>
      </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'homework_play',
  methods: {
    turnToHomeWork () {
      this.$router.push('/community/BigMath/theOneHomework')
    }
  }
}
</script>

<style scoped>

</style>
