<template>
  <div id="blogs">
    <div class="blogs-title">
      <h2 class="title">{{notetitle}}</h2>
    </div>
    <div class="blogs-content">
      <ul class="content-wrapper">
        <li class="blog" v-for="(value,index) in notelist" :key="index">
          <div class="blog-wrapper" :class="{bordetBottom:index !== notelist.length-1}">
            <div class="blog-head">
              <div class="head-left">
                <img class="blog-img" :src="value.imgsrc" alt="">
              </div>
              <div class="head-right">
                <div class="blog-title">{{value.title}}</div>
                <div class="blog-introduce">{{value.introduce}}</div>
              </div>
            </div>
            <div class="blog-foot">
              <span class="foot-left"><span class="lable">{{value.lable}}</span><span class="createdate">{{value.createdate}}</span><span class="looks">浏览(<span class="number">{{value.looks}}</span>)</span><span class="likes">喜欢(<span class="number">{{value.likes}}</span>)</span></span>
              <span class="foot-right"><a :href="value.href">阅读原文</a></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  'name': 'articleShow',
  props: {
    notetitle: {
      type: String,
      default: '最热文章'
    },
    notelist: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="less">
  @import "../../../static/css/less/besc.less";

  #blogs {
    background: #fff;
    .blogs-title {
      height: 40px;
      line-height: 40px;
      border-bottom: 2px solid #000;
      .title {
        margin: 0;
        padding: 0 10px;
        font-size: 18px;
      }
    }
    .blogs-content {
      .content-wrapper {
        .blog {
          padding: 0 20px;
          .blog-wrapper {
            padding: 20px 0px;
            &.bordetBottom {
              border-bottom: 1px solid #777;
            }
            .blog-head {
              display: flex;
              .head-left {
                flex: 0 1 240px;
                height: 160px;
                .blog-img {
                  border-radius: 5px;
                  width: 100%;
                }
              }
              .head-right {
                flex: 0 1 70%;
                padding-left: 20px;
                min-width: 0;
                .blog-title {
                  height: 30px;
                  line-height: 30px;
                  font-size: 15px;
                  font-weight: 700;
                  color: #555;
                  margin: 10px 0;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
                .blog-introduce {
                  display: -webkit-box;
                  -webkit-line-clamp: 3;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  color: #888;
                }
              }
              @media screen and(max-width: @width-small) {
                .head-left {
                  height: 135px;
                }

                .head-right {
                  .blog-title {
                    margin: 0;
                  }
                  .blog-introduce {
                    -webkit-line-clamp: 4;
                  }
                }
              }
              @media screen and(max-width: @width-min) {
                .head-left {
                  height: 110px;
                }
              }
            }
            .blog-foot {
              text-align-last: justify;
              margin-top: 20px;
              .foot-left {
                display: inline-block;
                & > span {
                  display: inline-block;
                  padding-left: 20px;
                  margin-right: 10px;
                  font-size: 12px;
                }
                .lable {
                  color: #096;
                  background: url(http://www.yangqq.com/skin/850/images/newsbg01.png) no-repeat left center;
                }
                .createdate {
                  color: #838383;
                  background: url(http://www.yangqq.com/skin/850/images/newsbg02.png) no-repeat left center;
                }
                .looks {
                  color: #838383;
                  background: url(http://www.yangqq.com/skin/850/images/newsbg04.png) no-repeat left center;
                  .number {
                    color: #096;
                  }
                }
                .likes {
                  color: #838383;
                  background: url(http://www.yangqq.com/skin/html/images/like.jpg) no-repeat left center;
                  .number {
                    color: #096;
                  }
                }
              }
              .foot-right {
                display: inline-block;
                a {
                  display: inline-block;
                  color: #096;
                  text-decoration: none;
                  &:hover {
                    text-decoration: underline;
                  }
                }
              }
              @media screen and(max-width: @width-small) {
                margin-top: 0px;
                .foot-left {
                  width: 100%;
                  & > span {
                    margin-right: 4px;
                  }
                  .likes {
                    display: none;
                  }
                }

                .foot-right {
                  width: 100%;
                }
              }
            }
            @media screen and(max-width: @width-min) {
              padding: 15px 0px;
            }
          }
        }
      }
    }
  }
</style>
