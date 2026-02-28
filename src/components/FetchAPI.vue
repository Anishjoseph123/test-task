<template>
  <div>
    <v-card flat>
      <v-card-text>
        <v-app-bar color="#fff" dense flat>
          <v-toolbar-title>GitHub Users</v-toolbar-title>
          <v-icon color="primary" right @click="fetchAPI()">mdi-refresh</v-icon>
          <v-spacer></v-spacer>
          <v-col cols="6" lg="3" md="3" sm="6" xs="6" xl="3" class="mt-4">
            <v-text-field
              outlined
              dense
              label="Search"
              rounded
              v-model="search1"
            >
              <template v-slot:prepend-inner>
                <v-icon color="primary" small class="mr-1 mt-1"
                  >mdi-magnify</v-icon
                >
              </template>
            </v-text-field>
          </v-col>
        </v-app-bar>
        <v-data-table
          dense
          class="mt-2"
          fixed-header
          :headers="fetchHeaders"
          :items="responseItems"
          :no-results-text="noDataText"
          :hide-default-footer="responseItems.length == 0"
          :search="search1"
          height="auto"
        >
          <template v-slot:no-results>
            <v-alert :value="true" class="subtitle-2 text-capitalize red--text">
              No Match found!
              <v-icon color="#474747" dark>mdi-emoticon-sad-outline</v-icon>
            </v-alert>
          </template>
          <template v-slot:[`item.id`]="{ item }">
            <span>{{ item.id }}</span>
          </template>
          <template v-slot:[`item.login`]="{ item }">
            <span class="subtitle-2 font-weight-bold text-capitalize">{{
              item.login
            }}</span>
          </template>
          <template v-slot:[`item.avatar_url`]="{ item }">
            <v-img
              :src="item.avatar_url"
              alt="img"
              contain
              height="80"
              width="80"
            ></v-img>
          </template>
          <template v-slot:[`item.type`]="{ item }">
            <span
              class="caption text-uppercase font-weight-bold"
              :class="
                item.type == 'User' ? 'success--text ' : 'secondary--text '
              "
              >{{ item.type }}</span
            >
          </template>
          <template v-slot:[`item.repos_url`]="{ item }">
            <v-tooltip bottom color="primary">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  :href="item.repos_url"
                  target="_blank"
                  color="#474747"
                  v-on="on"
                  v-bind="attrs"
                  ><v-icon>mdi-source-repository</v-icon></v-btn
                >
              </template>
              <span>Go to GitHub Repo of {{ item.login }}</span></v-tooltip
            >
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    search1: "",
    fetchHeaders: [
      { text: "ID.", value: "id" },
      { text: "Image", value: "avatar_url" },
      { text: "Name", value: "login" },
      { text: "User Type", value: "type" },
      { text: "GitHub Repo", value: "repos_url" },
    ],
    responseItems: [],
  }),
  mounted() {
    this.fetchAPI();
  },
  methods: {
    async fetchAPI() {
      await fetch("https://api.github.com/users")
        .then((data) => data.json())
        .then((res) => {
          console.log("responses", res);
          this.responseItems = res;
        })
        .catch((err) => console.log("error", err));
    },
  },
};
</script>

<style></style>
<!-- <v-card flat height="auto" width="auto">
  <v-toolbar flat dense>
    <v-card-title>
      <div class="text-uppercase subtitle-2">photos</div>
      <v-tooltip bottom color="primary">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-on="on"
            v-bind="attrs"
            color="primary"
            depressed
            class="pa-2"
            @click="getPhotosList(),fullImageDialog=false"
          >
            <v-icon>mdi-refresh</v-icon></v-btn
          >
        </template>
        <span>Refresh</span>
      </v-tooltip> </v-card-title
    ><v-spacer></v-spacer>
    <v-row dense>
      <v-col cols="6" lg="6" md="6" sm="6" xl="6" xs="6" class="pt-6">
        <v-text-field outlined dense label="Search" v-model="search1">
          <template v-slot:prepend-inner>
            <v-icon small color="success">mdi-magnify</v-icon>
          </template>
        </v-text-field></v-col
      >
    </v-row>
  </v-toolbar>
  <v-card-text>
    <v-data-table
      :headers="imageHeaders"
      :items="imageList"
      dense
      fixed-header
      :hide-default-footer="imageList.length == 0"
      :search="search1"
      :footer-props="{
        'items-per-page-options': [100, 200, 300, 400, 500],
      }"
      :items-per-page="100"
    >
      <template v-slot:[`item.id`]="{ item }">
        <span>{{ item.id }}.</span>
      </template>
      <template v-slot:[`item.title`]="{ item }">
        <span class="caption black--text text-capitalize">{{
          item.title
        }}</span>
      </template>
      <template v-slot:[`item.thumbnailUrl`]="{ item }">
        <v-img
          :src="item.thumbnailUrl"
          :alt="item.title"
          contain
          height="50"
          width="50"
        ></v-img>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-tooltip bottom color="primary">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-on="on"
              v-bind="attrs"
              icon
              color="success"
              depressed
              @click="viewFullImage(item)"
              ><v-icon small>mdi-eye</v-icon></v-btn
            >
          </template>
          <span>View Full Image</span>
        </v-tooltip>
      </template>
    </v-data-table>
  </v-card-text>
</v-card> -->
<!-- FullImagedialog, -->
<!-- fullImageDialog: false,
StoreObj1: {},
search1: "",
imageHeaders: [
  { text: "ID", value: "id" },
  { text: "Title", value: "title" },
  { text: "Thumbnail Image", value: "thumbnailUrl" },
  { text: "Actions", value: "actions" },
],
imageList: [], -->
<!-- viewFullImage(items) {
  this.fullImageDialog = true;
  if (this.fullImageDialog == true) this.StoreObj1 = items;
},
async getPhotosList() {
  await fetch("https://jsonplaceholder.typicode.com/photos")
    .then((data) => data.json())
    .then((res) => {
      console.log("Photos:", res);
      this.imageList = res;
    })
    .catch((error) => console.log("Error:", error));
}, -->
<!-- import FullImagedialog from "../../components/BMSUsers/FullImagedialog.vue"; -->
<!-- <FullImagedialog
      :fullImageDialog="fullImageDialog"
      :StoreObj1="StoreObj1"
    /> -->