<template>
  <div class="conbox">
    <div class="container clf">
      <Nav title="新闻与活动"/>

      <div class="newslist">
        <h2 style="padding:10px 0px; line-height:25px;">{{newsData[id].title}}</h2>
<!--        <p style="text-align:center; padding:10px 0px;"><img :src="newsData[id].image" :alt="newsData[id].title"></p>-->
        <div v-html="newsData[id].content"></div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "news-detail",
  asyncData({params}) {
    return {
      id: Number(params.id) - 1
    }
  },
  components: {
    Nav: () => import('~/components/nav'),
  },
  data: () => {
    return {
      newsData: require('@/assets/json/news.json')
    }
  }
}
</script>
