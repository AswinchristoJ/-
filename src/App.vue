<template>
  <v-app style="background:rgb(128 128 128 / 37%)" id="inspire">
    <AppView />
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./views/Footer";
import AppView from "./views/AppView";
export default {
  components: {
    Footer,
    AppView
  }
};
</script>
