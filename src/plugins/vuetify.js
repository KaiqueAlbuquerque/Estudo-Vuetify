import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueI18n from 'vue-i18n';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);
Vue.use(VueI18n);

const messages = {
  pt: {
    $vuetify: {
      badge: 'Distintivo',
      close: 'Fechar',
      dataIterator: {
        pageText: '{0}-{1} de {2}',
        noResultsText: 'Nenhum dado encontrado',
        loadingText: 'Carregando itens...'
      },
      dataTable: {
        itemsPerPageText: 'Linhas por página:',
        ariaLabel: {
          sortDescending: ': Ordenado decrescente. Ative para remover a ordenação.',
          sortAscending: ': Ordenado crescente. Ative para ordenar decrescente.',
          sortNone: ': Não ordenado. Ative para ordenar crescente.'
        },
        sortBy: 'Ordenar por'
      },
      dataFooter: {
        itemsPerPageText: 'Itens por página:',
        itemsPerPageAll: 'Todos',
        nextPage: 'Próxima página',
        prevPage: 'Página anterior',
        firstPage: 'Primeira página',
        lastPage: 'Última página',
        pageText: '{0}-{1} de {2}'
      },
      datePicker: {
        itemsSelected: '{0} selecionado(s)',
        lastPage: 'Última página'
      },
      noDataText: 'Não há dados disponíveis',
      carousel: {
        prev: 'Visão anterior',
        next: 'Próxima visão',
        ariaLabel: {
          delimiter: 'Slide {0} de {1} do carrossel'
        }
      },
      calendar: {
        moreEvents: 'Mais {0}'
      },
      fileInput: {
        counter: '{0} arquivo(s)',
        counterSize: '{0} arquivo(s) ({1} no total)'
      },
      timePicker: {
        am: 'AM',
        pm: 'PM'
      }
    }
  }
};

const i18n = new VueI18n({
  locale: 'pt',
  messages
});

export default new Vuetify({
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  },
  theme: {
    themes: {
      light: {
        primary: colors.blue.darken3
      },
      dark: {
        primary: colors.orange.darken1
      }
    },
    options: {
      customProperties: true
    }
  },
  icons: {
    iconfont: 'md'
  }
});
