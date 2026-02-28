<template>
  <div>
    <v-form lazy-validation>
      <v-col cols="6" sm="6" lg="3" md="3" xl="3" xs="6">
        <v-text-field
          dense
          v-model="amount"
          label="Enter Amount(₹)"
          outlined
          solo
          id="numberInput"
          color="purple"
          prepend-inner-icon="mdi-cash"
        ></v-text-field>
      </v-col>
      <!-- <v-btn color="success" tile depressed @click="convertToWords()">Convert</v-btn> -->
      <p class="black--text font-weight-bold">
        Amount in words:
        <span class="text-capitalize">{{ amountInWords }}</span> Rupees only.
      </p>
    </v-form>
  </div>
</template>
<script>
export default {
  data: () => ({
    amount: null,
    amountInWords: "",
  }),
  watch:{
amount:function(x){
this.convertToWords(x);
}
  },
  methods: {
    convertToWords() {
      var number = parseInt(this.amount);

      // Array of units, tens, and special numbers
      var units = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
      ];
      var tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
      ];
      var special = ["", "thousand", "million", "billion"];

      // Function to convert a three-digit number to words
      function convertThreeDigit(number) {
        var words = "";
        var hundreds = Math.floor(number / 100);
        var remainder = number % 100;
        if (hundreds > 0) {
          words += units[hundreds] + " hundred ";
        }
        if (remainder > 0) {
          if (remainder < 20) {
            words += units[remainder];
          } else {
            words +=
              tens[Math.floor(remainder / 10)] + " " + units[remainder % 10];
          }
        }
        return words.trim();
      }

      // Function to convert a number to words
      function convertToWordsHelper(number) {
        if (number === 0) {
          return "zero";
        }

        var words = "";
        var specialIndex = 0;

        while (number > 0) {
          var threeDigits = number % 1000;
          if (threeDigits !== 0) {
            var threeDigitsWords = convertThreeDigit(threeDigits);
            words =
              threeDigitsWords + " " + special[specialIndex] + " " + words;
          }
          number = Math.floor(number / 1000);
          specialIndex++;
        }

        return words.trim();
      }

      this.amountInWords = convertToWordsHelper(number);
    },
  },
};
</script>

<style></style>
