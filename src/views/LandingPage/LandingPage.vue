<template>
  <v-app id="inspire">
    <v-row class="img" align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <div class="logo">உழவுக்கடை</div>
        <v-card>
          <v-toolbar color="primary" dark flat>
            <v-flex
              d-flex
              align-center
              justify-center
              class="title"
              :class="!login?'title-disabled':''"
              @click="login=true"
            >
              உள்நுழைய
              <span v-if="!login" style="font-size:0.7rem">(இங்கு அழுத்தவும்)</span>
            </v-flex>
            <v-flex
              d-flex
              align-center
              justify-center
              class="title"
              :class="login?'title-disabled':''"
              @click="login=false"
            >
              பதிவுசெய்ய
              <span v-if="login" style="font-size:0.7rem">(இங்கு அழுத்தவும்)</span>
            </v-flex>
          </v-toolbar>
          <v-card-text>
            <Login class="content" v-if="login" />
            <SignIn class="content" v-else />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
// need to add transition for the dynamic components
import Login from "./Login";
import SignIn from "./SignIn";
export default {
  components: {
    Login,
    SignIn
  },
  data() {
    return {
      login: true
    };
  }
};
</script>
<style lang="scss" scoped>
.title {
  height: 100%;
  font-size: 1rem !important;
  line-height: normal;
  flex-direction: column;
  cursor: pointer;
  &-disabled {
    background-color: gray;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
}
.logo {
  position: absolute;
  color: white;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding-top: 50px;
  text-decoration-line: underline;
  font-size: 2rem;
}
.img {
  background-size: cover;
  background-image: linear-gradient(#11111187, #1111116b),
    url("../../assets/image1.jpeg");
}
::v-deep .v-toolbar__content,
.v-toolbar__extension {
  justify-content: space-around;
  padding: 0;
}
</style>