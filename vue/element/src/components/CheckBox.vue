<template>
  <div>
    <h1>CheckBox复选框</h1>
    <!--创建-->
    <el-checkbox v-model="checked" @change="aa"  true-label="北京">北京</el-checkbox>
    <el-checkbox v-model="checked" @change="aa"  true-label="上海">上海</el-checkbox>
    <el-checkbox v-model="checked" @change="aa"  true-label="天津">天津</el-checkbox>

    <h1>复选框组</h1>
    <el-checkbox-group v-model="checkList" :min="1" @change="bb">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
    export default {
        name: "check-box",
      data(){
          return {
            checked: true,
            checkList: ['选中且禁用','复选框 A']
          };
      },
      methods:{
          aa(){
            console.log(this.checked);
          },
        bb(){
          console.log(this.checkList);
        }
      }
    }
</script>

<style scoped>

</style>
