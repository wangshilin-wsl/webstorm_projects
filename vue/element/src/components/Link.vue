<template>
    <div>
      <h1>使用文字链接组件</h1>
      <el-link >默认链接</el-link>
      <el-link type="success" :underline='false'>默认链接</el-link>
      <el-link type="info" icon="el-icon-platform-eleme" disabled>默认链接</el-link>
      <el-link type="danger" href="http://www.baidu.com" target="_blank">默认链接</el-link>
    </div>
</template>

<script>
    export default {
        name: "link"
    }
</script>

<style scoped>

</style>
