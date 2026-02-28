<template>
  <div>
    <v-card flat>
      <v-app-bar color="blue darken-2" dense dark app clipped-left>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Mobil80</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon @click="logout_user()">mdi-logout</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer app clipped expand-on-hover permanent>
        <v-list rounded> 
          <v-list-item v-for="item in items" :key="item.title" link active-class="red" >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" },
    ],
  }),
  methods: {
    logout_user() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>
