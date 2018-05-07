<template>
  <div id="main">
    <mavon-editor class="mavon-editor" v-model="value"></mavon-editor>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>
<style lang="less">
#main{
  min-height:400px;
}
</style>
