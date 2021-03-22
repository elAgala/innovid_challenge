<template>
  <v-app>
    <v-app-bar color="blue"app>
      <v-img
        class="mx-2"
        src="@/assets/logo.png"
        max-height="150"
        max-width="150"
        contain
      ></v-img>
      <v-toolbar-title class="ml-2">
        | Weather Task
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Main></Main>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Main from './components/Main';

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>
