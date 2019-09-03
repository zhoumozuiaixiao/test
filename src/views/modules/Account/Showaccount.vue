<template>
  <div id="showaccount">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>员工列表</span>
        <template>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column label="录入时间" :formatter="forminputTime" prop="inputTime"></el-table-column>
            <el-table-column label="姓名" prop="username"></el-table-column>
            <el-table-column label="管理员" :formatter="formatterGroup" prop="userGroup"></el-table-column>
            <el-table-column align="right">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">編輯</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >刪除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </div>
      <!-- 分页 -->
      <el-pagination
        :page-size="pageSize"
        @current-change="pagesClick"
        layout="total,prev, pager,next"
        :total="total"
      ></el-pagination>
    </el-card>
  </div>
</template>



<script>
//引入用户列表
import { showList, pagesGet } from "../../../apis/apis";
//引入时间格式
import moment from "moment";
export default {
  data() {
    return {
      currentPage:1,//当前页
      pageSize:5,//当前页总条数
      total:0,//总条数
      tableData: [
        {
          inputTime: "",
          username: "",
          userGroup: ""
        }
      ]
    };
  },
  mounted() {
    //页面刷新的时候分页 初始化获取数据，默认传入页面为1
     this.ajaxgetList(this.currentPage)
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    // //点击分页条数
    pagesClick(newPage){   
      //发生请求获取数据
     thi.ajaxgetList(newPage)   
       //修改本地数据
       this.currentPage=newPage
    },
    //  //分页
    ajaxgetList(page){
       pagesGet(page,this.pageSize).then(res =>{
        this.tableData=res.data   //设置表格数据
         this.total=res.total   //设置总记录数
    })
    },
    //  } ,
    pagesClick(currentPage){
      pagesGet(currentPage)        
               .then(res =>{
              //  this.tableData=res.data
                 
               })
       
    },
    
    //管理分组
    formatterGroup(row, column, cellValue) {
      // if(cellValue === 1){
      //     return "超级管理员"
      // }else{
      //     return "普通管理员"
      // }
      switch (cellValue) {
        case 1:
          return "超级管理员";
        case 2:
          return "普通管理员";
      }
    },
    //时间格式化
    forminputTime(row, column, cellValue) {
      return moment(cellValue).format("YYYY-MM-DD h:mm:ss");
    }
  },
};
</script>

<style lang="scss" scoped>
</style>