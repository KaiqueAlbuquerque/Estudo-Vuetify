<template>
    <canvas id="graficoPizza"></canvas>
</template>

<script>
import Pizza from './Pizza.js';
import Chart from 'chart.js'; 

//Serviços
import MontaCores from '../../../servicos/MontaCores.js';

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
            
            let cores = [];
            for(let i = 0; i < 2; i++){
                cores.push(MontaCores.geraCor());
            }

            let graficoPizza = new Pizza(
                                ["Janeiro", "Fevereiro"],
                                cores,
                                [10,20]
                            );
            
            this.createChart('graficoPizza', graficoPizza.geraGraficoPizza());
        }
    },

    mounted(){
        this.montaTela();
    }
}
</script>