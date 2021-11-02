<template>
  <div class="conbox">
    <div class="container clf">
      <div class="country">
        <div id="countryDetail">
          <span><img src="@/assets/images/map.gif">&nbsp;&nbsp;All Countries</span>
          <a href="javascript:;">Change</a></div>
      </div>

      <div class="home clf">
        <div class="fl">
          <div id="home-slider">
            <swiper
              :slides-per-view="3"
              :space-between="50"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
            >
              <swiper-slide>Slide 1</swiper-slide>
              <swiper-slide>Slide 2</swiper-slide>
              <swiper-slide>Slide 3</swiper-slide>
            </swiper>
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
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
// import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSwiper: (swiper) => {
      console.log(swiper);
    },
    onSlideChange: () => {
      console.log('slide change');
    }
  }
}
</script>
