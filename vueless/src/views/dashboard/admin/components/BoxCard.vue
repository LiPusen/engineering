<template>
  <el-card class="b-card" style="margin-left:8px;">
    <div slot="header" class="b-card-header">
      <img src='https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png'>
    </div>
    <div style="position:relative;">
      <v-panthumb class="panThumb" :image="userInfos.avatar"></v-panthumb>
      <v-mallki className='mallki-text' text='vue-element-admin'></v-mallki>
      <div style="padding-top:35px;" class='progress-item'>
        <span>Vue</span>
        <el-progress :percentage="70"></el-progress>
      </div>
      <div class='progress-item'>
        <span>JavaScript</span>
        <el-progress :percentage="18"></el-progress>
      </div>
      <div class='progress-item'>
        <span>Css</span>
        <el-progress :percentage="12"></el-progress>
      </div>
       <div class='progress-item'>
        <span>ESLint</span>
        <el-progress :percentage="100" status="success"></el-progress>
      </div>
    </div>
  </el-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      statisticsData: {
        article_count: 1024,
        pageviews_count: 1024
      }
    }
  },
  computed: {
    ...mapState(['userInfos'])
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    }
  }
}
</script>
<style lang="less" scoped>
  .mallki-text {
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 20px;
    font-weight: bold;
  }
  .panThumb {
    z-index: 100;
    height: 70px!important;
    width: 70px!important;
    position: absolute!important;
    top: -45px;
    left: 0px;
    border: 5px solid #ffffff;
    background-color: #fff;
    margin: auto;
    box-shadow: none!important;
    /deep/ .pan-info {
      box-shadow: none!important;
    }
  }
  .progress-item {
    margin-bottom: 10px;
    font-size: 14px;
  }
  @media only screen and (max-width: 1510px){
    .mallki-text{
      display: none;
    }
  }
</style>
