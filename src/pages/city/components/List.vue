<template>
  <div class="list" ref="wrapper">
    <div>
      <div>
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{this.currentCity}}</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div
              class="button-wrapper"
              v-for="item of hot"
              :key="item.id"
              @click="handleCityClick(item.name)"
            >
              <div class="button">
                {{item.name}}
              </div>
            </div>
          </div>
        </div>
        <city-all :city="cities" @change="scrollTo"></city-all>
        <div
          class="area"
          v-for="(item, key) of cities"
          :key="key.id"
          :ref="key"
        >
          <div class="title border-topBottom">{{key}}</div>
          <div
            class="item-list"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            <div class="item border-bottom">
              {{innerItem.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
import CityAll from './all-city'
export default {
  name: 'CityList',
  components: {
    CityAll
  },
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  methods: {
    scrollTo (info) {
      const ele = this.$refs[info][0]
      this.scroll.scrollToElement(ele)
    },
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('./')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topBottom
    &:before
      border-color: #ccc
  .border-bottom
  &:before
    border-color: #ccc
    &:after
      border-color: #ccc
  .list
    overflow:hidden
    position: absolute
    top:2.32rem
    left:0
    right:0
    bottom:0
    .title
      line-height : .54rem
      background: #eee
      padding-left:.26rem
      color: #666
    .button-list
      overflow: hidden
      padding:.1rem .6rem .1rem .1rem
      .button-wrapper
        width:33.33%
        float:left
        .button
          text-align: center
          padding:.1rem 0
          border:.02rem solid #ccc
          margin:.1rem
    .item-list
      .item
        line-height:.76rem
        padding-left:.2rem
</style>
