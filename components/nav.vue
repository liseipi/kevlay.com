<template>
  <div class="clf nav">
    <div class="fl">
      <span>当前位置：</span>
      <NLink to="/" tag="a">首页</NLink> &gt;
      <span v-if="title!=''">{{title}}</span>
    </div>
    <div id="countryDetail" class="fr">
      <span><img src="@/assets/images/map.gif">&nbsp;&nbsp;All Countries</span>
      <a href="javascript:;">Change</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav",
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
