<template>
  <div class="main-container">
    <v-card
      class="mx-auto my-5"
      max-width="50%"
    >
      <v-container class="px-10 py-6">
        <component 
          :is='actualComponent'
          :city="citySelected"
          :days="this.daysSelected"
          @requestError="manageRequestError"
          @goBack="actualComponent = 'SelectCity'"
          @citySelected="showWeatherData">
        </component>
        <span v-show="showErrorMsg" class="red--text">Unable to retreive weather data for the selected location</span>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import SelectCity from './SelectCity.vue'
import ShowWeather from './ShowWeather.vue'

export default {
  data() {
    return {
      actualComponent: 'SelectCity',
      citySelected: '',
      daysSelected: null,
      showErrorMsg: false
    }
  },
  methods: {
    showWeatherData(event){
      this.showErrorMsg = false
      this.citySelected = event.citySelected
      this.daysSelected = event.daysSelected
      this.actualComponent = 'ShowWeather'
    },
    manageRequestError(){
      this.showErrorMsg = true
      this.actualComponent = 'SelectCity'
      setTimeout(() => {
        this.showErrorMsg = false
      }, 5000)
    }
  },
  components: {
    SelectCity,
    ShowWeather
  }
}
</script>
