<template>
  <div id="drSearchComplex">
    <div class="demo-nav">
      <ul class="demo-nav-wrap">
        <template v-for="(val,index) in casetype">
          <li class="demotype" :key="index" :class="{splitline:index != 0}">
            <span>{{val}}</span>
          </li>
        </template>
      </ul>
    </div>
    <div class="demo-search">
      <div class="demo-search-wrap">
        <input type="text" class="demo-search-value" placeholder="输入插件关键字..." value="">
        <span class="demo-search-btn icon iconfont icon-search"></span>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'drSearchComplex',
    props: {
      casetype: {
        type: Array,
        default: []
      }
    }
  }
</script>
<style lang="less">
  @import "../../../static/css/less/besc.less";

  #drSearchComplex {
    .demo-nav {
      background-color: #101010;
      height: 50px;
      line-height: 50px;
      color: #f8f8f8;
      .demo-nav-wrap {
        display: flex;
        text-align: center;
        .demotype {
          flex: 1;
          &.splitline {
            position: relative;
            &::before {
              content: "|";
              position: absolute;
              left: 0
            }
          }
          & > span {
            cursor: pointer;
          }
        }
      }
    }
    .demo-search {
      @search-height: 40px;
      height: @search-height;
      padding: 20px 20%;
      background-color: #fff;
      .demo-search-wrap {
        position: relative;
        width: 100%;
        height: @search-height;
        border: 1px solid #ccc;
        border-radius: @search-height;
        padding: 0 20px;
        overflow: hidden;
        .demo-search-value {
          display: inline-block;
          width: 100%;
          height: @search-height;
          border: 0;
          padding: 0;
          outline: none;
        }
        .demo-search-btn {
          position: absolute;
          top: 0px;
          right: 0px;
          height: @search-height;
          line-height: @search-height;
          width: 40px;
          text-align: center;
          font-size: 20px;
          font-weight: 600;
          background: #fff;
          color: #72d0eb;
        }
      }
    }
  }
</style>
