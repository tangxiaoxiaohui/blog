<template>
  <div id="drMessageList">
    <ul class="mesg-wrap">
      <li class="toMe">
        <div class="toMe-head">
          <div class="user-image">
            <img src="https://tvax4.sinaimg.cn/crop.0.0.512.512.180/68b3ac23ly8ftsvp8ie2aj20e80e874m.jpg" alt="">
          </div>
          <div class="useressage">
            <div class="user-state">
              <p class="nickname">郑爽_love</p>
              <p class="createtime">9月18日 14:53 来自 看置顶微博iPhone X</p>
            </div>
            <div class="messange-content">
              春天会下雪，夏天有大雨 <br>
              秋天会起风，冬天有艳阳 <br>
              一年四季会有很多意外 <br>
              但最迷人的，还是遇见了你
            </div>
          </div>
        </div>
        <div class="toMe-foot">
          <label for="">
            <span class="icon iconfont icon-star"></span>
            <span class="">收藏</span>
          </label>
          <label for="">
            <span class="icon iconfont icon-share"></span>
            <span class="">转发</span>
          </label>
          <label for="">
            <span class="icon iconfont icon-message"></span>
            <span class="">评论</span>
          </label>
          <label for="">
            <span class="icon iconfont icon-like"></span>
            <span class="">赞一下</span>
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
  import AutoTextarea from '../form/dr-form-textarea'

  export default {
    name: 'drMessageList',
    components: {
      AutoTextarea,
    },
  }
</script>
<style lang="less">
  #drMessageList {
    .mesg-wrap {
      .toMe {
        background: #fff;
        padding: 10px;
        margin: 20px auto;
        .toMe-head {
          display: flex;
          .user-image {
            flex: 0 0 50px;
            height: 50px;
            border-radius: 25px;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .useressage {
            flex: 1;
            margin-left: 10px;
            .user-state {
              p {
                margin: 0;
              }
              .nickname {
                font-weight: 600;
                line-height: 20px;
              }
              .createtime {
                font-weight: 400;
                color: #808080;
                font-size: 12px;
                line-height: 16px;
              }
            }
            .messange-content {
              text-align: left;
            }
          }
        }
        .toMe-foot {
          display: flex;
          label {
            flex: 1;
            text-align: center;
            font-weight: 600;
          }
        }
      }
    }
  }
</style>
