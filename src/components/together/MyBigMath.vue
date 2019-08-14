<template>
    <div>
      <el-row class="tac">
        <el-col :span="4">
          <el-menu
            class="el-menu-vertical-demo" @select="handleSelect" default-active="1" style="height: 1000px;">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">学习路线</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">学习力反馈</span>
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
  name: 'MyBigMath',
  mounted () {
    this.$router.replace({
      path: '/community/BigMathWorld/MyBigMath/BigMathGraph'
    })
  },
  methods: {
    handleSelect (key, keyPath) {
      if (key === '1') {
        this.$router.replace('/community/BigMathWorld/MyBigMath/BigMathGraph')
      } else if (key === '2') {
        this.$router.replace('/community/BigMathWorld/MyBigMath/StudyAbility')
      }
    }
  }
}
</script>

<style scoped>

</style>
