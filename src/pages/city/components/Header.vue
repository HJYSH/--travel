<template>
  <div>
    <div class="header">
      城市选择
      <router-link to="/">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
    </div>
    <div class="city-chose">
      <div class="contory">
        <ul>
          <li
            class="chose-left "
            @click="choseThis"
            :class="{clickStyle: showOne}"
          >
            境内
          </li>
          <li
            class="chose-left "
            @click="choseThat"
            :class="{clickStyle: !showOne}"
          >
            境外 / 港澳台
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  data () {
    return {
      showOne: false
    }
  },
  methods: {
    choseThis (e) {
      this.$emit('chang', e.target.innerText)
      this.showOne = false
    },
    choseThat (e) {
      this.$emit('chang', e.target.innerText)
      this.showOne = true
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  li {float:left}
  ul { overflow:hidden }
  .header
    position: relative
    overflow: hidden
    text-align: center
    color: #fff
    background: $bgColor
    line-height: $headerHight
    font-size: .32rem
    height: $headerHight
    .header-back
      position: absolute
      width:.64rem
      text-align: center
      font-style: .4rem
      left:0
      top:0
      color:#fff
  .city-chose
    height: .42rem
    line-height :.42rem
    position: relative
    padding:.2rem 1rem
    padding-top:.05rem
    text-align: center
    background: $bgColor
    .contory
      border:.02rem solid #fff
      overflow: hidden
      background:#fff
      .chose-left
        width:50%
        background: #fff
      .chose-right
        width:50%
        background: #fff
      .clickStyle
        background: $bgColor
</style>
