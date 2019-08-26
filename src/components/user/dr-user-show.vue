<template>
  <div id="drUserShow">
    <div class="head-background" :style="{background:`url(${usershow.bgimage}) center`}"></div>
    <div class="head-portrait">
      <img class="head-img" :src="usershow.headimage" alt="">
    </div>
    <p class="tome">{{usershow.nickname}}</p>
    <p class="job">{{usershow.job}}</p>
    <div class="aboutme">{{usershow.aboutme}}</div>
  </div>
</template>
<script type="text/javascript">
  export default {
    'name': 'drUserAbout',
    props: {
      usershow: {
        type: Object,
        default: () => {
        }
      }
    }
  }
</script>
<style lang="less">
  #drUserShow {
    position: relative;
    overflow: hidden;
    background: #fff;
    .head-background {
      position: absolute;
      width: 100%;
      height: 130px;
      z-index: 100;
    }
    .head-portrait {
      position: relative;
      z-index: 200;
      margin: 80px auto 20px;
      width: 100px;
      .head-img {
        width: 100px;
        border-radius: 50%;
      }
    }
    .tome {
      color: #3f3f3f;
      font-weight: 700;
      font-size: 16px;
      text-align: center;
      margin-bottom: 10px;
    }
    .job {
      color: #1abc9c;
      text-align: center;
      margin: 0;
      padding: 0;
    }
    .aboutme {
      padding: 20px 40px;
      color: #9a9a9a;
      line-height: 26px;
    }
  }
</style>
