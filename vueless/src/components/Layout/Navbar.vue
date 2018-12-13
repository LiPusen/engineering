<template>
  <el-menu class="navbar" mode="horizontal">
    <v-ham class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></v-ham>

    <v-crumb class="breadcrumb-container"></v-crumb>

    <div class="right-menu">

      <el-tooltip effect="dark" :content="$t('navbar.screenfull')" placement="bottom">
        <v-full class="screenfull right-menu-item"></v-full>
      </el-tooltip>

      <v-lang class="international right-menu-item"></v-lang>

      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <img class="user-avatar" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544074115924&di=6bc291ade22808504eade668853c3f95&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0177845544ff510000019ae922c33b.jpg%402o.jpg">
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              {{$t('navbar.dashboard')}}
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span @click="logout" style="display:block;">{{$t('navbar.logOut')}}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-menu>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState([
      'sidebar',
      'userInfos'
    ])
  },
  methods: {
  	...mapMutations(['mToggleBar', 'mLogout']),
    toggleSideBar() {
      this.mToggleBar();
    },
    logout() {
      this.mLogout();
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .breadcrumb-container{
    float: left;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    float: right;
    height: 100%;
    &:focus{
     outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      height: 20px;
    }
    .international{
      vertical-align: top;
    }
    .theme-switch {
      vertical-align: 15px;
    }
    .avatar-container {
      height: 50px;
      margin-right: 30px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          vertical-align: inherit !important;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 15px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
