<template>
  <v-list-item three-line>
    <v-list-item-content>
      <v-list-item-title :class="classeTexto" class="mb-1">{{
        titulo
      }}</v-list-item-title>
      <v-list-item-subtitle
        v-for="(subtitulo, index) in subtitulos"
        :key="index"
        :class="classeSubtitulo"
        class="subtitle-1"
      >
        <template v-if="subtitulo == '1000'">
          <animated-number
            :value="subtitulo"
            :formatValue="formatToPrice"
            :duration="2000"
            round="1"
          />
        </template>
        <template v-else>
          {{ subtitulo }}
        </template>
      </v-list-item-subtitle>
    </v-list-item-content>

    <v-icon x-large dark>{{ icone }}</v-icon>
  </v-list-item>
</template>

<script>
import AnimatedNumber from "animated-number-vue";

export default {
  components: {
    AnimatedNumber
  },
  data() {
    return {
      value: 0
    };
  },

  props: ["titulo", "subtitulos", "icone", "classeTexto", "classeSubtitulo"],

  methods: {
    formatToPrice(subtitulo) {
      return `<h1>${subtitulo}</h1>`;
    }
  }
};
</script>
