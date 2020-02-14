<template>
  <v-card centered outlined :color="cor" :shaped="shaped" :height="height" dark>
    <v-card-text>
      <v-img
        v-if="temLogo"
        height="15"
        width="100"
        src="/static/images/aubrick.png"
        class="img-card"
      ></v-img>

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

      <div v-if="temCronometro == true" class="mt-2 text-right">
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
      </div>
    </v-card-text>
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
<style lang="scss">
.img-card {
  margin: 5px auto;
}
</style>
