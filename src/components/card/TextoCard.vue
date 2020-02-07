<template>
  <v-list-item three-line>
    <v-list-item-content>
      <div :class="classeTexto" class="mb-1">{{ titulo }}</div>
      <v-list-item-subtitle
        v-for="(subtitulo, index) in subtitulos"
        :key="index"
        :class="classeSubtitulo"
        class="subtitle-1"
      >
        <template v-if="subtitulo.increment == true">
          <animated-number v-if="subtitulo.moeda == false"
            :value="subtitulo.value"
            :formatValue="formatToNumber"
            :duration="1000"
            round="1"
          />
          <animated-number v-else
            :value="subtitulo.value"
            :formatValue="formatToPrice"
            :duration="1000"
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
    formatToNumber(subtitulo) {
      return `<div class="display-2"><span style="color:white">${subtitulo}</span></div>`;
    },
    formatToPrice(subtitulo){
      return `<div class="display-2"><span style="color:white">R$${Number(subtitulo).toFixed(2).replace(".",",")}</span></div>`;
    }
  }
};
</script>
