<template>
  <div id="menuSide">
    <el-menu
      default-active="2"
      unique-opened
      router
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu :index="item.index" v-for="item in power" :key="item.index">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item  :index="text.index" v-for="text in item.child" :key="text.title">{{text.name}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data(){
    return{
      userGroup:2,//默认一个组
      treelist: [
        {
          index: "1",
          cls: "el-icon-s-cooperation",
          title: "商品管理",
          userGroup: [1, 2],
          child: [
            { index: "/index/commodity", name: "商品管理" },
            { index: "/index/addcommodity", name: "添加管理" }
          ]
        },
        {
          index: "2",
          cls: "el-icon-s-goods",
          title: "账号管理",
          userGroup: [1],
          child: [
            { index: "/index/changepwd", name: "修改密码" },
            { index: "/index/showaccount", name: "账号管理" },
            { index: "/index/addaccount", name: "增加账号" }
          ]
        },
        {
          index: "3",
          cls: "el-icon-circle-plus",
          title: "进货管理",
          userGroup: [1, 2],
          child: [
            { index: "/index/stockcontrol", name: "库存管理" },
            { index: "/index/addStock", name: "添加库存" }
          ]
        },
        {
          index: "4",
          cls: "el-icon-remove",
          title: "出货管理",
          userGroup: [1, 2],
          child: [
            { index: "/index/clear", name: "销售列表" },
            { index: "/index/clearout", name: "商品出库" },
            { index: "/index/clearback", name: "商品退货" }
          ]
        },
        {
          index: "5",
          cls: "el-icon-s-data",
          title: "统计管理",
          userGroup: [1],
          child: [
            { index: "/index/sta", name: "销售统计" },
            { index: "/index/stocksta", name: "进货统计" }
          ]
        },
        {
          index: "6",
          cls: "el-icon-s-custom",
          title: "会员管理",
          userGroup: [1],
          child: [
            { index: "/index/c", name: "账号管理" },
            { index: "/index/d", name: "添加账号" }
          ]
        }
      ]
    }
  },
  mounted() {
     //获取本地存储
     this.userGroup=parseInt(localStorage.getItem("userGroup"))   
  },

  methods: {
 
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  //计算属性
  computed: {
     //权限过滤
     power(){
       return this.treelist.filter(item =>{
            return item.userGroup.indexOf(this.userGroup) >=0
        })
    
     }
 },

};
</script>

<style lang="less" scoped>
#menuSide {
  height: 100%;
  .el-menu {
    height: 100%;
  }
}
</style>