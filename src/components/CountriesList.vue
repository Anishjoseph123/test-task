<template>
  <div>
    <v-col cols="6" lg="3" md="3" xl="3" sm="12" xs="12">
      <v-select
        v-model="selectedCountry"
        outlined
        rounded
        dense
        :items="countries"
        item-text="name"
        item-value="name"
        label="Select a Country"
        class="field_label_size field_height fontSizeVariant1 mt-8"
      ></v-select>
    </v-col>
  </div>
</template>

<script>
export default {
  data: () => ({
    selectedCountry: "",
    countries: [],
  }),
  mounted() {
    this.fetchCountries();
  },
  methods: {
    async fetchCountries() {
      await fetch("https://restcountries.com/v2/all")
        .then((data) => data.json())
        .then((x) => (this.countries = x))
        .catch((err) => console.log("Error", err));
    },
  },
};
</script>

<style></style>
