<template>
    <div>
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
                    <v-toolbar-title>Finanças</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>

                    <v-btn color="primary" dark @click="fullDialog = true"
                    >Novo chamado</v-btn
                    >
                </v-toolbar>
                </template>
                <template v-slot:item.action="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
                <v-icon small @click="deleteItem(item)">delete</v-icon>
                </template>
            </v-data-table>
            </v-col>
        </v-row>
        </v-container>
    </div>
</template>