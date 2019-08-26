<template>
  <div id="drSearchSimple">
    <input class="search-data" type="text">
    <input class="search-btn" type="button" value="搜索">
  </div>
</template>
<script type="text/javascript">
  export default {
    'name': 'drSearchSimple'
  }
</script>
<style lang="less">
  #drSearchSimple {
    background: #fff;
    padding: 20px;
    .search-data {
      float: left;
      border: 1px solid #ccc;
      padding: 0 0 0 5px;
      height: 26px;
      width: 70%;
    }
    .search-btn {
      float: left;
      border: none;
      width: 20%;
      height: 28px;
      line-height: 28px;
      background: #333;
      color: #fff;
      cursor: default;
    }
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
</style>
