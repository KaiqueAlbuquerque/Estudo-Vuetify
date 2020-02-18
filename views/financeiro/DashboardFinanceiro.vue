<template>
  <div>
    <v-container class="fill-height">
      <div class="parent">
        <sig-card-informacao
          :titulo="'Contas a Receber'"
          :subtitulos="subtitulo1"
          :componentCurrent="component"
          :classeTexto="'title'"
          class="div1"
          :classCard="'pa-3'"
        ></sig-card-informacao>

        <sig-card-informacao
          :titulo="'Contas Recebidas'"
          :subtitulos="subtitulo3"
          :componentCurrent="component"
          :classeTexto="'title'"
          class="div2"
          :classCard="'pa-3'"
        ></sig-card-informacao>

        <sig-card-informacao
          :titulo="'Contas a Receber'"
          :classeTexto="'title'"
          :componentCurrent="component1"
          class="div3"
          :dadosGraficoLinha="dadosGraficoLinha"
          :shaped="true"
          :classCard="'pa-3'"
        ></sig-card-informacao>

        <sig-card-informacao
          :titulo="'Contas a Pagar'"
          :subtitulos="subtitulo2"
          :componentCurrent="component"
          :classeTexto="'title'"
          class="div4"
          :classCard="'pa-3'"
        ></sig-card-informacao>

        <sig-card-informacao
          :titulo="'Contas a Pagar'"
          :subtitulos="subtitulo3"
          :componentCurrent="component"
          :classeTexto="'title'"
          class="div5"
          :classCard="'pa-3'"
        ></sig-card-informacao>

        <sig-card-informacao
          :titulo="'Contas a Pagar'"
          :classeTexto="'title'"
          :componentCurrent="component3"
          class="div6"
          :dadosGraficoBarra="dadosGraficoBarra"
          :shaped="true"
          :classCard="'pa-3'"
        ></sig-card-informacao>

        <sig-card-informacao
          :titulo="'Falta Receber'"
          :subtitulos="subtitulo2"
          :componentCurrent="component"
          :classeTexto="'title'"
          class="div7"
          :classCard="'pa-3'"
        ></sig-card-informacao>

        <sig-card-informacao
          :titulo="'Falta Pagar'"
          :subtitulos="subtitulo3"
          :componentCurrent="component"
          :classeTexto="'title'"
          class="div8"
          :classCard="'pa-3'"
        ></sig-card-informacao>

        <sig-card-informacao
          :titulo="'Vencido à pagar'"
          :subtitulos="subtitulo2"
          :componentCurrent="component"
          :classeTexto="'title'"
          class="div9"
          :classCard="'pa-3'"
        ></sig-card-informacao>

        <sig-card-informacao
          :titulo="'Vencido à receber'"
          :subtitulos="subtitulo3"
          :componentCurrent="component"
          :classeTexto="'title'"
          class="div10"
          :classCard="'pa-3'"
        ></sig-card-informacao>

        <sig-card-informacao
          :titulo="'Saldo Vencimentos'"
          :subtitulos="subtitulo2"
          :componentCurrent="component"
          :classeTexto="'title'"
          class="div11"
          :classCard="'pa-3'"
        ></sig-card-informacao>

        <sig-card-informacao
          :titulo="'Lucro Líquido'"
          :subtitulos="subtitulo3"
          :componentCurrent="component"
          :classeTexto="'title'"
          class="div12"
          :classCard="'pa-3'"
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
      height: "140"
    },
    dadosGraficoPizza: {
      id: "graficoPizzaDashFinanceiro",
      height: "100"
    },
    dadosGraficoBarra: {
      id: "graficoBarraDashFinanceiro",
      height: "140"
    }
  })
};
</script>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(7, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

.div1 {
  grid-area: 2 / 1 / 3 / 2;
}
.div2 {
  grid-area: 3 / 1 / 4 / 2;
}
.div3 {
  grid-area: 2 / 2 / 5 / 5;
}
.div4 {
  grid-area: 5 / 1 / 6 / 2;
}
.div5 {
  grid-area: 6 / 1 / 7 / 2;
}
.div6 {
  grid-area: 5 / 2 / 8 / 5;
}
.div7 {
  grid-area: 4 / 1 / 5 / 2;
}
.div8 {
  grid-area: 7 / 1 / 8 / 2;
}
.div9 {
  grid-area: 1 / 1 / 2 / 2;
}
.div10 {
  grid-area: 1 / 2 / 2 / 3;
}
.div11 {
  grid-area: 1 / 3 / 2 / 4;
}
.div12 {
  grid-area: 1 / 4 / 2 / 5;
}
</style>
