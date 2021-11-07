<template>
  <div class="header">
    <div class="conbox"><div class="topcon clf">
      <div class="logo fl"><a href="/"><img src="@/assets/images/logo.jpg" alt=""></a></div>
      <div class="tsearch fr">
        <form name="frmGlobalSearch" method="post" action="#">
          <input class="searchBox" name="keywords" maxlength="100" value="" type="text">
          <a href="javascript:;">
            <div id="searchIcon" style="display:inline"><img src="@/assets/images/search.png" alt="Search" border="0" align="absbottom"></div>
          </a>
        </form>
      </div>
    </div>
      <div class="tmune"><ul class="clf">
        <li class="null"></li>
        <li><NLink to="/" tag="a">首页</NLink></li>
        <li><NLink to="/products" tag="a">产品</NLink></li>
        <li><NLink to="/library" tag="a">资料库</NLink></li>
        <li><NLink to="/about" tag="a">公司</NLink></li>
        <li><NLink to="/news" tag="a">新闻</NLink></li>
        <li><NLink to="/wheretobuy" tag="a">服务与支持</NLink></li>
        <li><NLink to="/about/contactus" tag="a">联系我们</NLink></li>
      </ul></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header"
}
</script>

<style scoped>

</style>
