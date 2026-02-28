<template>
  <div>
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
                    label="Full Name*"
                    v-model="fullName"
                    outlined
                    solo
                    :rules="rules.required"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="12" md="12" xl="12" sm="12" xs="12">
                  <v-text-field
                    dense
                    label="Email ID*"
                    v-model="emailId"
                    append-icon="mdi-email"
                    outlined
                    solo
                    :rules="[rules.required, rules.email]"
                    @keydown.space.prevent="preventLeadingSpace()"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row dense align="center" justify="center">
                <v-col cols="12" lg="2" md="2" xl="2" sm="12" xs="12">
                  <v-text-field
                    readonly
                    prefix="🇮🇳 +91"
                    outlined
                    solo
                    dense
                    class="mt-n4"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="9" md="10" xl="10" sm="12" xs="12">
                  <v-text-field
                    label="Phone Number"
                    outlined
                    solo
                    dense
                    class="mt-n4"
                    @keypress="is_number($event)"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-col cols="12" lg="12" md="12" sm="12" xl="12" xs="12">
                <v-checkbox
                  label="I Agree to the Terms and Conditions"
                  v-model="checked"
                  color="success"
                  :rules="[(v) => !!v || 'You must agree to continue']"
                ></v-checkbox>
              </v-col>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-layout justify-center>
              <v-btn @click="sign_up()" depressed large block rounded color="primary"
                >Create Account</v-btn
              >
            </v-layout>
          </v-card-actions>
          <v-layout justify-center>
            <span class="mt-2">
              Already a Member?
              <v-btn small text color="primary" to="/">Login</v-btn>
            </span>
          </v-layout>
        </v-card>
      </v-layout>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    fullName: "",
    emailId: "",
checked:false,
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
    is_number(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) && charCode !== 46
)  { 
        evt.preventDefault();
      } else {
        return true;
      }
    },
    preventLeadingSpace(e) {
      if (!e.target.value) e.preventDefault();
      else if (e.target.value[0] == " ")
        e.target.value = e.target.value.replace(/^\s*/, "");
    },

  },
};


<style></style>
