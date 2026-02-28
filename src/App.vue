<template>
  <div id="app">
    <v-app>
      <!-- <router-view/> -->
      <!-- <RupeeText/> -->
      <!-- <HyphenSingle/> -->
      <!-- <AmountToWord/> -->
      <!-- <RadioOneUI/> -->
      <!-- <SignIn/> -->
      <!-- <WebCam /> -->
      <FormDetailjson />
    </v-app>
  </div>
</template>
<style></style>
<script>
import FormDetailjson from "./components/FormDetailjson.vue";
// import SignIn from '@/views/Auth Components/SignIn.vue'
// import RadioOneUI from './components/RadioOneUI.vue';
// import RupeeText from './components/RupeeText.vue'
// import HyphenSingle from './components/HyphenSingle.vue';
// import AmountToWord from './components/AmountToWord.vue';
// import WebCam from "./components/WebCam.vue";
export default {
  components: {
    // RupeeText
    // HyphenSingle
    // AmountToWord
    // SignIn
    // WebCam,
    FormDetailjson,
  },
};
</script>
