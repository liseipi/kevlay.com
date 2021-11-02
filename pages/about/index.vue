<template>
  <div class="conbox">
    <div class="container clf">
      <Nav title="资料库"/>

      <div class="clf">
        <div class="fl left_mune" style="background:#888; height:600px;">
          <div class="nav-menu">

            <a href="./about.asp?c=3&amp;name=关于我们">关于我们</a>

            <a href="./about.asp?c=4&amp;name=科研和技术">科研和技术</a>

            <a href="./about.asp?c=5&amp;name=使命和愿景">使命和愿景</a>

            <a href="./about.asp?c=6&amp;name=服务体系">服务体系</a>

            <a href="./about.asp?c=7&amp;name=联系我们">联系我们</a>

          </div>
        </div>
        <div class="fr right_con">
          <h1 class="title">关于我们</h1>
          <div class="ab_list">
            <p></p><p><img src="@/assets/pic/2014101214409661.jpg" style="float:left; padding:15px;">美国Kevlay是基于瑞士Weidemann专业技术平台的成员之一，是专为电力系统自动化提供优质服务的专业设备供应服务商，长期致力于领先技术的产品和真诚优质的服务与广泛的客户及伙伴进行合作，并时刻准备着投入到他们的需求中去。我们习惯于把从实践中获得的经验加以不断地总结，并把这些富有成就的或深刻教训的经验用于不断改进今天和明天的每一个工作细节。<br><br></p>
            <p>Kevlay进入中国多年来，以优越的产品质量在高压电气测试领域赢得了良好的口碑。作为历史悠久的、著名的高电压检测设备制造商，Kevlay由经验丰富的工程师所组成的团队，在开发和制造高质量且满足未来标准的测试设备的同时，为您提供高效优质的服务。</p>

            <h3>科研和技术</h3>
            <p>Kevlay不仅拥有自己的研发团队，我们自主创新的产品与国际上其它优秀供应商亦保持着紧密长远的合作，以满足用户广泛而又独特的要求。Kevlay已完成了智能电网关于振动、噪音及高压设备绝缘测试和诊断的实时需求，产品已成功应用于上百个6KV—500KV变电站关键设备监测的工程实施，应用覆盖各级电网、电厂、石油化工、冶金、水利等领域。Kevlay将不断地收集、整理来自用户的需求和经验，为未来的发展构筑一个坚实的基础平台。</p>

            <h3>使命和愿景</h3>
            用电力与效率创造美好世界。

            <h3>服务体系</h3>
            <h4>工厂测试</h4>
            我们供给客户的系统设备在出厂前都必须经过全面的严格的工厂测试。确保客户对我们所供的设备的满意度达到100%。
            <h4>现场调试</h4>
            现场的工程师按设计要求及现场任务作业书配合用户的技术人员对各项功能进行逐一测试。
            <h4>现场培训</h4>
            现场的调试工程师在现场调试前、调试期间、调试后分三个阶段对用户的技术人员进行详尽的培训及操作实践。调试完成确保用户技术人员具有日常系统维护的能力。
            <h4>资料交接</h4>
            现场调试完成后我们会将所有项目的调试文档及资料毫无保留的提供给用户，给用户在日后的现场维护提供方便。
            <h4>备品备件</h4>
            我们承诺在质保期内的服务将全部免费，质保期过后，我们将长期提供优惠的备品备件和现场服务。<p></p>
          </div>
        </div>
      </div>
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
