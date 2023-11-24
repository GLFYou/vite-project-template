<template>
  <div class="home-container">
    <div class="imgBox" @click="openPopup = true"><img src="@/assets/vue.svg" alt="" /><img src="@/assets/vite.svg" alt="" /></div>
    <div class="title1">vue3 + vite</div>
    <div class="title2">恭喜你，项目运行成功,</div>
    <div class="title3">准备你的开发之旅吧！</div>
    <side-popup :open="openPopup" @popupClose="openPopup = false">VITE + VUE3 PROJECT</side-popup>
  </div>
</template>
<script setup>
const openPopup = ref(false)
</script>

<style scoped lang="scss">
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  width: 100vw;
  height: 100vh;
  background-image: -webkit-linear-gradient(-45deg, #35495e, #41b883, #48c9ff, #bd34fe);
  overflow: hidden;
  .imgBox {
    width: 320px;
    filter: drop-shadow(0px 26px 6px rgba(66, 66, 66, 0.666));
    img {
      width: 150px;
      &:first-child {
        margin-right: 20px;
      }
    }
  }
  .title1 {
    margin-top: 50px;
    font-size: 50px;
  }
  .title2 {
    margin-top: 40px;
    font-size: 20px;
  }
  .title3 {
    margin-top: 10px;
    font-size: 20px;
  }
}
</style>
