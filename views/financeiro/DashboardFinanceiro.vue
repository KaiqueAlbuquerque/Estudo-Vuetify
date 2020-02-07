<template>
  <div>
    <v-container class="fill-height">
      <div class="parent">
        <sig-card-informacao
          :cor="'green darken-4'"
          :titulo="'A Receber'"
          :subtitulos="subtitulo1"
          :componentCurrent="component"
          :classeTexto="'display-1'"
          class="div1"
          :shaped="true"
        ></sig-card-informacao>

        <sig-card-informacao
          :cor="'green accent-4'"
          :titulo="'Recebido'"
          :subtitulos="subtitulo3"
          :componentCurrent="component"
          :classeTexto="'display-1'"
          class="div2"
          :shaped="true"
        ></sig-card-informacao>

        <sig-card-informacao
          :titulo="'Finalizados'"
          :classeTexto="'display-1'"
          :cor="'green'"
          :componentCurrent="component1"
          class="div3"
          :dadosGraficoLinha="dadosGraficoLinha"
          :shaped="true"
        ></sig-card-informacao>

        <sig-card-informacao
          :cor="'red darken-4'"
          :titulo="'A Pagar'"
          :subtitulos="subtitulo2"
          :componentCurrent="component"
          :classeTexto="'display-1'"
          class="div4"
          :shaped="true"
        ></sig-card-informacao>

        <sig-card-informacao
          :cor="'red accent-2'"
          :titulo="'Pago'"
          :subtitulos="subtitulo3"
          :componentCurrent="component"
          :classeTexto="'display-1'"
          class="div5"
          :shaped="true"
        ></sig-card-informacao>

        <sig-card-informacao
          :titulo="'Produtos'"
          :classeTexto="'display-1'"
          :cor="'red'"
          :componentCurrent="component3"
          class="div6"
          :dadosGraficoBarra="dadosGraficoBarra"
          :shaped="true"
        ></sig-card-informacao>
      </div>
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
    subtitulo1: [{ increment: true, value: "500", moeda: true }],
    subtitulo2: [{ increment: true, value: "1000", moeda: true }],
    subtitulo3: [{ increment: true, value: "600", moeda: true }],
    dadosGraficoLinha: {
      id: "graficoLinhaDashFinanceiro",
      height: "100"
    },
    dadosGraficoPizza: {
      id: "graficoPizzaDashFinanceiro",
      height: "100"
    },
    dadosGraficoBarra: {
      id: "graficoBarraDashFinanceiro",
      height: "100"
    }
  })
};
</script>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

.div1 {
  grid-area: 1 / 1 / 2 / 2;
}
.div2 {
  grid-area: 2 / 1 / 3 / 2;
}
.div3 {
  grid-area: 1 / 2 / 3 / 5;
}
.div4 {
  grid-area: 3 / 1 / 4 / 2;
}
.div5 {
  grid-area: 4 / 1 / 5 / 2;
}
.div6 {
  grid-area: 3 / 2 / 5 / 5;
}
</style>
