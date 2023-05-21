<template>
    <div>
      <h1>Container布局容器组件的使用</h1>
      <el-container >
        <el-header height="100px"><div ><h1>我是标题</h1></div></el-header>
        <el-container>
          <el-aside width="200px"><h1>我是侧边</h1></el-aside>
          <el-main><h1>我是主体</h1></el-main>
        </el-container>
        <el-footer height="100px"><h1>我是脚脚</h1></el-footer>
      </el-container>
    </div>
</template>

<script>
    export default {
        name: "container"
    }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
