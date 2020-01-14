<template>
  <v-card
    class="pa-7 mx-auto"
    max-width="340"
    height="150"
    centered
    outlined
    :color="cor"
    raised
    shaped
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="display-1 mb-1">{{titulo}}</v-list-item-title>
        <v-list-item-subtitle class="subtitle-2 mb-8">{{subtitulo}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-icon x-large dark>{{icone}}</v-icon>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: ["cor", "titulo", "subtitulo", "icone"],
}
</script>