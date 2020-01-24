<template>
  <div>
    <v-list-item-title :class="classeTexto" class="mb-1">{{
      titulo
    }}</v-list-item-title>
    <canvas
      style="margin-top:25px; max-width:1027px"
      id="graficoBarra"
    ></canvas>
  </div>
</template>

<script>
//Graficos
import Barra from "./Barra.js";
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
      let graficoBarra = new Barra(
        [
          "2015-01",
          "2015-02",
          "2015-03",
          "2015-04",
          "2015-05",
          "2015-06",
          "2015-07",
          "2015-08",
          "2015-09",
          "2015-10",
          "2015-11",
          "2015-12"
        ],
        [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        [12, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1],
        [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        1,
        false,
        "Requisições",
        "Dia do mês"
      );

      this.createChart("graficoBarra", graficoBarra.geraGraficoBarra());
    }
  },

  mounted() {
    this.montaTela();
  }
};
</script>
