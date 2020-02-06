<template>
  <div>
    <v-list-item-title :class="classeTexto" class="mb-1">{{
      titulo
    }}</v-list-item-title>
    <canvas
      style="margin-top:25px;max-width:100%;"
      :id="dadosGraficoPizza.id"
      :height="dadosGraficoPizza.height"
    ></canvas>
  </div>
</template>

<script>
import Pizza from "./Pizza.js";
import Chart from "chart.js";

//Serviços
import MontaCores from "../../../servicos/MontaCores.js";

export default {
  props: ["titulo", "classeTexto", "dadosGraficoPizza"],

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
      let cores = [];
      for (let i = 0; i < 2; i++) {
        cores.push(MontaCores.geraCor());
      }

      let grafico = new Pizza(["Janeiro", "Fevereiro"], cores, [10, 20]);

      this.createChart(this.dadosGraficoPizza.id, grafico.geraGraficoPizza());
    }
  },

  mounted() {
    this.montaTela();
  }
};
</script>
