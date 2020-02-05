<template>
  <div>
    <v-container class="fill-height" fluid>
      <v-col md="3">
        <sig-card-informacao
          :cor="'green'"
          :titulo="'A Receber'"
          :subtitulos="subtitulo1"
          :componentCurrent="component"
          :classeTexto="'display-1'"
          :height="'250'"
        ></sig-card-informacao>
      </v-col>      
      <v-col md="3">
        <sig-card-informacao
          :cor="'indigo'"
          :titulo="'Recebido'"
          :subtitulos="subtitulo3"
          :componentCurrent="component"
          :classeTexto="'display-1'"
          :height="'250'"
        ></sig-card-informacao>
      </v-col>
      <v-col md="3">
        <sig-card-informacao
          :cor="'red'"
          :titulo="'A Pagar'"
          :subtitulos="subtitulo2"
          :componentCurrent="component"
          :classeTexto="'display-1'"
          :height="'250'"
        ></sig-card-informacao>
      </v-col>
      <v-col md="3">
        <sig-card-informacao
          :cor="'blue lighten-3'"
          :titulo="'Pago'"
          :subtitulos="subtitulo3"
          :componentCurrent="component"
          :classeTexto="'display-1'"
          :height="'250'"
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
