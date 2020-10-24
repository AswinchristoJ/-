<template>
  <v-app id="inspire">
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
