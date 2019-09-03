<template>
<div>
  <h3 style="text-align: center">章节名:{{title}}</h3>
  <el-button @click="goback">上一步</el-button>
  <el-divider/>
  <el-input style="width: 150px" v-model="newChapterName"></el-input>
  <el-button @click="AddNewChapter">添加新章节</el-button>
  <el-divider/>
  <el-table :data="chapters" ref="filterTable" >
    <el-table-column prop="id" label="#" column-key="id"></el-table-column>
    <el-table-column prop="title" label="章节名"></el-table-column>
    <el-table-column><template slot-scope="scope"><el-button size="mini" @click="turnToCreateUpLoadProblem(scope.row.title, scope.row.id)">选择</el-button></template></el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  name: 'CreateChapter',
  data () {
    return {
      title: '',
      id: '',
      newChapterName: '',
      chapters: []
    }
  },
  mounted () {
    this.title = this.$route.query.title
    this.id = this.$route.query.id
    this.$axios({method: 'GET',
      url: this.$baseUrl + '/Chapter/findAllByBookid',
      params: {
        id: this.id
      }}).then((response) => {
      this.chapters = response.data
    })
  },
  methods: {
    goback () {
      this.$router.go(-1)
      this.$emit('back')
    },
    turnToCreateUpLoadProblem (title, id) {
      this.$router.push({
        path: '/community/BigMath/book/CreateUpLoadProblem', query: {title: title, id: id}
      })
      this.$emit('next')
    },
    AddNewChapter () {
      this.$axios({method: 'GET',
        url: this.$baseUrl + '/Chapter/addChapter',
        params: {
          bookid: this.id,
          title: this.newChapterName
        }}).then((response) => {
        if (response.data === true) {
          this.$message.success('添加成功')
          this.$axios({method: 'GET',
            url: this.$baseUrl + '/Chapter/findAllByBookid',
            params: {
              id: this.id
            }}).then((response) => {
            this.chapters = response.data
          })
        } else {
          this.$message.error('填加失败')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
