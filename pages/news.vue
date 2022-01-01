<template>
  <div class="conbox">
    <div class="container clf">
      <Nav title="新闻与活动"/>

      <div class="container">
        <h1 class="title">新闻动态</h1>
        <div class="newslist">
          <ul>
            <li class="clf" v-for="news in newsData" :key="news.id">
              <div class="img fl">
                <NLink :to="{path: `/news-details/${news.id}`}"><img :src="news.image" width="150"></NLink>
              </div>
              <div class="n_info fl">
                <h3><NLink :to="{path: `/news-details/${news.id}`}">{{news.title}}</NLink></h3>
                <h3>
                  <p class="date">{{news.date}}</p>
                </h3>
              </div>
            </li>
          </ul>

        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "news",
  head: {
    title: 'kevlay凯伏莱 - 新闻与活动'
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
