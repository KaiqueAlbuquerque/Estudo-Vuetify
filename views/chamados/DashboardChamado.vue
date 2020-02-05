<template>
  <div>
    <v-container class="fill-height" fluid>
      <v-col md="4">
        <sig-card-informacao
          :cor="'indigo'"
          :titulo="'Novos Chamados'"
          :subtitulos="subtitulo1"
          :icone="'mdi-plus'"
          :componentCurrent="component"
          :shaped="true"
          :classeTexto="'display-1'"
          :height="'200'"
        ></sig-card-informacao>
      </v-col>
      <v-col md="4">
        <sig-card-informacao
          :cor="'green'"
          :titulo="'Em Atendimento'"
          :subtitulos="subtitulo2"
          :icone="'mdi-ticket'"
          :componentCurrent="component"
          :shaped="true"
          :classeTexto="'display-1'"
          :height="'200'"
        ></sig-card-informacao>
      </v-col>
      <v-col md="4">
        <sig-card-informacao
          :cor="'red'"
          :titulo="'Chamados Finalizados'"
          :subtitulos="subtitulo3"
          :icone="'mdi-check-all'"
          :componentCurrent="component"
          :shaped="true"
          :classeTexto="'display-1'"
          :height="'200'"
        ></sig-card-informacao>
      </v-col>
      <v-col md="12">
        <sig-card-informacao
          :titulo="'Finalizados'"
          :classeTexto="'display-1'"
          :cor="'red'"
          :componentCurrent="component1"
        ></sig-card-informacao>
      </v-col>
      <v-col md="6">
        <sig-card-informacao
          :titulo="'Clientes'"
          :classeTexto="'display-1'"
          :cor="'indigo'"
          :componentCurrent="component2"
        ></sig-card-informacao>
      </v-col>
      <v-col md="6">
        <sig-card-informacao
          :titulo="'Produtos'"
          :classeTexto="'display-1'"
          :cor="'green'"
          :componentCurrent="component3"
        ></sig-card-informacao>
      </v-col>
    </v-container>
  </div>
</template>

<script>
import CardInformacao from "../../src/components/card/CardInformacao";

import TextoCard from "../../src/components/card/TextoCard";
import GraficoLinha from "../../src/components/graficos/GraficoLinha";
import GraficoPizza from "../../src/components/graficos/GraficoPizza";
import GraficoBarra from "../../src/components/graficos/GraficoBarra";

export default {
  components: {
    "sig-card-informacao": CardInformacao
  },

  data: () => ({
    component: TextoCard,
    component1: GraficoLinha,
    component2: GraficoPizza,
    component3: GraficoBarra,
    subtitulo1: [{ increment: true, value: "500" }],
    subtitulo2: [{ increment: true, value: "1000" }],
    subtitulo3: [{ increment: true, value: "600" }]
  })
};
</script>
