<template>
  <div class="personal-profile">
    <div class="nva-title">
      <p class="">个人简介</p>
    </div>
    <div class="profile-content">
      <span class="">姓名</span><span class="">{{bloggerinfo.name}}</span>
      <span class="">性别</span><span class="">{{bloggerinfo.sex}}</span>
      <span class="">生日</span><span class="">{{bloggerinfo.birthday}}</span>
      <span class="">职业</span><span class="">{{bloggerinfo.job}}</span>
      <span class="">家乡</span><span class="">{{bloggerinfo.hometown}}</span>
      <span class="">爱好</span><span class="">{{bloggerinfo.like}}</span>
      <span class="">标签</span><span class="">{{bloggerinfo.lable}}</span>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'drUserInfo',
    props: {
      bloggerinfo: {
        type: Object,
        default: () => {
        }
      }
    }
  }
</script>
<style lang="less">
  .personal-profile {
    margin: 20px auto;
    background-color: #fff;
    .profile-content {
      display: flex;
      flex-wrap: wrap;
      span {
        height: 50px;
        line-height: 50px;
      }
      span:nth-of-type(2n+1) {
        flex: 0 0 30%;
        text-align: right;
        box-sizing: border-box;
        padding-right: 20px;
        font-size: 16px;
        font-weight: 600;
      }
      span:nth-of-type(2n) {
        flex: 0 0 70%;
        text-align: left;
        box-sizing: border-box;
        padding-left: 20px;
      }
    }
  }
</style>
