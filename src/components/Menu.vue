<template>
    <v-list>
        <template v-for='(menu, i) in menus'>
            <v-list-group v-if='menu.children && menu.children.length' v-model='menu.active' :key="i">
                <v-list-tile slot='activator' class="v-list-item__title">
                    <v-tooltip right>
                        <template v-slot:activator="{ on }">
                            <v-icon v-on="on" class="mr-2" v-animate-css.hover="'rubberBand'" v-text="menu.icon"></v-icon>
                        </template>
                        <span>{{menu.text}}</span>
                    </v-tooltip>
                    <v-list-tile-title>{{menu.text}}</v-list-tile-title>
                </v-list-tile>
                <menu-list class='py-0 pl-6' :menus='menu.children'/>
            </v-list-group>            
            <v-list-item v-else :key="i" class="v-list-item--link" @click="$router.push({path: menu.name})">
                <v-tooltip right>
                    <template v-slot:activator="{ on }">
                        <v-icon v-on="on" class="mr-2" v-animate-css.hover="'rubberBand'" v-text="menu.icon"></v-icon>
                    </template>
                    <span>{{menu.text}}</span>
                </v-tooltip>
                <v-list-item-content>
                    <v-list-tile-title v-text="menu.text"></v-list-tile-title>
                </v-list-item-content>
            </v-list-item> 
        </template>
    </v-list>
</template>

<script>
export default {
    name: 'menu-list',
    props: ['menus'],
}
</script>

<style scoped>
.v-list-item__title {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 100%;
    flex: 1 1 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>