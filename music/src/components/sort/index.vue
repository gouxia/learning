<template>
  <el-card>
    <!-- 1.面包屑组件 -->
    <my-bread level1="商品列表" level2="分类参数" level3="商品分类"></my-bread>
    <!-- 2.提醒 -->
    <el-alert
      title="只允许为第三级分类设置参数"
      type="error"
      style="margin-top:20px;"
    >
    </el-alert>
    <!-- 3.搜索 -->
    <el-form style="margin-top:20px;">
      <el-form-item label="商品名称">
        <el-cascader
          :show-all-levels="false"
          v-model="value"
          :options="options"
          @change="handleChange"
        ></el-cascader>
      </el-form-item>
    </el-form>
    <!-- 4.tabs -->
    <el-tabs type="border-card" v-model="active" @tab-click="handleClick">
      <el-tab-pane label="动态参数" name="1"></el-tab-pane>
      <el-tab-pane label="静态参数" name="2"></el-tab-pane>
    </el-tabs>
    <!-- 5.展开行 -->
     <el-button type="danger">设置动态参数</el-button>
    <el-table
    :data="tableData"
    style="width: 60%">
    <el-table-column type="expand" label="#">
      <template>
      </template>
    </el-table-column>
    <el-table-column
      label="属性名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="操作">
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
          </el-row>
        </template>
    </el-table-column>
  </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      value: [],
      active:"1",
       tableData: [{
          id: '12987122',
          name: 'CPU',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: 'CPU',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: 'CPU',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: 'CPU',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }],
      options: [
        {
          value: "zhinan",
          label: "大家电",
          children: [
            {
              value: "shejiyuanze",
              label: "电视",
              children: [
                {
                  value: "yizhi",
                  label: "曲面电视",
                },
                {
                  value: "fankui",
                  label: "海信",
                },
                {
                  value: "xiaolv",
                  label: "惠普",
                },
                {
                  value: "kekong",
                  label: "创维",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "zujian",
          label: "热门推荐",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局",
                },
                {
                  value: "color",
                  label: "Color 色彩",
                },
                {
                  value: "typography",
                  label: "Typography 字体",
                },
                {
                  value: "icon",
                  label: "Icon 图标",
                },
                {
                  value: "button",
                  label: "Button 按钮",
                },
              ],
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框",
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框",
                },
                {
                  value: "input",
                  label: "Input 输入框",
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器",
                },
                {
                  value: "select",
                  label: "Select 选择器",
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器",
                },
                {
                  value: "switch",
                  label: "Switch 开关",
                },
                {
                  value: "slider",
                  label: "Slider 滑块",
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器",
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器",
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器",
                },
                {
                  value: "upload",
                  label: "Upload 上传",
                },
                {
                  value: "rate",
                  label: "Rate 评分",
                },
                {
                  value: "form",
                  label: "Form 表单",
                },
              ],
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格",
                },
                {
                  value: "tag",
                  label: "Tag 标签",
                },
                {
                  value: "progress",
                  label: "Progress 进度条",
                },
                {
                  value: "tree",
                  label: "Tree 树形控件",
                },
                {
                  value: "pagination",
                  label: "Pagination 分页",
                },
                {
                  value: "badge",
                  label: "Badge 标记",
                },
              ],
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告",
                },
                {
                  value: "loading",
                  label: "Loading 加载",
                },
                {
                  value: "message",
                  label: "Message 消息提示",
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框",
                },
                {
                  value: "notification",
                  label: "Notification 通知",
                },
              ],
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单",
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页",
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑",
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单",
                },
                {
                  value: "steps",
                  label: "Steps 步骤条",
                },
              ],
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框",
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示",
                },
                {
                  value: "popover",
                  label: "Popover 弹出框",
                },
                {
                  value: "card",
                  label: "Card 卡片",
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯",
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板",
                },
              ],
            },
          ],
        },
        {
          value: "ziyuan",
          label: "海外购",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    //tas切换时
    handleClick(tab, event) {
        console.log(tab, event);
      }
  },
};
</script>

<style></style>
