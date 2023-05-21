<template>
  <div>
    <h1>Message使用</h1>
    <el-alert title="这是成功信息的提示" show-icon center :closable="false" type="success" >
      <div slot>我是辅助信息</div>
    </el-alert>
    <el-alert title="这是成功信息的提示" show-icon close-text="关闭" type="info"></el-alert>
    <el-alert title="这是成功信息的提示" show-icon type="warning"></el-alert>
    <el-alert title="这是成功信息的提示" @close="aaa" effect="dark" show-icon type="error"></el-alert>

  <h1>Message消息提示</h1>
    <el-button type="primary" @click="showMessage">点击展示消息提示</el-button>
    <el-button type="primary" @click="closeMessage">调用关闭提示的方法</el-button>
  </div>
</template>

<script>
export default {
  name: "Message",
  methods: {
    aaa(){
      console.log('fds');
    },
    showMessage(){
      this.$message({
        message: "这是信息提示",
        type: "success",
        showClose: true,
        center: true,
        iconClass: 'el-icon-user-solid',
        duration: 0
      });
    },
    closeMessage(){
      this.$message.closeAll();
    }
  }
}
</script>

<style scoped>

</style>
