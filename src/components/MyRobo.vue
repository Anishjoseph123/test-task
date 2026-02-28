<template>
  <div>
    <v-card height="800" width="500" class="mx-auto mt-4" flat>
      <v-card-title>
        <span class="text-uppercase text-center">chitty-the robot</span>
      </v-card-title>
      <div class="robot-head">
        <div class="nose"></div>
        <div class="mouth"></div>
        <div class="eye left-eye"></div>
        <div class="eye right-eye"></div>
      </div>
      <div
        class="robot-body"
        style="background: #c0c0c0; height: 400px; width: 200px"
      >
        <div class="hand left-hand"></div>
        <div class="hand right-hand"></div>
        <div class="leg left-leg"></div>
        <div class="leg right-leg"></div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.robot-head {
  width: 200px;
  height: 200px;
  background-color: salmon;
  /* margin: 0 auto; */
  position: relative;
}

.eye {
  width: 40px;
  height: 40px;
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: height 0.3s;
  animation-name: blink;
  animation: blink 1s infinite;
}
.mouth {
  width: 100px;
  height: 10px;
  background-color: black;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;
}

.nose {
  width: 20px;
  height: 40px;
  background-color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@keyframes blink {
  0%,
  100% {
    height: 40px;
  }
  50% {
    height: 10px;
  }
}
.left-eye {
  left: 25%;
}

.right-eye {
  right: 25%;
}
.robot-body {
  width: 200px;
  height: 400px;
  background-color: #c0c0c0;
  position: relative;
}

.hand {
  width: 60px;
  height: 200px;
  background-color: #111;
  position: absolute;
  top: 50%;
  border-radius: 20%;
  transform: translateY(-50%);
}

.left-hand {
  left: -60px;
}

.right-hand {
  right: -60px;
}

.leg {
  width: 80px;
  height: 200px;
  background-color: #111;
  position: absolute;
  bottom: 0;
  top: 400px;
}

.left-leg {
  left: 10px;
}

.right-leg {
  right: 20px;
}
</style>
