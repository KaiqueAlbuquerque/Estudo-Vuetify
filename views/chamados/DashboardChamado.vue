<template>
  <div>
    <v-container class="fill-height">
      <v-row>
        <v-col md="3">
          <sig-card-informacao
            :titulo="'Novos Chamados'"
            :subtitulos="subtitulo1"
            :componentCurrent="component"
            :classeTexto="'subtitle-1'"
            :icone="'fiber_new'"
            :classCard="'pa-1'"
            :styleCard="
              'border-left-style:solid; border-left-color:rgb(242, 203, 29)'
            "
          ></sig-card-informacao>
        </v-col>
        <v-col md="3">
          <sig-card-informacao
            :titulo="'Aguardando Atendimento'"
            :subtitulos="subtitulo3"
            :componentCurrent="component"
            :classeTexto="'subtitle-1'"
            :icone="'timer'"
            :classCard="'pa-1'"
            :styleCard="
              'border-left-style:solid; border-left-color:rgb(242, 203, 29)'
            "
          ></sig-card-informacao>
        </v-col>
        <v-col md="3">
          <sig-card-informacao
            :titulo="'Em Atendimento'"
            :subtitulos="subtitulo2"
            :componentCurrent="component"
            :classeTexto="'subtitle-1'"
            :icone="'tag_faces'"
            :classCard="'pa-1'"
            :styleCard="
              'border-left-style:solid; border-left-color:rgb(242, 203, 29)'
            "
          ></sig-card-informacao>
        </v-col>
        <v-col md="3">
          <sig-card-informacao
            :titulo="'Chamados Finalizados'"
            :subtitulos="subtitulo3"
            :componentCurrent="component"
            :classeTexto="'subtitle-1'"
            :icone="'mdi-check-all'"
            :classCard="'pa-1'"
            :styleCard="
              'border-left-style:solid; border-left-color:rgb(242, 203, 29)'
            "
          ></sig-card-informacao>
        </v-col>
        <v-col md="12">
          <sig-card-informacao
            :titulo="'Clientes'"
            :classeTexto="'title'"
            :componentCurrent="component1"
            :dadosGraficoLinha="dadosGraficoLinha"
            :classCard="'pa-3'"
          ></sig-card-informacao>
        </v-col>
        <v-col md="6">
          <sig-card-informacao
            :titulo="'Clientes'"
            :classeTexto="'title'"
            :componentCurrent="component2"
            :dadosGraficoPizza="dadosGraficoPizza"
            :classCard="'pa-3'"
          ></sig-card-informacao>
        </v-col>
        <v-col md="6">
          <sig-card-informacao
            :titulo="'Produtos'"
            :classeTexto="'title'"
            :componentCurrent="component3"
            :dadosGraficoBarra="dadosGraficoBarra"
            :classCard="'pa-3'"
          ></sig-card-informacao>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardInformacao from "@/components/card/CardInformacao";

import TextoCard from "@/components/card/TextoCard";
import GraficoLinha from "@/components/graficos/GraficoLinha";
import GraficoPizza from "@/components/graficos/GraficoPizza";
import GraficoBarra from "@/components/graficos/GraficoBarra";

export default {
  components: {
    "sig-card-informacao": CardInformacao
  },

  data: () => ({
    component: TextoCard,
    component1: GraficoLinha,
    component2: GraficoPizza,
    component3: GraficoBarra,
    subtitulo1: [{ increment: true, value: "500", moeda: false }],
    subtitulo2: [{ increment: true, value: "1000", moeda: false }],
    subtitulo3: [{ increment: true, value: "600", moeda: false }],
    dadosGraficoLinha: {
      id: "graficoLinhaDashChamado",
      height: "65"
    },
    dadosGraficoPizza: {
      id: "graficoPizzaDashChamado"
    },
    dadosGraficoBarra: {
      id: "graficoBarraDashChamado"
    }
  })
};
</script>
