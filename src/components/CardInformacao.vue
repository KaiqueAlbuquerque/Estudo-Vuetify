<template>
  <v-card
    class="pa-6 mx-auto"
    width="700"
    centered
    outlined
    :color="cor"
    raised
    :shaped="shaped"
    :elevation="12"
  >
    <component v-bind:is="current" :titulo="titulo" :subtitulos="subtitulos" :icone="icone" :classeTexto="classeTexto" :classeSubtitulo="classeSubtitulo"></component>
  </v-card>
</template>

<script>
export default {
  props: ["cor", "titulo", "subtitulos", "icone", "componentCurrent", "shaped", "classeTexto", "classeSubtitulo"],

  data: () => ({
    current: null
  }),

  created(){
    this.current = this.componentCurrent
  }
}
</script>