<template>
  <div class="container" @click="handleClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide
          v-for="(item, index) in imgs"
          :key="index"
        >
          <img class="swiper-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonVideo',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true, // 当页面发生变动时重新请求分页
        observer: true // 当页面发生变动时重新请求分页
      }
    }
  },
  methods: {
    handleClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    z-index :99
    position: fixed
    display:flex
    flex-direction :column
    justify-content: center
    left:0
    right:0
    top: 0
    bottom:0
    background: #000
    .wrapper
      height:0
      padding-bottom: 100%
      width:100%
      .swiper-img
        width:100%
      .swiper-pagination
        color :#fff
        bottom: -1rem
</style>
