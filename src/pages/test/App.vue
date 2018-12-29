<template>
  <div id='app' class="wrapper">
    <h3 class="title">标题标题标题</h3>
    <div class="text">文本文本文本文本文本文本</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="less" scoped>
.wrapper{
  .title{
    font-size:42px;
    font-family:PingFangSC-Medium;
    font-weight:600;
    color:#333;
    line-height:42px;
  }
  .text{
    font-size:36px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:#666  ;
    line-height:54px;
  }
}
</style>
