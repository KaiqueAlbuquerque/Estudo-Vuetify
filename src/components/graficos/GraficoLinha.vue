<template>
  <div>
    <v-list-item-title :class="classeTexto">{{ titulo }}</v-list-item-title>
    <canvas
      style="margin-top:25px;max-width:100%;"
      :id="dadosGraficoLinha.id"
      :height="dadosGraficoLinha.height"
    ></canvas>
  </div>
</template>

<script>
//Graficos
import Linha from "./Linha.js";
import Chart from "chart.js";

export default {
  props: ["titulo", "classeTexto", "dadosGraficoLinha"],

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
      let grafico = new Linha(
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

      this.createChart(this.dadosGraficoLinha.id, grafico.geraGraficoLinha());
    }
  },

  mounted() {
    this.montaTela();
  }
};
</script>
