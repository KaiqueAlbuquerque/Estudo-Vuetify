<template>
  <v-tooltip
    :left="posicao.left"
    :right="posicao.right"
    :top="posicao.top"
    :bottom="posicao.bottom"
  >
    <template v-slot:activator="{ on }">
      <v-btn icon @click.stop="click">
        <v-icon v-on="on" v-animate-css.hover="animacao">{{ icone }}</v-icon>
      </v-btn>
    </template>
    <span>{{ texto }}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: ["posicao", "click", "animacao", "icone", "texto"]
};
</script>
