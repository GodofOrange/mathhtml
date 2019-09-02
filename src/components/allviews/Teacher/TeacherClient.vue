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
      <el-button type="primary" @click="turnToHomeWorkEdit">进入班级作业编辑</el-button>
      <el-divider/>
      <div><el-table ref="filterTable" :data="tableData">
        <el-table-column prop="id" label="学生id" column-key="date"></el-table-column>
        <el-table-column prop="title" label="学生名"></el-table-column>
        <el-table-column prop="percentage" label="分数"></el-table-column>
        <el-table-column prop="level" label="评分完成度"></el-table-column>
      </el-table></div>
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
      newClassName: '',
      classid: ''
    }
  },
  methods: {
    handleNodeClick (data, node) {
      this.classid = node.data.key
    },
    loadNode (node, resolve) {
      if (node.level === 0) {
        let classes = []
        this.$axios({
          method: 'GET',
          url: this.$baseUrl + '/Class/getAllMyClass'
        }).then((response) => {
          console.log(response.data)
          for (let i = 0; i < response.data.length; i++) {
            classes.push({name: '班级名：' + response.data[i].classname + ' -> 班级号:' + response.data[i].id, key: response.data[i].id, leaf: true})
          }
          console.log(classes)
          return resolve(classes)
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
    },
    turnToHomeWorkEdit () {
      this.$router.push(
        {path: '/homeworkedit',
          query: {
            classid: this.classid
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
