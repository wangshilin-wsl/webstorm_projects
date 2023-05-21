<template>
  <div>
    <h1>Table的使用</h1>

    <el-table ref="mytable"  :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
              @select="selectRow" size="small"
              :row-class-name="showCss" :show-header="true"
              :fit="true" :height="400"  border>
      <el-table-column type="selection"></el-table-column>
      <el-table-column width="200px" :resizable="false"  align="center" header-align="left" label="编号" prop="id"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="年龄" :sort-method="sorts" sortable prop="age"></el-table-column>
      <el-table-column label="邮箱" prop="email"></el-table-column>
      <el-table-column label="部门" :formatter="showDept" prop="dept.name"></el-table-column>
      <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="aaa">清空选择</el-button>
  </div>
</template>

<script>
export default {
  name: "Tables",
  data(){
    return {
      search: '',
      tableData: [
        {id: 21,name: '小丑',age: 23,email: '111382qq.com',dept:{id:1,name:'研发部'}},
        {id: 22,name: '小王',age: 25,email: '2132382qq.com',dept:{id:2,name:'市场部'}},
        {id: 23,name: '小六',age: 26,email: '2689902382qq.com',dept:{}},
      ]
    };
  },
  methods: {
    sorts(a,b){
      return a.age-b.age;
    },
    showDept(row,column,cellValue,index){
      if(cellValue){
        return cellValue;
      }
      return "暂无部门";
    },
    showCss({row,rowIndex}){
      if(rowIndex%2==0)
      return "success-row";
      else return "warning-row";
    },
    selectRow(selection,row){
      console.log(selection);
      console.log(row);
    },
    aaa(){
      this.$refs.mytable.clearSelection();
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style >
.el-table .warning-row {
  background: #eac8a4;
}

.el-table .success-row {
  background: #ebf9ee;
}
</style>
