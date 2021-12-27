<template>
  <Header />
  <div class="content-wrap">
    <router-view></router-view>
  </div>
  <Footer>
    <div class="footer-item" v-for="item in footerArr" :key="item.label" @click="routerPush(item)">
      {{ item.label }}
    </div>
  </Footer>
</template>

<script>
import Header from '@components/Header'
import Footer from '@components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      footerArr: [
        { label: '首页', router: '/' },
        { label: '第一', router: '/pageOne' },
        { label: '第二', router: '/pageTwo' }
      ]
    }
  },
  created() {},
  methods: {
    routerPush(item) {
      this.$router.push(item.router)
    }
  }
}
</script>

<style lang="less" scoped>
.content-wrap {
  position: absolute;
  top: 32px;
  left: 0;
  height: calc(100vh - 64px);
  width: 100vw;
}
.footer-item {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
