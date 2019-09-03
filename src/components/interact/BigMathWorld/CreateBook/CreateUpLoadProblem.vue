<template>
<div>
  <el-button @click="goback">上一步</el-button>
  <el-button style="float: right" type="danger" @click="UpLoadQuestion">提交题目</el-button>
  <h1 style="text-align: center">{{this.$route.query.title}}</h1>
<el-divider/>
  <span>题目:</span>
  <el-input v-model="title" style="width: 200px"></el-input>
  <el-divider/>
  <h2>问题主体</h2>
  <tinymce-editor v-model="body"></tinymce-editor>
  <el-divider/>
  <h2>题解主体</h2>
  <tinymce-editor v-model="answer"></tinymce-editor>
  <el-divider></el-divider>
  <h2>选择相似题目</h2>
  <el-button type="text" @click="getTheProblems">单击选择相似题目</el-button>
  <el-dialog
    title="请选择相似题目"
    :visible.sync="dialogVisible"
    width="30%">
    <el-table ref="multipleTable" :data="problemset" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="#" column-key="id"></el-table-column>
      <el-table-column prop="title" label="题目标题"></el-table-column>
    </el-table>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button @click="toggleSelection()">清空选择</el-button>
    <el-button type="primary" @click="changeLinks">确 定</el-button>
  </span>
  </el-dialog>
</div>
</template>

<script>
const TinymceEditor = () => import('../../../util/tinymce-editor')
export default {
  name: 'CreateUpLoadProblem',
  data () {
    return {
      title: '',
      body: '',
      answer: '',
      dialogVisible: false,
      links: [],
      problemset: [{id: '4', title: 'A'}, {id: '3', title: 'B'}],
      multipleSelection: []
    }
  },
  components: {
    TinymceEditor
  },
  methods: {
    goback () {
      this.$router.go(-1)
      this.$emit('back')
    },
    UpLoadQuestion () {
      this.$axios({method: 'POST',
        url: this.$baseUrl + '/ExampleQuestionBeanController/addExampleBody',
        data: {
          chapterid: this.$route.query.id,
          title: this.title,
          body: this.body,
          answer: this.answer,
          links: this.links
        }}).then((response) => {
        if (response.data === true) {
          this.$message.success('提交成功')
        } else {
          this.$message.error('服务器错误')
        }
      })
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    changeLinks () {
      this.links = []
      for (let i = 0; i < this.multipleSelection.length; i++) {
        this.links.push(this.multipleSelection[i].id)
      }
      console.log(this.links)
      this.dialogVisible = false
    },
    getTheProblems () {
      this.$axios({method: 'GET', url: this.$baseUrl + '/Problemset/getAllProblemset'}).then((response) => {
        this.problemset = response.data // 请求成功返回的数据
        this.dialogVisible = true
      }).catch((error) => {
        console.log(error) // 请求失败返回的数据
      })
    }
  }
}
</script>

<style scoped>

</style>
