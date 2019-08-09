<template>
  <div id="app">
    <div id="my-el-nav">
<el-menu :default-active="activeIndex"
         class="el-menu-demo"
         mode="horizontal"
         @select="handleSelect"
         >
    <el-menu-item index="0">精互同·游戏式教育平台</el-menu-item>
    <el-menu-item index="1"><i class="el-icon-edit"></i>探索</el-menu-item>
    <el-menu-item index="2"><i class="el-icon-s-grid"></i>题库</el-menu-item>
    <el-menu-item index="3"><i class="el-icon-s-flag"></i>竞赛</el-menu-item>
    <el-menu-item index="4"><i class="el-icon-document"></i>阅读</el-menu-item>
    <el-menu-item index="5"><i class="el-icon-notebook-2"></i>作业</el-menu-item>
    <el-menu-item index="6"><i class="el-icon-user-solid"></i>社区</el-menu-item>
    <el-menu-item index="7"><i class="el-icon-link"></i>数学建模</el-menu-item>
    <el-menu-item index="8" class="right">我的消息</el-menu-item>
    <el-menu-item index="9" class="right">头像</el-menu-item>
    </el-menu>
    </div>
    <transition name="el-fade-in"><router-view/></transition>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      if (key === '2') {
        this.$router.replace({
          path: '/'
        })
      } else if (key === '1') {
        this.$router.replace({
          path: '/explore'
        })
      } else if (key === '3') {
        this.$router.replace({
          path: '/contest'
        })
      } else if (key === '4') {
        this.$router.replace({
          path: '/read'
        })
      } else if (key === '5') {
        this.$router.replace({
          path: '/homework'
        })
      } else if (key === '6') {
        this.$router.replace({
          path: '/community'
        })
      } else if (key === '7') {
        this.$router.replace({
          path: '/modeling'
        })
      }
    }
  }
}
</script>

<style scoped>
  #my-el-nav{

  }
  .right{
    position:relative;
    float: right;
  }

</style>
