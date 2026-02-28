<template>
  <div>
    <v-dialog
      v-model="fullImageDialog"
      hide-overlay
      max-width="444"
      :retain-focus="true"
      transition="scroll-y-transition"
    >
      <v-card flat height="auto" width="auto">
        <v-card-text class="mt-2">
          <v-img
            contain
            height="auto"
            width="auto"
            :src="StoreObj1.url"
            :alt="StoreObj1.title"
          ></v-img>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    fullImageDialog: Boolean,
    StoreObj1: Object,
  },
  data: () => ({}),
  mounted() {
    // this.fullImageView();
  },
  methods: {
    async fullImageView() {
      await fetch("https://jsonplaceholder.typicode.com/photos")
        .then((data) => data.json())
        .then((res) => {
          console.log("Photos:", res);
        })
        .catch((error) => console.log("Error:", error));
    },
  },
};
</script>

<style></style>
