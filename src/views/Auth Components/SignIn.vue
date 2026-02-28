<template>
  <div>
    <v-card flat class="main_card">
      <v-row dense class="pa-3 my-6">
        <v-col cols="12" lg="6" md="6" xl="6" xs="12" sm="12" class="">
          <!-- <v-img
            src="https://cdn.pixabay.com/photo/2016/03/31/14/49/celtic-1292841_1280.png"
            alt="img"
            contain
            dark
            height="400"
            width="900"
          ></v-img> -->
          <v-layout justify-start align-start>
            <v-card-text>
              <v-card
                height="450"
                max-width="480"
                rounded="lg"
                elevation="0"
                outlined
                class="ml-auto mt-16 formCard"
                color="transparent"
              >
                <v-form>
                  <v-img
                    src="https://cdn.pixabay.com/photo/2022/09/06/20/31/profile-pic-7437435_1280.png"
                    class="mx-auto mt-2 logoImage"
                    contain
                    height="100"
                    width="150"
                  ></v-img>
                  <v-card-text class="text-center mt-4 text-h6"
                    >Login To Your Account</v-card-text
                  >
                  <v-row dense class="pa-4 mt-2" no-gutters>
                    <v-col cols="12" lg="12" md="12" xl="12" sm="12" xs="12">
                      <v-text-field
                        v-model="emailId"
                        label="Email ID"
                        outlined
                        dense
                        rounded
                        color="#111"
                        prepend-inner-icon="mdi-email"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" lg="12" md="12" xl="12" sm="12" xs="12">
                      <v-text-field
                        v-model="passWord"
                        dense
                        outlined
                        rounded
                        color="#111"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show1 ? 'text' : 'password'"
                        label="Password"
                        prepend-inner-icon="mdi-lock"
                        @click:append="show1 = !show1"
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="mt-n8 mr-2">
                    <v-layout align-end justify-end>
                      <v-btn
                        text
                        color="black"
                        class="forgotPwd"
                        small
                        light
                        elevation="0"
                        >Forgot Password?</v-btn
                      >
                    </v-layout>
                  </v-row>
                  <v-card-actions>
                    <v-layout align-center justify-center class="mt-2 pa-5">
                      <v-btn id="loginBtn" rounded depressed dark block>login</v-btn>
                      <!-- color="#0f99da" -->
                    </v-layout></v-card-actions
                  >
                  <v-layout align-center justify-center class="mt-n2">
                    <span class="text-center text-overline"
                      >New Here?
                      <v-btn text small color="black" class="signUp"
                        >Create account</v-btn
                      >
                    </span>
                  </v-layout>
                </v-form>
              </v-card>
            </v-card-text>
          </v-layout>
        </v-col>
        <v-col cols="12" lg="6" md="6" xl="6" xs="12" sm="12" class="mt-16">
          <v-img
            src="https://cdn.pixabay.com/photo/2018/08/17/15/29/call-3613071_1280.png"
            alt="img"
            contain
            style=""
            height="400"
            width="900"
          ></v-img>
          <!-- <v-layout justify-start align-start>
            <v-card-text>
              <v-card
                height="450"
                max-width="480"
                rounded="lg"
                elevation="0"
                outlined
              >
                <v-form>
                  <v-img
                    src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
                    class="mx-auto mt-2"
                    contain
                    height="100"
                    width="150"
                  ></v-img>
                  <v-card-text class="text-center mt-4 text-h6"
                    >Login To Your Account</v-card-text
                  >
                  <v-row dense class="pa-4 mt-2" no-gutters>
                    <v-col cols="12" lg="12" md="12" xl="12" sm="12" xs="12">
                      <v-text-field
                        v-model="emailId"
                        label="Email ID"
                        outlined
                        dense
                        solo
                        rounded
                        color="#474747"
                        prepend-inner-icon="mdi-email"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" lg="12" md="12" xl="12" sm="12" xs="12">
                      <v-text-field
                        v-model="passWord"
                        dense
                        outlined
                        solo
                        rounded
                        single-line
                        color="#474747"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show1 ? 'text' : 'password'"
                        label="Password"
                        prepend-inner-icon="mdi-lock"
                        @click:append="show1 = !show1"
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="mt-n8">
                    <v-layout align-end justify-end>
                      <v-btn
                        text
                        color="secondary"
                        class="forgotPwd"
                        small
                        light
                        elevation="0"
                        >Forgot Password?</v-btn
                      >
                    </v-layout>
                  </v-row>
                  <v-card-actions>
                    <v-layout align-center justify-center class="mt-2 pa-5">
                      <v-btn color="#0f99da" id="loginBtn" depressed dark block
                        >login</v-btn
                      >
                    </v-layout></v-card-actions
                  >
                  <v-layout align-center justify-center class="mt-n2">
                    <span class="text-center text-overline new"
                      >New Here?
                      <v-btn text small color="black" class="signUp"
                        >Create account</v-btn
                      >
                    </span>
                  </v-layout>
                </v-form>
              </v-card>
            </v-card-text>
          </v-layout> -->
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    show1: false,
    emailId: "",
    passWord: "",
  }),
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.main_card {
  background-image: linear-gradient(to right, #15a9ef, #86c4e1);
  /* background-image: linear-gradient(to right, #000, #CCC); good*/
  /* background-image: linear-gradient(to right, #8bc34a, #aed581);avg(lightgreen combo) */
  /* background-image: linear-gradient(to right, #0d47a1, #1976d2);good(deepblue combo) */
  /* background-image: linear-gradient(to right, #ffeb3b, #ffee58);good(yellow combo) */
  /* background-image: linear-gradient(to right, #e91e63, #f06292);ok(pink combo) */
  /* background-image: linear-gradient(to right, #009688, #26a69a); good(teal combo)*/
  /* background-image: linear-gradient(to right, #ff9800, #ffb74d);ok(orange combo) */
  /* background-image: linear-gradient(to right, #f44336, #ef5350); ok(red combo)*/
  /* background-image: linear-gradient(to right, #2196f3, #64b5f6); */

  /* background-image: linear-gradient(to right, #474747, #ac8172) !important; */
  /* background-image: url("https://cdn.pixabay.com/photo/2019/09/25/09/36/team-4503157_1280.jpg"); */
  height: 100vh;
  width: 100%;
  min-height: 380px;
  overflow: hidden;
  /* Center and scale the image nicely */
  /* background-position: center;
  background-repeat: no-repeat; */
  /* background-size: cover; */
  position: relative;
}
#loginBtn {
  background: rgb(4, 74, 173) !important;
}
#loginBtn:hover {
  animation: pulsate 1.5s ease-in-out infinite !important;
  background: #045 !important;
}
/* #loginBtn:hover { */
/* background: #045 !important; */
@keyframes pulsate {
  0% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(10px);
  }
}
/* } */
.signUp {
  position: relative !important;
  transition: transform 0.5s ease-in-out !important;
}
.signUp:hover {
  transform: translateX(10px) !important;
  /* background: rgb(116, 169, 189) !important;
  color: black !important; */
  background: rgb(4, 74, 173) !important;
  color: white !important;
}
.forgotPwd {
  position: relative !important;
  transition: transform 0.5s ease-in-out !important;
}
.forgotPwd:hover {
  transform: translateX(3px) !important;
  background: rgb(4, 74, 173) !important;
  color: white !important;
}
.formCard:hover {
  border: 1px solid #d9dce2 !important;
  background: #fff !important;
}
.logoImage {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}
</style>
