<template>
  <div id="ranking">
    <h2 class="show-title">点击排行</h2>
    <ul class="article-wrapper">
      <li class="article">
        <div class="article-title">【活动作品】柠檬绿兔小白个人博客模板30...</div>
        <div class="article-content">
          <div class="img-wrapper">
            <img class="article-img" src="http://www.yangqq.com/skin/850/images/b03.jpg" alt="">
          </div>
          <div class="article-introduce">2014第一版《草根寻梦》个人博客模板简单、优雅、稳重、大气、低调。专为年轻有志向却又低调的草根站长设...</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
export default {
  'name': 'rankingList'
}
</script>
<style lang="less">
  #ranking {
    background: #fff;
    .show-title {
      position: relative;
      margin: 0;
      padding: 0 10px;
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      border-bottom: 1px solid #e5e5e5;
      color: #333;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -1px;
        background: #333;
        height: 2px;
        width: 0%;
        transition: width 1s ease;
      }
      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
    .article-wrapper {
      padding: 10px;
      .article {
        min-width: 0;
        margin: 0 0 10px 0;
        padding: 0 0 10px 0;
        border-bottom: solid 1px #EAEAEA;
        overflow: hidden;
        .article-title {
          height: 30px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 700;
        }
        .article-content {
          .img-wrapper {
            height: 90px;
            width: 100px;
            overflow: hidden;
            display: block;
            border: #efefef 1px solid;
            float: left;
            margin-right: 10px;
            .article-img {
              height: 100%;
              margin: auto;
              border: 0;
              display: block;
            }
          }
          .article-introduce {
            color: #888;
            line-height: 24px;
          }
        }
      }
    }
  }
</style>
