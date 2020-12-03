<template>
  <el-card class="box-card">
     <!-- 1.面包屑组件 -->
      <my-bread level1="用户管理" level2="用户列表"></my-bread>
    <!-- 2.搜索 el-row:代表行  el-col：代表列-->
    <el-row class="searchRow">
      <el-col>
        <el-input
          placeholder="请输入内容"
          clearable=""
          v-model="query"
          class="inputSearch"
        >
          <el-button
            @click="searchUser()"
            slot="append"
            icon="el-icon-search"
          ></el-button>
        </el-input>
        <el-button
          type="success"
          style="margin-left:5px;"
          @click="showAddUserDia()"
          >添加用户</el-button
        >
      </el-col>
    </el-row>
    <!-- 3.表格  el-table-column：代表列  如果设置了type=index，可以通过传递index属性来自定义索引-->
    <el-table :data="userList" style="width: 100%;margin-top:20px;">
      <el-table-column type="index" label="#" width="60"> </el-table-column>
      <el-table-column prop="username" label="姓名" width="80">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"> </el-table-column>
      <el-table-column prop="mobile" label="电话" width="180">
      </el-table-column>
      <el-table-column prop="create_time" label="创建日期" width="180">
      </el-table-column>

      <!-- 用户状态组件必须包含在template标签中，不然显示不出来
      slot-scope="scope" 来取得作用域插槽:data绑定的数据，scope可以随便替换其他名称，只是定义对象来代表取得的data数据，便于使用
      scope.row 直接取到该单元格对象，就是数组里的元素对象，即是scope[scope.$index]
      .mg_state 是对象里面的mg_state属性的值
      在这里scope指的是userList
       -->
      <!-- 开关组件要想显示在单元格中（el-table-column），要添加一个容器，也就是template -->
      <el-table-column label="用户状态" width="180">
        <template slot-scope="scope">
          <!-- 开关组件 -->
          <el-switch
            v-model="scope.row.mg_state"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
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
              @click="showDeleUserMsgBox(scope.row.id)"
            ></el-button>
            <el-button
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
    <!-- 4.分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[2, 4, 6, 8]"
      :page-size="2"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>

    <!-- 添加用户的对话框 ，因为是对话框，所以这段代码放哪都可以 -->
    <el-dialog title="添加用户" :visible.sync="dialogFormVisibleAdd">
      <el-form :model="form">
        <el-form-item label="用户名" label-width="100px">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="100px">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" label-width="100px">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" label-width="100px">
          <el-input v-model="form.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleAdd = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisibleAdd = false"
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
      query: "", //查询参数  可以为空
      //表格数据
      userList: [
        {
          username: "admin",
          email: "admin@aacom",
          create_time: "2016-05-04",
          id: 500,
          mg_state: true,
          mobile: "12345678",
          role_name: "主管",
        },
        {
          username: "RRRR",
          email: "",
          create_time: "2020-09-04",
          id: 500,
          mg_state: false,
          mobile: "18742017591",
          role_name: "主管",
        },
        {
          username: "admin",
          email: "admin@aacom",
          create_time: "2016-05-04",
          id: 500,
          mg_state: true,
          mobile: "12345678",
          role_name: "主管",
        },
        {
          username: "RRRR",
          email: "",
          create_time: "2020-09-04",
          id: 500,
          mg_state: false,
          mobile: "18742017591",
          role_name: "主管",
        },
        {
          username: "admin",
          email: "admin@aacom",
          create_time: "2016-05-04",
          id: 500,
          mg_state: false,
          mobile: "12345678",
          role_name: "主管",
        },
        {
          username: "RRRR",
          email: "",
          create_time: "2020-09-04",
          id: 500,
          mg_state: false,
          mobile: "18742017591",
          role_name: "主管",
        },
        {
          username: "RRRR",
          email: "",
          create_time: "2020-09-04",
          id: 500,
          mg_state: false,
          mobile: "18742017591",
          role_name: "主管",
        },
      ],
      //分页相关的数据
      currentPage: 2,
      pagenum: 2, //当前页的页码
      pagesize: 2, //每页显示条数
      total: 7,
      //添加对话框的属性
      dialogFormVisibleAdd: false,
      //添加用户的表单数据
      form: {
        username: "",
        password: "",
        email: "",
        mobile: "",
      },
    };
  },
  methods: {
    //搜索用户
    searchUser() {
      console.log(this.query);
    },
    //添加用户,显示对话框
    showAddUserDia() {
      this.dialogFormVisibleAdd = true;
    },
    //添加用户，发送添加用户的请求
    // async addUser() {
    //   //2.关闭对话框
    //   this.dialogFormVisibleAdd = false;

    //   const res = await this.$http.post("users", this.form);
    //   console.log(res);
    //   const {
    //     meta: { status, msg },
    //     data,
    //   } = res.data;
    //   if (status === 201) {
    //     //1.提示成功
    //     this.$message.success(msg);
    //     //3.更新视图
    //     this.getUserList();
    //     //4.清空文本框
    //     this.form = {};
    //   } else {
    //     this.$message.warning(msg);
    //   }
    // },

    //点击删除按钮，显示删除提示框
    // showDeleUserMsgBox(userId) {
    //   this.$confirm("删除用户?", "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     type: "warning",
    //   })
    //     .then(async () => {
    //       //发送删除的请求:id ----> 用户的id
    //       //1.data中找userId
    //       //2.把userId以showDeleUserMsgBox参数形式传进来
    //       const res = await this.$http.delete("users/${userId}");
    //       console.log(res);
    //       if (res.data.meta.status === 200) {
    //         //更新视图
    //         this.getUserList()
    //         //提示删除成功
    //         this.$message({
    //           type: "success",
    //           message: "删除成功!",
    //         });
    //       }
    //     })
    //     .catch(() => {
    //       this.$message({
    //         type: "info",
    //         message: "已取消删除",
    //       });
    //     });
    // },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      //更改每页显示的条数
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      //更改当前页码
      this.pagenum = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.box-card {
  height: 100%;
  .searchRow {
    margin-top: 20px;
    .inputSearch {
      width: 300px;
    }
  }
}
</style>
