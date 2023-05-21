<template>
  <div>
    <h1>结合SpringBoot</h1>
    <el-table :data="tableData" border stripe empty-text="暂时没有数据哦，点击下面的按钮加载数据">
      <el-table-column label="商品编号" prop="id"></el-table-column>
      <el-table-column label="商品名称" prop="name"></el-table-column>
      <el-table-column label="商品价格" prop="price"></el-table-column>
      <el-table-column label="商品数量" prop="num"></el-table-column>
      <el-table-column label="商品图片" prop="image"></el-table-column>
      <el-table-column label="商品创建日期" prop="createDate"></el-table-column>
      <el-table-column label="商品更新日期" prop="updateDate"></el-table-column>
      <el-table-column label="商品类别编号" prop="categoryId"></el-table-column>
    </el-table>
    <el-button @click="aa">加载数据</el-button>
  </div>
</template>

<script>
export default {
name: "SpringBoot",
  data(){
    return {
      tableData: []
    };
  },
  methods: {
    aa(){
      this.axios.get("http://localhost:8080/hh").then(response=>(this.tableData=response.data));
    }
  }
}
</script>

<style scoped>

</style>
