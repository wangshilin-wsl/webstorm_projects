<template>
    <div>
      <h1>DatePicker的使用</h1>
      <el-date-picker
        v-model="value"
        :editable='false'
        :clearable="false"
        placeholder="请输入创建时间"
        type="daterange"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        format="yyyy/MM/dd"
      ></el-date-picker>

      <br>
      <br>
      <!--日期配置-->
      <el-date-picker
        v-model="value1"
        :picker-options="pickerOptions"
        type="date"
        placeholder="请输入日期"
        @change="aa"
      ></el-date-picker>
    </div>
</template>

<script>
  export default {
    name: "date-picker",
    data(){
      return {
        value: '',
        value1: '',
        pickerOptions: {
          disabledDate(time){
            return time.getTime()<Date.now();
          },
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        }
      };
    },
    methods:{
      aa(value){
        console.log(value);
      }
    }
  }
</script>

<style scoped>

</style>
