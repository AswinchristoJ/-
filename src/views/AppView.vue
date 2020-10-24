<template>
  <div>
    <div v-if="$router.currentRoute.path !== '/login'">
      <v-icon medium class="pa-5" @click="drawer = !drawer">mdi-menu</v-icon>
    </div>

    <v-navigation-drawer
      v-if="$router.currentRoute.path !== '/login'"
      :value="drawer"
      mobile-breakpoint="400"
      absolute
      app
      dark
    >
      <v-list dense nav class="py-0">
        <v-list-item two-line :class="miniVariant && 'px-0'">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>வாடிக்கையாளர் பெயர்</v-list-item-title>
            <v-list-item-subtitle>இருப்பிடம்/தொழிற்பெயர்</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-btn class="pa-5 mb-5 ml-5" slot="append" @click="$router.push({path:'login'})">வெளியேறு</v-btn>
    </v-navigation-drawer>

    <v-main transition="slide-x-transition">
      <router-view />
    </v-main>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "AppView",
  components: {
    //
  },
  data() {
    return {
      drawer: true,
      items: [
        { title: "ஊட்டம்", icon: "mdi-view-dashboard" },
        { title: "வாங்க", icon: "mdi-cart-outline" },
        { title: "விற்க", icon: "mdi-cash-multiple" },
        { title: "பதிவேற்றம்", icon: "mdi-image-move" }
      ],
      background: true,
      miniVariant: false
    };
  },
  mounted() {
    console.log(this.$router);
  }
};
</script>
