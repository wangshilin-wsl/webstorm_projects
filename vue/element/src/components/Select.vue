<template>
    <div>
      <h1>Select的使用</h1>
      <el-select v-model="sel1">
        <el-option value="北京">北京</el-option>
        <el-option value="天津">天津</el-option>
      </el-select>

      <h1>获取远程数据加载下拉列表</h1>
      <el-select ref="selects" @change="aa" v-model="sel2">
        <el-option v-for="option in options" :label="option.name" :value="option.id" :key="option.id"></el-option>
      </el-select>
      <el-button @click="bb">调试方法</el-button>
    </div>
</template>

<script>
    export default {
        name: "select",
        data(){
          return {
            options: [
              {id:'1',name:'研发部'},
              {id:'2',name:'小卖部'},
              {id:'3',name:'小米部'},

            ],
            sel1:'',
            sel2:''
          }
        },
      methods:{
          aa(value){
            console.log(value);
          },
        bb(){
            this.$refs.selects.focus();
        }
      }
    }
</script>

<style scoped>

</style>
