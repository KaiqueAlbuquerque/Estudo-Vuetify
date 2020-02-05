<template>
  <v-app v-resize="onResize">
    <v-navigation-drawer v-model="drawer" app clipped>
      <sig-menu :menus="menus"></sig-menu>
    </v-navigation-drawer>

    <v-app-bar :color="cor" dark app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>SIG</v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="header-icons">
        <sig-menuSair :innerWidth="innerWidth" />
      </div>
    </v-app-bar>

    <v-content>
      <transition name="pagina">
        <router-view></router-view>
      </transition>
    </v-content>

    <v-footer :color="cor" dark app>
      <span>&copy; LWM 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import Menu from "../src/components/menu/Menu";
import MenuSair from "../src/components/menu/MenuSair";

import { mapGetters } from "vuex";

export default {
  components: {
    "sig-menu": Menu,
    "sig-menuSair": MenuSair
  },

  computed: {
    ...mapGetters(["cor"])
  },

  data: () => ({
    innerWidth: 0,
    menus: [
      {
        icon: "mdi-home",
        text: "Home",
        children: [],
        name: "/chamados/home"
      },
      {
        icon: "attach_money",
        text: "Financeiro",
        children: [
          {
            icon: "assessment",
            text: "Dashboard",
            children: [],
            name: "/financeiro/dashboard"
          },
          {
            icon: "call_received",
            text: "Centro de custos",
            children: [],
            name: "/financeiro/home"
          },
          {
            icon: "call_made",
            text: "Centro de lucros",
            children: [],
            name: ""
          },
          {
            icon: "trending_up",
            text: "Para receber",
            children: [],
            name: ""
          },
          {
            icon: "trending_down",
            text: "Para pagar",
            children: [],
            name: ""
          }
        ]
      },
      {
        icon: "phone",
        text: "Atendimento",
        children: [
          {
            icon: "assessment",
            text: "Dashboard",
            children: [],
            name: "/chamados/dashboard"
          },
          {
            icon: "mdi-ticket",
            text: "Gerenciar atendimentos",
            children: [],
            name: "/chamados/home"
          },
          {
            icon: "add",
            text: "Novo atendimento",
            children: [],
            name: "/chamados/novo"
          }
        ]
      },
      {
        icon: "business_center",
        text: "Vendas",
        children: [
          {
            icon: "assessment",
            text: "Gerenciar vendas",
            children: [],
            name: ""
          },
          {
            icon: "add",
            text: "Nova venda",
            children: [],
            name: ""
          }
        ]
      }
    ],
    drawer: null
  }),

  mounted() {
    this.onResize();
  },

  methods: {
    onResize() {
      this.innerWidth = window.innerWidth;
    }
  }
};
</script>

<style>
.pagina-enter,
.pagina-leave-active {
  opacity: 0;
}
.pagina-leave-active {
  transition: opacity 0.2s;
}
.pagina-enter-active {
  transition: opacity 2s;
}
</style>
