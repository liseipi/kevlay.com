<template>
  <div class="conbox">
    <div class="container clf">
      <Nav />

      <div class="home clf">
        <div class="fl">
          <div id="home-slider" style="width: 550px;">
            <div class="swiper my-swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="@/assets/images/slides/cde_rd.jpg" alt="kevlay">
                </div>
                <div class="swiper-slide">
                  <img src="@/assets/images/slides/cdm_rd.jpg" alt="kevlay">
                </div>
                <div class="swiper-slide">
                  <img src="@/assets/images/slides/efx_rd.jpg" alt="kevlay">
                </div>
                <div class="swiper-slide">
                  <img src="@/assets/images/slides/eri_rd.jpg" alt="kevlay">
                </div>
                <div class="swiper-slide">
                  <img src="@/assets/images/slides/ert_rd.jpg" alt="kevlay">
                </div>
                <div class="swiper-slide">
                  <img src="@/assets/images/slides/len_rd.jpg" alt="kevlay">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fr rpord">
          <h2 class="homeProducts">产品展示</h2>
          <h3>变压器检测仪器</h3>
          <div class="ourCompany">OSI-TGA变压器油光声光谱在线监测系统</div>
          <div class="ourCompany">BM100高压绝缘套管状态监测</div>
          <div class="ourCompany">PD局部放电检测</div>
          <div class="ourCompany">ECMO绝缘油水分含量在线监测</div>
          <h3>电力试验仪器</h3>
          <div class="ourCompany">GSM无线数字核相仪</div>
          <div class="ourCompany">全自动组合耐压测试装置</div>
          <h3>线缆故障诊断和定位</h3>
          <div class="ourCompany">绝缘故障诊断系统</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper, {Navigation, Pagination} from 'swiper';

// swiper bundle styles
import 'swiper/swiper.min.css'

export default {
  components: {
    Nav: () => import('~/components/nav'),
  },
  methods: {
    onSwiper: (swiper) => {
      console.log(swiper);
    },
    onSlideChange: () => {
      console.log('slide change');
    }
  },
  mounted() {
    new Swiper('.my-swiper', {
      // pass modules here
      modules: [Navigation, Pagination],
      // ...

      spaceBetween: 10,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }
}
</script>
