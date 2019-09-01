<template>
  <div id="app">
    <div id="my-el-nav">
<el-menu :default-active="activeIndex"
         class="el-menu-demo"
         mode="horizontal"
         @select="handleSelect"
         >
    <el-menu-item index="0"><img style="height: 30px;width: 30px" src='@/assets/explore/main-user.png'>精互同·电子竞技教育平台</el-menu-item>
    <el-menu-item index="1"><i class="el-icon-edit"></i>探索</el-menu-item>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-s-opportunity"></i>精</template>
      <el-menu-item index="2-1"><i class="el-icon-s-flag"></i>大数竞技</el-menu-item>
      <el-menu-item index="2-2"><i class="el-icon-s-grid"></i>模块题库</el-menu-item>
      <el-menu-item index="2-3"><i class="el-icon-s-marketing"></i>题目解析</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title"><i class="el-icon-link"></i>数学建模</template>
        <el-menu-item index="2-4-1">数学建模介绍</el-menu-item>
        <el-menu-item index="2-4-2">数学建模基础</el-menu-item>
        <el-menu-item index="2-4-3">数学建模进阶</el-menu-item>
        <el-menu-item index="2-4-4">数学建模实战</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><i class="el-icon-s-data"></i>互</template>
      <el-menu-item index="3-1"><i class="el-icon-data-analysis"></i>大数世界</el-menu-item>
      <el-menu-item index="3-2"><i class="el-icon-notebook-2"></i>互动答疑</el-menu-item>
      <el-menu-item index="3-3"><i class="el-icon-s-data"></i>积分排行</el-menu-item>
      <el-menu-item index="7"><i class="el-icon-document"></i>精品文章阅读</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title"><i class="el-icon-s-promotion"></i>同</template>
      <el-menu-item index="4-1">我的大数</el-menu-item>
      <el-menu-item index="4-2">大同社区</el-menu-item>
    </el-submenu>
  <el-menu-item index="13" style="float: right" v-if="showPrise"><el-badge is-dot class="item"><img v-bind:src="imgUrl" style="width: 50px;height: 50px"></el-badge></el-menu-item>
  <el-menu-item index="12" style="float: right" v-if="!showPrise">登录</el-menu-item>
    <el-submenu index="14" style="float: right" v-if="showPrise">
      <template slot="title"><i class="el-icon-s-promotion"></i>{{myuser}}</template>
      <el-menu-item index="14-1">我的信息</el-menu-item>
      <el-menu-item index="14-3">我的入驻</el-menu-item>
      <el-menu-item index="14-4">教师端</el-menu-item>
      <el-menu-item index="14-2">登出</el-menu-item>
    </el-submenu>
  <el-menu-item index="16" style="float: right" v-if="showPrise">聊天大厅</el-menu-item>
</el-menu>
    </div>
    <transition name="el-fade-in"><router-view @changeMyName="changeMyName"/></transition>
    <el-drawer title="聊天大厅" :visible.sync="drawer" direction="rtl">
      <el-input type="text" v-model="text" @keyup.enter.native="sendMessage"></el-input>
      <el-button @click="sendMessage" style="text-align: center">发送消息</el-button>
      <transition name="el-fade-in">
      <div>
        <div v-for="(data,key) in datas" :key="key">
          <p style="color: #1e6abc;font-size: small;font-weight: bold" >{{data.name}}</p>
          <time style="float: right;font-size: small;color: darkgrey" class="time">{{data.data}}</time>
          <p style="font-size: medium;">:{{data.content}}</p>
        </div>
      </div>
      </transition>
    </el-drawer>
  </div>
</template>
<script>
import SockJS from 'sockjs-client'
import Stomp from 'webstomp-client'
export default {
  name: 'app',
  data () {
    return {
      activeIndex: '1',
      myuser: 'xxx',
      showPrise: false,
      imgUrl: '',
      drawer: false,
      text: '',
      datas: [],
      stompClient: null
    }
  },
  mounted () {
    this.$axios({method: 'GET', url: this.$baseUrl + '/GetMyNameController/getMyName'}).then((response) => {
      this.myuser = response.data
      if (this.myuser !== 'xxx') {
        this.showPrise = true
      }
    }).catch((error) => {
      console.log(error) // 请求失败返回的数据
    })
    this.$axios({method: 'GET', url: this.$baseUrl + '/UserInformation/getMyInformation'}).then((response) => {
      this.imgUrl = response.data.img
    })
  },
  methods: {
    sendMessage () {
      this.stompClient.send('/app/hello', JSON.stringify(this.text), {})
    },
    initWebSocket () {
      this.connection()
    },
    connection () {
      const socket = new SockJS(this.$baseUrl + '/chat')
      this.stompClient = Stomp.over(socket)
      this.stompClient.connect({}, (frame) => {
        this.stompClient.subscribe('/topic/greetings', (greeting) => {
          console.log(JSON.parse(greeting.body))
          this.datas.unshift(JSON.parse(greeting.body))
        })
      })
    },
    changeMyName () {
      this.$axios({method: 'GET', url: this.$baseUrl + '/GetMyNameController/getMyName'}).then((response) => {
        this.myuser = response.data
        if (this.myuser !== 'xxx') {
          this.showPrise = true
        }
        this.$axios({method: 'GET', url: this.$baseUrl + '/UserInformation/getMyInformation'}).then((response) => {
          this.imgUrl = response.data.img
        })
        if ('WebSocket' in window) {
          this.initWebSocket()
        } else {
          alert('当前浏览器 Not support websocket')
        }
      }).catch((error) => {
        console.log(error) // 请求失败返回的数据
      })
    },
    handleSelect (key, keyPath) {
      if (key === '2-2') {
        this.$router.push({
          path: '/problem_set'
        })
      } else if (key === '1') {
        this.$router.replace({
          path: '/'
        })
      } else if (key === '2-1') {
        this.$router.push({
          path: '/contest'
        })
      } else if (key === '7') {
        this.$router.push({
          path: '/read'
        })
      } else if (key === '13') {
        this.$router.push({
          path: '/homework'
        })
      } else if (key === '2-4-1') {
        this.$router.push({
          path: '/modeling'
        })
      } else if (key === '3-2') {
        this.$router.push({
          path: '/community/ask_and_answer'
        })
      } else if (key === '3-1') {
        this.$router.push({
          path: '/community/BigMath'
        })
      } else if (key === '3-3') {
        this.$router.push({
          path: '/community/community_rank'
        })
      } else if (key === '2-3') {
        this.$router.push({
          path: '/problems/example_problem'
        })
      } else if (key === '4-1') {
        this.$router.push({
          path: '/community/BigMathWorld/MyBigMath'
        })
      } else if (key === '4-2') {
        this.$router.push({
          path: '/community/community/BigClass'
        })
      } else if (key === '2-4-2') {
        this.$router.push({
          path: '/extract/modeling_info'
        })
      } else if (key === '2-4-3') {
        this.$router.push({
          path: '/extract/modeling_advance'
        })
      } else if (key === '2-4-4') {
        this.$router.push({
          path: '/extract/modeling_high'
        })
      } else if (key === '12') {
        this.$router.push({
          path: '/login'
        })
      } else if (key === '0') {
        this.$router.push({
          path: '/announcement'
        })
      } else if (key === '14-2') {
        this.$axios({method: 'GET', url: this.$baseUrl + '/logout'}).then((response) => {
          this.myuser = 'xxx'
          this.showPrise = false
        }).catch((error) => {
          console.log(error) // 请求失败返回的数据
        })
      } else if (key === '14-1') {
        this.$router.push({
          path: '/MyInfomation'
        })
      } else if (key === '14-3') {
        this.$router.push({
          path: '/MyOccupation'
        })
      } else if (key === '14-4') {
        this.$router.push({
          path: '/TeacherClient'
        })
      } else if (key === '16') {
        this.drawer = true
      }
    }
  }
}
</script>

<style scoped>
</style>
