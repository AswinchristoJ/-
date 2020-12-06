<template>
  <div>
    <WelcomeBanner />
    <v-card>
      <v-card-subtitle class="font-weight-bold">{{tiles[feedItem].title}} :</v-card-subtitle>
      <v-container fluid>
        <v-row style="padding-bottom:40px" :class="screenWidth > 500 ? 'mx-5' : ''" dense>
          <v-col v-for="(card, i) in cards[feedItem]" :key="i" :cols="screenWidth < 500 ? 6 : 4">
            <v-card>
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title
                  :style="screenWidth < 500 ? 'font-size: 0.8rem' : ''"
                  v-text="card.title"
                ></v-card-title>
              </v-img>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-cart-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <v-bottom-sheet v-model="sheet" inset>
      <template v-slot:activator="{ on, attrs }">
        <v-bottom-navigation class="align-center" color="pink" value="types" fixed>
          <v-btn value="types" v-bind="attrs" v-on="on">
            <span class="font-weight-bold">மற்ற பொருட்கள்</span>
            <v-icon>mdi-format-list-bulleted-type</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </template>
      <v-list>
        <v-subheader>தேர்வு செய்க :</v-subheader>
        <v-list-item-group v-model="feedItem" color="#624caf">
          <v-list-item v-for="tile in tiles" :key="tile.title" @click="sheet = false">
            <v-list-item-avatar>
              <v-avatar size="32px" tile>
                <img :src="tile.img" :alt="tile.title" />
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-title>{{ tile.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>

<script>
import WelcomeBanner from "./Feed/WelcomeBanner";
import {
  vegetables,
  pulses,
  masalas,
  fruits,
  otherProducts
} from "./Feed/data.js";

export default {
  name: "Feed",
  components: {
    WelcomeBanner
  },
  data() {
    return {
      feedItem: 0,
      cards: [vegetables, pulses, masalas, fruits, otherProducts],
      sheet: false,
      tiles: [
        {
          img:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.motosha.com%2Fwp-content%2Fuploads%2Ffresh-carrots-from-the-market-12-05-1024x683.jpg&f=1&nofb=1",
          title: "காய்கறிகள்"
        },
        {
          img:
            "https://i.pinimg.com/originals/a1/93/df/a193df859ffb1aecb5d20ebb0ac3da0c.png",
          title: "பருப்பு வகைகள்"
        },
        {
          img:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdrishtimagazine.com%2Fwp-content%2Fuploads%2F2017%2F10%2FHerbs.png&f=1&nofb=1",
          title: "மசாலாக்கள் "
        },
        {
          img:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.searchpng.com%2Fwp-content%2Fuploads%2F2018%2F12%2FFruits-PNG-HD-Transparent-Fruits.png&f=1&nofb=1",
          title: "பழ வகைகள்"
        },
        {
          img:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstorage.googleapis.com%2Fzopnow-static%2Fimages%2Fproducts%2F320%2Fsurf-excel-detergent-liquid-v-500-ml-1.png&f=1&nofb=1",
          title: "அன்றாடம் பயன்படுத்தும் பொருட்கள்"
        }
      ]
    };
  },
  computed: {
    screenWidth() {
      return window.innerWidth;
    }
  }
};
</script>

<style lang="scss" scoped>
//
</style>
