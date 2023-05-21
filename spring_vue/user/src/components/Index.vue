<template>
  <div>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in imags" :key="item">
        <el-image
          :src="item"
          fit="fill"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import homeImg1 from '../assets/imgs/1.jpg'
import homeImg2 from '../assets/imgs/2.jpg'
import homeImg3 from '../assets/imgs/3.jpg'
import homeImg4 from '../assets/imgs/4.jpg'
    export default {
       name: "Index",
      data(){
         return {
           imags: [homeImg1,homeImg2,homeImg3,homeImg4]
         }
      }
    }
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
