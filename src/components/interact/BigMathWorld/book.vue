<template>
<div>
  <el-steps :active="active" finish-status="success">
    <el-step title="选择book"></el-step>
    <el-step title="选择章节"></el-step>
    <el-step title="上传题目"></el-step>
  </el-steps>
  <router-view @next="next" @back="back"/>
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
    this.$router.replace('/community/BigMath/book/CreateBook')
  },
  methods: {
    next () {
      if (this.active++ > 2) this.active = 0
      if (this.active === 0) {
        this.$router.push('/community/BigMath/book/CreateBook')
      }
    },
    back () {
      if (this.active-- < 0) this.active = 0
    }
  }
}
</script>

<style scoped>

</style>
