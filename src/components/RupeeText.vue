<template>
  <div>
    <v-layout justify-end>
    <v-card class="mt-12" flat height="150" width="300">
      <v-form>
        <v-row dense>
          <v-col cols="12" lg="12" md="12" xl="6" xs="12" sm="12">
            <v-text-field
              label="Enter Amount (INR)"
              v-model="amount"
              append-icon="mdi-cash"
              outlined
              solo
              color="purple"
              @keyup="format_currency()"
              type="text"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
</v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({
    amount: "",
  }),
  methods: {
    format_currency() {
      const str = this.amount;
      const num = parseFloat(str.replace(/,/g, ""));
      this.amount = new Intl.NumberFormat().format(num);
    },
  },
};
</script>

<style></style>
