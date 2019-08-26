<template>
  <div id="drUserTitle">
    <div class="user-info">
      <div class="user-headimg">
        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3728648075,402665342&fm=27&gp=0.jpg" alt="">
        <!-- <img src="https://tvax4.sinaimg.cn/crop.108.186.531.531.180/005DqUUCly8fdwifpzledj30hs0npan6.jpg" alt=""> -->
      </div>
      <div class="user-name">{{bloggertitle.nickname}}<span class="sex icon iconfont icon-woman"></span></div>
      <div class="user-see">{{bloggertitle.see}}</div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'drUserTitle',
    props: {
      bloggertitle: {
        type: Object,
        default: () => {
        }
      }
    }
  }
</script>
<style lang="less">
  #drUserTitle {
    background: url(../../assets/images/userbackground.png);
    width: 100%;
    height: 260px;
    margin: 20px auto;
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
</style>
