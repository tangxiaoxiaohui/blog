<template>
  <div id="forme">
    <div class="drUserTitle">
      <drUserTitle :bloggertitle="bloggertitle"></drUserTitle>
    </div>
    <div class="drUserInfo">
      <drUserInfo :bloggerinfo="bloggerinfo"></drUserInfo>
    </div>
    <div class="drUserLink">
      <drUserLink :bloggerlink="bloggerlink"></drUserLink>
    </div>
  </div>
</template>
<script type="text/javascript">
  import drUserTitle from '../components/user/dr-user-title'
  import drUserInfo from '../components/user/dr-user-info'
  import drUserLink from '../components/user/dr-user-link'
  import {mapState} from 'vuex'

  export default {
    name: 'aboutMe',
    computed: {
      ...mapState({
        bloggertitle: state => state.blogger.bloggertitle,
        bloggerinfo: state => state.blogger.bloggerinfo,
        bloggerlink: state => state.blogger.bloggerlink
      })
    },
    components: {
      drUserTitle,
      drUserInfo,
      drUserLink
    }
  }
</script>
<style lang="less">
  @import "../assets/css/besc.less";

  #forme {
    .user-show {
      background: url(../assets/images/userbackground.png);
      width: 100%;
      height: 260px;
      .user-info {
        position: relative;
        .user-headimg,
        .user-name,
        .user-see {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        .user-headimg {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid rgba(255, 255, 255, 0.2);
          margin-top: 30px;
          & > img {
            width: 100%;
            height: 100%;
          }
        }
        .user-name {
          text-align: center;
          margin-top: 140px;
          font-size: 22px;
          color: #fff;
          .sex {
            font-weight: 600;
            font-size: 20px;
            color: #6cc8fa;
          }
        }
        .user-see {
          margin-top: 175px;
          color: #fff;
        }
      }
    }
    .nva-title {
      overflow: hidden;
      & > p {
        width: 100%;
        margin: 0;
        border-left: 5px solid #00a67c;
        background-color: #fbfbfb;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        height: 38px;
        line-height: 38px;
      }
    }
    .personal-profile {
      margin: 20px auto;
      background-color: #fff;
      .profile-content {
        display: flex;
        flex-wrap: wrap;
        span {
          height: 50px;
          line-height: 50px;
        }
        span:nth-of-type(2n+1) {
          flex: 0 0 30%;
          text-align: right;
          box-sizing: border-box;
          padding-right: 20px;
          font-size: 16px;
          font-weight: 600;
        }
        span:nth-of-type(2n) {
          flex: 0 0 70%;
          text-align: left;
          box-sizing: border-box;
          padding-left: 20px;
        }
      }
    }
    .contact-me {
      margin: 20px auto;
      background-color: #fff;
      .contact-content {
        text-align: center;
        span {
          font-size: 60px;
          line-height: 100px;
          letter-spacing: 1em;
        }
        .icon-QQ {
          color: #72d0eb;
        }
        .icon-wechat-fill {
          color: #00d00b;
        }
        .icon-weibo {
          color: #f78585;
        }
        .icon-mail-fill {
          color: #49c085;
        }
        .icon-github-fill {
          color: #7782d1;
        }
      }
    }
  }
</style>
