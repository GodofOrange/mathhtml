<template>
<div>
  <el-row>
    <el-col :span="4">
      <h3>我创建的班级列表</h3>
      <el-tree :props="props" @node-click="handleNodeClick" :load="loadNode" lazy></el-tree>
    </el-col>
    <el-col :span="20">
      <el-row>
        <el-col :span="2">
        <span style="font-weight: bold;float: right;color: darkgrey;margin-top: 8%">创建班级：</span>
        </el-col>
        <el-col :span="4">
        <el-input v-model="newClassName" placeholder="请输入班级名称"></el-input>
        </el-col>
        <el-col :span="4">
          <el-button @click="createNewClass">单击创建新班级</el-button>
        </el-col>
      </el-row>
      <el-divider/>
      <div>班级学生列表</div>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'TeacherClient',
  data () {
    return {
      props: {
        label: 'name',
        children: 'zones',
        isLeaf: 'leaf',
        key: 'key'
      },
      newClassName: ''
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    },
    loadNode (node, resolve) {
      if (node.level === 0) {
        let book = []
        this.$axios({
          method: 'GET',
          url: this.$baseUrl + '/Book/getAllBook'
        }).then((response) => {
          for (let i = 0; i < response.data.length; i++) {
            book.push({name: response.data[i].title, key: response.data[i].id, leaf: true})
          }
          return resolve(book)
        })
      }
    },
    createNewClass () {
      this.$axios({
        method: 'GET',
        url: this.$baseUrl + '/Class/addClass',
        params: {
          classname: this.newClassName
        }
      }).then((response) => {
        if (response.data === true) {
          this.$message.success('创建新的班级成功！')
        } else {
          this.$message.error('服务器错误')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
