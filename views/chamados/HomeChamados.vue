<template>
  <div>
    <v-card>
      <v-layout align-center justify-space-between>
        <div style="margin-left:10px;">
          <h1>Chamados</h1>
        </div>
        <div style="margin-right:20px;">
          <sig-botaoTooltip
            :posicao="posicao"
            :click="changeListTrue"
            :animacao="'rubberBand'"
            :icone="'mdi-table'"
            :texto="'Tabela'"
          >
          </sig-botaoTooltip>
          <sig-botaoTooltip
            :posicao="posicao"
            :click="changeListFalse"
            :animacao="'rubberBand'"
            :icone="'mdi-crop-square'"
            :texto="'Card'"
          >
          </sig-botaoTooltip>
        </div>
      </v-layout>
    </v-card>

    <v-container class="fill-height" fluid>
      <v-row align="center">
        <v-col v-if="list == true">
          <v-data-table
            :headers="headers"
            :items="desserts"
            sort-by="calories"
            class="elevation-1"
          >
            <template v-slot:item.action="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
              <v-icon small @click="deleteItem(item)">delete</v-icon>
            </template>
          </v-data-table>
        </v-col>
        <v-col md="3" v-else v-for="dessert in desserts" :key="dessert.name">
          <sig-card-informacao
            v-if="dessert.prioridade == 'baixa'"
            :subtitulos="subtitulos"
            :componentCurrent="component"
            :classeTexto="'subtitle'"
            :temLogo="true"
            :temCronometro="true"
          ></sig-card-informacao>
          <sig-card-informacao
            v-else-if="dessert.prioridade == 'alta'"
            :subtitulos="subtitulos"
            :componentCurrent="component"
            :classeTexto="'subtitle'"
            :temLogo="true"
            :temCronometro="true"
          ></sig-card-informacao>
          <sig-card-informacao
            v-else
            :subtitulos="subtitulos"
            :componentCurrent="component"
            :classeTexto="'subtitle'"
            :temLogo="true"
            :temCronometro="true"
          ></sig-card-informacao>
        </v-col>
      </v-row>
      <v-layout align-end justify-end>
        <v-btn
          fixed
          bottom
          large
          fab
          dark
          color="indigo"
          @click="fullDialog = true"
        >
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-layout>
    </v-container>

    <sig-tela-lateral>
      <sig-interacoes></sig-interacoes>
    </sig-tela-lateral>

    <sig-novo-chamado
      v-on:FullDialog="toogleFullDialog"
      :fullDialog="fullDialog"
    ></sig-novo-chamado>
    <sig-nova-interacao></sig-nova-interacao>
  </div>
</template>

<script>
import TelaLateral from "../../src/components/TelaLateral";
import Interacoes from "./Interacoes";
import NovoChamado from "./NovoChamado";
import NovaInteracao from "./NovaInteracao";
import CardInformacao from "../../src/components/card/CardInformacao";
import TextoCard from "../../src/components/card/TextoCard";
import BotaoTooltip from "../../src/components/BotaoTooltip";

import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    "sig-tela-lateral": TelaLateral,
    "sig-interacoes": Interacoes,
    "sig-novo-chamado": NovoChamado,
    "sig-nova-interacao": NovaInteracao,
    "sig-card-informacao": CardInformacao,
    "sig-botaoTooltip": BotaoTooltip
  },

  computed: {
    ...mapGetters(["list"])
  },

  data: () => ({
    posicao: {
      left: false,
      right: false,
      top: false,
      bottom: true
    },
    subtitulos: [
      "Nº Chamado: 53717",
      "Cliente: Cecil",
      "Autor: Kaique Albuquerque",
      "Data: 14/01/2020",
      "Prioridade: Alta"
    ],
    component: TextoCard,
    fullDialog: false,
    headers: [
      {
        text: "Dessert (100g serving)",
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Actions", value: "action", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    }
  }),

  created() {
    this.initialize();
    if (this.$route.path == "/chamados/novo") {
      this.fullDialog = true;
    }
  },

  watch: {
    $route(to) {
      if (to.path == "/chamados/novo") this.fullDialog = true;
    }
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          prioridade: "alta"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          prioridade: "media"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          prioridade: "baixa"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          prioridade: "media"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          prioridade: "baixa"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          prioridade: "alta"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          prioridade: "alta"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          prioridade: "baixa"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          prioridade: "media"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          prioridade: "alta"
        }
      ];
    },

    ...mapMutations([
      "toggleDrawerRight",
      "toggleSheet",
      "changeListTrue",
      "changeListFalse"
    ]),

    toogleFullDialog() {
      this.fullDialog = false;
      this.$router.push({ path: "/chamados/home" });
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.toggleDrawerRight();
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    }
  }
};
</script>
