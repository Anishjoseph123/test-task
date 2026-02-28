<template>
  <div>
    <v-card class="mx-auto mt-3" flat height="200" max-width="250">
      <v-btn color="success" @click="playSound()" depressed>
        <v-icon small color="primary" class="mr-1">mdi-music</v-icon>Play</v-btn
      >
    </v-card>
  </div>
</template>

<script>
export default {
  methods: {
    playSound() {
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      oscillator.frequency.value = 200; // Adjust frequency for different pitch
      oscillator.type = "sine"; // You can change the wave type (sine, square, sawtooth, triangle)

      // Connect the oscillator to the audio output (speakers)
      oscillator.connect(audioContext.destination);

      // Start the oscillator to play the sound
      oscillator.start();

      // Stop the oscillator after a short delay to stop the sound
      setTimeout(() => oscillator.stop(), 500); // Adjust the delay to control the sound duration
    },
  },
};
</script>

<style></style>
