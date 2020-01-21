<template>
  <div>
    <v-list-item-title :class="classeTexto" class="mb-1">{{
      titulo
    }}</v-list-item-title>
    <canvas
      style="margin-top:25px; max-width:1027px"
      id="graficoLinha"
      height="50"
    ></canvas>
  </div>
</template>

<script>
//Graficos
import Linha from "./Linha.js";
import Chart from "chart.js";

export default {
  props: ["titulo", "classeTexto"],

  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    },

    montaTela() {
      let graficoLinha = new Linha(
        "Requisições",
        [
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho"
        ],
        [5, 6, 7, 8, 9, 100, 5, 6, 7, 8, 9, 100],
        "#fff",
        5,
        "#b71c1c",
        "Requisições",
        "Dia do mês",
        false,
        false
      );

      this.createChart("graficoLinha", graficoLinha.geraGraficoLinha());
    }
  },

  mounted() {
    this.montaTela();
  }
};
</script>
