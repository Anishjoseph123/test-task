<template>
  <div>
    <v-card
      height="200"
      max-width="400"
      tile
      outlined
      class="mx-auto mt-3"
      style="background: linear-gradient(to right, red, yellow, green)"
    >
      <v-card-title
        class="black--text text-uppercase font-italic font-weight-bold"
      >
        Rolex
      </v-card-title>
      <v-card-text
        style="
          font-size: 45px;
          color: lightseagreen;

          text-align: center;
          font-weight: bold;
        "
      >
        <span>{{ time }}</span>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    time: null,
  }),
  mounted() {
    setInterval(() => {
      this.currentTime();
    }, 1000);
  },
  methods: {
    currentTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const mins = String(now.getMinutes()).padStart(2, "0");
      const sec = String(now.getSeconds()).padStart(2, "0");
      this.time = `${hours}:${mins}:${sec}`;
    },
  },
};
</script>

<style></style>
