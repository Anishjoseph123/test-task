<template>
  <div>
    <v-card flat height="auto" max-width="400" class="mt-7 mx-auto">
      <v-card-text>
        <v-row dense align="center" justify="center">
          <v-col cols="12" lg="12" md="12" xl="12" xs="12" sm="12">
            <v-form :lazy-validation="true">
              <v-row dense>
                <v-col cols="12" lg="12" md="12" xl="12" xs="12" sm="12">
                  <v-text-field
                    outlined
                    clearable
                    clear-icon="mdi-close-circle"
                    rounded
                    dense
                    label="Enter Address."
                    append-icon="mdi-map-marker"
                    color="primary"
                    v-model="address"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn depressed color="success" tile @click="geocodeAddress()"
          ><v-icon class="mr-1" small color="primary">mdi-map</v-icon> Get
          coordinates</v-btn
        >
      </v-card-actions>
      <v-sheet
        outlined
        rounded="xl"
        height="90"
        width="250"
        class="mx-auto mt-4 mb-4"
      >
        <div class="ml-3 mt-2">Address:{{ address }}</div>
        <div class="ml-3">Latitude:{{ latitude }}</div>
        <div class="ml-3">Longitude:{{ longitude }}</div>
      </v-sheet>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    address: "",
    latitude: "",
    longitude: "",
  }),
  methods: {
    geocodeAddress() {
      if (this.StoreObject.channel_location == "") {
        this.SnackBarComponent = {
          SnackbarVmodel: true,
          SnackbarColor: "error",
          Top: true,
          SnackbarText: "Enter an Address.",
        };
      }
      const geocoder = new window.google.maps.Geocoder();

      geocoder.geocode(
        { address: this.StoreObject.channel_location },
        (results, status) => {
          if (status === "OK" && results.length > 0) {
            this.StoreObject.channel_location = results[0].formatted_address;
            this.center.lat = results[0].geometry.location.lat();
            this.center.lng = results[0].geometry.location.lng();
          } else {
            this.StoreObject.channel_location = "Address does not exist";
            this.SnackBarComponent = {
              SnackbarVmodel: true,
              SnackbarColor: "error",
              Top: true,
              SnackbarText: "Address does not exist.",
            };
          }
        }
      );
    },
  },
};
</script>

<style></style>
