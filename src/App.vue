<!-- அடிக்குறிப்பு -->
<template>
  <div>
    <v-main style="height:100vh" transition="slide-x-transition">
      <router-view></router-view>
    </v-main>
    <Footer />
  </div>
</template>

<script>
import Footer from "./views/Footer";
export default {
  components: {
    Footer
  }
};
</script>
