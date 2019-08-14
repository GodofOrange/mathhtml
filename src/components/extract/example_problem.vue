<template>
    <div>
      <el-row>
        <el-col :span="4"><el-tree :props="props" :load="loadNode" lazy></el-tree></el-col>
        <el-col :span="20">
          <h1>题目标题</h1>
          <el-divider></el-divider>
          <p>题目主体</p>
          <el-divider></el-divider>
          <p>题目解析</p>
          <el-divider></el-divider>
          <p>题目讨论</p>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'example_problem',
  data () {
    return {
      props: {
        label: 'name',
        children: 'zones',
        isLeaf: 'leaf'
      }
    }
  },
  methods: {
    loadNode (node, resolve) {
      if (node.level === 0) {
        return resolve([
          { name: '高等数学' },
          { name: '线性代数' },
          { name: '数学建模' },
          { name: '概率论' }])
      }
      if (node.level > 1) return resolve([{ name: '各种题目', leaf: true }])

      setTimeout(() => {
        const data = [{
          name: '章节1'
        }, {
          name: '章节2'
        }]
        resolve(data)
      }, 500)
    }
  }
}
</script>

<style scoped>

</style>
