<template>
    <div>
        <v-container class="fill-height" fluid>
            <sig-card-informacao :cor="'indigo'" :titulo="'Novos'" :subtitulo="'5 Novos Chamados'" :icone="'mdi-plus'"></sig-card-informacao>
            <sig-card-informacao :cor="'green'" :titulo="'Atendendo'" :subtitulo="'5 Chamados em Atendimento'" :icone="'mdi-ticket'"></sig-card-informacao>
            <sig-card-informacao :cor="'red'" :titulo="'Finalizados'" :subtitulo="'5 Chamados Finalizados'" :icone="'mdi-check-all'"></sig-card-informacao>

            <div>
                <canvas id="graficoRequisicoesLinhaMarca"></canvas>
            </div>
            <div>
                <canvas id="graficoRequisicoesPizzaMarca"></canvas>
            </div>
        </v-container>
    </div>
</template>

<script>
import CardInformacao from "../../src/components/CardInformacao";

//Graficos
import Linha from '../../src/components/graficos/Linha.js';
import Pizza from '../../src/components/graficos/Pizza.js';

//Serviços
import MontaCores from '../../servicos/MontaCores.js';

import Chart from 'chart.js'; 

export default {
    components: {
        "sig-card-informacao": CardInformacao    
    },

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
                            ["Janeiro", "Fevereiro"],
                            [5,6],
                            '#fff',
                            5,
                            '#b71c1c',
                            "Requisições",
                            "Dia do mês",
                            false,
                            false
                        );
            
            let cores = [];
            for(let i = 0; i < 2; i++){
                cores.push(MontaCores.geraCor());
            }

            let graficoPizza = new Pizza(
                                ["Janeiro", "Fevereiro"],
                                cores,
                                [10,20]
                            );
            
            this.createChart('graficoRequisicoesLinhaMarca', graficoLinha.geraGraficoLinha());
            this.createChart('graficoRequisicoesPizzaMarca', graficoPizza.geraGraficoPizza());
        }
    },

    mounted(){
        this.montaTela();
    }
}
</script>