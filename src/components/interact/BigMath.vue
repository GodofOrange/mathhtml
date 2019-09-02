<template>
  <div>
    <el-row class="tac">
    <el-col :span="4">
      <el-menu
        class="el-menu-vertical-demo" @select="handleSelect" default-active="1">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">精品作业展示</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">文章灵感创作</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">题目资料上传</span>
        </el-menu-item>
        <el-menu-item index="4" disabled>
          <i class="el-icon-setting"></i>
          <span slot="title">视频资料上传</span>
        </el-menu-item>
        <el-menu-item index="5">
          <span slot="title">题解上传</span>
        </el-menu-item>
      </el-menu>
    </el-col>
      <el-col :span="20">
        <transition name="el-zoom-in-center">
        <router-view/>
        </transition>
      </el-col>
  </el-row>

  </div>
</template>

<script>
export default {
  name: 'BigMath',
  mounted () {
    this.$router.replace({
      path: '/community/BigMath/homework_play'
    })
  },
  methods: {
    handleSelect (key, keyPath) {
      if (key === '1') {
        this.$router.push({
          path: '/community/BigMath/homework_play'
        })
      } else if (key === '2') {
        this.$router.push({
          path: '/community/BigMath/article'
        })
      } else if (key === '3') {
        this.$router.push({
          path: '/community/BigMath/problem_upload'
        })
      } else if (key === '5') {
        this.$router.push({
          path: '/community/BigMath/book'
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
