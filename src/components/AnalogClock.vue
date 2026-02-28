<template>
  <div>
    <!-- <v-card height="250" max-width="400" outlined tile class="mx-auto mt-3">
      <v-card-title class="text-uppercase font-italic font-weight-bold"
        >Titan</v-card-title
      >
      <v-card-text>
        <div class="clock">
          <div class="hour-hand" id="hourHand"></div>
          <div class="minute-hand" id="minuteHand"></div>
          <div class="second-hand" id="secondHand"></div>
          <div class="center"></div>
        </div>
      </v-card-text>
    </v-card> -->
  </div>
</template>

<script>
export default {
  data: () => ({}),
  mounted() {
    // setInterval(this.updateClock,1000)
  },
  methods: {
    // updateClock() {
    //   const now = new Date();
    //   const hours = now.getHours();
    //   const minutes = now.getMinutes();
    //   const seconds = now.getSeconds();
    //   const hourHand = document.getElementById("hourHand");
    //   const minuteHand = document.getElementById("minuteHand");
    //   const secondHand = document.getElementById("secondHand");
    //   const hourDegrees = (hours % 12) * 30 + minutes * 0.5;
    //   const minuteDegrees = minutes * 6 + seconds * 0.1;
    //   const secondDegrees = seconds * 6;
    //   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    //   minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    //   secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    //   // console.log(`Time is:${hours}:${minutes}:${seconds}`);
    // },
  },
};
</script>

<style>
.clock {
  width: 200px;
  height: 200px;
  position: relative;
  border: 8px solid #333;
  border-radius: 50%;
}

.hour-hand,
.minute-hand,
.second-hand {
  position: absolute;
  transform-origin: center bottom;
}

.hour-hand {
  width: 6px;
  height: 60px;
  background-color: #333;
}

.minute-hand {
  width: 4px;
  height: 80px;
  background-color: #666;
}

.second-hand {
  width: 2px;
  height: 90px;
  background-color: #ff0000;
}

.center-circle {
  width: 12px;
  height: 12px;
  background-color: #333;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
