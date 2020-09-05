<template>
  <v-form>
    <v-text-field label="மின்னஞ்சல் முகவரி" prepend-icon="mdi-account" type="email"></v-text-field>

    <v-text-field label="கடவுச்சொல்" prepend-icon="mdi-lock" type="password"></v-text-field>
    <div style="text-align:right">
      <v-btn color="primary">
        பதிவுசெய்க
        <v-icon small>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  //
};
</script>