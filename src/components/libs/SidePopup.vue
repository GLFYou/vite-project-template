<template>
  <div class="side-popup-container" :class="{ active }">
    <div class="side-popup-content"><slot></slot></div>
    <div class="side-popup-close-btn" @click="popupClose">×</div>
  </div>
  <div class="side-popup-mask" :class="{ active }" @click="popupClose"></div>
</template>
<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    default: false
  }
})

const active = ref(false)
watch(
  () => props.open,
  (val) => {
    active.value = val
  },
  {
    immediate: true
  }
)
onMounted(() => {})
const emit = defineEmits(['popupClose'])
const popupClose = () => {
  emit('popupClose')
}
</script>

<style lang="scss" scoped>
.side-popup-container {
  width: 50vw;
  height: 100vh;
  background-color: rgb(71, 179, 179);
  position: fixed;
  top: 0;
  left: -50vw;
  z-index: 9999;
  transition: transform 0.5s;
  &.active {
    transform: translate(100%);
  }

  .side-popup-content {
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.side-popup-mask {
  display: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
  &.active {
    display: block;
  }
}
.side-popup-close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  line-height: 30px;
  cursor: pointer;
  user-select: none;
}
</style>
