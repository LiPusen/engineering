<template>
  <div class="g-con" :class="{'g-collapse':!sidebar.opened}">
    <v-sidebar class="g-sidebar"></v-sidebar>
    <div class="g-main">
      <div class="g-main-box">
            <section class="g-top">
                <v-navbar class="g-top-nav"></v-navbar>
                <v-tags-view class="g-top-tag"></v-tags-view>
            </section>
            <v-main></v-main>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "layout",
  computed: {
    ...mapState(["sidebar"])
  },
  created() {}
};
</script>
