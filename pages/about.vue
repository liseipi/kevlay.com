<template>
  <div class="conbox">
    <div class="container clf">
      <Nav title="企业信息"/>

      <div class="clf">
        <AboutLeft/>
        <nuxt-child keep-alive :key="$route.fullPath"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  components: {
    Nav: () => import('~/components/nav'),
    AboutLeft: () => import('~/components/about_left'),
  },
}
</script>
