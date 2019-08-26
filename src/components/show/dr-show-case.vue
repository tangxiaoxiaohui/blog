<template>
  <div id="drShowCase">
    <div class="case-title">
      <h2 class="case-title-wrapper">
        <span class="case-title-text">{{casetitle}}</span>
        <div class="case-title-nav">
          <div class="case-title-navlist" :key="index" v-for="(value,index) in titleList">{{value}}</div>
        </div>
      </h2>
    </div>
    <div class="case-module">
      <ul class="module-wrapper">
        <li class="module" v-for="(value,index)  in caselist" :key="index">
          <div class="img-wrapper">
            <img class="case-img" :src="value.imgsrc" :alt="value.title" :title="value.title">
          </div>
          <h3 class="case-title">{{value.title}}</h3>
          <div class="case-introduce">{{value.introduce}}</div>
          <a class="case-download" :href="value.href"><span class="">+下载模板</span></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'drShowCase',
  props: {
    casetitle: {
      type: String,
      default: '博客展示'
    },
    titleList: {
      type: Array,
      default: () => ['最热博客', '最新博客']
    },
    caselist: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="less">
  @import "../../../static/css/less/besc.less";

  #drShowCase {
    width: 100%;
    background: #fff;
    .case-title {
      cursor: default;
      .case-title-wrapper {
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 0 20px;
        height: 40px;
        line-height: 40px;
        border-bottom: 2px solid black;
        .case-title-text {
          font-size: 18px;
          coloe: #555;
        }
        .case-title-nav {
          font-size: 14px;
          font-weight: 200;
          display: flex;
          .case-title-navlist {
            font-size: 14px;
            padding: 0 10px;
            &::after {
              content: "";
              display: block;
              width: 1px;
              height: 10px;
              background: #000;
              transform: rotate(45deg) translate(-5px, -7px);
            }
          }
        }
      }
    }
    .case-module {
      padding: 20px 10px;
      .module-wrapper {
        display: flex;
        flex-wrap: wrap;
        .module {
          box-sizing: border-box;
          flex: 0 0 33.3%;
          height: 285px;
          padding: 20px;
          border: 1px #ccc solid;
          transition: box-shadow 1s ease;
          min-width: 0;
          .img-wrapper {
            width: 100%;
            height: 100px;
            border-radius: 10px;
            overflow: hidden;
            .case-img {
              transition: all 1s ease;
              width: 100%;
            }
          }
          .case-title {
            width: 100%;
            height: 30px;
            line-height: 30px;
            margin: 10px 0;
            font-size: 15px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .case-introduce {
            color: #999;
            font-size: 14px;
            height: 60px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
          .case-download {
            display: block;
            margin-top: 10px;
            text-decoration: none;
            color: #096;
            font-size: 15px;
          }
          &:hover {
            box-shadow: 0 0 1px 1.5px #ccc;
            .img-wrapper {
              .case-img {
                transform: scale(1.02);
              }
            }
          }
        }
        li:nth-of-type(3n-1) {
          border-left: 1px solid #ccc;
          border-right: 1px solid #ccc;
        }
        li:nth-of-type(n+4) {
          border-top: 1px solid #ccc;
        }
        @media screen and(max-width: @width-small) {
          .module {
            flex: 0 0 50%;
          }

          li:nth-of-type(n) {
            border: none;
          }

          li:nth-of-type(n+3) {
            border-top: 1px solid #ccc;
          }

          li:nth-of-type(2n+1) {
            border-right: 1px solid #ccc;
          }
        }
        @media screen and(max-width: @width-min) {
          .module {
            flex: 0 0 100%;
          }

          li:nth-of-type(n) {
            border: none;
          }

          li:nth-of-type(n+2) {
            border-top: 1px solid #ccc;
          }
        }
      }
    }
  }
</style>
