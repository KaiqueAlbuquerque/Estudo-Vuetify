<template>
    <v-tooltip :left="posicao.left" :right="posicao.right" :top="posicao.top" :bottom="posicao.top">
        <template v-slot:activator="{ on }">
            <v-btn icon @click.stop="$emit(funcaoEmit)">
                <v-icon v-on="on" v-animate-css.hover="animacao">{{icone}}</v-icon>
            </v-btn>
        </template>
        <span>{{texto}}</span>
    </v-tooltip>
</template>

<script>
export default {
    props: ["posicao", "funcaoEmit", "animacao", "icone", "texto"],
}
</script>