<template>
  <div>
    <v-card>
      <v-layout align-center justify-space-between>
        <div style="margin-left:10px;">
          <h1>Contas a Receber</h1>
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
            :titulo="'Cliente: Cecil'"
            :subtitulos="subtitulos"
            :componentCurrent="component"
            :classeTexto="'subtitle-2'"
            :temLogo="true"
            :classCard="'pa-4'"
            :styleCard="
              'border-top-style:solid; border-top-color:rgb(242, 203, 29)'
            "
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
          color="primary"
          @click="fullDialog = true"
        >
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import CardInformacao from "../../src/components/card/CardInformacao";
import TextoCard from "../../src/components/card/TextoCard";
import BotaoTooltip from "../../src/components/BotaoTooltip";

import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
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
      "Valor: R$1500,00",
      "Vencimento: 14/01/2020",
      "Descrição: Analista Mensal Projeto Enem"
    ],
    component: TextoCard,

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
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    ...mapMutations(["changeListTrue", "changeListFalse"])
  }
};
</script>
