<template>
    <div>
      <el-row>
        <el-col :span="4">
          <el-input v-model="joinClassName" placeholder="请输入班级号"></el-input>
        </el-col>
        <el-col :span="4">
          <el-button @click="joinTheClass">加入该班级</el-button>
        </el-col>
      </el-row>
      <el-divider/>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="classid" label="班级id" width="180"></el-table-column>
        <el-table-column prop="className" label="班级名" width="180"></el-table-column>
        <el-table-column prop="teacherName" label="指导老师" width="180"></el-table-column>
        <el-table-column prop="manNums" label="班级人数" width="180"></el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {
  name: 'MyBigClass',
  data () {
    return {
      joinClassName: '',
      tableData: []
    }
  },
  mounted () {
    this.$axios({method: 'GET', url: this.$baseUrl + '/StudentClass/getUserClass'}).then((response) => {
      this.tableData = response.data
    })
  },
  methods: {
    joinTheClass () {
      this.$axios({method: 'GET',
        url: this.$baseUrl + '/StudentClass/joinClassByClassId',
        params: {
          classid: this.joinClassName
        }}).then((response) => {
        if (response.data === true) {
          this.$message.success('加入班级成功')
          this.$axios({method: 'GET', url: this.$baseUrl + '/StudentClass/getUserClass'}).then((response) => {
            this.tableData = response.data
          })
        } else {
          this.$message.info('您已经加入该班级')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
