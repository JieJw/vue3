<!--
 * @Author: JieJw
 * @Date: 2021-12-22 15:57:58
 * @LastEditors: JieJw
 * @LastEditTime: 2021-12-27 14:44:22
 * @Description: 
-->
<template>
  <div class="footer-wrap">
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
.footer-wrap {
  height: 32px;
  width: 100vw;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>