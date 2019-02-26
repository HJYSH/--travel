<template>
  <div>
    <div class="city-title">所有城市</div>
    <div class="city">
      <div class="city-list" v-for="(item, key) of city" :key="item.id">
        <div class="list-style" @click="handleBtnClick">
          {{key}}
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityAll',
  props: {
    city: Object
  },
  methods: {
    handleBtnClick (e) {
      this.$emit('change', e.target.innerText)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .city-title
    background: #eee
    height:.54rem
    line-height:.54rem
    padding-left: .26rem
  .city
    padding: .1rem .6rem .1rem .1rem
    overflow: hidden
    .city-list
      width: 10%
      float:left
      text-align: center
      .list-style
        display: block
        height:.24rem
        line-height :.24rem
        padding:.1rem 0
        margin:.1rem
        border:.02rem solid #ccc
</style>
