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
        </v-col>
        <v-divider vertical></v-divider>

        <v-col class="d-flex text-center">
          <v-scroll-y-transition mode="out-in">
            <div
              v-if="!selected"
              class="title grey--text text--lighten-1 font-weight-light"
              style="align-self: center;"
            ></div>
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      value="John Doe"
                      label="Regular"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      value="John Doe"
                      label="Regular"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      value="John Doe"
                      label="Solo"
                      solo
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      value="John Doe"
                      label="Solo"
                      solo
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      value="John Doe"
                      label="Filled"
                      filled
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      value="John Doe"
                      label="Filled"
                      filled
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      value="John Doe"
                      label="Outlined"
                      outlined
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-text-field
                      value="John Doe"
                      label="Outlined"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-scroll-y-transition>
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
  </div>
</template>

<script>
export default {
  data: () => ({
    selected: true,
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
          }
        ]
      }
    ],
    showMenu: false,
    x: 0,
    y: 0,
    menuItems: ["Adicionar Filho", "Adicionar Irmão"]
  }),
  methods: {
    clickAction(e) {
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
