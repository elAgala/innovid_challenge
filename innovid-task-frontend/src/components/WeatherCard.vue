<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">{{weather.description}}</v-list-item-title>
        <v-list-item-subtitle>{{date}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col class="display-1" cols="7">
          {{temp}}&deg;C
        </v-col>
        <v-col cols="5">
          <v-img
            :src="weatherImage"
            width="92"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-weather-sunset-up</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{formatDate(sunrise)}}</v-list-item-subtitle> </v-list-item> 
    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-weather-sunset-down</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{formatDate(sunset)}}</v-list-item-subtitle>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  data(){
    return {
      weatherImage: require(`@/assets/icons/${this.weather.icon}.png`)
    }
  },
  methods: {
    formatDate(rawDate){
      const date = new Date(rawDate)
      const hours = date.getHours()
      const minutes = date.getMinutes()
      return `${hours <= 9 ? ("0" + hours) : hours}:${minutes <= 9 ? ("0" + minutes) : minutes} hs`
    }
  },
  props: {
    temp: Number,
    weather: Object,
    sunrise: Number,
    sunset: Number,
    date: String
  }
}
</script>
