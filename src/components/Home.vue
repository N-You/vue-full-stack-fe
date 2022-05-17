<!--
 * @Author: Luqianyou 757628817@qq.com
 * @Description: 
-->
<template>
  <div class="basic-layout">
    <div class="nav-side">
      <!-- 系统LOGO -->
      <div class="logo">
        <img src="./../assets/logo.png" />
        <span>Manager</span>
      </div>
    </div>

    <div class="content-right">
      <div class="nav-top">
        <div class="nav-left">123</div>
        <div class="user-info">456</div>
      </div>
      <div class="wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="sass">
.basic-layout
  position: relative
  .nav-side
    position: fixed
    width: 200px
    height: 100vh
    background-color: #001529
    color: #fff
    overflow-y: auto
    transition: width 0.5s
    .logo
      display: flex
      align-items: center
      font-size: 18px
      height: 50px
      img
        margin: 0 16px
        width: 32px
        height: 32px
  .content-right
    margin-left:200px
    .nav-top
      height: 50px
      line-height: 50px
      display: flex
      justify-content: space-between
      border-bottom: 1px solid #ddd
      padding: 0 20px
    .wrapper
      background: #eef0f3
      padding: 20px
      height: calc(100vh - 50px)
      .main-page
        background: #fff
        height: 100%
</style>
