<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped>
      <sig-menu :menus="menus"></sig-menu>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>SIG</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app>
      <span>&copy; LWM 2020</span>
    </v-footer>
  </v-app>
</template>

<script>

import Menu from '../src/components/Menu';

export default {
  components: {
    'sig-menu': Menu
  },

  data: () => ({
    menus: [
      {
        icon: "mdi-home",
        text: "Home",
        children: []
      },
      {
        icon: "attach_money",
        text: "Financeiro",
        children: [
          {
            icon: "call_received",
            text: "Contas a pagar",
            children: [
              {
                icon: "bar_chart",
                text: "Centro de custos",
                children: []
              },
              {
                icon: "timeline",
                text: "Para receber",
                children: []
              }
            ]
          },
          {
            icon: "call_made",
            text: "Contas a receber",
            children: [
              {
                icon: "bar_chart",
                text: "Centro de lucros",
                children: []
              },
              {
                icon: "timeline",
                text: "Para pagar",
                children: []
              }
            ]
          },
        ]
      },
      {
        icon: "phone",
        text: "Atendimento",
        children: [
          {
            icon: "assessment",
            text: "Gerenciar atendimentos",
            children: []
          },
          {
            icon: "add",
            text: "Novo atendimento",
            children: []
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
            children: []
          },
          {
            icon: "add",
            text: "Nova venda",
            children: []
          }
        ]
      }
    ],
    drawer: null,
  }),

  created() {
    this.$vuetify.theme.dark = true
  },
};
</script>