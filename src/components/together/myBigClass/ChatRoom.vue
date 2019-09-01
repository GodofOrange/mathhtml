<template>
  <div>
    <input type="text" v-model="text">
    <button @click="sendMessage">发送消息</button>
    <div class="bubble">
    </div>
    <div>
      <div v-for="(data,key) in datas" :key="key">
        {{data.content}}
      </div>
    </div>
  </div>
</template>
<script>
import SockJS from 'sockjs-client'
import Stomp from 'webstomp-client'
export default {
  name: 'ChatRoom',
  data () {
    return {
      text: '',
      datas: [],
      stompClient: null
    }
  },
  mounted () {
    if ('WebSocket' in window) {
      this.initWebSocket()
    } else {
      alert('当前浏览器 Not support websocket')
    }
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
          this.datas.push(JSON.parse(greeting.body))
        })
      })
    }
  }
}
</script>

<style scoped>
</style>
