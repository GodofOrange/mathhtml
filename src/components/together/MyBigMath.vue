<template>
    <div>
      <el-row class="tac">
        <el-col :span="4">
          <el-menu
            class="el-menu-vertical-demo"
          style="height: 100%">
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
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'MyBigMath'
}
</script>

<style scoped>

</style>
