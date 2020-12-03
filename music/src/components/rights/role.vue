<template>
  <el-card>
    <!-- 1.面包屑组件 -->
    <my-bread level1="角色列表" level2="权限列表"></my-bread>
    <!-- 2.按钮 -->
    <el-button style="margin-top:20px;">添加角色</el-button>
    <!-- 3.表格 -->
    <el-table :data="tableData" style="width: 100%;margin-top:20px;">
      <el-table-column type="expand" width="120">
        <template slot-scope="scope">
          <!-- el-row：代表行   el-col：代表列  -->
          <!-- 一级权限 -->
          <el-row v-for="(item1, i) in scope.row.children" :key="i">
            <el-col :span="4">
              <el-tag
                closable
                type="success"
                @close="deleRight(scope.row.id, item1.id)"
                >{{ item1.authName }}</el-tag
              >
              <i class="el-icon-arrow-right"></i>
            </el-col>
            <el-col :span="20">
              <!-- 二级权限 -->
              <el-row v-for="(item2, k) in item1.children" :key="k">
                <el-col :span="4">
                  <el-tag
                    type="info"
                    closable
                    @close="deleRight(scope.row.id, item2.id)"
                    >{{ item2.authName }}</el-tag
                  >
                  <i class="el-icon-arrow-right"></i>
                </el-col>
                <!-- 三级权限  如果将遍历v-for放在el-col标签中出来的是列，放在el-tag出来的是行-->
                <el-col :span="15">
                  <el-tag
                    v-for="(item3, j) in item2.children"
                    :key="j"
                    type="warning"
                    closable
                    @close="deleRight(scope.row.id, item3.id)"
                    >{{ item3.authName }}</el-tag
                  >
                </el-col>
              </el-row>
            </el-col>
          </el-row>

          <!--如果scope.row.children长度为0，就显示提示信息：未分配权限-->
          <span v-if="scope.row.children.length === 0">未分配权限</span>
        </template>
      </el-table-column>
      <el-table-column label="#" type="index" width="100px"> </el-table-column>
      <el-table-column label="角色名称" prop="roleName" width="180px">
      </el-table-column>
      <el-table-column label="角色描述" prop="roleDesc" width="280px">
      </el-table-column>
      <el-table-column label="操作" width="650px">
        <template>
          <el-row>
            <el-button
              type="primary"
              size="mini"
              plain
              icon="el-icon-edit"
              circle
            ></el-button>
            <el-button
              type="danger"
              size="mini"
              plain
              icon="el-icon-delete"
              circle
            ></el-button>
            <el-button
              @click="showSetRightDia()"
              type="success"
              size="mini"
              plain
              icon="el-icon-check"
              circle
            ></el-button>
          </el-row>
        </template>
      </el-table-column>
    </el-table>
    <!-- 修改权限的对话框 -->
    <el-dialog title="修改权限" :visible.sync="dialogFormVisibleRight">
      <!--
           树形结构 
           data：数据源 []
           show-checkbox:选择框
           node-key：每个节点的唯一标识，通常是data数据源中key名id
          default-expanded-keys：默认展开[要展开的阶段的id]
          default-expand-all:默认展开所有的节点
          default-checked-keys：[要选择的节点的id]
          props：配置项{lable,children}
          lable节点的文字标题和children节点的子节点，值都来源于data绑定的数据源中的该数据的key名 lable和children
      -->
      <el-tree
        :data="tableData"
        show-checkbox
        node-key="id"
        default-expand-all
        :props="defaultProps"
      >
      </el-tree>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleRight = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisibleRight = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      //表格数据
      tableData: [
        {
          id: 30,
          roleName: "主管",
          roleDesc: "技术负责人",
          children: [
            {
              id: 101,
              authName: "商品管理",
              path: null,
              children: [
                {
                  id: 106,
                  authName: "商品列表",
                  path: null,
                  children: [
                    {
                      id: 114,
                      authName: "添加商品",
                      path: null,
                    },
                    {
                      id: 115,
                      authName: "商品修改",
                      path: null,
                    },
                    {
                      id: 116,
                      authName: "商品删除",
                      path: null,
                    },
                    {
                      id: 117,
                      authName: "更新商品图片",
                      path: null,
                    },
                    {
                      id: 118,
                      authName: "更新商品属性",
                      path: null,
                    },
                    {
                      id: 119,
                      authName: "更新商品状态",
                      path: null,
                    },
                    {
                      id: 120,
                      authName: "获取商品详情",
                      path: null,
                    },
                  ],
                },
                {
                  id: 107,
                  authName: "商品列表",
                  path: null,
                  children: [
                    {
                      id: 121,
                      authName: "获取参数列表",
                      path: null,
                    },
                    {
                      id: 122,
                      authName: "创建商品参数",
                      path: null,
                    },
                    {
                      id: 123,
                      authName: "删除商品参数",
                      path: null,
                    },
                    {
                      id: 124,
                      authName: "更新分类参数",
                      path: null,
                    },
                  ],
                },
                {
                  id: 108,
                  authName: "分类参数",
                  path: null,
                  children: [
                    {
                      id: 125,
                      authName: "添加分类",
                      path: null,
                    },
                    {
                      id: 126,
                      authName: "删除分类",
                      path: null,
                    },
                    {
                      id: 127,
                      authName: "获取分类详情",
                      path: null,
                    },
                    {
                      id: 128,
                      authName: "修改分类",
                      path: null,
                    },
                  ],
                },
              ],
            },
            {
              id: 102,
              authName: "订单管理",
              path: null,
              children: [
                {
                  id: 109,
                  authName: "订单列表",
                  path: null,
                  children: [
                    {
                      id: 129,
                      authName: "添加订单",
                      path: null,
                    },
                    {
                      id: 130,
                      authName: "订单更新",
                      path: null,
                    },
                    {
                      id: 131,
                      authName: "获取订单详情",
                      path: null,
                    },
                  ],
                },
              ],
            },
            {
              id: 103,
              authName: "权限管理",
              path: null,
              children: [
                {
                  id: 110,
                  authName: "角色列表",
                  path: null,
                  children: [
                    {
                      id: 132,
                      authName: "添加角色",
                      path: null,
                    },
                    {
                      id: 133,
                      authName: "删除角色",
                      path: null,
                    },
                    {
                      id: 134,
                      authName: "角色授权",
                      path: null,
                    },
                    {
                      id: 135,
                      authName: "取消角色授权",
                      path: null,
                    },
                    {
                      id: 136,
                      authName: "获取角色列表",
                      path: null,
                    },
                    {
                      id: 137,
                      authName: "获取角色详情",
                      path: null,
                    },
                    {
                      id: 138,
                      authName: "更新角色信息",
                      path: null,
                    },
                    {
                      id: 139,
                      authName: "更新角色权限",
                      path: null,
                    },
                  ],
                },
                {
                  id: 111,
                  authName: "权限列表",
                  path: null,
                  children: [
                    {
                      id: 140,
                      authName: "查看权限",
                      path: null,
                    },
                  ],
                },
              ],
            },
            {
              id: 104,
              authName: "用户管理",
              path: null,
              children: [
                {
                  id: 112,
                  authName: "用户列表",
                  path: null,
                  children: [
                    {
                      id: 141,
                      authName: "添加用户",
                      path: null,
                    },
                    {
                      id: 142,
                      authName: "删除用户",
                      path: null,
                    },
                    {
                      id: 143,
                      authName: "更新用户",
                      path: null,
                    },
                    {
                      id: 144,
                      authName: "获取用户详情",
                      path: null,
                    },
                    {
                      id: 145,
                      authName: "分配用户角色",
                      path: null,
                    },
                    {
                      id: 146,
                      authName: "设置管理状态",
                      path: null,
                    },
                  ],
                },
              ],
            },
            {
              id: 105,
              authName: "数据统计",
              path: null,
              children: [
                {
                  id: 113,
                  authName: "数据报表",
                  path: null,
                  children: [
                    {
                      id: 147,
                      authName: "查看数据",
                      path: null,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 31,
          roleName: "测试角色",
          roleDesc: "测试角色描述",
          children: [],
        },
        {
          id: 32,
          roleName: "测试角色2",
          roleDesc: "测试描述12",
          children: [],
        },
        {
          id: 33,
          roleName: "超级管理员",
          roleDesc: "超级管理员",
          children: [],
        },
        {
          id: 34,
          roleName: "test",
          roleDesc: "test",
          children: [],
        },
      ],
      dialogFormVisibleRight: false,
      defaultProps: {
        children: "children",
        label: "authName",
      },
      arrexpand: [],
      arrtemp: [],
    };
  },
  methods: {
    //取消权限
    //   deleRight(role,rightId) {
    //       console.log(this.tableData)
    //     this.tableData.splice(this.tableData.indexOf(scope.row.children,item1.id), 1);
    //   },

    // 当点击对号时，弹出对话框
    showSetRightDia() {
      console.log(this.tableData);
      //嵌套循环tableDate数组
    //   let arrtemp = [];
    //   this.tableData.children.forEach((item1) => {
    //     arrtemp.push(item1.id);
    //     item1.children.forEach((item2) => {
    //       arrtemp.push(item2.id);
    //     });
    //   });
      //console.log(arrtemp);
      this.dialogFormVisibleRight = true;
    },
  },
};
</script>

<style></style>
