<template>
  <div>
     <v-file-input
                  outlined
                  dense
                  v-if="create_station.channel_image_url == ''"
                  class="field_height field_label_size fontSizeVariant1"
                  label="Station Image"
                  :v-model="channelImageInput"
                  :rules="[(v) => !!v || 'Required.']"
                  accept="image/*"
                  @change="onChangeEvent"
                ></v-file-input> 

                <v-icon
                  @click="create_station.channel_image_url = ''"
                  v-if="create_station.channel_image_url !== ''"
                  color="error"
                  style="margin-left: 260px"
                  >mdi-delete</v-icon
                >
                <div v-if="create_station.channel_image_url !== ''">
                  <h5 class="black--text">Original Image</h5>

                  <cropper
                    class="cropper"
                    :src="create_station.channel_image_url"
                    :stencil-props="{
                      aspectRatio: 10 / 12,
                    }"
                    ref="cropper"
                    @change="change"
                  ></cropper>
                </div>
                <div v-if="create_station.channel_image_url !== ''">
                  <h5 class="black--text">Cropped Image</h5>

                  <canvas id="PreviewImage"></canvas>
                </div>
                <v-btn
                  color="#98bc90"
                  v-if="create_station.channel_image_url !== ''"
                  depressed
                  class="mt-6 caption"
                  @click="handleFileUpload1(croppedImageInput)"
                  :loading="loading1"
                >
                  <v-icon small dark>mdi-upload</v-icon>
                  upload image</v-btn
                >
                <v-btn
                  color="#98bc90"
                  v-if="create_station.channel_image_url !== ''"
                  depressed
                  class="mt-6 caption"
                  @click="handleFileUpload1(croppedImageInput)"
                  :loading="loading1"
                >
                  <v-icon small dark>mdi-upload</v-icon>
                  upload image</v-btn
                >
  </div>
</template>

<script>
export default {
data:()=>({
    channel_image_url: "",
    channelImageInput: {},
    croppedImageInput: {},
    croppedImg: "",
}),
components:{
    Cropper,
},
methods:{
    onChangeEvent(e) {
      console.log("File Uploaded", e);
      let imageUrl = URL.createObjectURL(e);
      console.log("File Object", imageUrl);
      this.create_station.channel_image_url = imageUrl;
      console.log("Image URL", this.create_station.channel_image_url);
      console.log("Image URL again", imageUrl);
      const url = new URL(imageUrl);
      console.log(url);
    },
    change({ canvas }) {
      console.log(canvas);
      this.PreviewMethod(canvas);
    },
    async PreviewMethod(getsize) {
      const canvas = document.getElementById("PreviewImage");
      canvas.width = getsize.width;
      canvas.height = getsize.height;
      const context = canvas.getContext("2d");
      context.drawImage(getsize, 0, 0, getsize.width, getsize.height);
      const img = canvas.toDataURL("image/jpeg");
      const res = await fetch(img);
      const buff = await res.arrayBuffer();
      let files = [
        new File([buff], `CroppedImage_${new Date().getTime()}.jpg`, {
          type: "image/jpeg",
        }),
      ];
      console.log("files", files);
      this.croppedImageInput = files;
      let new_image_url = context.canvas.toDataURL("image/png");
      this.croppedImg = new_image_url;
      console.log(
        "create station channel img url",
        this.create_station.channel_image_url
      );
      console.log("Cropped image URL", this.croppedImg);
      console.log("Base 64 url:", new_image_url);
    },
    handleFileUpload1(e) {
      this.loading1 = true;
      console.log("check file", e);

      this.uploadImageToS3Method(e)
        .then((url) => {
          console.log("S3 URL", url);
          this.channel_image_url = url.file_url;
          console.log("URL", url);
          this.SnackBarComponent = {
            SnackbarVmodel: true,
            SnackbarColor: "green",
            Top: true,
            SnackbarText: "Image Uploaded Successfully",
          };
          this.loading1 = false;
        })
        .catch((error) => {
          console.log(error);
          this.loading1 = false;
          this.SnackBarComponent = {
            SnackbarVmodel: true,
            SnackbarColor: "red",
            Top: true,
            SnackbarText: "Error in Uploading Image",
          };
        });
      self;
      console.log(
        "Image after cropping",
        this.create_station.channel_image_url
      );
    },
}
}
</script>

<style>

</style>