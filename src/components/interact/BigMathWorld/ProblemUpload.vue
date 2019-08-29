<template>
    <div>
      <h3>题目传上去过后会有专门人员进行审核，审核不通过无法在主页面观看</h3>
      <span>题目名称：</span>
      <el-input v-model="title" placeholder="请输入题目" style="width: 30%"></el-input>
      <el-divider/>
      <span>请选择难度</span>
      <el-select v-model="level" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-divider/>
      <span>请选择题目类型</span>
      <el-select v-model="kind" placeholder="请选择">
        <el-option
          v-for="item in allkinds"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-divider/>
      <span>题目主体</span>
      <tinymce-editor v-model="body" :disabled="disabled"></tinymce-editor>
      <el-divider/>
      <span>标准答案(选填可以添加，证明题直接为空)</span>
      <el-input v-model="standard" placeholder="" style="width: 30%"></el-input>
      <el-divider/>
      <span>题解：</span>
      <tinymce-editor v-model="answer" :disabled="disabled"></tinymce-editor>
      <el-divider/>
      <el-button type="primary" @click="PostProblem">上传题目</el-button>
    </div>
</template>

<script>
const TinymceEditor = () => import('../../util/tinymce-editor')
export default {
  name: 'ProblemUpload',
  components: {
    TinymceEditor
  },
  data () {
    return {
      body: '请在此编写题目',
      answer: '',
      title: '',
      disabled: false,
      options: [{
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
      }],
      allkinds: [{
        value: '1',
        label: '选填'
      }, {
        value: '2',
        label: '证明'
      }],
      level: '',
      standard: '',
      kind: ''
    }
  },
  methods: {
    onClick (e, editor) {
      console.log('Element clicked')
      console.log(e)
      console.log(editor)
    },
    PostProblem () {
      this.$axios({method: 'POST',
        url: this.$baseUrl + '/ProblemSet_ProblemBody_Controller1/addProblem',
        data: {
          title: this.title,
          level: this.level,
          body: this.body,
          answer: this.answer,
          kind: this.kind,
          standard: this.standard
        }
      }).then((response) => {
        if (response.data === true) {
          this.$message.success('提交成功')
        } else {
          this.$message.error('服务器错误提交失败')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
