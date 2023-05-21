<template>
    <div>
      <h1>Upload组件的使用</h1>
      <el-upload
        ref="uploads"
        multiple :limit="3"
        :on-exceed="exceed"
        :before-remove="beforeRemove"
        :data="info" :on-remove="remove"
        :on-preview="show"
        name="aaa" accept=".txt,.jpg"
        :drag="true" :file-list="fileList"
        action="https://jsonplaceholder.typicode.com/posts/">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <el-button @click="clearFile">调用方法测试</el-button>
    </div>
</template>

<script>
    export default {
        name: "uploads",
      data(){
          return {
            fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
            ,
            info: {id:'21'}
          };
      },
      methods: {
        clearFile(){
          this.$refs.uploads.clearFiles();
        },
          show(file){
            console.log(file);
          },
          remove(file,fileList){
          console.log(file);
            console.log(fileList);
           // alert(fileList.length);
          },
        beforeRemove(file,fileList){
            if(fileList.length<3){
              alert("上传文件个数不能小于3个");
              return false;
            }
            return true;
        },
        exceed(file,fileList){
            alert("文件超出上传的个数限制");
        }
      }
    }
</script>

<style scoped>

</style>
