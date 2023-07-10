<template>
<HomeSlider></HomeSlider>
<AboutPages></AboutPages>
<ServicePages></ServicePages>
</template>

<script>
import HomeSlider from '@/Pages/HomeSlider.vue';
import ServicePages from '@/Pages/Service.vue';
import AboutPages from '@/Pages/About.vue';
export default {
  name: 'HomePage',
  components:{ HomeSlider, AboutPages, ServicePages}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
