<template>
  <div id="showaccount">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>员工列表</span>
        <template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column label="录入时间" :formatter="forminputTime" prop="inputTime"></el-table-column>
            <el-table-column label="姓名" prop="username"></el-table-column>
            <el-table-column label="管理员"   :formatter="formatterGroup" prop="userGroup"></el-table-column>
            <el-table-column align="right">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >Delete</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </div>
    </el-card>
  </div>
</template>

      </div>
    </el-card>
  </div>
</template>

<script>
//引入用户列表
import { showList } from "../../../apis/apis";
//引入时间格式
import moment from 'moment'
export default {
  data() {
    return {
      tableData: [
        {
          inputTime: "",
          username: "",
          userGroup:""
        }
      ]
    };
  },
  mounted() {
    //获取用户名和分组
    let username = localStorage.getItem("token");
    let userGroup = localStorage.getItem("userGroup");
    let user = {
      parmas: {
        username,
        userGroup
      }
    };
    //获取列表
    showList(user).then(res => {

      this.tableData = res.data;
    });

   
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
     //管理分组
    formatterGroup(row, column,cellValue) {  
        // if(cellValue === 1){
        //     return "超级管理员"
        // }else{
        //     return "普通管理员"
        // }     
        switch(cellValue){
          case 1:
           return '超级管理员'
          case 2:
           return '普通管理员'
        }

    },
   //时间格式化
    forminputTime(row, column,cellValue){

      return moment(cellValue).format('YYYY-MM-DD h:mm:ss');
        
    }
  }
 };
</script>

<style lang="scss" scoped>
</style>