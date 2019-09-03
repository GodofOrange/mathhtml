<template>
<div>
  <el-input style="width: 150px" v-model="newBookName"></el-input>
  <el-button @click="AddNewBook">添加新书</el-button>
  <el-table :data="books" ref="filterTable" >
    <el-table-column prop="id" label="#" column-key="id"></el-table-column>
    <el-table-column prop="title" label="书名"></el-table-column>
    <el-table-column><template slot-scope="scope"><el-button size="mini" @click="turnToChapter(scope.row.title, scope.row.id)">选择</el-button></template></el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  name: 'createBook',
  data () {
    return {
      newBookName: '',
      books: []
    }
  },
  mounted () {
    this.$axios({method: 'GET', url: this.$baseUrl + '/Book/getAllBook'}).then((response) => {
      this.books = response.data
    })
  },
  methods: {
    turnToChapter (title, id) {
      this.$router.push({
        path: '/community/BigMath/book/CreateChapter', query: {title: title, id: id}
      })
      this.$emit('next')
    },
    AddNewBook () {
      this.$axios({method: 'GET', url: this.$baseUrl + '/Book/addBook?title=' + this.newBookName}).then((response) => {
        if (response.data === true) {
          this.$message.success('添加新书成功')
          this.$axios({method: 'GET', url: this.$baseUrl + '/Book/getAllBook'}).then((response) => {
            this.books = response.data
          })
        } else {
          this.$message.error('添加新书失败')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
