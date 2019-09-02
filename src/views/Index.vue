<template>
  <div id="index">
    <el-container>
      <!-- 头部 -->
      <el-header>
        <div>
          <p>张三</p>
        </div>
      </el-header>
      <!-- 内容 -->
      <el-container>
        <!-- 右边菜单栏 -->
        <el-aside width="200px">
            <!-- 菜单 -->
        <MenuSide></MenuSide>
        </el-aside>
        <el-container>
          <!-- 右边内容 -->
          <el-main>              
            <router-view />
          </el-main>
          <!-- 底部 -->
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
//引入menu菜单
import MenuSide from '../components/Menu'
export default {

  //组成组件
  components:{
      //菜单
     MenuSide,
     
  }
};
</script>

<style lang="less" scoped>
#index {
  width: 100%;
  height: 100%;
       .el-container {
    width: 100%;
    height: 100%;
  }
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 200px;
   
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    -text-align: center;
    -line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
 
}
</style>