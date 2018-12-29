<template>
  <div class="wrapper">
    help
    <test />
  </div>
</template>

<script>
  const Test = () => import('@/components/Test.vue')
export default {
  components: {
    Test
  },
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
.wrapper{}
</style>
