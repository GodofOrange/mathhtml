<template>
  <div id="read">
    <h1 style="text-align: center">阅读</h1>
    <el-divider></el-divider>
    <el-row>
      <el-col :span="3"></el-col>
      <el-col :span="15">
    <div class="icard">
      <el-card shadow="hover" style="background-color: snow" class="box-card">
        <span style="font-weight: bold">{{title}}</span>
        <p>数学的发展是以数和形两个基本概念为主干的,整个数学就是围绕数与形两个概念的提炼、演变和发展而发展的.数学发展史中—直存在着数与形两条并行不悖的发展路线,一条以发展计算为中心的算术代数路线,一条以发展形为主的几何路线,前者有两个源头,一个源头是独立发展的中国数学,另一源头是古巴比伦数…</p>
        <div style="float: right">
          <el-button type="primary" icon="el-icon-chat-line-round" size="mini" circle></el-button>
          <el-button type="primary" icon="el-icon-star-off" size="mini" circle></el-button>
          <el-button type="primary" icon="el-icon-chicken" size="mini" circle></el-button>
        </div>
      </el-card>
    </div>
        <div class="icard">
          <el-card shadow="hover" style="background-color: snow" class="box-card">
            <span style="font-weight: bold">数学是人类文明的基石</span>
            <p>前面说过，古希腊数学成就十分辉煌，但是你可能不知道，它的结局却很落寞。公元前 212 年，罗马人兵临雅典城下，杀死了古希腊最后一位大数学家阿基米德，这意味着数学的黄金时代彻底结束。罗马人可不那么爱科学，他们烧毁了大部分的数学典籍。从此，欧洲逐渐进入了中世纪，数学研究停滞不前。过了好几百年，一直到公元 7 世纪，中亚的阿拉伯帝国才开始注重科学研究，把少数残存的《几何原本》翻译成了阿拉伯语，保存在巴格达。</p><img src="@/assets/ajmd.jpg"><p>又过去五百多年，欧洲和中亚的联系在 12 世纪变得紧密，欧洲人猛然发现，阿拉伯人竟然有这么厉害的数学成就，于是学者们开始疯狂投身翻译事业，用接近三百年的时间，把大量希腊和中东的数学著作，从阿拉伯文翻译回了拉丁文，其中就包括来自印度的数学符号阿拉伯数字。就这样，时隔近千年，希腊科学遗产兜了一个大圈，终于又回到了欧洲。</p>
            <div style="float: right">
              <el-button type="primary" icon="el-icon-chat-line-round" size="mini" circle></el-button>
              <el-button type="primary" icon="el-icon-star-off" size="mini" circle></el-button>
              <el-button type="primary" icon="el-icon-chicken" size="mini" circle></el-button>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="6">
        <h1>今日阅读排行榜</h1>
        <ul>
          <li>排第一的</li>
          <li>第二的</li>
          <li>第三的</li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'read',
  data () {
    return {
      title: 'MY'
    }
  }
}
</script>

<style scoped>
#read{
  margin-top: 10px;
  margin-right: 3%;
  margin-left: 3%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.box-card{
  margin: auto;
  width: 70%;
}
.icard{
  margin-top: 30px;
}
  .icard p{
    color: darkgray;
  }
</style>
