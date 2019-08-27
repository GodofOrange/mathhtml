<template>
    <div>
      <el-row class="tac">
        <el-col :span="4">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @select="handleSelect">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span>赛题发布</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span>参赛要求注意事项栏</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span>团队报名通道</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-menu"></i>
              <span>论文提交通道</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="20">
          <router-view></router-view>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'modeling_high',
  mounted () {
    this.$router.replace('/extract/modeling_high/')
  },
  methods: {
    handleSelect (key, keyPath) {
      if (key === '1') {
        this.$router.push({
          path: '/extract/modeling_high/'
        })
      } else if (key === '2') {
        this.$router.push({
          path: '/extract/modeling_high/'
        })
      } else if (key === '3') {
        this.$router.push({
          path: '/extract/modeling_high/'
        })
      } else if (key === '4') {
        this.$router.push({
          path: '/extract/modeling_high/'
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
