<template>
<div id="ProblemSet">
  <div class="Lesson">
    <div class="size-max" style="margin-top: 20px">
    <i class="el-icon-menu"></i>
    <span slot="title">分类 - 全部</span>
    </div>
    <div style="margin-top: 20px">
    <el-row :gutter="20">
      <el-col :xs="20" :sm="10" :md="8" :lg="6" :xl="4" v-for="(problemClassify,key) in problemClassifies" :key="key">
        <el-card :body-style="{ padding: '0px' }" shadow="hover" @click.native="turnToProblem_model(problemClassify.title,problemClassify.id)">
          <div style="padding: 10px;">
            <h1 style="text-align: center">{{problemClassify.title}}</h1>
          </div>
        </el-card>
      </el-col>
    </el-row>
    </div>
      <!--分割线-->
      <el-divider></el-divider>
      <div class="size-max" style="border-radius: 30px">
        <i class="el-icon-menu"></i>
        <span slot="title">题库 - 全部</span>
      </div>
      <div class="sousuo" style="margin-top: 20px">
        <el-row>
          <el-col :span="8"><el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input></el-col>
          <el-col :span="1"><br></el-col>
          <el-col :span="1" style="margin-top: 9px">
            <el-dropdown><span class="el-dropdown-link">难度<i class="el-icon-arrow-down el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>1</el-dropdown-item>
              <el-dropdown-item>2</el-dropdown-item>
              <el-dropdown-item>3</el-dropdown-item>
              <el-dropdown-item>4</el-dropdown-item>
              <el-dropdown-item>5</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          </el-col>
          <el-col :span="1"><br></el-col>
          <el-col :span="1" style="margin-top: 9px">
            <el-dropdown><span class="el-dropdown-link">状态<i class="el-icon-arrow-down el-icon--right"></i></span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>已解出</el-dropdown-item>
                <el-dropdown-item>未解出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="1"><br></el-col>
          <el-col :span="1" style="margin-top: 9px">
            <el-dropdown><span class="el-dropdown-link">标签<i class="el-icon-arrow-down el-icon--right"></i></span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>1</el-dropdown-item>
                <el-dropdown-item>2</el-dropdown-item>
                <el-dropdown-item>3</el-dropdown-item>
                <el-dropdown-item>4</el-dropdown-item>
                <el-dropdown-item>5</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="1"><br></el-col>
          <el-col :span="1" style="margin-top: 9px">
            <el-dropdown><span class="el-dropdown-link">通过率<i class="el-icon-arrow-down el-icon--right"></i></span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>1</el-dropdown-item>
                <el-dropdown-item>2</el-dropdown-item>
                <el-dropdown-item>3</el-dropdown-item>
                <el-dropdown-item>4</el-dropdown-item>
                <el-dropdown-item>5</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="1"><br></el-col>
          <el-col :span="1" style="margin-top: 9px">
            <el-dropdown><span class="el-dropdown-link">列表<i class="el-icon-arrow-down el-icon--right"></i></span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>1</el-dropdown-item>
                <el-dropdown-item>2</el-dropdown-item>
                <el-dropdown-item>3</el-dropdown-item>
                <el-dropdown-item>4</el-dropdown-item>
                <el-dropdown-item>5</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="1"><br></el-col>
          <el-button @click="turnToProblem" round><i class="el-icon-magic-stick"></i>随机开始</el-button>
        </el-row>
      </div>
      <div style="margin-top: 20px;margin-right: 15%;margin-left: 15%">
        <el-table ref="filterTable" :data="tableData">
          <el-table-column prop="id" label="#" column-key="date"></el-table-column>
          <el-table-column prop="title" label="题目标题"></el-table-column>
          <el-table-column prop="percentage" label="通过率"></el-table-column>
          <el-table-column prop="level" label="难度"></el-table-column>
          <el-table-column label="题目链接" ><template slot-scope="scope"><el-button size="mini" @click="turnToProblem(scope.row.title, scope.row.id, scope.row.level)">进入</el-button></template></el-table-column>
        </el-table>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProblemSet',
  data () {
    return {
      tableData: [],
      problemClassifies: []
    }
  },
  mounted () {
    this.$axios({method: 'GET', url: this.$baseUrl + '/Problemset/getAllProblemset'}).then((response) => {
      this.tableData = response.data // 请求成功返回的数据
      console.log(this.tableData)
    }).catch((error) => {
      console.log(error) // 请求失败返回的数据
    })
    this.$axios({method: 'GET', url: this.$baseUrl + '/Problemclassfiy/getAllProblemclassify'}).then((response) => {
      this.problemClassifies = response.data // 请求成功返回的数据
    }).catch((error) => {
      console.log(error) // 请求失败返回的数据
    })
  },
  methods: {
    turnToProblem (pstitle, pid, level) {
      this.$router.push({
        path: '/problem',
        query: {
          id: pid,
          title: pstitle,
          level: level
        }
      })
    },
    turnToProblem_model (pstitle, pcid) {
      this.$router.push({
        path: '/problem-model',
        query: {
          id: pcid,
          title: pstitle
        }
      })
    }
  }
}
</script>

<style scoped>
#ProblemSet{
  margin-right: 10%;
  margin-left: 10%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.size-max {
  font-size: 20px;
  color: darkgrey;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 250px;
  height: 250px;
  display: block;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
