<template>
    <div>
      <h1>使用Layout组件</h1>
      <!--创建页面中的一行-->
      <el-row :gutter="10" tag="span">
        <el-col :span='8' ><div style="border: 2px aqua solid;">占用8份</div></el-col>
        <el-col :span='8'><div style="border: 2px aqua solid;">占用8份</div></el-col>
        <el-col :span='8'><div style="border: 2px aqua solid;">占用8份</div></el-col>
      </el-row>
      <!--Layout组件中使用偏移-->
      <h1>Layout组件中使用偏移</h1>
      <el-row>
        <el-col :span="12" :offset="6" :push="3"><div style="border: 2px red solid;">占用12份</div></el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "layout"
    }
</script>

<style scoped>

</style>
