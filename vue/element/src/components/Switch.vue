<template>
    <div>
      <h1>Switch开发组件的使用</h1>
      <el-switch v-model="value" ref="sw"  active-color="#13ce66"
                 inactive-color="#ff4949" active-text='打开'
                 inactive-text="关闭" :active-value='true'
                 :inactive-value="false" :width="200" @change="aa"></el-switch>
      <el-button @click="bb">按钮</el-button>
    </div>
</template>

<script>
    export default {
        name: "switch",
      data(){
          return{
            value: true
          };
      },
      methods: {
          aa(value){
            console.log(value);
          },
        bb(){
            alert("fsdf");
            this.$refs.sw.focus();
        }
      }
    }
</script>

<style scoped>

</style>
