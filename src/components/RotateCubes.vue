<template>
  <div>
    <v-card outlined tile height="auto" max-width="400" class="mx-auto mt-4">
      <div class="cube-container">
        <div class="cube">
          <div class="face front">Front</div>
          <div class="face back">Back</div>
          <div class="face left">Left</div>
          <div class="face right">Right</div>
          <div class="face top">Top</div>
          <div class="face bottom">Bottom</div>
        </div>
      </div>
    </v-card>
    <v-card outlined tile height="auto" max-width="400" class="mx-auto mt-8">
      <div class="cube-container1">
        <div class="cube1">
          <div class="face1 front1">Front</div>
          <div class="face1 back1">Back</div>
          <div class="face1 left1">Left</div>
          <div class="face1 right1">Right</div>
          <div class="face1 top1">Top</div>
          <div class="face1 bottom1">Bottom</div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.cube-container {
  width: 200px;
  height: 200px;
  perspective: 800px; /* Adjust the perspective to control 3D effect */
}

.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: rotate 10s linear infinite; /* Adjust the animation duration as needed */
}

.face {
  position: absolute;
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

.front {
  transform: translateZ(100px);
  background-color: #ff5733;
}

.back {
  transform: rotateY(180deg) translateZ(100px);
  background-color: #33ff57;
}

.left {
  transform: rotateY(-90deg) translateZ(100px);
  background-color: #5733ff;
}

.right {
  transform: rotateY(90deg) translateZ(100px);
  background-color: #3357ff;
}

.top {
  transform: rotateX(90deg) translateZ(100px);
  background-color: #ff33d9;
}

.bottom {
  transform: rotateX(-90deg) translateZ(100px);
  background-color: #33d9ff;
}

@keyframes rotate {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(360deg);
  }
  from {
    transform: rotateY(360deg);
  }
  to {
    transform: rotateY(0);
  }
}
.cube-container1 {
  width: 200px;
  height: 200px;
  perspective: 800px; /* Adjust the perspective to control 3D effect */
}

.cube1 {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: rotates 10s linear infinite; /* Adjust the animation duration as needed */
}

.face1 {
  position: absolute;
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

.front1 {
  transform: translateZ(100px);
  background-color: #ff5733;
}

.back1 {
  transform: rotateY(180deg) translateZ(100px);
  background-color: #33ff57;
}

.left1 {
  transform: rotateY(-90deg) translateZ(100px);
  background-color: #5733ff;
}

.right1 {
  transform: rotateY(90deg) translateZ(100px);
  background-color: #3357ff;
}

.top1 {
  transform: rotateX(90deg) translateZ(100px);
  background-color: #ff33d9;
}

.bottom1 {
  transform: rotateX(-90deg) translateZ(100px);
  background-color: #33d9ff;
}

@keyframes rotates {
  0%,
  100% {
    transform: rotateY(0) rotateX(0);
  }
  25% {
    transform: rotateY(90deg) rotateX(0);
  }
  50% {
    transform: rotateY(180deg) rotateX(0);
  }
  75% {
    transform: rotateY(270deg) rotateX(0);
  }
  100% {
    transform: rotateY(360deg) rotateX(0);
  }
}
</style>
