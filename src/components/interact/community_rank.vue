<template>
   <div id="community_rank">
     <el-row>
       <el-col :span="4">
         <h3 style="text-align: center">精互同数据可视化</h3>
         <el-menu
           class="el-menu-vertical-demo" @select="handleSelect" default-active="1">
           <el-menu-item index="1">
             <i class="el-icon-menu"></i>
             <span slot="title">在线时长</span>
           </el-menu-item>
           <el-menu-item index="2">
             <i class="el-icon-menu"></i>
             <span slot="title">解题效率</span>
           </el-menu-item>
           <el-menu-item index="3">
             <i class="el-icon-document"></i>
             <span slot="title">活跃度</span>
           </el-menu-item>
           <el-menu-item index="4">
             <i class="el-icon-setting"></i>
             <span slot="title">竞技指数</span>
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
  name: 'community_rank',
  mounted () {
    this.$router.replace({
      path: '/community/community_rank/onLineTime'
    })
  },
  methods: {
    handleSelect (key, keyPath) {
      if (key === '1') {
        this.$router.push({
          path: '/community/community_rank/onLineTime'
        })
      } else if (key === '2') {
        this.$router.push({
          path: '/community/community_rank/BigEfficiency'
        })
      } else if (key === '3') {
        this.$router.push({
          path: '/community/community_rank/Liveness'
        })
      } else if (key === '4') {
        this.$router.push({
          path: '/community/community_rank/CompetitiveIndex'
        })
      }
    }
  }
}
</script>

<style scoped>
  #community_rank{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
</style>
