<template>
  <div id="app">
    <!--显示的是当前路由地址对应的内容-->
    <keep-alive exclude="Detail"> <!--Detail不缓存-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
