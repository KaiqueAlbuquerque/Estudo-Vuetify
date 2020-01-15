<template>
    <canvas id="graficoLinha"></canvas>
</template>

<script>
//Graficos
import Linha from './Linha.js';
import Chart from 'chart.js'; 

export default {
    methods: {
        createChart(chartId, chartData) {
            const ctx = document.getElementById(chartId);
            new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options
            });
        },

        montaTela(){
            let graficoLinha = new Linha(
                            "Requisições",
                            ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
                            [5,6,7,8,9,100,5,6,7,8,9,100],
                            '#fff',
                            5,
                            '#b71c1c',
                            "Requisições",
                            "Dia do mês",
                            false,
                            false
                        );            

            this.createChart('graficoLinha', graficoLinha.geraGraficoLinha());
        }
    },

    mounted(){
        this.montaTela();
    }
}
</script>