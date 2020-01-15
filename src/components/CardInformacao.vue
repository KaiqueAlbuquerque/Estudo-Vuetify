<template>
  <v-card
    class="pa-5"
    centered
    outlined
    :color="cor"
    raised
    :shaped="shaped"
    :elevation="12"
  >
    <v-row v-if="temLogo">
      <v-col
        offset-md="6"
      >
        <v-img height="15" width="100" :src="require('../assets/static/images/aubrick.png')"></v-img>
      </v-col>
    </v-row>
    <component v-bind:is="current" :titulo="titulo" :subtitulos="subtitulos" :icone="icone" :classeTexto="classeTexto" :classeSubtitulo="classeSubtitulo"></component>
  </v-card>
</template>

<script>
export default {
  props: ["cor", "titulo", "subtitulos", "icone", "componentCurrent", "shaped", "classeTexto", "classeSubtitulo", "temLogo"],

  data: () => ({
    current: null
  }),

  created(){
    this.current = this.componentCurrent
  }
}
</script>