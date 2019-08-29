<template>
  <div id="MyInfomation">
    <h1>我的信息</h1>
    <el-divider></el-divider>
    <h3>头像上传</h3>
    <el-upload
      ref="upload"
      action=''
      :on-change="getFile"
      :limit="1"
      list-type="picture"
      :auto-upload="false"
    >
      <el-button size="small" type="primary">选择头像图片,最多上传一张图片</el-button>
    </el-upload>
    <el-divider></el-divider>
    <h3>个性签名</h3>
    <el-input v-model="info.signature" placeholder="请输入内容" style="width: 30%"></el-input>
    <el-divider></el-divider>
    <h3>QQ</h3>
    <el-input v-model="info.qq" placeholder="请输入内容" style="width: 30%"></el-input>
    <el-divider></el-divider>
    <h3>电话</h3>
    <el-input v-model="info.iphone" placeholder="请输入内容" style="width: 30%"></el-input>
    <el-divider></el-divider>
    <h3>email</h3>
    <el-input v-model="info.email" placeholder="请输入内容" style="width: 30%"></el-input>
    <el-divider></el-divider>
    <h3>年级</h3>
    <el-input v-model="info.grade" placeholder="请输入内容" style="width: 30%"></el-input>
    <el-divider/>
    <h3>专业</h3>
    <el-input v-model="info.major" placeholder="请输入内容" style="width: 30%"></el-input>
    <el-divider>
    </el-divider>
    <h3>大学</h3>
    <el-input v-model="info.university" placeholder="请输入内容" style="width: 30%"></el-input>
    <el-divider/>
    <h3>学院</h3>
    <el-input v-model="info.college" placeholder="请输入内容" style="width: 30%"></el-input>
    <el-divider/>
    <el-button type="primary" plain @click="ToUpload">单击修改</el-button>
  </div>
</template>

<script>
export default {
  name: 'MyInfomation',
  data () {
    return {
      input: '1',
      info: {
        college: 'string',
        email: 'string',
        grade: 'string',
        id: 0,
        img: 'string',
        iphone: 'string',
        major: 'string',
        qq: 'string',
        signature: 'string',
        university: 'string',
        userid: 0
      }
    }
  },
  mounted () {
    this.$axios({method: 'GET', url: this.$baseUrl + '/UserInformation/getMyInformation'}).then((response) => {
      console.log(response.data === '')
      if (response.data === '') {
        this.$axios({method: 'POST',
          url: this.$baseUrl + '/UserInformation/addUserInformation',
          params: {college: '',
            email: '',
            grade: '',
            img: '',
            iphone: '',
            major: '',
            QQ: '',
            signature: '',
            university: ''}
        }).then((response) => {
          if (response.data === true) {
            this.$message.success('信息初始化成功')
          }
        })
      } else {
        this.info = response.data
      }
    }).catch((error) => {
      console.log(error) // 请求失败返回的数据
    })
  },
  methods: {
    ToUpload () {
      this.$axios({method: 'POST',
        url: this.$baseUrl + '/UserInformation/updateUserInformation',
        data: {college: this.info.college,
          email: this.info.email,
          grade: this.info.grade,
          img: this.info.img,
          iphone: this.info.iphone,
          major: this.info.major,
          qq: this.info.qq,
          signature: this.info.signature,
          university: this.info.university}
      }).then((response) => {
        if (response.data === true) {
          this.$message.success('提交成功')
        } else {
          this.$message.error('服务器错误提交失败')
        }
      })
    },
    getFile (file, fileList) {
      const isLt1M = file.size / 1024 / 512 < 1
      if (!isLt1M) {
        this.$message.error('上传头像图片大小不能超过 512KB!,请缩小大小')
        this.$refs.upload.clearFiles()
      } else {
        this.getBase64(file.raw).then(res => {
          this.info.img = res
        })
      }
    },
    getBase64 (file) {
      return new Promise(function (resolve, reject) {
        let reader = new FileReader()
        let imgResult = ''
        reader.readAsDataURL(file)
        reader.onload = function () {
          imgResult = reader.result
        }
        reader.onerror = function (error) {
          reject(error)
        }
        reader.onloadend = function () {
          resolve(imgResult)
        }
      })
    },
    handleRemove (file) {
      console.log(file)
    }
  }
}
</script>

<style scoped>
  #MyInfomation{
    margin-right: 10%;
    margin-left: 10%;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    text-align: center;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
