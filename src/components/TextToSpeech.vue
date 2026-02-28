<template>
  <div>
    <v-card outlined tile height="100" max-width="350" class="mx-auto mt-4">
      <v-card-text>
        <v-row align="center" justify="center" dense>
          <v-col cols="12" lg="12" md="12" sm="12" xl="12" xs="12">
            <v-form>
              <v-row dense>
                <v-col cols="12" lg="12" md="12" sm="12" xl="12" xs="12">
                  <v-text-field
                    label="Enter some text"
                    outlined
                    dense
                    id="inputfield"
                    ref="textfield"
                  >
                    <template v-slot:prepend-inner>
                      <v-icon color="primary" small class="mr-1 mt-1"
                        >mdi-magnify</v-icon
                      >
                    </template>
                    <template v-slot:append-outer>
                      <v-btn
                        icon
                        small
                        color="primary"
                        depressed
                        class="microphone_icon"
                        @click="textToSpeech()"
                      >
                        <v-icon>mdi-microphone</v-icon>
                      </v-btn>
                    </template>
                  </v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    textToSpeech() {
      // Get the text from the input field
      const text = document.getElementById("inputfield").value;

      // Check if the browser supports the SpeechSynthesis API
      if ("speechSynthesis" in window) {
        // Create an instance of the SpeechSynthesisUtterance object
        const speechSynthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance();

        // Set the text to be spoken
        utterance.text = text;

        // Speak the text
        speechSynthesis.speak(utterance);
      }
      setTimeout(() => {
        this.$refs.textfield.reset();
      }, 2000);
    },
  },
};
</script>

<style></style>
