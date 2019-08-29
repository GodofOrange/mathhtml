<template>
  <div id="problem">
    <div class="problem-title">
      <el-row>
        <el-col :span="2"><el-button type="info" icon="el-icon-back" @click="goback"></el-button></el-col>
        <el-col :span="6"><h3>{{title}}</h3>
          <span>难度：</span>
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}">
            </el-rate>
        </el-col>
        <el-col :span="6">
          <el-tag type="danger" style="margin-top: 4%">考研</el-tag>
          <el-tag type="danger" style="margin-top: 4%">200人已通过</el-tag>
          <el-tag type="danger" style="margin-top: 4%">新生题目</el-tag>
          <el-tag type="danger" style="margin-top: 4%">微积分</el-tag>
          <el-tag type="danger" style="margin-top: 4%">10人提交题解</el-tag>
        </el-col>
        <el-col :span="6">
          <el-button-group>
          <el-button type="primary" icon="el-icon-share" style="margin-top: 3%">分享此题</el-button>
          <el-button type="primary" icon="el-icon-star-off" style="margin-top: 3%">收藏此题</el-button>
            <el-button type="primary" icon="el-icon-edit" style="margin-top: 3%">提交题解</el-button>
          </el-button-group>
        </el-col>

      </el-row>
    </div>
    <el-divider></el-divider>
    <h2>题目如下所示：</h2>
    <div class="problem-body" v-html="problem_body">
    </div>
    <el-divider/>
    <div class="answer-body">
      <h3>选填回答主体</h3>
      <el-row :gutter="20">
        <el-col :span="4"><el-input placeholder="请输入内容"></el-input></el-col>
        <el-col :span="4"><el-button type="primary">提交答案</el-button></el-col>
      </el-row>
    </div>
    <el-divider/>
    <div class="comment-body">
      <el-row>
      <el-col :span="12"><h3>证明题回答主体</h3></el-col>
      <el-col :span="12"><el-button type="primary" style="margin-top: 10px;float: right">提交答案</el-button></el-col>
      </el-row>
      <iframe src="static/myeditor/1.html" name="editor" style="width: 100%" scrolling="no" height="500px" frameborder="0"></iframe>
    </div>
    <el-divider/>
    <div>
      <el-row>
        <el-col :span="12"><h3>评论区</h3></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'problem',
  data () {
    return {
      title: '呵呵',
      value: 3.7,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      problem_body: '问题主体'
    }
  },
  mounted () {
    this.title = this.$route.query.id + '.' + this.$route.query.title
    this.$axios({method: 'GET', url: this.$baseUrl + '/Problembody/getProblembody?id=' + this.$route.query.id}).then((response) => {
      this.problem_body = response.data.body // 请求成功返回的数据
    }).catch((error) => {
      console.log(error) // 请求失败返回的数据
    })
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  #problem{
    margin-top: 10px;
    margin-right: 3%;
    margin-left: 3%;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
</style>
