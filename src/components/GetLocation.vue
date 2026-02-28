<template>
  <div>
    <v-card
      outlined
      rounded="xl"
      hover
      width="500"
      height="auto"
      class="mx-auto"
    >
      <v-card-text>
        <v-row dense no-gutters align="center" justify="center">
          <v-col cols="12" lg="12" md="12" sm="12" xs="12">
            <v-form lazy-validation>
              <v-col cols="12" lg="12" md="12" sm="12" xs="12">
                <v-text-field
                  outlined
                  dense
                  rounded
                  v-model="latitude"
                  label="Latitude"
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="12" md="12" sm="12" xs="12"
                ><v-text-field
                  outlined
                  dense
                  rounded
                  class="mt-n4"
                  v-model="longitude"
                  label="Longitude"
                ></v-text-field
              ></v-col>
            </v-form>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="#474747"
          dark
          rounded
          @click="getAddress()"
          :disabled="latitude == '' && longitude == ''"
        >
          <v-icon class="mr-1" color="primary" small dark
            >mdi-map-marker</v-icon
          >
          Get Address</v-btn
        >
      </v-card-actions>
    </v-card>

    <v-card-title v-if="isMapsApiLoaded == true">Address:</v-card-title>
    <v-card-text>
      <span class="subtitle-2 black--text">{{ address }}</span>
    </v-card-text>
  </div>
</template>

<script>
export default {
  data: () => ({
    latitude: "",
    longitude: "",
    address: "",
    isMapsApiLoaded: false,
  }),
  mounted() {
    if (window.google && window.google.maps) {
      this.isMapsApiLoaded = true;
    } else {
      this.loadMapsApi();
    }
  },
  methods: {
    getAddress() {
      const geocoder = new window.google.maps.Geocoder();
      const latLng = new window.google.maps.LatLng(
        parseFloat(this.latitude),
        parseFloat(this.longitude)
      );

      geocoder.geocode({ location: latLng }, (results, status) => {
        if (status === "OK" && results.length > 0) {
          this.address = results[0].formatted_address;
        } else {
          this.address = "Address not found";
        }
      });
    },
    loadMapsApi() {
      const googleMapsScript = document.createElement("script");
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=APIKEY&libraries=places`;
      googleMapsScript.onload = () => {
        this.isMapsApiLoaded = true;
      };
      document.head.appendChild(googleMapsScript);
    },
  },
};
</script>

<style></style>
