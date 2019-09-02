<template>
<div>
  <el-steps :active="active" finish-status="success">
    <el-step title="选择book"></el-step>
    <el-step title="选择章节"></el-step>
    <el-step title="上传题目"></el-step>
  </el-steps>
  <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
  <router-view/>
  <el-divider/>
</div>
</template>

<script>
export default {
  name: 'book',
  data () {
    return {
      active: 0
    }
  },
  mounted () {
    this.$router.push('/community/BigMath/book/CreateBook')
  },
  methods: {
    next () {
      if (this.active++ > 2) this.active = 0
      if (this.active === 0) {
        this.$router.push('/community/BigMath/book/CreateBook')
      } else if (this.active === 1) {
        this.$router.push('/community/BigMath/book/CreateChapter')
      } else if (this.active === 2) {
        this.$router.push('/community/BigMath/book/CreateUpLoadProblem')
      }
    }
  }
}
</script>

<style scoped>

</style>
