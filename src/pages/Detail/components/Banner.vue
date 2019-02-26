<template>
  <div>
    <div class="banner" @click="handleClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-img-item">
        <span class="banner-icon iconfont">
          &#xe62e;
        </span>
        {{this.bannerImgs.length}}
      </div>
      <div class="banner-info">
        <div class="banner-title">
          {{this.sightName}}
        </div>
        <div class="banner-number">
          视频
          <span class="banner-icon iconfont">
          &#xe62e;
        </span>
        </div>
      </div>
    </div>
    <fade-animation>
      <common-video
        :imgs="bannerImgs"
        v-show="showVideo"
        @close="handleVideoClose"
      ></common-video>
    </fade-animation>
  </div>

</template>

<script>
import CommonVideo from 'common/Video/Video'
import FadeAnimation from 'common/Fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showVideo: false
    }
  },
  methods: {
    handleClick () {
      this.showVideo = true
    },
    handleVideoClose () {
      this.showVideo = false
    }
  },
  components: {
    CommonVideo,
    FadeAnimation
  }

}

</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    //overflow: hidden
    height:0
    padding-bottom: 55%
    .banner-img
      width:100%
    .banner-img-item
      position: absolute
      left:0
      bottom:.6rem
      height:.4rem
      line-height: .4rem
      padding:0 .2rem
      border: .2rem
      border-radius: .2rem
      color: #ffffff
      background: rgba(0,0,0,.5)
    .banner-info
      display: flex
      position: absolute
      left:0
      bottom: 0
      right:0
      line-height: .6rem
      color:#fff
      background-image: linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
        flex:1
        font-size: .32rem
        padding:0 .2rem
      .banner-number
        padding: 0 .2rem
        height: .6rem
        line-height: .6rem
        font-size: .32rem
        .banner-icon
          font-style: .32rem
</style>
