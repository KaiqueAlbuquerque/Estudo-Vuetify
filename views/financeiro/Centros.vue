<template>
  <div>
    <v-card>
      <v-layout align-center justify-space-between>
        <div style="margin-left:10px;">
          <h1 v-if="bottomNav == 0">Centro de Custo</h1>
          <h1 v-else>Centro de Lucro</h1>
        </div>
      </v-layout>
    </v-card>

    <v-container v-if="bottomNav == 0" style="padding-bottom: 60px;">
      <v-row>
        <v-col md="6">
          <v-treeview
            v-model="tree"
            :open="open"
            :items="items"
            item-key="name"
            open-on-click
            dense
          >
            <template v-slot:label="{ item, open }">
              <v-btn text @contextmenu="show" :id="item.name">
                <!--button icon-->
                <v-icon v-if="!item.filho" :id="item.name">
                  {{ open ? "mdi-folder-open" : "mdi-folder" }}
                </v-icon>
                <!--button text-->
                <span :id="item.name">{{ item.name }}</span>
              </v-btn>
            </template>
          </v-treeview>
          <v-menu
            v-model="showMenu"
              :position-x="x"
              :position-y="y"
              absolute
              offset-y
          >
            <v-list rounded dense>
              <v-subheader>Ações</v-subheader>
              <v-list-item
                v-for="menuItem in menuItems"
                :key="menuItem"
                @click="clickAction(menuItem)"
              >
                <v-list-item-content>{{ menuItem }}</v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-else style="padding-bottom: 60px;">
      <v-row>
        <v-col md="6">
          <v-treeview
            v-model="tree"
            :open="open"
            :items="items"
            item-key="name"
            open-on-click
            dense
          >
            <template v-slot:label="{ item, open }">
              <v-btn text @contextmenu="show" :id="item.name">
                <!--button icon-->
                <v-icon v-if="!item.filho" :id="item.name">
                  {{ open ? "mdi-folder-open" : "mdi-folder" }}
                </v-icon>
                <!--button text-->
                <span :id="item.name">{{ item.name }}</span>
              </v-btn>
            </template>
          </v-treeview>
          <v-menu
            v-model="showMenu"
              :position-x="x"
              :position-y="y"
              absolute
              offset-y
          >
            <v-list rounded dense>
              <v-subheader>Ações</v-subheader>
              <v-list-item
                v-for="menuItem in menuItems"
                :key="menuItem"
                @click="clickAction(menuItem)"
              >
                <v-list-item-content>{{ menuItem }}</v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>

    <v-bottom-navigation v-model="bottomNav" absolute>
      <v-btn>
        <span>Custos</span>
        <v-icon>call_received</v-icon>
      </v-btn>

      <v-btn>
        <span>Lucro</span>
        <v-icon>call_made</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  data: () => ({
    atual: "",
    bottomNav: 0,
    open: ["public"],
    tree: [],
    items: [
      {
        name: "Moradia",
        children: [
          {
            name: "Aluguel",
            filho: true
          },
          {
            name: "Água",
            filho: true
          },
          {
            name: "Luz",
            filho: true
          },
          {
            name: "IPTU",
            filho: true
          }
        ]
      },
      {
        name: "Veículos",
        children: [
          {
            name: "Combustível",
            filho: true
          },
          {
            name: "IPVA",
            filho: true
          },
          {
            name: "Seguro",
            filho: true
          }
        ]
      },
      {
        name: "Funcionários",
        children: [
          {
            name: "Impostos",
            children: [
              {
                name: "INSS",
                filho: true
              },
              {
                name: "FGTS",
                filho: true
              }
            ]
          },
          {
            name: "Folha de Pagamento",
            children: [
              {
                name: "Pagamento",
                filho: true
              },
              {
                name: "13º",
                filho: true
              },
              {
                name: "Férias",
                filho: true
              }
            ]
          },
        ]
      },
    ],
    showMenu: false,
    x: 0,
    y: 0,
    menuItems: ["Adicionar Filho", "Adicionar Irmão"]
  }),
  methods: {
    clickAction(e){
      alert(e);
      alert(this.atual);
    },
    show(e) {
      this.atual = e.target.id;
      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(() => {
        this.showMenu = true;
      });
    }
  }
};
</script>
