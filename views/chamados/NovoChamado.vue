<template>
  <v-dialog v-model="fullDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="$emit('FullDialog')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Novo Chamado</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="$emit('FullDialog')">Salvar</v-btn>
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
</template>

<script>
export default {
    props: ["fullDialog"],

    data: () => ({
        e6: 1,
    })
}
</script>