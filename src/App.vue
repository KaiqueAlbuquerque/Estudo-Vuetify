<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped>
      <meu-menu :nodes="nodes"></meu-menu>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>SIG</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col>
            <v-data-table
              :headers="headers"
              :items="desserts"
              sort-by="calories"
              class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar flat>
                  <v-toolbar-title>Chamados</v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-spacer></v-spacer>

                  <v-btn color="primary" dark @click="fullDialog=true">Novo chamado</v-btn>
                </v-toolbar>
              </template>
              <template v-slot:item.action="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
                <v-icon small @click="deleteItem(item)">delete</v-icon>
              </template>
              <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>

    <v-navigation-drawer
      v-model="drawerRight"
      fixed
      right
      width="800"
    >  
      <v-toolbar
        color="indigo"
        flat
        dense
      >
        <v-tooltip left>
            <template v-slot:activator="{ on }">
                <v-btn icon @click.stop="drawerRight = !drawerRight">
                  <v-icon v-on="on" v-animate-css.hover="'rubberBand'">mdi-keyboard-backspace</v-icon>
                </v-btn>
            </template>
            <span>Voltar</span>
        </v-tooltip>

        <v-toolbar-title>Detalhes do chamado</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-tooltip left>
            <template v-slot:activator="{ on }">
                <v-btn icon>
                  <v-icon v-on="on" v-animate-css.hover="'rubberBand'">mdi-magnify</v-icon>
                </v-btn>
            </template>
            <span>Procurar</span>
        </v-tooltip>

        <v-tooltip left>
            <template v-slot:activator="{ on }">
                <v-btn icon @click.stop="sheet = !sheet">
                  <v-icon v-on="on" v-animate-css.hover="'rubberBand'">mdi-plus</v-icon>
                </v-btn>
            </template>
            <span>Nova interação</span>
        </v-tooltip>
      
        <template v-slot:extension>
          <v-tabs
            v-model="tab"
            background-color="indigo"
            color="white"
            grow
          >
            <v-tab href="#tab-1">
              Dados do chamado
            </v-tab>
            <v-tab href="#tab-2">
              Interações
            </v-tab>          
          </v-tabs>
        </template>
        
        </v-toolbar>

        <v-tabs-items v-model="tab">
          <v-tab-item
            key="1"
            value="tab-1"
          >
            
          </v-tab-item>

          <v-tab-item
            key="2"
            value="tab-2"
          >
            <div class="d-flex flex-row-reverse">
              <v-card
                max-width="500"
                :elevation="24"
                :shaped="true"
                style="margin-top:20px; margin-right: 10px;"
              >
                <v-card-title>
                  <v-icon
                    left
                  >
                    mdi-twitter
                  </v-icon>
                  <span class="title font-weight-light">LWM</span>
                </v-card-title>

                <v-card-text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </v-card-text>

                <v-card-actions>
                  <v-list-item class="grow">
                    <v-list-item-avatar color="grey darken-3">
                      <v-img
                        class="elevation-6"
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                      ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Kaique Albuquerque</v-list-item-title>
                    </v-list-item-content>

                    <v-row
                      align="center"
                      justify="end"
                    >
                      <v-btn icon @click="sheet = !sheet">
                        <v-icon class="mr-1">edit</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon class="mr-1">delete</v-icon>
                      </v-btn>
                    </v-row>
                  </v-list-item>
                </v-card-actions>
              </v-card>
            </div>
            <div>
              <v-card
                max-width="500"
                :elevation="24"
                :shaped="true"
                style="margin-top:20px; margin-left: 10px;"
              >
                <v-card-title>
                  <v-icon
                    left
                  >
                    mdi-twitter
                  </v-icon>
                  <span class="title font-weight-light">LWM</span>
                </v-card-title>

                <v-card-text>
                  "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
                </v-card-text>

                <v-card-actions>
                  <v-list-item class="grow">
                    <v-list-item-avatar color="grey darken-3">
                      <v-img
                        class="elevation-6"
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                      ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Kaique Albuquerque</v-list-item-title>
                    </v-list-item-content>

                    <v-row
                      align="center"
                      justify="end"
                    >
                      <v-btn icon @click="sheet = !sheet">
                        <v-icon class="mr-1">edit</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon class="mr-1">delete</v-icon>
                      </v-btn>
                    </v-row>
                  </v-list-item>
                </v-card-actions>
              </v-card>
            </div>
            <div class="d-flex flex-row-reverse">
              <v-card
                max-width="500"
                :elevation="24"
                :shaped="true"
                style="margin-top:20px; margin-right: 10px;"
              >
                <v-card-title>
                  <v-icon
                    left
                  >
                    mdi-twitter
                  </v-icon>
                  <span class="title font-weight-light">LWM</span>
                </v-card-title>

                <v-card-text>
                  "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
                </v-card-text>

                <v-card-actions>
                  <v-list-item class="grow">
                    <v-list-item-avatar color="grey darken-3">
                      <v-img
                        class="elevation-6"
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                      ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Kaique Albuquerque</v-list-item-title>
                    </v-list-item-content>

                    <v-row
                      align="center"
                      justify="end"
                    >
                      <v-btn icon @click="sheet = !sheet">
                        <v-icon class="mr-1">edit</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon class="mr-1">delete</v-icon>
                      </v-btn>
                    </v-row>
                  </v-list-item>
                </v-card-actions>
              </v-card>
            </div>
            <div class="d-flex flex-row-reverse">
              <v-card
                max-width="500"
                :elevation="24"
                :shaped="true"
                style="margin-top:20px; margin-right: 10px; margin-bottom: 10px;"
              >
                <v-card-title>
                  <v-icon
                    left
                  >
                    mdi-twitter
                  </v-icon>
                  <span class="title font-weight-light">LWM</span>
                </v-card-title>

                <v-card-text>
                  "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
                </v-card-text>

                <v-card-actions>
                  <v-list-item class="grow">
                    <v-list-item-avatar color="grey darken-3">
                      <v-img
                        class="elevation-6"
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                      ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Kaique Albuquerque</v-list-item-title>
                    </v-list-item-content>

                    <v-row
                      align="center"
                      justify="end"
                    >
                      <v-btn icon @click="sheet = !sheet">
                        <v-icon class="mr-1">edit</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon class="mr-1">delete</v-icon>
                      </v-btn>
                    </v-row>
                  </v-list-item>
                </v-card-actions>
              </v-card>
            </div>
          </v-tab-item>
        </v-tabs-items>
    </v-navigation-drawer>

    <v-dialog v-model="fullDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="fullDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Novo Chamado</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="fullDialog = false">Salvar</v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-stepper v-model="e6" vertical>
          <v-stepper-step :complete="e6 > 1" step="1">
            Dados do Chamado
            <small>Preencha os dados do chamado</small>
          </v-stepper-step>
          <v-stepper-content step="1">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field v-model="name" :counter="100" :rules="nameRules" label="Name" required></v-text-field>

              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

              <v-select
                v-model="select"
                :items="items"
                :rules="[v => !!v || 'Item is required']"
                label="Item"
                required
              ></v-select>

              <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
              ></v-checkbox>
            </v-form>
            <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 2" step="2">Iterações</v-stepper-step>

          <v-stepper-content step="2">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
            <v-btn text @click="e6 = 1">Voltar</v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-card>
    </v-dialog>

    <template>
      <div class="text-center">
        <v-bottom-sheet v-model="sheet" persistent>
          <v-sheet class="text-center" height="200px">
            <v-container fluid>
              <v-textarea
                label="Informe a sua interação"
                no-resize
                rows="3"
                :value="value"
              ></v-textarea>
            </v-container>
            <div class="d-flex flex-row-reverse">
              <v-btn
                style="margin-left:10px;margin-right:10px"
                class="mt-6"
                flat
                color="error"
                @click="sheet = !sheet"
                v-animate-css.hover="'jello'"
              >cancelar</v-btn>
              <v-btn
                class="mt-6"
                flat
                color="info"
                @click="sheet = !sheet"
                v-animate-css.hover="'jello'"
              >salvar</v-btn>
            </div>
          </v-sheet>
        </v-bottom-sheet>
      </div>
    </template>
  </v-app>
</template>

<script>

import Menu from '../src/components/Menu';

export default {
  components: {
    'meu-menu': Menu
  },

  props: {
    source: String
  },
  data: () => ({
    tab: null,
    sheet: false,
    snack: false,
    snackColor: '',
    snackText: '',
    headers2: [
      { text: 'Data', sortable: false, value: 'data' },
      { text: 'Interação', sortable: false,  value: 'interacao' },
    ],
    desserts2: [
      {
        data: 'Frozen Yogurt',
        interacao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },  
      {
        data: 'Frozen Yogurt',
        interacao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },
      {
        data: 'Frozen Yogurt',
        interacao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },  
      {
        data: 'Frozen Yogurt',
        interacao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },  
      {
        data: 'Frozen Yogurt',
        interacao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },  
      {
        data: 'Frozen Yogurt',
        interacao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },  
      {
        data: 'Frozen Yogurt',
        interacao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },  
      {
        data: 'Frozen Yogurt',
        interacao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },  
      {
        data: 'Frozen Yogurt',
        interacao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      },        
    ],
    
    nodes: [
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
    e6: 1,
    drawer: null,
    drawerRight: false,
    dialog: false,
    fullDialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    headers: [
      {
        text: "Dessert (100g serving)",
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Actions", value: "action", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    (this.$vuetify.theme.dark = true), this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.drawerRight = !this.drawerRight;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.drawerRight = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },

    save2 () {
      this.snack = true
      this.snackColor = 'success'
      this.snackText = 'Data saved'
    },
    cancel2 () {
      this.snack = true
      this.snackColor = 'error'
      this.snackText = 'Canceled'
    },
    close2 () {
      console.log('Dialog closed')
    },
  }
};
</script>