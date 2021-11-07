<template>
  <div class="conbox">
    <div class="container clf">
      <Nav title="服务与支持"/>

      <div class="container">
        <div class="country">	<div id="countryWaitCue" style="display:inline;visibility:hidden"><img src="public/images/waitCue.gif" id="countryWaitCueImg" align="absmiddle"></div>
          <div id="countryDetail" style="display:inline"><span class="flag"><img border="0" src="public/images/map.gif" align="absmiddle">&nbsp;&nbsp;All Countries</span><a href="javascript:showCountry(true)">Change</a></div>
          <form style="display:none" id="frmCtry" name="frmCtry" method="post" action="http://www.erico.com/setLocale.asp">
            <select class="ctry" id="ctry" name="ctry" onchange="changeCountry()">
              <option value="">简体中文</option>
              <option value="INTL">繁体中文</option>
              <option value="INTL">English</option>
            </select>
          </form>

          <script language="javascript">
            function showCountry() {
              document.getElementById('countryDetail').style.display = 'none';
              document.getElementById('frmCtry').style.display = 'inline';
            }
            function changeCountry() {
              document.getElementById('countryWaitCue').style.visibility = 'visible';
              setTimeout('document.images["countryWaitCueImg"].src="public/images/waitCue.gif"', 0); // Needed to keep GIF animating in IE.
              document.frmCtry.submit();
            }
            function setLocale(sHref, sReturnUrl) {
              document.getElementById('countryWaitCue').style.visibility = 'visible';
              setTimeout('document.images["countryWaitCueImg"].src="public/images/waitCue.gif"', 0); // Needed to keep GIF animating in IE.
              sLoc = "default.html?lang=" + sHref + "&returnURL=" + escape(sReturnUrl);
              window.location = sLoc;
            }
          </script></div>

        <div id="mainContent">


          <h1>服务与支持</h1>
          <p style="padding-bottom:20px">我们对客户的承诺不仅仅是监测和保护设备。我们还提供各种培训和运营服务，帮助我们的客户最大限度地发挥我们产品的潜力。认证工程师和培训老师提供第一手的帮助，以确保我们客户的业务继续增长。</p>


          <div class="searchWrap section">

            <div class="oneColumn" style="background:#eee; line-height:22px; padding:20px; padding-bottom:40px;">
              <h3 class="service">
                客户服务中心</h3>
              <div class="filter">
                <ul>
                  <li>
                    <span>按世界区域</span>
                    <select name="ctl00$pageContent$CustomerServiceCenter$ddlRegionCustomerServiceCenters" onchange="javascript:setTimeout('__doPostBack(\'ctl00$pageContent$CustomerServiceCenter$ddlRegionCustomerServiceCenters\',\'\')', 0)" id="ctl00_pageContent_CustomerServiceCenter_ddlRegionCustomerServiceCenters">
                      <option selected="selected" value="">（选择）</option>
                      <option value="Asia Pacific">亚太区</option>
                      <option value="Europe - Middle East - Africa">欧洲 - 中东 - 非洲</option>
                      <option value="Latin America">拉美</option>
                      <option value="North America">北美</option>

                    </select><input style="display: none;" name="ctl00$pageContent$CustomerServiceCenter$btnRegionCustomerServiceCenters" value="GO!" onclick="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$pageContent$CustomerServiceCenter$btnRegionCustomerServiceCenters&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, false))" id="ctl00_pageContent_CustomerServiceCenter_btnRegionCustomerServiceCenters" class="btn" type="submit">
                  </li>
                  <li>
                    <span>按照国家（全部）</span>
                    <select name="ctl00$pageContent$CustomerServiceCenter$ddlCountryCustomerServiceCenters" onchange="javascript:setTimeout('__doPostBack(\'ctl00$pageContent$CustomerServiceCenter$ddlCountryCustomerServiceCenters\',\'\')', 0)" id="ctl00_pageContent_CustomerServiceCenter_ddlCountryCustomerServiceCenters">
                      <option selected="selected" value="">（选择）</option>
                      <option value="us">美国</option>
                      <option value="ca">加拿大</option>
                      <option value="gb">英国</option>
                      <option value="au">澳大利亚</option>
                      <option value="af">阿富汗</option>
                      <option value="ax">奥兰群岛</option>
                      <option value="al">阿尔巴尼亚</option>
                      <option value="dz">阿尔及利亚</option>
                      <option value="asamoa">美国萨摩亚</option>
                      <option value="ad">安道&ZeroWidthSpace;&ZeroWidthSpace;尔</option>
                      <option value="ao">安哥拉</option>
                      <option value="ai">安圭拉</option>
                      <option value="aq">南极洲</option>
                      <option value="ag">安提瓜和巴布达</option>
                      <option value="ar">阿根廷</option>
                      <option value="am">亚美尼亚</option>
                      <option value="aw">阿鲁巴</option>
                      <option value="austria">奥地利</option>
                      <option value="az">阿塞拜疆</option>
                      <option value="bs">巴哈马</option>
                      <option value="bh">巴林</option>
                      <option value="bd">孟加拉国</option>
                      <option value="bb">巴巴多斯</option>
                      <option value="belarus">白俄罗斯</option>
                      <option value="belgium">比利时</option>
                      <option value="bz">伯利兹</option>
                      <option value="bj">贝宁</option>
                      <option value="bm">百慕大</option>
                      <option value="bt">不丹</option>
                      <option value="bo">玻利维亚</option>
                      <option value="ba">波斯尼亚和黑塞哥维那</option>
                      <option value="bw">博茨瓦纳</option>
                      <option value="bv">布维岛</option>
                      <option value="br">巴西</option>
                      <option value="io">英属印度洋领地</option>
                      <option value="bn">文莱达鲁萨兰国</option>
                      <option value="bg">保加利亚</option>
                      <option value="bf">布基纳法索</option>
                      <option value="bi">布隆迪</option>
                      <option value="kh">柬埔寨</option>
                      <option value="cm">喀麦隆</option>
                      <option value="cv">佛得角</option>
                      <option value="ky">开曼群岛</option>
                      <option value="cf">中非共和国</option>
                      <option value="td">乍得</option>
                      <option value="cl">智利</option>
                      <option value="cn">中国</option>
                      <option value="cx">圣诞岛</option>
                      <option value="cc">科科斯群岛</option>
                      <option value="co">哥伦比亚</option>
                      <option value="km">科摩罗</option>
                      <option value="cg">刚果</option>
                      <option value="cd">刚果民主共和国</option>
                      <option value="ck">库克群岛</option>
                      <option value="cr">哥斯达黎加</option>
                      <option value="ci">科特迪瓦</option>
                      <option value="hr">克罗地亚</option>
                      <option value="cy">塞浦路斯</option>
                      <option value="cz">捷克共和国</option>
                      <option value="dk">丹麦</option>
                      <option value="dj">吉布提</option>
                      <option value="dm">多米尼加</option>
                      <option value="drepublic">多明尼加共和国</option>
                      <option value="ec">厄瓜多尔</option>
                      <option value="eg">埃及</option>
                      <option value="sv">萨尔瓦多</option>
                      <option value="gq">赤道几内亚</option>
                      <option value="er">厄立特里亚</option>
                      <option value="ee">爱沙尼亚</option>
                      <option value="et">埃塞俄比亚</option>
                      <option value="fk">福克兰群岛（马尔维纳斯群岛）</option>
                      <option value="fo">法罗群岛</option>
                      <option value="fj">斐济</option>
                      <option value="fi">芬兰</option>
                      <option value="fr">法国</option>
                      <option value="gf">法属圭亚那</option>
                      <option value="pf">法属波利尼西亚</option>
                      <option value="tf">法国南部领土</option>
                      <option value="ga">加蓬</option>
                      <option value="gm">冈比亚</option>
                      <option value="ge">格鲁吉亚</option>
                      <option value="de">德国</option>
                      <option value="gh">加纳</option>
                      <option value="gi">直布罗陀</option>
                      <option value="gr">希腊</option>
                      <option value="gl">格陵兰</option>
                      <option value="gd">格林纳达</option>
                      <option value="gp">瓜德罗普岛</option>
                      <option value="gu">关岛</option>
                      <option value="gt">危地马拉</option>
                      <option value="gg">根西岛</option>
                      <option value="gn">几内亚</option>
                      <option value="gw">几内亚比绍</option>
                      <option value="gy">圭亚那</option>
                      <option value="ht">海地</option>
                      <option value="hm">赫德岛和麦克唐纳群岛</option>
                      <option value="va">梵蒂冈</option>
                      <option value="hn">洪都拉斯</option>
                      <option value="hk">香港</option>
                      <option value="hu">匈牙利</option>
                      <option value="iceland">冰岛</option>
                      <option value="in">印度</option>
                      <option value="id">印尼</option>
                      <option value="iq">伊拉克</option>
                      <option value="ie">爱尔兰</option>
                      <option value="im">马恩岛</option>
                      <option value="il">以色列</option>
                      <option value="italy">意大利</option>
                      <option value="jm">牙买加</option>
                      <option value="jp">日本</option>
                      <option value="je">新泽西州</option>
                      <option value="jo">约旦</option>
                      <option value="kz">哈萨克斯坦</option>
                      <option value="ke">肯尼亚</option>
                      <option value="ki">基里巴斯</option>
                      <option value="kr">韩国</option>
                      <option value="kw">科威特</option>
                      <option value="kg">吉尔吉斯斯坦</option>
                      <option value="la">老挝人民民主共和国</option>
                      <option value="lv">拉脱维亚</option>
                      <option value="lb">黎巴嫩</option>
                      <option value="ls">莱索托</option>
                      <option value="lr">利比里亚</option>
                      <option value="ly">阿拉伯利比亚民众国</option>
                      <option value="li">列支敦士登</option>
                      <option value="lt">立陶宛</option>
                      <option value="lu">卢森堡</option>
                      <option value="mo">澳门</option>
                      <option value="mk">马其顿</option>
                      <option value="mg">马达加斯加</option>
                      <option value="mw">马拉维</option>
                      <option value="malaysia">马来西亚</option>
                      <option value="mv">马尔代夫</option>
                      <option value="ml">马里</option>
                      <option value="mt">马耳他</option>
                      <option value="mh">马绍尔群岛</option>
                      <option value="mq">马提尼克</option>
                      <option value="mr">毛里塔尼亚</option>
                      <option value="mu">毛里求斯</option>
                      <option value="yt">马约特岛</option>
                      <option value="mx">墨西哥</option>
                      <option value="fm">密克罗尼西亚联邦</option>
                      <option value="md">摩尔多瓦共和国</option>
                      <option value="mc">摩纳哥</option>
                      <option value="mn">蒙古</option>
                      <option value="me">黑山</option>
                      <option value="ms">蒙特塞拉特</option>
                      <option value="ma">摩洛哥</option>
                      <option value="mz">莫桑比克</option>
                      <option value="mm">缅甸</option>
                      <option value="na">纳米比亚</option>
                      <option value="nr">瑙鲁</option>
                      <option value="np">尼泊尔</option>
                      <option value="nl">荷兰</option>
                      <option value="an">荷属安的列斯群岛</option>
                      <option value="nc">新喀里多尼亚</option>
                      <option value="nz">新西兰</option>
                      <option value="ni">尼加拉瓜</option>
                      <option value="ne">尼日尔</option>
                      <option value="ng">尼日利亚</option>
                      <option value="nu">纽埃</option>
                      <option value="nf">诺福克岛</option>
                      <option value="mp">北马里亚纳群岛</option>
                      <option value="no">挪威</option>
                      <option value="om">阿曼</option>
                      <option value="pk">巴基斯坦</option>
                      <option value="pw">帕劳</option>
                      <option value="ps">巴勒斯坦</option>
                      <option value="pa">巴拿马</option>
                      <option value="pg">巴布亚新几内亚</option>
                      <option value="py">巴拉圭</option>
                      <option value="pe">秘鲁</option>
                      <option value="ph">菲律宾</option>
                      <option value="pn">皮特凯恩</option>
                      <option value="pl">波兰</option>
                      <option value="pt">葡萄牙</option>
                      <option value="pr">波多黎各</option>
                      <option value="qa">卡塔尔</option>
                      <option value="reunion">联合</option>
                      <option value="ro">罗马尼亚</option>
                      <option value="ru">俄罗斯联邦</option>
                      <option value="rw">卢旺达</option>
                      <option value="sh">圣赫勒拿</option>
                      <option value="kn">圣基茨和尼维斯</option>
                      <option value="lc">圣卢西亚</option>
                      <option value="pm">圣皮埃尔和密克隆</option>
                      <option value="vc">圣文森特和格林纳丁斯</option>
                      <option value="ws">萨摩亚</option>
                      <option value="sm">圣马力诺</option>
                      <option value="st">圣多美和普林西比</option>
                      <option value="sa">沙特阿拉伯</option>
                      <option value="sn">塞内加尔</option>
                      <option value="rs">塞尔维亚</option>
                      <option value="sc">塞舌尔</option>
                      <option value="sl">塞拉利昂</option>
                      <option value="sg">新加坡</option>
                      <option value="sk">斯洛伐克</option>
                      <option value="si">斯洛文尼亚</option>
                      <option value="sb">所罗门群岛</option>
                      <option value="somalia">索马里</option>
                      <option value="za">南非</option>
                      <option value="gs">南乔治亚岛和南桑威奇群岛</option>
                      <option value="es">西班牙</option>
                      <option value="lk">斯里兰卡</option>
                      <option value="sr">苏里南</option>
                      <option value="sj">斯瓦尔巴群岛和扬马延岛</option>
                      <option value="sz">斯威士兰</option>
                      <option value="se">瑞典</option>
                      <option value="ch">瑞士</option>
                      <option value="tw">台湾</option>
                      <option value="tj">塔吉克斯坦</option>
                      <option value="tz">坦桑尼亚联合共和国</option>
                      <option value="th">泰国</option>
                      <option value="tl">东帝汶</option>
                      <option value="tg">多哥</option>
                      <option value="tk">托克劳</option>
                      <option value="tonga">汤加</option>
                      <option value="tt">特里尼达和多巴哥</option>
                      <option value="tn">突尼斯</option>
                      <option value="tr">土耳其</option>
                      <option value="tm">土库曼斯坦</option>
                      <option value="tc">特克斯和凯科斯群岛</option>
                      <option value="tv">图瓦卢</option>
                      <option value="ug">乌干达</option>
                      <option value="ua">乌克兰</option>
                      <option value="ae">阿拉伯联合大公国</option>
                      <option value="um">美国本土外小岛屿</option>
                      <option value="uy">乌拉圭</option>
                      <option value="uz">乌兹别克斯坦</option>
                      <option value="vu">瓦努阿图</option>
                      <option value="ve">委内瑞拉</option>
                      <option value="vn">越南</option>
                      <option value="vg">英属维尔京群岛</option>
                      <option value="vi">美属维京群岛，</option>
                      <option value="wf">瓦利斯群岛和富图纳群岛</option>
                      <option value="eh">西撒哈拉</option>
                      <option value="ye">也门</option>
                      <option value="zm">赞比亚</option>
                      <option value="zw">津巴布韦</option>

                    </select><input style="display: none;" name="ctl00$pageContent$CustomerServiceCenter$btnCountryCustomerServiceCenters" value="GO!" onclick="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$pageContent$CustomerServiceCenter$btnCountryCustomerServiceCenters&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, false))" id="ctl00_pageContent_CustomerServiceCenter_btnCountryCustomerServiceCenters" class="btn" type="submit">
                  </li>
                  <li>
                    <span>按产品</span>
                    <input name="txtByProduct" value="Product Keywords" maxlength="50" id="txtByProduct" type="text"><input name="btnProductSearch" value="GO!" id="btnProductSearch" class="btn" type="submit" style="padding:0px 10px; margin:0px 10px;">
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        <div class="conbox">
          <div class="footer"><div class="ftrBorder"></div>
            <div class="copyh">Copyright © 2014 kevlay International Corporation.&nbsp;&nbsp;Privacy and Legal Statements</div></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "wheretobuy",
  components: {
    Nav: () => import('~/components/nav'),
  },
}
</script>
