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
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-s-opportunity"></i>精</template>
      <el-menu-item index="2-1"><i class="el-icon-s-flag"></i>大数竞技</el-menu-item>
      <el-menu-item index="2-2"><i class="el-icon-s-grid"></i>模块题库</el-menu-item>
      <el-menu-item index="2-3"><i class="el-icon-s-marketing"></i>题目解析</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title"><i class="el-icon-link"></i>数学建模</template>
        <el-menu-item index="2-4-1">数学建模介绍</el-menu-item>
        <el-menu-item index="2-4-2">数学建模基础</el-menu-item>
        <el-menu-item index="2-4-3">数学建模进阶</el-menu-item>
        <el-menu-item index="2-4-3">数学建模实战</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><i class="el-icon-s-data"></i>互</template>
      <el-menu-item index="3-1"><i class="el-icon-data-analysis"></i>大数世界</el-menu-item>
      <el-menu-item index="3-2"><i class="el-icon-notebook-2"></i>师生答疑</el-menu-item>
      <el-menu-item index="3-3"><i class="el-icon-s-data"></i>积分排行</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title"><i class="el-icon-s-promotion"></i>同</template>
      <el-menu-item index="4-1">我的大数</el-menu-item>
      <el-menu-item index="4-2">大同社团</el-menu-item>
    </el-submenu>
    <el-menu-item index="7"><i class="el-icon-document"></i>阅读</el-menu-item>
    <el-menu-item index="8"><i class="el-icon-notebook-2"></i>作业</el-menu-item>
    <el-menu-item index="12" class="right">我的信息</el-menu-item>
    <el-menu-item index="13" class="right">头像</el-menu-item>
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
      if (key === '2-2') {
        this.$router.replace({
          path: '/problem_set'
        })
      } else if (key === '1') {
        this.$router.replace({
          path: '/'
        })
      } else if (key === '2-1') {
        this.$router.replace({
          path: '/contest'
        })
      } else if (key === '7') {
        this.$router.replace({
          path: '/read'
        })
      } else if (key === '8') {
        this.$router.replace({
          path: '/homework'
        })
      } else if (key === '2-4-1') {
        this.$router.replace({
          path: '/modeling'
        })
      } else if (key === '3-2') {
        this.$router.replace({
          path: '/community/ask_and_answer'
        })
      } else if (key === '3-1') {
        this.$router.replace({
          path: '/community/BigMath'
        })
      } else if (key === '3-3') {
        this.$router.replace({
          path: '/community/community_rank'
        })
      } else if (key === '2-3') {
        this.$router.replace({
          path: '/problems/example_problem'
        })
      } else if (key === '4-1') {
        this.$router.replace({
          path: '/community/BigMathWorld/MyBigMath'
        })
      } else if (key === '4-2') {
        this.$router.replace({
          path: '/community/community/BigClass'
        })
      } else if (key === '2-4-2') {
        this.$router.replace({
          path: '/extract/modeling_info'
        })
      } else if (key === '2-4-3') {
        this.$router.replace({
          path: '/extract/modeling_advance'
        })
      } else if (key === '2-4-4') {
        this.$router.replace({
          path: '/extract/modeling_high'
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
