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
                    @click="toggleSheet"
                    v-animate-css.hover="'rubberBand'"
                >cancelar</v-btn>
                <v-btn
                    class="mt-6"
                    flat
                    color="info"
                    @click="toggleSheet"
                    v-animate-css.hover="'rubberBand'"
                >salvar</v-btn>
            </div>
            </v-sheet>
        </v-bottom-sheet>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'sheet'
        ])
    },
    
    methods: {
        ...mapMutations([
            'toggleSheet'
        ]),
    }
}
</script>