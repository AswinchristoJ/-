<template>
  <div>
    <v-layout style="display:flex;align-items:center" v-if="$router.currentRoute.path !== '/login'">
      <v-icon medium class="pa-5" @click="drawer = !drawer">mdi-menu</v-icon>
      <div class="ml-9" style="text-align:center;width:100%">{{$router.currentRoute.name}}</div>
      <div class="mr-4" style="text-align:right;width:100%">
        <v-icon title="வெளியேறு" light @click="$router.push({path: '/login'})">mdi-exit-to-app</v-icon>
      </div>
    </v-layout>

    <v-navigation-drawer
      v-if="$router.currentRoute.path !== '/login'"
      v-model="drawer"
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
            <v-list-item-subtitle>
              <v-icon color="grey" class="mr-1" small>mdi-map-marker-radius</v-icon>கோவை சந்தை
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item :to="item.to" v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="logout-div" slot="append">
        <v-btn class="pa-5" @click="$router.push({ path: 'login' })">
          வெளியேறு
          <v-icon class="ml-2">mdi-exit-to-app</v-icon>
        </v-btn>
      </div>
    </v-navigation-drawer>

    <v-main transition="slide-x-transition">
      <router-view :class="$router.currentRoute.path === '/login'?
      '':'app-view'" />
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
        { title: "பதிவேற்றம்", icon: "mdi-image-move" },
        {
          title: "இச்செயலிப்பற்றி",
          icon: "mdi-information-variant",
          to: "/about"
        }
      ],
      background: true,
      miniVariant: false
    };
  }
};
</script>

<style lang="scss" scoped>
.app-view {
  margin: 15px 15px 0 15px;
}
.logout-div {
  text-align: center;
  height: 150px;
}
</style>