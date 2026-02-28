<template>
  <div>
    <v-card dark class="mx-auto mt-4" flat max-width="400" height="250">
      <div class="earth-container" style="margin: 0 auto">
        <v-rating full-icon="mdi-star" :value="5" color="#fff"></v-rating>
        <div class="earth"></div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.earth-container {
  width: 200px;
  height: 200px;
  position: relative;
  perspective: 1000px; /* Adjust the perspective to control 3D effect */
}
.earth {
  width: 100%;
  height: 100%;
  background: transparent;
  background-image: url("https://cdn.pixabay.com/photo/2011/12/13/14/31/earth-11015_1280.jpg");
  background-size: cover;
  border-radius: 50%;
  position: absolute;
  top: 35px;
  left: 0;
  animation: rotate 30s linear infinite; /* Adjust the animation duration as needed */
  transform-style: preserve-3d;
}
@keyframes rotate {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(360deg);
  }
}
</style>
