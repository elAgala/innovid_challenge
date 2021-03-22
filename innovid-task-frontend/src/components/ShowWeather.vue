<template>
  <div class="show-weather">
    <div v-if="loading" class="text-center">
      <v-progress-circular
        indeterminate
        color="primary"
      ></v-progress-circular>
    </div>
    <div v-else>
      <v-btn
        @click="$emit('goBack')"
        small
        color="grey"
        plain
      >
        Back
      </v-btn>
      <v-row class="my-1 mx-2">
        <h2>{{filterNumberName(days)}} day forecast for {{city}}</h2>
      </v-row>
      <v-divider></v-divider>
      <v-row class="my-1 mx-2">
        <v-col v-for="(data, index) in weatherData.data" :key="index" cols="4">
          <WeatherCard
            :temp="data.temp"
            :sunset="data.sunset_ts * 1000"
            :sunrise="data.sunrise_ts * 1000"
            :date="data.valid_date"
            :weather="data.weather">
          </WeatherCard>
        </v-col>
      </v-row>
    </div>
  </div> 
</template>

<script>
import WeatherCard from './WeatherCard.vue'

export default {
  data(){
    return {
      loading: true,
      weatherData: []
    }
  },
  props: {
    city: String,
    days: Number
  },
  methods: {
    filterNumberName(number){
      switch(number){
        case 1:
          return 'One'
        case 2:
          return 'Two'
        case 3:
          return 'Three'
      }
    }
  },
  async created() {
    const resp = await this.$http.get(`http://localhost:1000?city=${this.city}&forecastdays=${this.days}`)
    if(resp.status != 200) return this.$emit('requestError')
    this.weatherData = resp.data
    this.loading = false
  },
  components: {
    WeatherCard
  }
}
</script>
