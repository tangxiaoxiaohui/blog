<template>
  <div id="apps">
    <div class="head">
      <drNavigationMain class="app-head" :bloggerthemed="bloggerthemed" :navState="navState"
                        @clicked="updateView"></drNavigationMain>
    </div>
    <div class="middle">
      <router-view class="middle-view"></router-view>
    </div>
    <div class="foot">
      foot
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import drNavigationMain from './components/navigation/dr-navigation-main'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'App',
  created () {
    this.setNavState(this.$router.history.current.name)
  },
  computed: {
    ...mapState({
      navState: state => state.navigation.navState,
      bloggerthemed: state => state.blogger.bloggerthemed
    })
  },
  methods: {
    updateView (name) {
      this.setNavState(name)
      this.$router.push(name)
    },
    ...mapActions(['setNavState'])
  },
  components: {
    drNavigationMain
  }
}
</script>
<style lang="less">
  @import "../static/css/less/besc.less";

  #apps {
    display: flex;
    flex-direction: column;
    height: 100vh;
    .head, .middle, .foot {
      width: 100%;
      @media screen and(max-width: @width-min) {
        min-width: @width-min;
      }
    }
    .head {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
      background-color: #fff;
      .app-head {
        .auto-width;
      }
    }
    .middle {
      flex: 1;
      position: relative;
      margin-top: 66px;
      padding-top: @margin-small;
      background-color: #f1f1f1;
      .middle-view {
        .auto-width;
      }
    }
    .foot {
    }
  }

</style>
