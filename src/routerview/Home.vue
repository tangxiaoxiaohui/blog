<template>
  <div id="home">
    <div class="home-slide">
      <ShowSlide></ShowSlide>
    </div>
    <div class="home-content">
      <div class="home-content-left">
        <div class="home-case">
          <ShowCase :caselist="caselist"></ShowCase>
        </div>
        <div class="home-article">
          <ShowNotelist :notelist="notelist"></ShowNotelist>
        </div>
      </div>
      <div class="home-content-right">
        <div class="home-aboutMe">
          <UserShow :usershow="usershow"></UserShow>
        </div>
        <div class="home-search">
          <SearchSimple></SearchSimple>
        </div>
        <div class="home-rankingList">
          <ShowRanking></ShowRanking>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import axios from 'axios'
  import {mapState} from 'vuex'
  import ShowSlide from '../components/show/dr-show-slide'
  import ShowCase from '../components/show/dr-show-case'
  import ShowNotelist from '../components/show/dr-show-notelist'
  import UserShow from '../components/user/dr-user-show'
  import SearchSimple from '../components/search/dr-search-simple'
  import ShowRanking from '../components/show/dr-show-ranking'

  export default {
    name: 'home',
    computed: {
      ...mapState({
        caselist: state => state.home.caselist,
        notelist: state => state.home.notelist,
        usershow: state => state.user.usershow
      })
    },
    components: {
      ShowSlide,
      ShowCase,
      ShowNotelist,
      UserShow,
      SearchSimple,
      ShowRanking
    }
  }
</script>
<style lang="less">
  @import "../../static/css/less/besc.less";

  #home {
    width: 100%;
    .home-content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .home-content-left,
      .home-content-right {
        & > div {
          margin-bottom: @margin-small;
          overflow: hidden;
        }
      }
      .home-content-left {
        flex: 0 1 70%;
        overflow: hidden;

      }
      .home-content-right {
        flex: 0 1 28%;
        overflow: hidden;
      }
      @media screen and(max-width: @width-big) {
        .home-content-left {
          flex: 1;
        }

        .home-content-right {
          flex: 0;
        }
      }
    }
    @media screen and(max-width: @width-max) {
      width: 100%;
    }
  }
</style>
