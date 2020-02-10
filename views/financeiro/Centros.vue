<template>
  <div>
    <v-card>
      <v-layout align-center justify-space-between>
        <div style="margin-left:10px;">
          <h1 v-if="bottomNav == 0">Centro de Custo</h1>

          <h1 v-else>Centro de Lucro</h1>
        </div>
        <div style="margin-right:20px;">
          <sig-botaoTooltip
            :posicao="posicao"
            :click="changeListTrue"
            :animacao="'rubberBand'"
            :icone="'mdi-table'"
            :texto="'Tabela'"
          >
          </sig-botaoTooltip>
          <sig-botaoTooltip
            :posicao="posicao"
            :click="changeListFalse"
            :animacao="'rubberBand'"
            :icone="'mdi-crop-square'"
            :texto="'Card'"
          >
          </sig-botaoTooltip>
        </div>
      </v-layout>
    </v-card>

    <div v-if="bottomNav == 0">
      <v-treeview
        v-model="tree"
        :open="open"
        :items="items"
        activatable
        item-key="name"
        open-on-click
      >
        <template v-slot:prepend="{ item, open }">
          <v-icon v-if="!item.file">
            {{ open ? "mdi-folder-open" : "mdi-folder" }}
          </v-icon>
          <v-icon v-else>
            {{ files[item.file] }}
          </v-icon>
        </template>
      </v-treeview>
    </div>

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
  data() {
    return {
      bottomNav: 0,
      open: ["public"],
      files: {
        html: "mdi-language-html5",
        js: "mdi-nodejs",
        json: "mdi-json",
        md: "mdi-markdown",
        pdf: "mdi-file-pdf",
        png: "mdi-file-image",
        txt: "mdi-file-document-outline",
        xls: "mdi-file-excel"
      },
      tree: [],
      items: [
        {
          name: ".git"
        },
        {
          name: "node_modules"
        },
        {
          name: "public",
          children: [
            {
              name: "static",
              children: [
                {
                  name: "logo.png",
                  file: "png"
                }
              ]
            },
            {
              name: "favicon.ico",
              file: "png"
            },
            {
              name: "index.html",
              file: "html"
            }
          ]
        },
        {
          name: ".gitignore",
          file: "txt"
        },
        {
          name: "babel.config.js",
          file: "js"
        },
        {
          name: "package.json",
          file: "json"
        },
        {
          name: "README.md",
          file: "md"
        },
        {
          name: "vue.config.js",
          file: "js"
        },
        {
          name: "yarn.lock",
          file: "txt"
        }
      ]
    };
  }
};
</script>
