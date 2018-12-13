<template>
  <section class="layout-main">
    <transition name="fade" mode="out-in">
      <!--<keep-alive :include="cachedViews">-->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
	import { mapState } from 'vuex'
export default {
  name: 'AppMain',
  computed: {
    ...mapState(['cachedViews'])
  }
}
</script>
<style lang="less" scoped>
    .layout-main{
        width: 100%;
        height: 100%;
        padding: 15px;
        overflow: auto;
    }
</style>

