<template>
  <el-card class="box-card">
    <!-- 1.面包屑组件 -->
    <my-bread level1="商品列表" level2="分类参数" level3="商品分类"></my-bread>
    <!-- 2.搜索 -->
    <el-row class="searchRow">
      <el-col>
        <el-input
          placeholder="请输入内容"
          clearable=""
          v-model="query"
          class="inputSearch"
        >
          <el-button @click="searchUser()" slot="append" icon="el-icon-search">
          </el-button>
        </el-input>
        <el-button
          type="success"
          style="margin-left:5px;"
          @click="$router.push({name:'goodsadd'})"
        >
          添加商品
        </el-button>
      </el-col>
    </el-row>
    <!-- 3.表格 -->
    <el-table
      :data="tableData"
      border
      stripe
      style="width: 100%;margin-top:20px;"
    >
      <el-table-column fixed type="index" label="#" width="80">
      </el-table-column>
      <el-table-column prop="goodName" label="商品名称" width="600">
      </el-table-column>
      <el-table-column prop="price" label="商品价格(元)" width="120">
      </el-table-column>
      <el-table-column prop="weight" label="商品重量" width="120">
      </el-table-column>
      <el-table-column prop="date" label="创建日期" width="180">
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
            ></el-button>
          </el-row>
        </template>
      </el-table-column>
    </el-table>

    <!-- 4.添加用户的对话框 ，因为是对话框，所以这段代码放哪都可以 -->
    <el-dialog title="添加商品" :visible.sync="dialogFormVisibleAdd">
      <el-form>
        <el-form-item label="商品名称" label-width="100px">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" label-width="100px">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品重量" label-width="100px">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="创建日期" label-width="100px">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleAdd = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisibleAdd = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
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
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      query: "", //查询参数  可以为空
      //添加对话框的属性
      dialogFormVisibleAdd: false,
      //表格
      tableData: [
        {
          date: "2016-05-02",
          goodName: "ujs",
          price: "98",
          weight: "100",
          id: 1,
        },
        {
          date: "2016-05-02",
          goodName: "wq",
          price: "98",
          weight: "100",
          id: 1,
        },
        {
          date: "2016-05-02",
          goodName: "ap",
          price: "98",
          weight: "100",
          id: 1,
        },
        {
          date: "2016-05-02",
          goodName: "opop",
          price: "98",
          weight: "100",
          id: 1,
        },
        {
          date: "2016-05-02",
          goodName: "oio",
          price: "98",
          weight: "100",
          id: 1,
        },
        {
          date: "2016-05-02",
          goodName: "ok",
          price: "98",
          weight: "100",
          id: 1,
        },
        {
          date: "2016-05-02",
          goodName: "va",
          price: "98",
          weight: "100",
          id: 1,
        },
        {
          date: "2016-05-04",
          goodName:
            "360行车记录仪尊享升级版J5101C安霸A12高清夜视WIFI连接 智能管理 机卡套装 黑色(存储卡品牌随机)",
          price: "359",
          weight: "100",
          id: 2,
        },
        {
          date: "2016-05-01",
          goodName:
            "神行者电子狗 神行者L70电子狗测速 测速雷达 流动测速 多种警示路段提醒",
          price: "39",
          weight: "100",
          id: 3,
        },
        {
          date: "2016-05-03",
          goodName: "360行车记录仪尊享升级版J5101C安霸A12高清夜视WIFI连接",
          price: "0",
          weight: "100",
          id: 4,
        },
        {
          date: "2016-05-03",
          goodName: "360行车记录仪尊享升级版J5101C安霸A12高清夜视WIFI连接",
          price: "0",
          weight: "100",
          id: 5,
        },
        {
          date: "2016-05-03",
          goodName: "360行车记录仪尊享升级版J5101C安霸A12高清夜视WIFI连接",
          price: "0",
          weight: "100",
          id: 6,
        },
        {
          date: "2016-05-03",
          goodName: "360行车记录仪尊享升级版J5101C安霸A12高清夜视WIFI连接",
          price: "0",
          weight: "100",
          id: 7,
        },
      ],
      //分页相关的数据
      currentPage: 2,
      pagenum: 2, //当前页的页码
      pagesize: 2, //每页显示条数
      total: 7,
    };
  },
  methods: {
    //搜索商品
    searchUser() {
      console.log(this.query);
    },
    //添加商品,显示对话框
    showAddUserDia() {
      this.dialogFormVisibleAdd = true;
    },
    handleClick(row) {
      console.log(row);
    },
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
