<template>
  <div class="home">
    <Topbar></Topbar>
    <SideMenu></SideMenu>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Topbar from '@/views/layout/topbar'
import SideMenu from '@/views/layout/sidemenu'
export default {
  components: {Topbar, SideMenu}
}
</script>

<style lang="less">
.content{
  padding:30px 50px 30px 250px;
}
</style>
