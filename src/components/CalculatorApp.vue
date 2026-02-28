<template>
  <div>
    <v-card height="auto" max-width="400" outlined tile class="mx-auto mt-4">
      <v-card-text>
        <v-row dense align="center" justify="center">
          <v-col cols="12" lg="12" md="12" xl="12" xs="12" sm="12">
            <v-form lazy-validation ref="calc">
              <v-row dense>
                <v-col cols="12" lg="12" md="12" xl="12" xs="12" sm="12">
                  <v-text-field
                    dense
                    outlined
                    label="First Number*"
                    v-model="firstNum"
                    :rules="rules"
                  >
                    <template v-slot:prepend-inner>
                      <v-icon small color="primary" class="mt-1 mr-1"
                        >mdi-numeric</v-icon
                      >
                    </template>
                  </v-text-field>
                </v-col>
                <v-col cols="12" lg="12" md="12" xl="12" xs="12" sm="12">
                  <v-text-field
                    dense
                    outlined
                    label="Second Number*"
                    v-model="secondNum"
                    :rules="rules"
                  >
                    <template v-slot:prepend-inner>
                      <v-icon small color="primary" class="mt-1 mr-1"
                        >mdi-numeric</v-icon
                      >
                    </template></v-text-field
                  >
                </v-col>
                <v-card-title class="subtitle-1 black--text" v-model="result"
                  >Result:{{ result }}</v-card-title
                >
              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </v-card-text>
      <v-btn depressed outlined color="error" @click="clearFields()"
        >Clear</v-btn
      >
      <v-card-actions v-for="m in operators" :key="m">
        <v-tooltip bottom color="primary">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              depressed
              color="secondary"
              v-on="on"
              v-bind="attrs"
              tile
              @click="calculateNumbers(m)"
              >{{ m }}
            </v-btn>
          </template>
          <span v-if="m == '+'">Add</span>
          <span v-else-if="m == '*'">Multiply</span>
          <span v-else-if="m == '/'"> Divide</span>
          <span v-else-if="m == '-'">Subtract</span>
          <span v-else-if="m == '%'">Modulus</span>
        </v-tooltip>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    operators: ["+", "-", "*", "/", "%"],
    result: "",
    rules: [
      (v) => !!v || "Enter a number.",
      (v) => /^\d+(\.\d+)?$/.test(v) || "Enter a number",
    ],
    firstNum: "",
    secondNum: "",
  }),
  methods: {
    clearFields() {
      this.$refs.calc.reset();
      this.result = "";
    },
    calculateNumbers(operation) {
      switch (operation) {
        case "+": {
          this.result = Number(this.firstNum) + Number(this.secondNum);
          break;
        }
        case "-": {
          if (this.firstNum > this.secondNum)
            this.result = Number(this.firstNum) - Number(this.secondNum);
          else if (this.secondNum > this.firstNum)
            this.result = Number(this.secondNum) - Number(this.firstNum);
          else this.result = 0;
          break;
        }
        case "*":
          this.result = Number(this.firstNum) * Number(this.secondNum);
          break;
        case "/":
          if (this.secondNum == 0) {
            this.result = "Infinty";
          } else
            this.result =
              Number(this.firstNum) / Number(this.secondNum) ||
              Number(this.secondNum) / Number(this.firstNum);
          break;
        case "%":
          this.result = Number(this.firstNum) % Number(this.secondNum);
          break;
        default: {
          return (this.result = "");
        }
      }
    },
  },
};
</script>

<style></style>
