<template>
  <div class="topbar clearfix">
    <div class="top-logo">Admin System</div>
    <div class="top-exit">
      <el-button round icon="el-icon-setting">退出</el-button>
    </div>
  </div>
</template>

<style lang="less">
.topbar{
  position: relative;
  z-index: 30;
  padding:0 30px;
  height: 70px;
  line-height: 70px;
  background: #409EFF;
  text-align: left;
  font-size: 20px;
  color:#fff;
}
.top-logo{
  float: left;
}
.top-exit{
  float:right;
}
</style>
