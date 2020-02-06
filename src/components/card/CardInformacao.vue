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
          :src="require('../../assets/static/images/aubrick.png')"
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
      :dadosGraficoLinha="dadosGraficoLinha"
      :dadosGraficoPizza="dadosGraficoPizza"
      :dadosGraficoBarra="dadosGraficoBarra"
    ></component>
    <v-layout
      v-if="temCronometro == true"
      align-end
      justify-end
      style="margin-top:15px;"
    >
      <sig-cronometro
        starttime="Jan 31, 2020 15:55:25"
        endtime="Feb 04, 2020 20:50:45"
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
import Cronometro from "../Cronometro";

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
    "dadosGraficoLinha",
    "dadosGraficoPizza",
    "dadosGraficoBarra"
  ],

  data: () => ({
    current: null
  }),

  created() {
    this.current = this.componentCurrent;
  }
};
</script>
