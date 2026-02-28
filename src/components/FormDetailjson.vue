<template>
  <div>
    <SnackBar :SnackBarComponent="SnackBarComponent" />
    <v-card
      outlined
      rounded="lg"
      height="auto"
      max-width="444"
      class="mx-auto mt-4"
    >
      <v-card-text>
        <v-row dense align="center" justify="center">
          <v-col cols="12" lg="12" md="12" sm="12" xl="12" xs="12">
            <v-form lazy-validation ref="formdata">
              <v-row dense class="pa-2" no-gutters>
                <v-col cols="12" lg="12" md="12" sm="12" xl="12" xs="12">
                  <v-text-field
                    dense
                    :rules="required"
                    outlined
                    label="Full Name"
                    v-model="formData.userName"
                  >
                    <template v-slot:prepend-inner>
                      <v-icon small color="primary" class="mr-1 mt-1"
                        >mdi-account</v-icon
                      >
                    </template>
                  </v-text-field>
                </v-col>
                <v-col cols="12" lg="12" md="12" sm="12" xl="12" xs="12">
                  <v-text-field
                    dense
                    outlined
                    label="Email ID"
                    v-model="formData.emailId"
                    :rules="rules.email"
                  >
                    <template v-slot:prepend-inner>
                      <v-icon small color="error" class="mr-1 mt-1"
                        >mdi-email</v-icon
                      >
                    </template></v-text-field
                  >
                </v-col>
                <v-col cols="12" lg="12" md="12" sm="12" xl="12" xs="12">
                  <v-text-field
                    dense
                    outlined
                    :rules="required"
                    label="Phone Number"
                    prefix="🇮🇳 +91"
                    v-model="formData.phoneNum"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="12" md="12" sm="12" xl="12" xs="12">
                  <v-text-field
                    dense
                    outlined
                    label="Password"
                    :rules="required"
                    v-model="formData.passWord"
                    :type="isPwd ? 'text' : 'password'"
                    @click:append="isPwd = !isPwd"
                    :append-icon="isPwd ? 'mdi-eye' : 'mdi-eye-off'"
                  >
                    <template v-slot:prepend-inner>
                      <v-icon small color="primary" class="mr-1 mt-1"
                        >mdi-lock</v-icon
                      >
                    </template>
                  </v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="pa-4 mb-6">
        <v-layout align-center justify-center>
          <v-btn
            color="blue lighten-1"
            dark
            depressed
            block
            @click.prevent="handleSubmit()"
            >Register</v-btn
          ></v-layout
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import SnackBar from "./SnackBar.vue";
export default {
  components: {
    SnackBar,
  },
  data: () => ({
    required: [(v) => !!v || "Required."],
    SnackBarComponent: {},
    formData: {
      passWord: "",
      userName: "",
      emailId: "",
      phoneNum: "",
    },
    isPwd: false,
    rules: {
      email: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
    },
  }),
  methods: {
    handleSubmit() {
      if (!this.$refs.formdata.validate()) {
        this.$nextTick(() => {
          this.SnackBarComponent = {
            SnackbarVmodel: true,
            SnackbarColor: "error",
            Top: true,
            renderComp: true,
            SnackbarText: "Please fill all the fields.",
          };
        });
      } else {
        const jsonData = JSON.stringify(this.formData, null, 2);
        console.log("Details of the Registered User:", jsonData);
        this.$nextTick(() => {
          this.SnackBarComponent = {
            SnackbarVmodel: true,
            SnackbarColor: "success",
            Top: true,
            renderComp: true,
            SnackbarText: "User Registered Successfully.",
          };
        });
      }
      this.formData = {};
    },
  },
};
</script>

<style></style>
