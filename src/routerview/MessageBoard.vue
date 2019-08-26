<template>
  <div id="messageBoard">
    <div class="letter-wrap">
      <drMessageBoard></drMessageBoard>
    </div>
    <div class="letter">
      <drMessageList></drMessageList>
    </div>
  </div>
</template>
<script type="text/javascript">
  import drMessageBoard from '../components/message/dr-message-board'
  import drMessageList from '../components/message/dr-message-list'

  export default {
    name: 'messageBoard',
    components: {
      drMessageBoard,
      drMessageList
    }
  }
</script>
<style lang="less">
  @import "../assets/css/besc.less";

  #messageBoard {
    .letter-wrap {
    }
    .letter {
    }
  }
</style>
