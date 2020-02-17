<template>
  <div>
    <v-list-item class="texto-card-linha pa-0">
      <v-list-item-content class="text-center">
        <v-list-item-title
          v-if="titulo"
          :class="classeTexto"
          v-text="titulo"
        ></v-list-item-title>
        <template v-for="(subtitulo, index) in subtitulos">
          <v-list-item-subtitle :key="index">
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
          </v-list-item-subtitle>
        </template>
      </v-list-item-content>
    </v-list-item>
  </div>
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
      return `<div class="display-1"><span>${subtitulo}</span></div>`;
    },
    formatToPrice(subtitulo) {
      return `<div class="display-1"><span>R$${Number(subtitulo)
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
