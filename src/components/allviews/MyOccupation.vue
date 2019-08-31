<template>
    <div>
      <h1 style="text-align: center">老师/学生入驻</h1>
      <el-divider/>
      <el-row>
        <el-col :span="12">
      <el-card style="width: 30%;float: right" @click.native="TobeTeacher">
        <h3>老师认证</h3>
      </el-card>
        </el-col>
        <el-col :span="12">
      <el-card style="width: 30%" @click.native="TobeStudent">
        <h3>学生认证</h3>
      </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-card style="width: 30%;float: right" @click.native="TobeTeacherVip">
            <h3>老师会员认证</h3>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card style="width: 30%" @click.native="TobeStudentVip">
            <h3>学生会员认证</h3>
          </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'MyOccupation',
  methods: {
    TobeStudent () {
      this.$axios({method: 'GET', url: this.$baseUrl + '/Student/addStudent'}).then((response) => {
        if (response.data === true) {
          this.$message.success('成功完成学生入驻')
        } else if (response.data === false) {
          this.$message.success('您已经是学生')
        } else {
          this.$message.error('莫名其妙的错误')
        }
      })
    },
    TobeTeacher () {
      this.$axios({method: 'GET', url: this.$baseUrl + '/Teacher/addTeacher'}).then((response) => {
        if (response.data === true) {
          this.$message.success('成功完成老师入驻')
        } else if (response.data === false) {
          this.$message.success('您已经是老师')
        } else {
          this.$message.error('莫名其妙的错误')
        }
      })
    },
    TobeTeacherVip () {
      this.$axios({method: 'GET', url: this.$baseUrl + '/Teacher/TobeVip'}).then((response) => {
        if (response.data === true) {
          this.$message.success('您成功成为老师Vip用户')
        } else if (response.data === false) {
          this.$message.error('莫名其妙的错误')
        } else {
          this.$message.error('莫名其妙的错误')
        }
      })
    },
    TobeStudentVip () {
      this.$axios({method: 'GET', url: this.$baseUrl + '/Student/toBeVip'}).then((response) => {
        if (response.data === true) {
          this.$message.success('您成功成为学生Vip用户')
        } else if (response.data === false) {
          this.$message.error('莫名其妙的错误')
        } else {
          this.$message.error('莫名其妙的错误')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
