<template>
  <v-container class="select-city">
    <h3>Select a city</h3>
    <v-divider></v-divider>
    <v-row align="center" class="my-3">
      <v-col
        cols="12"
        sm="6"
      >
        <v-select
          :items="cities"
          v-model="city"
          label="City"
        ></v-select>
      </v-col>

      <v-col
        cols="12"
        sm="4"
      >
        <v-select
          :items="days"
          v-model="daysSelected"
          label="Days"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field 
          v-model="customCity"
          v-show="city == 'Other'"
          label="Custom city"
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
        <v-btn
          class="my-4"
          color="primary"
          elevation="2"
          :disabled="disableButton"
          @click="searchWeather"
        >Search</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cities: ['Jackson', 'Kansas', 'Minneapolis', 'New York', 'Other'],
      days: [1, 2, 3],
      daysSelected: null,
      city: null,
      customCity: ''
    }
  },
  computed: {
    disableButton(){
      if(!this.daysSelected || !this.city) return true
      if(this.city == 'Other' && this.customCity.length < 2) return true
      return false
    }
  },
  methods: {
    searchWeather(){
      const citySelected = this.city == 'Other' ? this.customCity : this.city
      this.$emit('citySelected', {citySelected, daysSelected: this.daysSelected}) 
    },
  }
}
</script>
