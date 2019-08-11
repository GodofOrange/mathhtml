<template>
<div id="ProblemSet">
  <div class="Lesson">
    <div class="size-max" style="margin-top: 20px">
    <i class="el-icon-menu"></i>
    <span slot="title">分类 - 全部</span>
    </div>
    <div style="margin-top: 20px">
    <el-row :gutter="20">
      <el-col :xs="20" :sm="10" :md="8" :lg="6" :xl="4" >
      <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <img src="@/assets/Lesson.jpg" class="image">
        <div style="padding: 10px;">
          <span>考研</span>
          <div class="bottom">
            <el-button type="text" @click="turnToProblem_model" class="button">进入板块</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
      <el-col :xs="20" :sm="10" :md="8" :lg="6" :xl="4" >
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <img src="@/assets/mathmodel-example.jpg" class="image">
          <div style="padding: 10px;">
            <span>基础题</span>
            <div class="bottom">
              <el-button type="text" @click="turnToProblem_model" class="button">进入板块</el-button>
            </div>
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
          <el-table-column prop="tag" label="难度"></el-table-column>
          <el-table-column label="题目链接"><el-button size="mini" @click="turnToProblem">进入</el-button></el-table-column>
        </el-table>
      </div>
    <div class="block" style="margin-right: 30%;margin-left: 30%">
      <el-pagination
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProblemSet',
  data () {
    return {
      tableData: [{
        id: '1',
        title: '微积分',
        percentage: '30%',
        tag: '考研'
      }, {
        id: '2',
        title: '导数',
        percentage: '30%',
        tag: '基础'
      }, {
        id: '3',
        title: '二重积分',
        percentage: '30%',
        tag: '基础'
      }, {
        id: '4',
        title: '导数',
        percentage: '30%',
        tag: '基础'
      }, {
        id: '5',
        title: '导数',
        percentage: '30%',
        tag: '基础'
      }, {
        id: '6',
        title: '导数',
        percentage: '30%',
        tag: '基础'
      }]
    }
  },
  methods: {
    turnToProblem () {
      this.$router.replace({
        path: '/problem'
      })
    },
    turnToProblem_model () {
      this.$router.replace({
        path: '/problem-model'
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
