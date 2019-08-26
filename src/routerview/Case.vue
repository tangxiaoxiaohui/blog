<template>
  <div id="demo">
    <div class="demo-wrap">
      <div class="">
        <drSearchComplex :casetype="casetype"></drSearchComplex>
      </div>
      <div class="demo-case">
        <ul class="demo-case-wrap">
          <li class="democase" v-for="(val,index) in 10" :key="index"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import {mapState} from 'vuex'
  import drSearchComplex from '../components/search/dr-search-complex'

  export default {
    name: 'demo',
    computed: {
      ...mapState({
        casetype: state => state.cased.casetype
      })
    },
    components: {
      drSearchComplex
    }

  }
</script>
<style lang="less">
  @import "../assets/css/besc.less";

  #demo {
    width: 100%;
    margin-top: @small-margin-width;
    .demo-wrap {
      width: @max-width;
      margin: 0 auto;
      .demo-search {

      }
      .demo-case {
        margin-top: @small-margin-width;
        .demo-case-wrap {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          .democase {
            flex: 0 0 24%;
            height: 220px;
            background: #fff;
            margin-bottom: @min-margin-width;
          }
        }
      }
    }
  }
</style>
