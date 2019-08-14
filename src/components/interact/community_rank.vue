<template>
   <div id="community_rank">
     <h1>社区积分排行</h1>
     <el-divider/>
     <el-row>
       <el-col :span="12">
         <h2>提问榜</h2>
           <el-table
             :data="askRank" class="rank">
             <el-table-column
               prop="rank"
               label="#">
             </el-table-column>
             <el-table-column
               prop="name"
               label="NAME">
             </el-table-column>
             <el-table-column
               prop="score"
               label="积分">
             </el-table-column>
           </el-table>
       </el-col>
       <el-col :span="12">
         <h2>回答榜</h2>
         <el-table
           :data="answerRank" class="rank">
           <el-table-column
             prop="rank"
             label="#">
           </el-table-column>
           <el-table-column
             prop="name"
             label="NAME">
           </el-table-column>
           <el-table-column
             prop="score"
             label="积分">
           </el-table-column>
         </el-table>
       </el-col>
     </el-row>
   </div>
</template>

<script>
export default {
  name: 'community_rank',
  data () {
    return {
      askRank: [{
        rank: 1,
        name: '张三',
        score: 20
      }, {
        rank: 1,
        name: '张三',
        score: 20
      }, {
        rank: 1,
        name: '张三',
        score: 20
      }],
      answerRank: [{
        rank: 1,
        name: '张老师',
        score: 20
      }, {
        rank: 1,
        name: '张三',
        score: 20
      }, {
        rank: 1,
        name: '张三',
        score: 20
      }]
    }
  }
}
</script>

<style scoped>
  #community_rank{
    margin-top: 10px;
    margin-right: 3%;
    margin-left: 3%;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    text-align: center;
  }
  .rank{
    width: 60%;
    margin: auto;
  }
</style>
