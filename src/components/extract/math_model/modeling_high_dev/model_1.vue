<template>
  <div>
    <el-row>
      <el-col :span="20">
    <h1>赛题发布</h1>
    <el-divider></el-divider>
    <div v-for="(announcement,key) in announcements" :key="key">
      <el-card @click.native="turnToEnter">
        <h3>{{announcement.title}}</h3>
        <p>{{announcement.content}}</p>
        </el-card>
        <br>
  </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'model_1',
  data () {
    return {
      announcements: [
        {id: 1, title: '2019年8月14日第一场', content: '江科大组织的！'},
        {id: 2, title: '2019年8月14日校内联赛', content: '船海学院组织的！'}
      ]
    }
  },
  methods: {
    turnToEnter () {
      this.$router.push('/extract/modeling_high/Enter')
    }
  }
}
</script>

<style scoped>

</style>
