<template>
  <div
    style="
      height: 100vh;
      width: 100%;
      background-image: url('https://cdn.pixabay.com/photo/2018/04/04/22/14/abstract-3291293__480.jpg');
      background-repeat: repeat;
    "
  >
    <v-snackbar
      top
      centered
      color="error"
      :timeout="2000"
      v-model="errorSnackbar"
      >Please Enter Correct Credentials</v-snackbar
    > 
    <v-row dense>
      <v-img
        src="https://cdn.pixabay.com/photo/2016/08/26/15/54/checklist-1622517__480.png"
        alt="img"
        height="450"
        width="100"
        contain
        class="d-flex justify-space-between mt-12"
      ></v-img>
      <!-- <v-flex sm12 lg12 md12> -->
      <v-layout justify-center>
        <v-card
          height="auto"
          width="450"
          style="margin-top: 150px"
          elevation="4"
          rounded="xl"
        >
          <v-card-text>
            <v-form lazy-validation>
              <v-row dense align="center" class="pa-4">
                <v-col cols="12" lg="12" md="12" xl="12" sm="12" xs="12">
                  <v-text-field
                    dense
                    label="Email ID*"
                    v-model="emailId"
                    append-icon="mdi-email"
                    outlined
                    solo
                    :rules="[rules.required, rules.email]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="12" md="12" xl="12" sm="12" xs="12">
                  <v-text-field
                    dense
                    :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show4 ? 'text' : 'password'"
                    label="Password*"
                    outlined
                    v-model="passWord"
                    solo
                    @click:append="show4 = !show4"
                  ></v-text-field>
                </v-col>
                <v-layout justify-end class="mt-n4">
                  <v-btn text color="error">Forgot Password</v-btn>
                </v-layout>
              </v-row>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-layout justify-center>
              <v-btn
                color="primary"
                @click="login_user()"
                depressed
                large
                block
                rounded
                >Login</v-btn
              >
            </v-layout>
          </v-card-actions>
          <v-layout align-center justify-center>
            <span class="font-weight-bold mt-2"
              >New Here?
              <v-btn text color="primary" small to="/SignUp">sign up</v-btn>
            </span>
          </v-layout>
        </v-card>
      </v-layout>
      <!-- </v-card> -->

      <!-- </v-flex> -->
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    errorSnackbar: false,
    emailId: "",
    passWord: "",
    show4: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail";
      },
    },
  }),
  methods: {
    login_user() {
      if (
        this.emailId === "anish@mobil80.com" &&
        this.passWord === "Mobil80@123"
      ) {
        this.$router.push("/DashBoard");
      } else {
        this.errorSnackbar = true;
      }
    },
  },
};
</script>

<style></style>
