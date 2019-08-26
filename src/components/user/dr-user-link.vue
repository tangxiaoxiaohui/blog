<template>
  <div id="drUserLink">
    <div class="nva-title">
      <p class="">与我联系</p>
    </div>
    <div class="contact-content">
      <span class="icon iconfont icon-QQ"></span>
      <span class="icon iconfont icon-wechat-fill"></span>
      <span class="icon iconfont icon-weibo"></span>
      <span class="icon iconfont icon-mail-fill"></span>
      <span class="icon iconfont icon-github-fill"></span>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'drUserLink'
  }
</script>
<style lang="less">
  #drUserLink {
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
</style>
