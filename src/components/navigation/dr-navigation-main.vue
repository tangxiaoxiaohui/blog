<template>
  <div id="drNavigationMain" :style="{background:background,fontcolor:fontcolor,height:height,lineHeight:height}">
    <div class="nav-left">
      <span>{{bloggerthemed.title}}</span>
    </div>
    <div class="nav-right">
      <div class="navigation">
				<span
          class="nav-router"
          v-for="(value,index) in bloggerthemed.list"
          :class="{click:value.name===navState||(index===0&&navState=='')}"
          @click="$emit('clicked',value.name)"
        >
					{{value.text}}
				</span>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'drNavigationMain',
    props: {
      bloggerthemed: {
        type: [Object],
        default: () => {
        }
      },
      navState: {
        type: String,
        default: ''
      },
      background: {
        type: String,
        default: '#fff'
      },
      fontcolor: {
        type: String,
        default: '#333'
      },
      height: {
        type: String,
        default: '66px'
      }
    }
  }
</script>
<style lang="less">
  @import "../../../static/css/less/besc.less";

  #drNavigationMain {
    display: flex;
    .nav-left {
      flex: 3;
      font-size: 30px;
      text-shadow: 3px 3px 3px #c1c3cc;
      text-indent: 1em;
    }
    .nav-right {
      flex: 7;
      text-align: center;
      font-size: 16px;
      .navigation {
        display: flex;
        .nav-router {
          flex: 1;
          color: #000;
          text-decoration-line: none;
          &.click {
            color: #6eeca2;
            text-decoration-line: underline;
            text-underline-position: under;
          }
        }
      }
    }
    @media screen and(max-width: @width-small) {
      height: auto !important;
      line-height: 40px !important;
      flex-wrap: wrap;
      .nav-left {
        flex: 0 0 100%;
        font-size: 25px;
        text-align: center;
        text-indent: 0em;
      }

      .nav-right {
        flex: 0 0 100%;
        height: 45px;
      }
    }
  }
</style>
