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
            <v-form v-else>
              <v-container>
                <v-row>
                  <v-col class="d-flex" cols="6" sm="6">
                    <v-select
                      :items="itemsTipoCentro"
                      label="Tipo do centro"
                      outlined
                    ></v-select>
                  </v-col>

                  <v-col class="d-flex" cols="12" sm="6">
                    <v-select
                      :items="itemsSelect"
                      label="Pai"
                      outlined
                    ></v-select>
                  </v-col>

                  <v-col cols="12" sm="12">
                    <v-text-field
                      value=""
                      label="Nome Centro"
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

        <v-divider vertical></v-divider>

        <v-col class="d-flex text-center">
          <v-scroll-y-transition mode="out-in">
            <div
              v-if="!selected"
              class="title grey--text text--lighten-1 font-weight-light"
              style="align-self: center;"
            ></div>
            <v-form v-else>
              <v-container>
                <v-row>
                  <v-col class="d-flex" cols="6" sm="6">
                    <v-select
                      :items="itemsTipoCentro"
                      label="Tipo do centro"
                      outlined
                    ></v-select>
                  </v-col>

                  <v-col class="d-flex" cols="12" sm="6">
                    <v-select
                      :items="itemsSelect"
                      label="Pai"
                      outlined
                    ></v-select>
                  </v-col>

                  <v-col cols="12" sm="12">
                    <v-text-field
                      value=""
                      label="Nome Centro"
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
          @click="clickAction(menuItem.name)"
        >
          <v-icon>{{ menuItem.icon }}</v-icon>
          <v-list-item-content style="margin-left: 10px;">{{
            menuItem.name
          }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    selected: false,
    atual: "",
    bottomNav: 0,
    itemsSelect: ["Foo", "Bar", "Fizz", "Buzz"],
    itemsTipoCentro: ["Custo", "Lucro"],
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
    menuItems: [
      {
        name: "Editar",
        icon: "create"
      },
      {
        name: "Adicionar",
        icon: "add"
      }
    ]
  }),
  methods: {
    clickAction(e) {
      alert(e);
      alert(this.atual);
      this.selected = true;
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
