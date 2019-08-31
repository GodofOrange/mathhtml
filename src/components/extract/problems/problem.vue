<template>
  <div id="problem">
    <div class="problem-title">
      <el-row>
        <el-col :span="3"><span style="font-weight: bold;font-size: large">{{title}}</span>
        </el-col>
        <el-col :span="3"><el-rate
          v-model="level"
          disabled
          show-score
          text-color="#ff9900">
        </el-rate></el-col>
        <el-col :span="6">
          <el-tag type="danger">考研</el-tag>
          <el-tag type="danger">200人已通过</el-tag>
          <el-tag type="danger">新生题目</el-tag>
          <el-tag type="danger">微积分</el-tag>
          <el-tag type="danger">10人提交题解</el-tag>
        </el-col>
        <el-col :span="6">
          <el-button-group>
          <el-button type="primary" icon="el-icon-share">分享此题</el-button>
          <el-button type="primary" icon="el-icon-star-off">收藏此题</el-button>
            <el-button type="primary" icon="el-icon-edit">提交题解</el-button>
          </el-button-group>
        </el-col>
        <el-col :span="6"><el-button type="danger" style="float: right" @click="dialogVisible=true">提交答案</el-button></el-col>
      </el-row>
    </div>
    <el-divider></el-divider>
    <el-row>
    <h2>题目如下所示：</h2>
    <div class="problem-body" v-html="problem_body">
    </div>
    <el-divider/>
    <div class="answer-body"  v-if="showYes">
      <h3>选填回答主体</h3>
      <el-row :gutter="20">
        <el-col :span="4"><el-input placeholder="请输入内容" v-model="standard"></el-input></el-col>
      </el-row>
    </div>
    <el-divider/>
    <div class="comment-body">
      <el-row>
      <el-col :span="12"><h3>解题思路(证明题回答主体)支持mathType及复制粘贴图片</h3><p>mathType因为比较大，请耐心等加载</p></el-col>
      </el-row>
      <tinymce-editor v-model="answer"></tinymce-editor>
    </div>
    <el-divider/>
    <div>
      <el-row>
        <el-col :span="12"><h3>评论区</h3></el-col>
      </el-row>
    </div>
    </el-row>
    <el-dialog
      title="题目提交预览"
      :visible.sync="dialogVisible"
      width="70%">
      <h3>题目名称：</h3>
      <h2>{{title}}</h2>
      <el-divider/>
      <div v-if="showYes">
      <h3>选填回答主体：</h3>
      <h2>{{standard}}</h2>
        <el-divider/>
      </div>
      <h3>做题思路预览：</h3>
      <div v-html="answer"></div>
      <el-divider/>
      <h2></h2>
      <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="UpLoadTheQuestion">确 定</el-button>
  </span>
    </el-dialog>
    <el-dialog
      title="提交反馈"
      :visible.sync="dialogVisible2"
      width="70%">
      <h3>题目名称：</h3>
      <h2>{{title}}</h2>
      <el-divider/>

      <h3>分数：</h3>
      <h2 style="color: red">+{{score}}</h2>
      <el-divider/>
      <h2>题解如下：</h2>
      <div v-html="answerProblem"></div>
      <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogVisible2=false">确 定</el-button>
  </span>
    </el-dialog>
    <el-dialog
      title="证明题自动检查模块"
      :visible.sync="dialogVisible3"
      width="70%">
      <h3>题目名称：</h3>
      <h2>{{title}}</h2>
      <el-divider/>

      <h3>请设置您的分数：</h3>
      <template>
        <el-select v-model="score" placeholder="请选择您的自查分数">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </template>

      <el-divider/>
      <h2>题解如下：</h2>
      <div v-html="answerProblem"></div>
      <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="UpLoadCretyQuestion">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
const TinymceEditor = () => import('../../util/tinymce-editor')
export default {
  name: 'problem',
  components: {
    TinymceEditor
  },
  data () {
    return {
      title: '呵呵',
      level: 3.7,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      problem_body: '问题主体',
      kind: '',
      answer: '',
      showYes: true,
      dialogVisible: false,
      standard: '',
      standardProblem: '',
      dialogVisible2: false,
      dialogVisible3: false,
      score: 0,
      answerProblem: '',
      options: [{
        value: '0',
        label: '0'
      }, {
        value: '1',
        label: '1'
      }, {
        value: '2',
        label: '2'
      }, {
        value: '3',
        label: '3'
      }, {
        value: '4',
        label: '4'
      }, {
        value: '5',
        label: '5'
      }]
    }
  },
  mounted () {
    this.title = this.$route.query.id + '.' + this.$route.query.title
    this.level = parseInt(this.$route.query.level)
    this.$axios({method: 'GET', url: this.$baseUrl + '/Problembody/getProblembody?id=' + this.$route.query.id}).then((response) => {
      this.problem_body = response.data.body // 请求成功返回的数据
      this.kind = response.data.kind
      this.standardProblem = response.data.standard
      this.answerProblem = response.data.answer
      if (this.kind === '1') {
        this.showYes = true
      } else {
        this.showYes = false
      }
    }).catch((error) => {
      console.log(error) // 请求失败返回的数据
    })
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    UpLoadTheQuestion () {
      if (this.kind === '1') {
        this.dialogVisible = false
        if (this.standardProblem === this.standard) {
          this.score = 3
        }
        this.$axios({
          method: 'POST',
          url: this.$baseUrl + '/ProblemAnswer_UpLoadController/UpLoadAnswer',
          data: {
            problemsetid: this.$route.query.id,
            score: this.score,
            body: this.answer
          }
        }).then((response) => {
          if (response.data === true) {
            this.$message.success('提交成功')
            this.dialogVisible2 = true
          } else {
            this.$message.error('请先登录')
          }
        })
      } else if (this.kind === '2') {
        this.dialogVisible = false
        this.dialogVisible3 = true
      }
    },
    UpLoadCretyQuestion () {
      this.dialogVisible3 = false
      this.$axios({
        method: 'POST',
        url: this.$baseUrl + '/ProblemAnswer_UpLoadController/UpLoadAnswer',
        data: {
          problemsetid: this.$route.query.id,
          score: this.score,
          body: this.answer
        }
      }).then((response) => {
        if (response.data === true) {
          this.$message.success('提交成功')
          this.dialogVisible2 = true
        } else {
          this.$message.error('请先登录')
        }
      })
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
