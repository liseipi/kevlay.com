<template>
  <div class="conbox">
    <div class="container clf">
      <Nav title="资料库"/>

      <div class="container">

        <div style="padding:0px 20px;">
          <h1 class="title">资料库</h1>
          <p></p>
          <form name="frmSearch" method="get" action="./library.asp" onsubmit="return onser()">
            <table border="0" cellpadding="0" cellspacing="0">
              <tbody>
              <tr height="25">
                <td>关键词汇</td><td>&nbsp;&nbsp;</td>
                <td><input name="keywords" value="" maxlength="50" style="width:200px" type="text"></td>
              </tr>
              <tr height="25">
                <td>产品家族</td>
                <td>&nbsp;&nbsp;</td>
                <td>
                  <select name="cboFam" style="width:460px">
                    <option value="0">所有产品</option>

                    <option value="15">变压器检测仪器</option>

                    <option value="16">电力试验仪器</option>

                    <option value="17">线缆故障诊断和定位</option>

                  </select>
                </td>
              </tr>
              </tbody>
            </table>
            <p style="padding-top:10px; padding-bottom:30px;"><input value="搜索" type="submit" style="width:70px; line-height:22px;"> <input onclick="clearForm()" value="清空表格" type="button" style="width:100px; line-height:22px;"></p>
          </form><p></p>

        </div>

        <div style="padding:0px 20px;">
          <h1 class="title">价格表</h1>
          <div id="searchForm">
            <form name="frmSearch" method="post" action="#" onsubmit="return sercon()"><input name="hidFirstRow" value="0" type="hidden"><p>产品家族
              &nbsp;&nbsp;<select name="cboFam" onchange="onch_ser()">
                <option value="0">所有产品</option>

                <option value="pid">OSI-TGA变压器油光声光谱在线监测系统</option>

                <option value="pid">BM100高压绝缘套管状态监测</option>

                <option value="pid">PD局部放电检测</option>

                <option value="pid">ECMO绝缘油水分含量在线监测</option>

                <option value="pid">GSM无线数字核相仪</option>

                <option value="pid">全自动组合耐压测试装置</option>

                <option value="pid">绝缘故障诊断系统</option>

                <option value="pid">ECML绝缘油耐压测试仪</option>

                <option value="pid">System变压器专用内窥镜</option>

                <option value="pid">RX-H-950移动式真空滤油装置</option>

                <option value="pid">电缆故障测试装置</option>

              </select> <input value="搜索" type="submit" class="sbuser"></p>
              <p id="ser_con">知悉：产品资料与报价请联系当地代理商。</p>
            </form></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "library",
  head: {
    title: 'kevlay凯伏莱 - 资料库'
  },
  components: {
    Nav: () => import('~/components/nav'),
  },
}
</script>
