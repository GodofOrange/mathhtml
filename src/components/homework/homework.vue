<template>
    <div id="homework">
      <div>
        <el-row>
          <el-col :span="6"><h3>班级号:123456</h3></el-col>
          <el-col :span="6"><h3>指导老师:张三</h3></el-col>
          <el-col :span="6"><h3>班级排名:5</h3></el-col>
          <el-col :span="6"><h3>选择其他班级</h3><el-select v-model="value" placeholder="请选择" style="width: 50%">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select><el-button>进入班级</el-button></el-col>
        </el-row>
      </div>
      <el-divider></el-divider>
      <el-row :gutter='30'>
        <el-col :span="12">
          <div class="homework-card">
            <h3>作业清单</h3>
              <el-table :data="homeworkData" style="width: 80%">
                <el-table-column label="Date" prop="date"></el-table-column>
                <el-table-column label="Name" prop="name"></el-table-column>
                <el-table-column label="做作业" align="right">
                    <el-button size="mini">进入作业</el-button>
                </el-table-column>
                <el-table-column align="right">
                  <el-tag type="danger" size="mini">未完成</el-tag>
                </el-table-column>
              </el-table>
          </div>
        </el-col>
        <el-col :span ="6">
          <div class="homework-card">
            <h3>班级作业完成度排行榜</h3>
            <el-table :data="person" style="width: 80%">
              <el-table-column label="#" prop="rank"></el-table-column>
              <el-table-column label="Name" prop="name"></el-table-column>
              <el-table-column label="Score" prop="score"></el-table-column>
            </el-table>
          </div>
        </el-col>
        <el-col :span ="6">
          <div class="homework-card">
            <h3>作业题解答案</h3>
            <el-table :data="homeworkData" style="width: 80%">
              <el-table-column label="Date" prop="date"></el-table-column>
              <el-table-column label="Name" prop="name"></el-table-column>
              <el-table-column align="right">
                <el-button size="mini">查看作业题解</el-button>
              </el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'homework.vue',
  data () {
    return {
      homeworkData: [{
        date: '2019-05-02',
        name: '第一周作业'
      }, {
        date: '2019-05-04',
        name: '第二周作业'
      }, {
        date: '2019-05-01',
        name: '第三周作业'
      }, {
        date: '2019-05-03',
        name: '第四周作业'
      }, {
        date: '2019-05-03',
        name: '第四周作业'
      }, {
        date: '2019-05-03',
        name: '第四周作业'
      }, {
        date: '2019-05-03',
        name: '第四周作业'
      }, {
        date: '2019-05-03',
        name: '第四周作业'
      }, {
        date: '2019-05-03',
        name: '第四周作业'
      }, {
        date: '2019-05-03',
        name: '第四周作业'
      }, {
        date: '2019-05-03',
        name: '第四周作业'
      }, {
        date: '2019-05-03',
        name: '第四周作业'
      }],
      person: [{
        rank: 1,
        name: '张三',
        score: 18
      }, {
        rank: 2,
        name: '李四',
        score: 13
      }, {
        rank: 3,
        name: '王五',
        score: 12
      }],
      options: [{
        value: '选项1',
        label: '班级号:12345,指导老师:张三'
      }, {
        value: '选项2',
        label: '班级号:12346,指导老师:王五'
      }, {
        value: '选项3',
        label: '班级号:12347,指导老师:李四'
      }],
      value: ''
    }
  }
}

</script>

<style scoped>
#homework{
  margin-top: 10px;
  margin-right: 3%;
  margin-left: 3%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
  .homework-card{
    margin: auto;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
</style>
