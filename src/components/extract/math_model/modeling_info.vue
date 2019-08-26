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
                <span>常见分析方法</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span>实用工具</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span>经典算法</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-menu"></i>
              <span>常见模型</span>
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
  name: 'modeling_info',
  methods: {
    handleSelect (key, keyPath) {
      if (key === '1') {
        this.$router.push({
          path: '/extract/modeling_info/modeling_1'
        })
      } else if (key === '2') {
        this.$router.push({
          path: '/extract/modeling_info/modeling_2'
        })
      } else if (key === '3') {
        this.$router.push({
          path: '/extract/modeling_info/modeling_3'
        })
      } else if (key === '4') {
        this.$router.push({
          path: '/extract/modeling_info/modeling_4'
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
