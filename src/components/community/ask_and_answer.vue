<template>
    <div id="ask_and_answer">
      <el-row>
        <el-col :span="3"></el-col>
        <el-col :span="15">
          <div class="icard">
            <el-card shadow="hover" style="background-color: snow" class="box-card">
              <span style="font-weight: bold">求E+aA的行列式在a=0处的导数</span>
              <p>
                不用特征值的方法∣aA+E∣=Π(1+aλi)=1+a∗Σλi+o(a)
                用分析方法求导数怎么做呢？</p>
              <div style="float: right">
                <el-button type="primary" icon="el-icon-chat-line-round" size="mini" circle></el-button>
                <el-button type="primary" icon="el-icon-star-off" size="mini" circle></el-button>
                <el-button type="primary" icon="el-icon-chicken" size="mini" circle></el-button>
              </div>
            </el-card>
          </div>
          <div class="icard">
            <el-card shadow="hover" style="background-color: snow" class="box-card">
              <span style="font-weight: bold">在线问题。。小明去商店买一瓶水，水的进价六块，售价八块，小明给了老板十块钱，老板没钱找零，然后老板去隔壁老王哪里换了十块零钱，然后找了小明两块，然后隔壁老王来找老板说你的十块钱是假的，然后老板还了老王十块，请问老板损失多少钱？</span>
              <p>水进价6块
                小明给了老板10块假钱，老板拿去和老王换10块零钱，后来老王发现是假钱，老板把和老王换的10块零钱还给了老王（也就是等于老板和老王没换过钱 ，也就是老板没有陪钱给老王）
                水进价6块，卖8块
                小明用10块假钱买了8块钱的水，老板补给了小明2块钱（相当于小明用10块假钱跟老板换了2块钱，这时老板亏了2块钱。）
                小明用10块假钱换了老板2块钱和进价6块钱的水
                所以老板亏了2+6块钱</p>
              <div style="float: right">
                <el-button type="primary" icon="el-icon-chat-line-round" size="mini" circle></el-button>
                <el-button type="primary" icon="el-icon-star-off" size="mini" circle></el-button>
                <el-button type="primary" icon="el-icon-chicken" size="mini" circle></el-button>
              </div>
            </el-card>
          </div>
          <div class="icard">
            <el-card shadow="hover" style="background-color: snow" class="box-card">
              <span style="font-weight: bold">{{ask}}</span>
              <p>{{answer}}</p>
              <div style="float: right">
                <el-button type="primary" icon="el-icon-chat-line-round" size="mini" circle></el-button>
                <el-button type="primary" icon="el-icon-star-off" size="mini" circle></el-button>
                <el-button type="primary" icon="el-icon-chicken" size="mini" circle></el-button>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <h3>我要问问题</h3>
            <el-button icon="el-icon-edit" type="primary" @click="dialogVisible = true">点击进行问题编辑</el-button>
            <el-dialog
              title="问题编辑"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="handleClose">
              <textarea style="height: 300px;width: 500px">请输入你的问题</textarea>

              <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
            </el-dialog>
          </div>
          <el-divider></el-divider>
          <div>
            <h3>我问过的问题</h3>
            <template>
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="日期">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="题目">
                </el-table-column>
                <el-table-column
                  prop="status"
                  label="状态">
                </el-table-column>
              </el-table>
            </template>

          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'ask_and_answer',
  data () {
    return {
      ask: '在数列｛an｝中，a1=1，a3=9，an+2－2an+1+an=2（n∈N*）\n' +
        '\n' +
        '（1）求数列｛an｝的通项公式\n' +
        '\n' +
        '（2）令bn=an/n，cn=n·an；数列｛bn｝与数列｛cn｝的前n项和分别为Sn与Tn，求证Tn=Sn²',
      answer: '令|PF1|=x则|PF2|=2a-|PF1|=8-x 所以|PF1|·|PF2|=x·(8-x)=-x2+8x=-(x-4)2+16此函数是开口向下的抛物线由于a-c≤x≤a+c，由于a=4,b2=3所以c2=13所以4-根号13≤x≤4+根号13结合图像可知当x=4时有最大值16，当x＝4-根号13时有最小值，带入即可',
      dialogVisible: false,
      tableData: [{
        date: '2019-05-02',
        name: '微积分问题',
        status: '已解决'
      }, {
        date: '2019-05-04',
        name: '导数问题',
        status: '已解决'
      }, {
        date: '2019-05-01',
        name: '二重积分',
        status: '已解决'
      }, {
        date: '2019-05-03',
        name: '三重积分',
        status: '已解决'
      }]
    }
  }
}
</script>

<style scoped>
#ask_and_answer{
  margin-top: 10px;
  margin-right: 3%;
  margin-left: 3%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  text-align: center;
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
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
