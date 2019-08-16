<template>
  <div>
    <el-row class="tac">
      <el-col :span="4">
        <el-menu
          class="el-menu-vertical-demo" @select="handleSelect" default-active="1" style="height: 1000px;">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">班级管理</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">个性交友</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">超话群聊</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'BigClass',
  mounted () {
    this.$router.replace({
      path: '/community/community/BigClass/MyBigClass'
    })
  },
  methods: {
    handleSelect (key, keyPath) {
      if (key === '1') {
        this.$router.push('/community/community/BigClass/MyBigClass')
      } else if (key === '2') {
        this.$router.push('/community/community/BigClass/makeFriend')
      } else if (key === '3') {
        this.$router.push('/community/community/BigClass/ChatRoom')
      }
    }
  }
}
</script>

<style scoped>

</style>
