<template>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title :class="classeTexto" class="mb-1">{{titulo}}</v-list-item-title>
        <v-list-item-subtitle 
            v-for="(subtitulo, index) in subtitulos" :key="index" 
            :class="classeSubtitulo"
            class="subtitle-2">
            {{subtitulo}}
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-icon x-large dark>{{icone}}</v-icon>
    </v-list-item>
</template>

<script>
export default {
    props: ["titulo", "subtitulos", "icone", "classeTexto", "classeSubtitulo"]
}
</script>