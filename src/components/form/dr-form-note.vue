<template>
  <div id="note">
    <div class="titleimg">
      <div class="filetitle-img">
        <span class="img-lable icon iconfont icon-camera"></span>
        <input class="file" type="file" accept=".jpeg, .jpg, .png">
      </div>
    </div>
    <div class="boke-title">
      <textarea class="title-text" placeholder="请输入标题（最多 30 个字）"></textarea>
    </div>
    <div class="introduce">
      <span class="default-text">简介</span>
      <AutoTextarea class="introduce-text" v-model="demo" fontSize="16px" lineHeight="1.5em"
                    textIndent="3em"></AutoTextarea>
    </div>
    <div class="editing-tools">
      <vue-editor v-model="content"></vue-editor>
    </div>
  </div>
</template>
<script type="text/javascript">
  import AutoTextarea from './dr-form-textarea'
  import {VueEditor} from 'vue2-editor'

  export default {
    name: 'note',
    data () {
      return {
        demo: '',
        content: '<h1>Some initial content</h1>'
      }
    },
    components: {
      AutoTextarea,
      VueEditor
    }
  }
</script>
<style lang="less">
  @titleimg-height: 200px;
  #note {
    background-color: #fff;
    padding: 10px;
    .titleimg {
      height: @titleimg-height;
      background-color: #f7f8f9;
      .filetitle-img {
        position: relative;
        height: 100%;
        .img-lable {
          position: absolute;
          width: 100%;
          top: 50%;
          text-align: center;
          transform: translatey(-50%);
          font-size: 35px;
          color: #a9aec7;
        }
        .file {
          display: block;
          width: 100%;
          height: 100%;
          opacity: 0;
        }
        &:hover {
          &::before {
            content: "添加题图";
            position: absolute;
            width: 100%;
            text-align: center;
            top: 50%;
            transform: translatey(50%);
            color: #b3b3b3;
            padding-top: 10px;
            font-size: 15px;
            line-height: 15px;
          }
        }
      }
    }
    .boke-title {
      margin: 10px auto;
      .title-text {
        border: 0;
        resize: none;
        height: 44px;
        line-height: 44px;
        font-size: 28px;
        display: block;
        width: 100%;
        padding: 0;
        outline: none;
        font-weight: 600;
        &::-webkit-input-placeholder {
          font-weight: 600;
          color: #b3b3b3;
          font-size: 30px;
        }
      }
    }
    .introduce {
      position: relative;
      font-size: 16px;
      line-height: 1.2em;
      .default-text {
        position: absolute;
        padding-left: 5px;
        color: #b3b3b3;
        z-index: 1000;
      }
      .introduce-text {
        width: 100%;
        overflow: hidden;
      }
    }
    .editing-tools {
      line-height: normal;
      word-break: break-all;
    }
  }
</style>
