<template>
  <div>
    <v-card
      rounded="xl"
      outlined
      height="400"
      hover
      :color="clickTheme == true ? '#111' : '#fff'"
      max-width="400"
      class="mx-auto mt-2"
    >
      <v-card-title>
        <span
          class="text-uppercase subtitle-2 mx-auto"
          :class="clickTheme == true ? 'white--text' : 'primary--text'"
          >Calculator</span
        >
        <v-tooltip bottom color="primary">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-on="on"
              v-bind="attrs"
              depressed
              icon
              :color="clickTheme == true ? 'white' : 'black'"
              @click="handleTheme"
              v-model="clickTheme"
              ><v-icon v-if="clickTheme == false">mdi-weather-night</v-icon>
              <v-icon v-else>mdi-white-balance-sunny</v-icon>
            </v-btn></template
          >
          <span>{{ clickTheme == true ? "Light Mode" : "Dark Mode" }}</span>
        </v-tooltip>
      </v-card-title>
      <v-card-text>
        <v-row dense align="center" justify="center">
          <v-col cols="12" lg="12" md="12" sm="12" xl="12" xs="12">
            <v-form ref="calc">
              <v-row dense>
                <v-col cols="12" lg="12" md="12" sm="12" xl="12" xs="12">
                  <v-text-field
                    outlined
                    dense
                    v-model="display"
                    readonly
                    background-color="white"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <div class="numberBtn">
          <v-btn
            v-for="i in buttons"
            :key="i"
            color="secondary"
            depressed
            tile
            @click="handleBtn(i)"
          >
            {{ i }}
          </v-btn>
          <v-btn color="success" depressed tile @click="calculateNum()"
            >=</v-btn
          >
          <v-btn color="error" depressed tile @click="clearField()">C</v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    clickTheme: false,
    display: "",
    buttons: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "+",
      "-",
      "*",
      "/",
    ],
  }),
  methods: {
    handleTheme() {
      this.clickTheme = !this.clickTheme;
    },
    handleBtn(btn) {
      this.display += btn;
    },
    calculateNum() {
      try {
        this.display = eval(this.display);
      } catch (error) {
        this.display = "error";
      }
    },
    clearField() {
      this.display = "";
    },
  },
};
</script>

<style>
.numberBtn {
  display: grid;
  width: 100%;
  gap: 1px;
  grid-template-columns: repeat(3, 1fr);
}
</style>
