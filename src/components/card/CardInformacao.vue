<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      :color="cor"
      :shaped="shaped"
      :height="height"
      :class="classCard"
      :style="styleCard"
      hover
      @mouseover="mouseOver"
      @mouseleave="mouseLeave"
    >
      <div class="mt-2 text-center" v-if="icone">
        <v-icon color="yellow darken-2" x-large>{{ icone }}</v-icon>
      </div>

      <v-img
        v-if="temLogo"
        height="15"
        width="100"
        src="/static/images/logo.png"
        class="img-card"
      ></v-img>

      <component
        :is="current"
        :titulo="titulo"
        :subtitulos="subtitulos"
        :icone="icone"
        :classeTexto="classeTexto"
        :classeSubtitulo="classeSubtitulo"
        :dadosGraficoLinha="dadosGraficoLinha"
        :dadosGraficoPizza="dadosGraficoPizza"
        :dadosGraficoBarra="dadosGraficoBarra"
      ></component>

      <v-expand-transition v-if="temAcao == true">
        <div
          v-if="hover"
          class="d-flex transition-fast-in-fast-out deep-orange darken-4 v-card--reveal white--text"
          style="height: 100%;"
        >
          <v-btn
            v-for="(icon, index) in icons"
            :key="index"
            :class="{ 'show-btns': hover }"
            color="transparent"
            icon
          >
            <v-icon :class="{ 'show-btns': hover }" color="transparent">
              {{ icon }}
            </v-icon>
          </v-btn>
        </div>
      </v-expand-transition>

      <div v-if="temCronometro == true" class="mt-2 text-right">
        <sig-cronometro
          starttime="Jan 31, 2020 15:55:25"
          endtime="Feb 17, 2020 20:50:45"
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
    </v-card>
  </v-hover>
</template>

<script>
import { store } from "@/vuex";
import Cronometro from "@/components/Cronometro";

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
    "dadosGraficoBarra",
    "classCard",
    "styleCard",
    "temAcao"
  ],

  data: () => ({
    current: null,
    icons: ["edit", "delete"]
  }),

  created() {
    this.current = this.componentCurrent;
  },

  methods: {
    mouseOver() {
      store.commit("changeClassePiscaFalse");
    },

    mouseLeave() {
      store.commit("changeClassePiscaTrue");
    }
  }
};
</script>

<style lang="scss">
.img-card {
  margin: 5px auto;
}
</style>

<style scoped>
.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>

<style>
.v-card--reveal {
  align-items: center;
  top: 0;
  left: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>
