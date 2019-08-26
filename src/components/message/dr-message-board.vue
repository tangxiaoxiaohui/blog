<template>
  <div id="drMessageBoard">
    <div class="letter-title">有什么问题要留言给我呢?</div>
    <div class="letter-content">
      <AutoTextarea border="border"></AutoTextarea>
    </div>
    <div class="letter-tools">
      <label for="" class="letter-tool">
        <span class="fontimage icon iconfont icon-smile expression"></span>
        表情
      </label>
      <label for="" class="letter-tool">
        <span class="fontimage icon iconfont icon-image toolimage"></span>
        图片
      </label>
    </div>
  </div>
</template>
<script type="text/javascript">
  import AutoTextarea from '../form/dr-form-textarea'

  export default {
    name: 'drMessageBoard',
    components: {
      AutoTextarea
    }
  }
</script>
<style lang="less">
  #drMessageBoard {
    background: #fff;
    padding: 10px;
    padding-bottom: 0px;
    .letter-title {
      height: 30px;
      line-height: 30px;
      letter-spacing: 0.2em;
      font-weight: 600;
    }
    .letter-content {
    }
    .letter-tools {
      .letter-tool {
        height: 45px;
        line-height: 45px;
        vertical-align: top;
        margin-right: 15px;
        .fontimage {
          font-size: 20px;
        }
        .expression {
          color: #eb7350;
          font-weight: 600;
        }
        .toolimage {
          color: #84c002;
          font-weight: 600;
        }
      }
    }
  }
</style>
