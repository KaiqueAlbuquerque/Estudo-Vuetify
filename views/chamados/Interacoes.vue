<template>
    <div>
        <v-toolbar
            color="indigo"
            flat
            dense
            class="cabecalho"
        >
            <sig-botaoTooltip :posicao="posicao" 
                              :click="toggleDrawerRight"
                              :animacao="'rubberBand'" 
                              :icone="'mdi-keyboard-backspace'"
                              :texto="'Voltar'">
            </sig-botaoTooltip>

            <v-toolbar-title>Detalhes do chamado</v-toolbar-title>

            <v-spacer></v-spacer>

            <sig-botaoTooltip :posicao="posicao" 
                              :animacao="'rubberBand'" 
                              :icone="'mdi-magnify'"
                              :texto="'Procurar'">
            </sig-botaoTooltip>
        
            <sig-botaoTooltip :posicao="posicao" 
                              :click="toggleSheet"
                              :animacao="'rubberBand'" 
                              :icone="'mdi-plus'"
                              :texto="'Nova interação'">
            </sig-botaoTooltip>

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
                        style="margin-top:120px; margin-right: 10px;"
                    >
                        <v-card-title>
                            <v-icon left>mdi-twitter</v-icon>
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
                                    <v-btn icon @click="toggleSheet">
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
                            <v-icon left>mdi-twitter</v-icon>
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
                                    <v-btn icon @click="toggleSheet">
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
                            <v-icon left>mdi-twitter</v-icon>
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
                                    <v-btn icon @click="toggleSheet">
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
                            <v-icon left>mdi-twitter</v-icon>
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
                                    <v-btn icon @click="toggleSheet">
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
    </div>
</template>

<script>
import BotaoTooltip from '../../src/components/BotaoTooltip';
import { mapMutations } from 'vuex';

export default {    
    components: {
        "sig-botaoTooltip": BotaoTooltip
    },
    
    data: () => ({
        tab: null,
        posicao: {
            left: true,
            right: false,
            top: false,
            bottom: false
        }
    }),

    methods: {
        ...mapMutations([
            'toggleDrawerRight',
            'toggleSheet'
        ]),
    }
}
</script>

<style>
.cabecalho{
    position: absolute;
    z-index: 1;
    left: 0px;
    right: 0px;
}
</style>