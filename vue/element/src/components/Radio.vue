<template>
    <div>
      <h1>Radio单选按钮</h1>
      <!--组件的创建-->
      <el-radio v-model='label' @change="aa" name="sex"  label="男">男</el-radio>
      <el-radio v-model='label' @change="aa" name="sex" border size="small" label="女">女</el-radio>
      <h1>单选按钮组</h1>
      <!--创建单选按钮组-->
      <el-radio-group @change="aa" v-model="radio" fill="#CCC" text-color="red"  size="medium">
        <el-radio-button label="3" border>备选项</el-radio-button>
        <el-radio-button label="6" border>备选项</el-radio-button>
        <el-radio-button label="9" border>备选项</el-radio-button>
      </el-radio-group>
    </div>
</template>

<script>
    export default {
        name: "radio",
      data(){
        return {
          label: '男',
          radio: '3'
        };
      },
      methods:{
          aa(){
            console.log(this.radio);
          }
      }
    }
</script>

<style scoped>

</style>
