<template>
    <div>
      <el-row>
        <el-col :span="4"><el-tree :props="props" @node-click="handleNodeClick" :load="loadNode" lazy></el-tree></el-col>
        <el-col :span="20">
          <h1>{{title}}</h1>
          <el-divider></el-divider>
          <div v-html="body"></div>
          <el-divider></el-divider>
          <div v-html="answer"></div>
          <el-divider></el-divider>
          <p>相似题型推荐</p>
          <el-table :data="problemset">
            <el-table-column prop="problemsetId" label="#" column-key="id"></el-table-column>
            <el-table-column prop="title" label="题目标题"></el-table-column>
            <el-table-column prop="level" label="题目难度"></el-table-column>
            <el-table-column label="题目链接" ><template slot-scope="scope"><el-button size="mini" @click="turnToProblem(scope.row.title, scope.row.problemsetId, scope.row.level)">进入</el-button></template></el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'example_problem',
  data () {
    return {
      title: '题目标题',
      body: '题目主体',
      answer: '题目解析',
      props: {
        label: 'name',
        children: 'zones',
        isLeaf: 'leaf',
        key: 'key'
      },
      problemset: []
    }
  },
  created: function () {
  },
  methods: {
    loadNode (node, resolve) {
      if (node.level === 0) {
        let book = []
        this.$axios({
          method: 'GET',
          url: this.$baseUrl + '/Book/getAllBook'
        }).then((response) => {
          for (let i = 0; i < response.data.length; i++) {
            book.push({name: response.data[i].title, key: response.data[i].id})
          }
          return resolve(book)
        })
      }
      if (node.level === 1) {
        console.log(node.data.key)
        this.$axios({
          method: 'GET',
          url: this.$baseUrl + '/Chapter/findAllByBookid',
          params: {
            id: node.data.key
          }
        }).then((response) => {
          let chapter = []
          for (let i = 0; i < response.data.length; i++) {
            chapter.push({name: response.data[i].title, key: response.data[i].id})
          }
          return resolve(chapter)
        })
      }
      if (node.level === 2) {
        this.$axios({
          method: 'GET',
          url: this.$baseUrl + '/Example/findAllByChapterid',
          params: {
            id: node.data.key
          }
        }).then((response) => {
          let example = []
          for (let i = 0; i < response.data.length; i++) {
            example.push({name: response.data[i].title, key: response.data[i].id, leaf: true})
          }
          return resolve(example)
        })
      }
    },
    handleNodeClick (data, node) {
      if (node.level === 3) {
        this.$axios({
          method: 'GET',
          url: this.$baseUrl + '/ExampleBody/getExamPleBodyById',
          params: {
            exampleid: data.key
          }
        }).then((response) => {
          this.body = response.data.body
          this.answer = response.data.answer
          this.$axios({
            method: 'GET',
            url: this.$baseUrl + '/ExampleLinksController/getAllExampleLinksNameById',
            params: {
              id: data.key
            }
          }).then((response) => {
            this.problemset = response.data
          })
        })
        console.log(data.name)
        this.title = data.name
      }
    },
    turnToProblem (pstitle, pid, level) {
      this.$router.push({
        path: '/problem',
        query: {
          id: pid,
          title: pstitle,
          level: level
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
