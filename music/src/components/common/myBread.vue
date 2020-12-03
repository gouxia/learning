<template>
<!-- 因为这个组件几乎每个页面都要用，所以为全局组件在main.js中导入这个组件 -->
  <!-- 1.面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{level1}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{level2}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{level3}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    // props 值字符串数组
    //props 中的值的用法和data数据用法一样
    //props中的数据的值来源于使用组件时穿的值
    //props中的数据也是该组件的属性 
props:['level1','level2','level3']
}
</script>

<style>

</style>