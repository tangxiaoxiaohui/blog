<template>
  <div id="noteList">
    <div class="title"></div>
    <ul class="list">
      <li class="skill" v-for="(value,index) in notetype" :key="'n'+index">
        <p class="skill-type" @click="skillshow = (skillshow === value.name?'':value.name)">{{value.name}}</p>
        <div v-show="value.name === skillshow">
          <p class="skill-child" v-for="(val,i) in value.list" :key="'s'+i">{{val.name}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'noteList',
    props: ['notetype'],
    data () {
      return {
        skillshow: ''
      }
    }
  }
</script>
<style lang="less">
  #noteList {
    background: #ed5565;
    color: #f0f0f0;
    .title {
    }
    .list {
      .skill {
        .skill-type {
          border-bottom: 1px solid #da4453;
          margin: 0;
          padding: 14px 22px;
          &:hover {
            background: #da4453;
          }
        }
        .skill-child {
          margin: 0;
          font-size: 12px;
          background: #383838;
          line-height: 35px;
          border-left: 5px solid #383838;
          text-indent: 2em;
          &:hover {
            border-left-color: #da4453;
          }
        }
      }
    }
  }
</style>
