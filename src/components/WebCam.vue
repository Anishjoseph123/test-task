<template>
  <div>
    <!-- <v-card
      outlined
      rounded="lg"
      height="200"
      max-width="400"
      class="mx-auto mt-3"
      elevation="3"
    >
      <v-radio-group row v-model="radioGrp" class="ml-1">
        <v-radio color="primary" label="Admin View" value="admin"></v-radio>
        <v-radio color="primary" label="User View" value="user"></v-radio>
      </v-radio-group>
      <v-card-actions>
        <v-btn color="primary" depressed v-if="radioGrp === 'admin'"
          >admin</v-btn
        >
        <v-btn color="primary" depressed v-else-if="radioGrp === 'user'"
          >user</v-btn
        >
      </v-card-actions>
    </v-card> -->
    <v-card flat height="auto" width="auto">
      <v-toolbar color="#474747" elevation="0" tile>
        <v-toolbar-title class="d-flex">
          <v-img contain src="" height="50" width="50"></v-img>
          <span class="ml-3 mt-3 font-weight-bold white--text">Zoom Plus </span>
          <v-badge
            color="primary"
            class="mt-2"
            inline
            icon="mdi-plus"
          ></v-badge>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <span class="white--text">Hi,Anish</span>
      </v-toolbar>
      <v-card outlined height="500" dark max-width="1200" class="">
        <video
          autoplay
          id="webcamVideo"
          style="border: 1px solid black; height: 600px; width: 1200px"
        ></video>
      </v-card>
      <v-card-actions>
        <v-row dense align="center" justify="center">
          <v-col cols="12" lg="12" md="12" xl="12" sm="12" xs="12">
            <v-row dense no-gutters>
              <v-col cols="12" lg="4" md="4" sm="4" xl="4" xs="4">
                <v-btn
                  small
                  color="primary"
                  depressed
                  fab
                  @click="startWebCam()"
                  ><v-icon small> mdi-video </v-icon></v-btn
                >
              </v-col>
              <v-col cols="12" lg="4" md="4" sm="4" xl="4" xs="4">
                <v-btn small depressed fab color="primary">
                  <v-icon small> mdi-microphone </v-icon>
                </v-btn>
              </v-col>
              <v-col cols="12" lg="4" md="4" sm="4" xl="4" xs="4">
                <v-btn small fab depressed color="error">
                  <v-icon small>mdi-phone-hangup</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    //radioGrp: null,
  }),
  methods: {
    async startWebCam() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        const videoElement = document.getElementById("webcamVideo");
        videoElement.srcObject = stream;
      } catch (error) {
        console.log("Error accessing camera:", error);
      }
    },
  },
};
</script>

<style></style>
