<template>
  <div id="problem">
    <div class="problem-title">
      <el-row>
        <el-col :span="2"><el-button type="info" icon="el-icon-back" @click="goback"></el-button></el-col>
        <el-col :span="6"><h3>1.微积分</h3>
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
    <div class="problem-body">
      <h3>题目主体</h3>
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
      <iframe src="http://www.baldorange.cn:8111/myeditor/1.html" name="editor" style="width: 100%" scrolling="no" height="500px" frameborder="0"></iframe>
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
      value: 3.7,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900']
    }
  },
  mounted () {
  },
  methods: {
    loadEditor () {
      this.$ajax.get('http://www.baldorange.cn:8111/myeditor/1.html')
        .then(function (res) {
          console.log(res.data)
        })
        .catch(function (res) {
          console.log(res)
        })
    },
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
