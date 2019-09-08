<template>
  <div id="read">
    <h1 style="text-align: center;">阅读</h1>
    <el-divider></el-divider>
    <el-row>
      <el-col :span="3"></el-col>
      <el-col :span="15">
    <div class="icard" v-for="(article,key) in articles" :key="key">
      <el-card shadow="hover" style="background-color: snow" class="box-card" >
        <span style="font-weight: bold">{{article.title}}</span><time style="float: right;font-weight: lighter;color: darkgrey" class="time">{{article.time}}</time>
        <div v-html="article.content"></div><p style="float: left">--copyright by {{article.userid}}</p>
        <div style="float: right">
          <el-button type="primary" icon="el-icon-chat-line-round" size="mini" style="margin-top: 3%" circle></el-button>
          <el-button type="primary" icon="el-icon-star-off" size="mini" circle></el-button>
          <el-button type="primary" icon="el-icon-chicken" size="mini" circle></el-button>
        </div>
      </el-card>
    </div>
      </el-col>
      <el-col :span="6">
        <h1>今日阅读排行榜</h1>
        <ul>
          <li style="color: red">排第一的</li>
          <li>第二的</li>
          <li>第三的</li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'read',
  mounted () {
    this.$axios({method: 'GET', url: this.$baseUrl + '/Article/getAllArticle'}).then((response) => {
      this.articles = response.data
    })
  },
  data () {
    return {
      articles: [
        {title: 'Hello', content: '', userid: '', time: ''}
      ]
    }
  }
}
</script>

<style scoped>
#read{
  margin-top: 10px;
  margin-right: 3%;
  margin-left: 3%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.box-card{
  margin: auto;
  width: 70%;
}
.icard{
  margin-top: 30px;
}
  .icard p{
    color: darkgray;
  }
</style>
