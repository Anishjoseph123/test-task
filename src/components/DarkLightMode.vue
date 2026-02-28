<template>
  <div :class="themeClass">
    <v-btn icon color="secondary" @click="toggleTheme"
          ><v-icon>mdi-theme-light-dark</v-icon></v-btn
        >
  </div>
</template>

<script>
export default {
data:()=>({
    isDarkMode:false,
}),
computed: {
    themeClass() {
      return this.isDarkMode ? 'dark-mode' : 'light-mode';
    },
  },
  methods:{
    toggleTheme(){
  this.isDarkMode=!this.isDarkMode;
  if(this.isDarkMode==false){
    console.log("Light mode");
  }
  else{
    console.log("Dark mode");
  }
  console.log("Light mode or dark mode?",this.isDarkMode);
},
  }
}
</script>

<style>

</style>