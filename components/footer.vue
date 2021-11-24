<template>
  <div class="conbox">
    <div class="footer">
      <div class="ftrBorder"></div>
      <div class="copyh">Copyright © 2014 - {{ new Date().getFullYear() }} kevlay International Corporation.&nbsp;&nbsp;Privacy
        and Legal Statements
      </div>
      <script>
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?76a1d108bb08957bb0ef6b66c27655f5";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
        })();
      </script>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer"
}
</script>
