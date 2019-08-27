<template>
    <div id="announcement">
      <h1>公告</h1>
      <el-divider></el-divider>
      <div v-for="(announcement,key) in announcements" :key="key">
        <el-card>
          <h3>{{announcement.title}}</h3>
          <p>{{announcement.content}}</p>
        </el-card>
        <br>
      </div>
    </div>
</template>

<script>
export default {
  name: 'announcement',
  mounted () {
    this.$axios({method: 'GET', url: this.$baseUrl + '/Announcement/getAllAnnouncement'}).then((response) => {
      this.announcements = response.data // 请求成功返回的数据
    }).catch((error) => {
      console.log(error) // 请求失败返回的数据
    })
  },
  data () {
    return {
      announcements: [
        {id: 1, title: '2019年8月14日', content: '经过反复的代码重构，分析，终于设计出来了产品原形。今后的任务将是全新的挑战！！'},
        {id: 2, title: '2019年8月14日产品原形设计结束', content: '经过反复的代码重构，分析，终于设计出来了产品原形。今后的任务将是全新的挑战！！'},
        {id: 3, title: '2019年8月14日产品原形设计结束', content: '经过反复的代码重构，分析，终于设计出来了产品原形。今后的任务将是全新的挑战！！'}
      ]
    }
  }
}
</script>

<style scoped>
  #announcement{
    margin-right: 10%;
    margin-left: 10%;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    text-align: center;
  }
</style>
