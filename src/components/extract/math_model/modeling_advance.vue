<template>
    <div>
      <el-row class="tac">
        <el-col :span="4">
          <el-menu
            default-active="1"
            @select="handleSelect"
            class="el-menu-vertical-demo">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>微课视频</span>
              </template>
              <el-menu-item-group>
                <template slot="title">爱课程</template>
                <el-menu-item index="1-1">数学建模——从自然走向理性之路</el-menu-item>
                <el-menu-item index="1-2">数学建模与数学实验</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="爱课程">
                <el-menu-item index="1-3">数学建模与数学实验</el-menu-item>
                <el-menu-item index="1-4">资源共享课：数学建模</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="中国大学MOOC">
                <el-menu-item index="1-5">走近数学——数学建模篇</el-menu-item>
                <el-menu-item index="1-6">数学建模 主讲人：厦门大学谭忠教授</el-menu-item>
                <el-menu-item index="1-7">数学建模 主讲人：华中农业大学方红等</el-menu-item>
                <el-menu-item index="1-8">数学建模 主讲人：西北工业大学肖华勇等</el-menu-item>
                <el-menu-item index="1-9">数学建模 主讲人：重庆大学肖剑等</el-menu-item>
                <el-menu-item index="1-10">数学建模 主讲人：电子科技大学张勇等</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Bilibili资源">
                <el-menu-item index="1-11">数学建模算法、编程和写作培训的视频课程</el-menu-item>
                <el-menu-item index="1-12">7天教你学会数学建模及MATLAB编程【完】</el-menu-item>
                <el-menu-item index="1-13">清华大学 数学建模 课程</el-menu-item>
                <el-menu-item index="1-14">走进数学之数学建模（中国大学mooc）</el-menu-item>
                <el-menu-item index="1-15">数学建模学习视频</el-menu-item>
                <el-menu-item index="1-16">MATLAB与机器学习</el-menu-item>
                <el-menu-item index="1-17">数学建模比赛MATLAB建模</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>精品课件</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>实用工具</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="3-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="3-4">
                <template slot="title">选项4</template>
                <el-menu-item index="3-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>历年真题</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="4-1">选项1</el-menu-item>
                <el-menu-item index="4-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="4-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="4-4">
                <template slot="title">选项4</template>
                <el-menu-item index="4-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
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
  name: 'modeling_advance',
  methods: {
    handleSelect (key, keyPath) {
      if (key === '1-1') {
        this.$router.push({
          path: '/extract/modeling_advance/modeling_video_1'
        })
      } else if (key === '1-2') {
        this.$router.push({
          path: '/extract/modeling_advance/modeling_video_2'
        })
      } else if (key === '1-3') {
        this.$router.push({
          path: '/extract/modeling_advance/modeling_video_3'
        })
      } else if (key === '1-4') {
        this.$router.push({
          path: '/extract/modeling_advance/modeling_video_4'
        })
      } else if (key === '1-5') {
        this.$router.push({
          path: '/extract/modeling_advance/modeling_video_5'
        })
      } else if (key === '1-6') {
        this.$router.push({
          path: '/extract/modeling_advance/modeling_video_6'
        })
      } else if (key === '1-7') {
        this.$router.push({
          path: '/extract/modeling_advance/modeling_video_7'
        })
      } else if (key === '1-8') {
        this.$router.push({
          path: '/extract/modeling_advance/modeling_video_8'
        })
      } else if (key === '1-9') {
        this.$router.push({
          path: '/extract/modeling_advance/modeling_video_9'
        })
      } else if (key === '1-10') {
        this.$router.push({
          path: '/extract/modeling_advance/modeling_video_10'
        })
      } else if (key === '1-11') {
        this.$router.push({
          path: '/extract/modeling_advance/modeling_video_11'
        })
      } else if (key === '1-12') {
        this.$router.push({
          path: '/extract/modeling_advance/modeling_video_12'
        })
      } else if (key === '1-13') {
        this.$router.push({
          path: '/extract/modeling_advance/modeling_video_13'
        })
      } else if (key === '1-14') {
        this.$router.push({
          path: '/extract/modeling_advance/modeling_video_14'
        })
      } else if (key === '1-15') {
        this.$router.push({
          path: '/extract/modeling_advance/modeling_video_15'
        })
      } else if (key === '1-16') {
        this.$router.push({
          path: '/extract/modeling_advance/modeling_video_16'
        })
      } else if (key === '1-17') {
        this.$router.push({
          path: '/extract/modeling_advance/modeling_video_17'
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
