<template>
  <div>
     总页面内容，默认进入商品页面
     <router-link :to="{ path: '/goods'} ">aaaaa</router-link>
     <router-link :to="{ path: '/seller'} ">bbbbb</router-link>
     <router-link :to="{ path: '/ratings'} ">ccccc</router-link>
      <router-view></router-view>
      
  </div>
</template>

<script>
export default {
  components: {
  
  }

}
</script>

<style>

</style>