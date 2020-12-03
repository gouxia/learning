<template>
  <div class="home-wrap">
    <el-container class="container">
      <el-header class="header">
        <el-row>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <!-- <p>嘎嘎嘎嘎</p> -->
              <img  style="width:60px;" src="../../assets/736fcf51e883b9a6d10f38ef34f1557.jpg"/>
            </div>
          </el-col>
          <el-col :span="18" class="middle">
            <h3>电商后台管理系统</h3>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <a class="loginout" @click.prevent="handleSignout" href="#">退出</a>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container class="content">
        <el-aside class="aside" width="200px">
          <el-menu
            background-color="#ffffff"
            text-color="red"
            active-text-color="#ffd04b"
            :unique-opened="true"
            :router="true"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
               <!-- 开启路由模式，这样导航栏就可以实现路由跳转 -->
          <!-- 
            1.在el-menu这个标签的属性中添加router，相当于启用了vue-router这种模式
            2.在el-menu-item标签中的index属性直接书写的路由名称，就可以实现正常的vue-router路由跳转
           -->
              <el-menu-item index="users">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>用户列表</span>
                </template>
              </el-menu-item>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>权限管理</span>
              </template>

               <!-- 开启路由模式，这样导航栏就可以实现路由跳转 -->
          <!-- 
            1.在el-menu这个标签的属性中添加router，相当于启用了vue-router这种模式
            2.在el-menu-item标签中的index属性直接书写的路由名称，就可以实现正常的vue-router路由跳转
           -->
              <el-menu-item index="role">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>角色列表</span>
                </template>
              </el-menu-item>
               <!-- 开启路由模式，这样导航栏就可以实现路由跳转 -->
          <!-- 
            1.在el-menu这个标签的属性中添加router，相当于启用了vue-router这种模式
            2.在el-menu-item标签中的index属性直接书写的路由名称，就可以实现正常的vue-router路由跳转
           -->
              <el-menu-item index="rights">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>权限列表</span>
                </template>
              </el-menu-item>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item index="goods">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>商品列表</span>
                </template>
              </el-menu-item>
              <el-menu-item index="sort">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>分类参数</span>
                </template>
              </el-menu-item>
              <el-menu-item index="productSort">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>商品分类</span>
                </template>
              </el-menu-item>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item index="order">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>订单列表</span>
                </template>
              </el-menu-item>
            </el-submenu>

            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>数据统计</span>
              </template>
              <el-menu-item index="reports">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>数据报表</span>
                </template>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main class="main">
          <!-- 存放子组件的子路由 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    handleSignout() {
      this.$message.success('退出成功')
      //点击退出按钮，回到login组建中
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style lang="scss" scoped>
.home-wrap {
  height: 760px;
  .container {
    height: 100%;
    .header {
      background-color: #b3c0d1;
      .middle {
        text-align: center;
      }
      .loginout {
        text-decoration: none;
        line-height: 60px;
      }
    }
    .content {
      .aside {
        background-color: #d3dce6;
      }
      .main {
        background-color: #e9eef3;
        //height: 100%;
      }
    }
  }
}
</style>
