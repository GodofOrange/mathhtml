<template>
  <div>
    <span>文章标题:</span><el-input v-model="title" style="width: 300px"></el-input>
    <tinymce-editor v-model="content" :disabled="disabled"></tinymce-editor>
    <el-button type="primary" @click="postArticle">提交文章</el-button>
  </div>
</template>

<script>
const TinymceEditor = () => import('../../util/tinymce-editor')

export default {
  name: 'articleUp',
  components: {
    TinymceEditor
  },
  data () {
    return {
      disabled: false,
      content: '请在此上传您的文章',
      title: ''
    }
  },
  methods: {
    postArticle () {
      this.$axios({method: 'POST',
        url: this.$baseUrl + '/Article/addArticle',
        data: {
          content: this.content,
          title: this.title
        }
      }).then((response) => {
        if (response.data === true) {
          this.$message.success('提交成功')
        } else {
          this.$message.error('提交失败')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
