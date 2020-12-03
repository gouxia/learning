<template>
  <el-card>
    <!-- 1.面包屑组件 -->
    <my-bread level1="角色列表" level2="权限列表"></my-bread>
    <!-- 2.表格 给el-table设置固定高，会自动产生滚动条 -->
    <el-table 
    :data="tableData"
     stripe 
     height="600px"
    style="width: 100%;margin-top:20px;"
    >
      <el-table-column prop="date" type="index" label="#" width="80"> </el-table-column>
      <el-table-column prop="authName" label="权限名称" width="140"> </el-table-column>
      <el-table-column prop="path" label="路径"> </el-table-column>
      <el-table-column prop="level" label="层级"> 
        <template slot-scope="scope">   
          <span v-if="scope.row.level===0">一级</span>
          <span v-if="scope.row.level===1">二级</span>
          <span v-if="scope.row.level===2">三级</span>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          authName: "商品管理",
          id: "",
          level: 0,
          path: "goods",
          pid: ""

        },
        {
          authName: "订单管理",
          id: "",
          level: 0,
          path: "orders",
          pid: ""
        },
        {
          authName: "权限管理",
          id: "",
          level: 0,
          path: "rights",
          pid: ""
        },
        {
          authName: "商品列表",
          id: "",
          level: 1,
          path: "goods",
          pid: ""
        },
        {
          authName: "添加商品",
          id: "",
          level: 2,
          path: "goods",
          pid: ""
        },
        {
          authName: "订单列表",
          id: "",
          level: 1,
          path: "orders",
          pid: ""
        },
        {
         authName: "添加订单",
          id: "",
          level: 2,
          path: "orders",
          pid: ""
        },
        {
          authName: "用户列表",
          id: "",
          level: 1,
          path: "users",
          pid: ""
        }, 

        {
          authName: "订单列表",
          id: "",
          level: 1,
          path: "orders",
          pid: ""
        },
        {
         authName: "添加订单",
          id: "",
          level: 2,
          path: "orders",
          pid: ""
        },
        {
          authName: "用户列表",
          id: "",
          level: 1,
          path: "users",
          pid: ""
        }, 
        {
          authName: "订单列表",
          id: "",
          level: 1,
          path: "orders",
          pid: ""
        },
        {
         authName: "添加订单",
          id: "",
          level: 2,
          path: "orders",
          pid: ""
        },
        {
          authName: "用户列表",
          id: "",
          level: 1,
          path: "users",
          pid: ""
        }, 
        {
          authName: "订单列表",
          id: "",
          level: 1,
          path: "orders",
          pid: ""
        },
        {
         authName: "添加订单",
          id: "",
          level: 2,
          path: "orders",
          pid: ""
        },
        {
          authName: "用户列表",
          id: "",
          level: 1,
          path: "users",
          pid: ""
        }, 
      ],
    };
  },
  // created() {
  //调用请求接口数据的方法
  //   this.getRightlist()
  // },
  // methods: {
  //请求接口数据的方法
  //   async getRightlist() {
  //设置请求头部，因为除了登录之外的所有请求都需要设置头部，所以将请求头部设置为全局的，这样其它组件可以引用，将以下两行代码放在main.js文件中
  //     const AUTH_TOKEN = localStorage.getItem('token')
  //     this.$http.defaults.headers.common['Authorization'] = AUTH_TOKEN
  //除了登录之外的所有请求都需要设置头部
  //     const res = await this.$http.get('rights/list')
  //     console.log(res)
  //       this.rightlist = res.data.data
  //   }
  // }
};
</script>

<style></style>
