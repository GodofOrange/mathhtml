<template>
    <div id='explore'>
      <h1 style="text-align: center;">欢迎来到精·互·同探索地带</h1>
      <p style="color: darkgray;text-align: center;">“精互同”大学数学电子竞技教学平台是一款学生学习大学数学的平台。教师可以通过此平台详细了解每个知识点学生的掌握情况，同时此平台以竞技的方式刺激学生学习兴趣，更好的掌握大学数学。</p>
      <el-divider></el-divider>
        <el-carousel :interval="4000" type="card" height="350px" style="width: 1000px;margin: auto">
          <el-carousel-item>
            <img src='@/assets/explore/jing.jpg'>
          </el-carousel-item>
          <el-carousel-item>
            <img src='@/assets/explore/hu.jpg'>
          </el-carousel-item>
          <el-carousel-item>
            <img src='@/assets/explore/tong.jpg'>
          </el-carousel-item>
        </el-carousel>
      <el-divider/>
      <el-card>
        <el-row>
          <el-col :span="3">
          <h2>关于叶慧老师</h2>
          <img src='@/assets/explore/main-user.png'>
          </el-col>
          <el-col :span="21" style="margin: auto;">
            <h3>叶慧 江苏科技大学教学名师  精互同教学模式创始人。</h3>
            <p style="color: darkgray">注重教学创新，自创“精互同”教学模式，获学校“教学成果特等奖”。被学生自发誉为“高数女神” ，被学生选为“最喜爱和最美女教师”，江苏电视台、镇江电视台进行教学专访，新浪、搜狐、现代快报、扬子晚报等多家媒体转载报道， 教学成果显著，学生多年多次联名请愿其继续授课。获江苏省优秀党员，江苏省优秀教学工作者，江苏科技大学优秀教师，优秀党员。主持参与国家、省部级、校级课题10多项，发表教学科研论文20多篇。</p>
          </el-col>
        </el-row>
      </el-card>
      <el-divider/>
      <!--div>
        <el-card>
          <h3 style="text-align: center">精互同项目开发成员技术简介及成员</h3>
          <el-row :gutter='20'>
            <el-col :span="4">
              <h3>系统总设计师:洪湛</h3>
              <p>负责平台总设计，负责前端规划，设立技术栈，需求实现，网站运营，编写代码</p>
            </el-col>
            <el-col :span="4">
              <h3>后端设计师：赵俊祥</h3>
              <p>负责数据库的规划及后端逻辑实现，提供一个稳定的服务端，编写代码</p>
            </el-col>
            <el-col :span="4">
              <h3>产品经理：张文静</h3>
              <p>负责分析产品需求，联系开发人员和老师，画思维导图，负责项目总管理</p>
            </el-col>
            <el-col :span="4">
              <h3>游戏设计师：刘创</h3>
              <p>负责游戏模块，游戏模块总设计，实现游戏各模块功能，编写代码</p>
            </el-col>
            <el-col :span="4">
              <h3>平台运营经理：史兴燕</h3>
              <p>负责数学建模内容，题库内容，思维导图及题目审核，提供精致的题目</p>
            </el-col>
          </el-row>
        </el-card>
      </div-->
    </div>
</template>

<script>
export default {
  name: 'explore'
}
</script>

<style scoped>
  #explore{
    margin-right: 10%;
    margin-left: 10%;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
