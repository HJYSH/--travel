<template>
  <div>
    <router-link
      tag="div" to="/"
      class="header-abs"
      v-show="showAbs"
    >
      <span class="iconfont header-abs-back">
        &#xe624;
      </span>
    </router-link>
    <router-link
      tag="div" to="/"
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <span class="iconfont header-fixed-back">
        &#xe624;
      </span>
      景点详情
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  // 绑定一个全局事件
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 离开这个页面的时候解绑全局页面（不解绑，scroll会在下一个页面中继续运行）
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}

</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header-abs
    position: absolute
    left:.2rem
    top:.2rem
    width:.8rem
    height:.8rem
    line-height .8rem
    text-align: center
    border-radius: .4rem
    background: rgba(0,0,0,.8)
    .header-abs-back
      color:#fff
      font-size:.4rem
  .header-fixed
    z-index: 2
    position: fixed
    top:0
    left:0
    right:0
    text-align: center
    color: #fff
    background: $bgColor
    height: $headerHight
    line-height: $headerHight
    font-size: .32rem
    .header-fixed-back
      position: absolute
      left:.1rem
      top:0
      width:.64rem
      height: $headerHight
      line-height: $headerHight
      text-align: center
      font-size: .4rem
      color: #fff
  </style>
