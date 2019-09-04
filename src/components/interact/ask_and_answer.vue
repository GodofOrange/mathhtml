<template>
    <div id="ask_and_answer">
      <el-row>
        <el-col :span="3"></el-col>
        <el-col :span="15">
          <div class="icard" v-for="(question,key) in Questions" :key="key">
            <el-card shadow="hover" style="background-color: snow" class="box-card">
              <p style="color:darkgrey;font-size:small; float: right">{{question.username}} upload in {{question.time}}</p>
              <h2 style="font-weight: bold">{{question.title}}</h2>
              <el-divider/>
              <div v-html="question.content"></div>
              <div style="float: right">
                <el-button type="primary" icon="el-icon-chat-line-round" size="mini" circle></el-button>
                <el-button type="primary" icon="el-icon-star-off" size="mini" circle></el-button>
                <el-button type="primary" icon="el-icon-chicken" size="mini" circle></el-button>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <h3>我要问问题</h3>
            <el-button icon="el-icon-edit" type="primary" @click="dialogVisible = true">点击进行问题编辑</el-button>
            <el-dialog
              title="问题编辑"
              :visible.sync="dialogVisible"
              width="70%">
              <span>问题标题:</span><el-input style="width: 20%;" v-model="newAskTitle"></el-input>
              <el-divider/>
              <span>问题主体:</span>
                <tinymce-editor v-model="newAsk"></tinymce-editor>
              <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="upNewAsk">提交</el-button>
  </span>
            </el-dialog>
          </div>
          <el-divider></el-divider>
          <div>
            <h3>我问过的问题</h3>
            <template>
              <el-table
                :data="myQuestion"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="日期">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="题目">
                </el-table-column>
                <el-table-column
                  prop="status"
                  label="状态">
                </el-table-column>
              </el-table>
            </template>

          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
const TinymceEditor = () => import('../util/tinymce-editor')
export default {
  components: {
    TinymceEditor
  },
  name: 'ask_and_answer',
  data () {
    return {
      dialogVisible: false,
      myQuestion: [],
      newAsk: '',
      newAskTitle: '',
      Questions: []
    }
  },
  mounted () {
    this.refreshTheAsk()
    this.getMyQuestion()
  },
  methods: {
    upNewAsk () {
      this.dialogVisible = false
      this.$axios({method: 'POST',
        url: this.$baseUrl + '/Question/addQuestion',
        data: {
          title: this.newAskTitle,
          content: this.newAsk
        }}).then((response) => {
        if (response.data === true) {
          this.$message.success('成功')
          this.refreshTheAsk()
          this.getMyQuestion()
        } else {
          this.$message.error('失败')
        }
      }).catch((reason) => {
        this.$message.error('请登录')
      })
    },
    refreshTheAsk () {
      this.$axios({method: 'GET', url: this.$baseUrl + '/Question/getAllQuestion'}).then((response) => {
        this.Questions = response.data
      })
    },
    getMyQuestion () {
      this.$axios({method: 'GET', url: this.$baseUrl + '/Question/getMyQuestion'}).then((response) => {
        this.myQuestion = []
        for (let i = 0; i < response.data.length; i++) {
          let status
          if (response.data[i].enabled === 1) status = '已解决'
          else status = '未解决'
          this.myQuestion.push({date: response.data[i].time, name: response.data[i].title, status: status})
        }
      })
    }
  }
}
</script>

<style scoped>
#ask_and_answer{
  margin-top: 10px;
  margin-right: 3%;
  margin-left: 3%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  text-align: center;
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
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
