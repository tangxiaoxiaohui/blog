<template>
  <div class="auto-textarea-wrapper"
       :style="{fontSize: fontSize , lineHeight: lineHeight, height: fullHeight ? '100%': 'auto'}">
    <pre
      class="auto-textarea-block"
      :style="{fontSize: fontSize , lineHeight: lineHeight, minHeight: fullHeight ? '100%': 'auto'}"
    >{{temp_value}}
    </pre>
    <textarea
      class="auto-textarea-input"
      ref="vTextarea"
      spellcheck="false"
      :autofocus="s_autofocus"
      @keyup="change"
      :placeholder="placeholder"
      v-model="temp_value"
      :style="{fontSize: fontSize , lineHeight: lineHeight,textIndent:textIndent}"
      :class="{'no-border': !border , 'no-resize': !resize}">
    </textarea>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'AutoTextarea',
    data () {
      return {
        temp_value: (() => {
          return this.value
        })(),
        s_autofocus: (() => {
          if (this.autofocus) {
            return 'autofocus'
          } else {
            null
          }
        })()
      }
    },
    created () {
    },
    props: {
      fullHeight: {
        type: Boolean,
        default: false
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      value: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      border: {
        type: Boolean,
        default: false
      },
      resize: {
        type: Boolean,
        default: false
      },
      onchange: {
        type: Function,
        default: null
      },
      fontSize: {
        type: String,
        default: '14px'
      },
      lineHeight: {
        type: String,
        default: '18px'
      },
      textIndent: {
        type: String,
        default: '0'
      }
    },
    methods: {
      change ($event) {
        if (this.onchange) {
          this.onchange(this.temp_value, $event)
        }
      }
    },
    watch: {
      value: function (val, oldVal) {
        this.temp_value = val
      },
      temp_value: function (val, oldVal) {
        this.$emit('input', val)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .auto-textarea-wrapper
    position relative
    width 100%
    margin 0
    padding 0
    line-height normal
    word-break break-all
    .auto-textarea-block
      display block
      white-space pre-wrap
      word-wrap break-word !important
      visibility hidden
      overflow hidden
      margin 0
      padding 0
      box-sizing border-box
      font-size 100%
    .auto-textarea-input
      font-family Menlo, "Ubuntu Mono", Consolas, "Courier New", "Microsoft Yahei", "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif
      position absolute
      width calc(100% - 2px)
      height 100%
      top 0
      left 0
      margin 0
      padding 0
      overflow hidden
      color #2C3E50
      &.no-border
        outline 0 none
        border none !important
      &.no-resize
        resize none
</style>
