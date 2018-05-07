<template>
  <div class="side-menu">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>文章管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">文章列表</el-menu-item>
          <el-menu-item index="1-2">新增文章</el-menu-item>
          <el-menu-item index="1-3">文章评论</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">修改密码</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  return: {
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
}
</script>

<style lang="less">
.side-menu{
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 20;
  padding-top:70px;
  top:0;
  bottom:0;
  background: #545c64;
  .el-menu{
    border-right: none;
  }

}
</style>
