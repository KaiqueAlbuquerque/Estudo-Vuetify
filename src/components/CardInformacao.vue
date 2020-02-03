<template>
  <v-card
    class="pa-5"
    centered
    outlined
    :color="cor"
    raised
    :shaped="shaped"
    :elevation="12"
    :height="height"
    dark
  >
    <v-row v-if="temLogo">
      <v-col offset-md="6">
        <v-img
          height="15"
          width="100"
          :src="require('../assets/static/images/aubrick.png')"
        ></v-img>
      </v-col>
    </v-row>
    <component
      v-bind:is="current"
      :titulo="titulo"
      :subtitulos="subtitulos"
      :icone="icone"
      :classeTexto="classeTexto"
      :classeSubtitulo="classeSubtitulo"
    ></component>
    <v-layout
      v-if="temCronometro == true"
      align-end
      justify-end
      style="margin-top:15px;"
    >
      <sig-cronometro
        :class="classePisca"
        starttime="Jan 31, 2020 15:55:25"
        endtime="Feb 02, 2020 19:59:45"
        trans='
            {  
              "day":"Dias",
              "hours":"Horas",
              "minutes":"Minutos",
              "seconds":"Segundos",
              "status": {
                  "expired":"",
                  "running":"",
                  "upcoming":""
              }
           }'
      ></sig-cronometro>
    </v-layout>
  </v-card>
</template>

<script>
import Cronometro from "../components/Cronometro";
import { mapGetters } from "vuex";

export default {
  components: {
    "sig-cronometro": Cronometro
  },

  props: [
    "cor",
    "titulo",
    "subtitulos",
    "icone",
    "componentCurrent",
    "shaped",
    "classeTexto",
    "classeSubtitulo",
    "temLogo",
    "temCronometro",
    "height",
  ],

  data: () => ({
    current: null,
  }),

  created() {
    this.current = this.componentCurrent;
  },

  computed: {
    ...mapGetters(["classePisca"])
  },
};
</script>

<style scoped>
  @keyframes fa-blink {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 0; }
 }
.fa-blink {
  -webkit-animation: fa-blink 1.0s linear infinite;
  -moz-animation: fa-blink 1.0s linear infinite;
  -ms-animation: fa-blink 1.0s linear infinite;
  -o-animation: fa-blink 1.0s linear infinite;
  animation: fa-blink 1.0s linear infinite;
}
</style>
