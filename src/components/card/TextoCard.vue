<template>
  <v-list dark color="transparent">
    <v-list-item v-if="titulo" class="texto-card-linha pa-0">
      <v-list-item-content>
        <v-list-item-title class="headline" v-text="titulo"></v-list-item-title>
      </v-list-item-content>

      <v-list-item-avatar v-if="icone">
        <v-icon x-large dark>{{ icone }}</v-icon>
      </v-list-item-avatar>
    </v-list-item>

    <v-list-item
      v-for="(subtitulo, index) in subtitulos"
      :key="index"
      dense
      ripple
      class="texto-card-linha pa-0"
    >
      <v-list-item-content class="pa-1">
        <v-list-item-title>
          <template v-if="subtitulo.increment == true">
            <animated-number
              v-if="subtitulo.moeda == false"
              :value="subtitulo.value"
              :formatValue="formatToNumber"
              :duration="1000"
              round="1"
            />
            <animated-number
              v-else
              :value="subtitulo.value"
              :formatValue="formatToPrice"
              :duration="1000"
              round="1"
            />
          </template>
          <template v-else>
            {{ subtitulo }}
          </template>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
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
    formatToPrice(subtitulo) {
      return `<div class="display-2"><span style="color:white">R$${Number(
        subtitulo
      )
        .toFixed(2)
        .replace(".", ",")}</span></div>`;
    }
  }
};
</script>

<style lang="scss">
.v-list-item--dense {
  &.texto-card-linha {
    min-height: initial;
  }
}
</style>
