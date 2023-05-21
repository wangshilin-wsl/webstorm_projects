<template>
  <div>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"

      border
      style="width: 100%">
      <el-table-column
        label="编号"
        width="180" prop="id">
      </el-table-column>
      <el-table-column
        label="姓名"
        width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="生日" prop="bir"></el-table-column>
      <el-table-column label="性别" prop="sex"></el-table-column>
      <el-table-column label="地址" prop="address"></el-table-column>

      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入姓名的关键字搜索"/>
        </template>
        <template slot-scope="scope">

          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>

          <el-popconfirm
            confirm-button-text='确定'
            cancel-button-text='不了'
            icon="el-icon-info"
            icon-color="red"
            title="确定要删除当前用户吗？"
            @confirm="handleDelete(scope.$index, scope.row)"
          >
            <el-button
              size="mini"
              type="danger"
              slot="reference">删除</el-button>
          </el-popconfirm>

        </template>
      </el-table-column>
    </el-table>
<!--分页组件-->
    <el-row>
      <el-col :span="16" :offset="8">
        <div style="margin: 10px 0px;">
          <el-pagination
            layout="prev, pager, next,jumper,total,sizes"
            :page-size="size"
            :page-sizes="[2,4,6,8,10]"
            :current-page="pageNow"
            prev-text="上一页"
            next-text="下一页"
            background
            @current-change="findPage"
            @size-change="findSize"
            :total="total">
          </el-pagination>
        </div>
      </el-col>
    </el-row>


    <el-button @click="aaa" type="success" style="margin: 10px 0px;" size="mini">添加</el-button>

    <transition name="el-zoom-in-center">
      <div v-show="show" class="transition-box">
        <el-form   :rules="rules" :hide-required-asterisk="false" label-suffix=":" ref=userForm :model="form" label-width="80px">

          <el-form-item label="姓名" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="生日" prop="bir">
            <el-date-picker value-format="yyyy-MM-dd"  type="date" placeholder="选择日期" v-model="form.bir" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="form.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="详细地址" prop="address">
            <el-input type="textarea" v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('userForm')">保存信息</el-button>
            <el-button @click="bbb">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </transition>


  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      search: '',
      tableData: [],
      show: false,
      form: {
        //id: '',
        name: '',
        bir: '',
        sex: '男',
        address: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户姓名！', trigger: 'blur' }
        ],
        bir: [
          { required: true, message: '请选择用户的生日！', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入用户地址！', trigger: 'blur' }
        ]
      },
      total: 0,
      size: 4,
      pageNow: 1
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index);
      this.show=true;
      //回显编辑信息
     this.form=row;
    },
    handleDelete(index, row) {
      console.log(index);
      console.log(this.tableData[index].id);
      //发送axios请求
     this.$http.get("http://localhost:8989/user/delete?id="+this.tableData[index].id).then(res=>{
       console.log(res.data.statue);
       if(res.data.statue){
        this.$message({
          message: "恭喜你"+res.data.msg,
          type: 'success'
        });
         //刷新页面
         this.findAllTableData();
      }else{
        this.$message({
          message: res.data.msg,
          type: 'error'
        });
      }
     });
    },
    aaa(){//点击添加的时候的事件处理
      this.form={sex: '男'};
      this.show=!this.show;
    },
    bbb(){//点击添加的时候的事件处理
    this.form={sex: '男'};
  },
    onSubmit(userForm) {
      this.$refs[userForm].validate((valid) => {
        if (valid) {
          this.$http.post("http://localhost:8989/user/saveOrUpdate",this.form).then(res=>{
            if(res.data.statue){
              this.$message({
                message: "恭喜你"+res.data.msg,
                type: 'success'
              });
              //清空表单信息
              this.form={sex: '男'};
              //隐藏表单
              this.show=false;
              //刷新页面
              this.findAllTableData();
            }else{
              this.$message({
                message: res.data.msg,
                type: 'error'
              });
            }
          });
        } else {
         this.$message.error("表单信息不合法!");
          return false;
        }
      });

    },
    findAllTableData(){
      this.$http.get("http://localhost:8989/user/findByPage?pageNow="+this.pageNow+"&pageSize="+this.size)
        .then(value => {
        //console.log(value);
        this.tableData=value.data.users;
        this.total=value.data.total;
      });
    },
    //用来处理分页的相关方法
    findPage(page){
      this.pageNow=page;
      this.findAllTableData();
    },
    findSize(size){
      this.size=size;
      this.findAllTableData();
    }
  },
  created() {
    this.findAllTableData();
  }
}
</script>

<style scoped>
.transition-box {
  margin-bottom: 10px;
  width: 50%;
  height: 375px;
  border-radius: 4px;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
