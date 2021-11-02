<template>
  <div class="conbox">
    <div class="container clf">
      <Nav title="资料库"/>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "about/index",
  components: {
    Nav: () => import('~/components/nav'),
  },
}
</script>
