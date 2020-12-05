<template>
  <v-layout style="display:flex;align-items:center;position:relative">
    <v-icon
      style="position:absolute;top:10px;left:10px"
      medium
      @click="$emit('toggleDrawer', true)"
    >mdi-menu</v-icon>
    <div
      class="my-3"
      style="text-align:center;width:100%;font-weight:bold;color:#3e3e3e"
    >{{routeName}}</div>
  </v-layout>
</template>

<script>
// @ is an alias to /src

export default {
  name: "AppToolBar",
  computed: {
    routeName() {
      return this.$route.name;
    }
  }
};
</script>

<style lang="scss" scoped>
//
</style>