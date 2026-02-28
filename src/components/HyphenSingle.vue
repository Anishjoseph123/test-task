<template>
  <div>
    <v-snackbar
      top
      centered
      color="error"
      v-model="errorSnackbar"
      :timeout="2000"
      transition="scroll-x-transition"
      
      >Only one Hyphen(-)allowed</v-snackbar
    >
    <v-layout justify-center>
      <v-card flat height="150" width="300" class="mt-12">
        <v-row dense>
          <v-col cols="12" md="12" lg="12" sm="12" xl="12" xs="12">
            <v-text-field
              label="Enter only one - symbol"
              hint="Only one hyphen(-) symbol allowed."
              @keyup="check_hyphens()"
              v-model="hyphen"
              outlined
              solo
              :color="errorSnackbar===true?'error':'purple'"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
export default{
 data: () => ({
    hyphen: "",
    errorSnackbar: false,
  }),
  methods: {
    check_hyphens() {
      let regex=/^[A-Za-z0-9]*[-]{1}?[A-Za-z0-9]*$/
      let res=regex.test(this.hyphen)
      console.log(res)
      
        if (res){ this.errorSnackbar = false;
        //  this.disable_key()
        }
        //   this.hyphen.focus()
    //   } 
    else {
        //  this.disable_key();
        this.errorSnackbar = true;
      }
    },
    enable_key() {
      document.onkeydown = function () {
        return true;
      };
    },
    disable_key() {
      document.onkeydown = function () {
        return false;
      };
    },
  },
}
</script>

<style></style>
