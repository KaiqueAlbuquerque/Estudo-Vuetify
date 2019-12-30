<template>
    <v-list>
        <template v-for='(node, i) in nodes'>
            <v-list-group v-if='node.children && node.children.length' v-model='node.active' :key="i">
                <v-list-tile slot='activator' class="v-list-item__title">
                    <v-tooltip right>
                        <template v-slot:activator="{ on }">
                            <v-icon v-on="on" class="mr-2" v-animate-css.hover="'rubberBand'" v-text="node.icon"></v-icon>
                        </template>
                        <span>{{node.text}}</span>
                    </v-tooltip>
                    <v-list-tile-title>{{node.text}}</v-list-tile-title>
                </v-list-tile>
                <node-list class='py-0 pl-6' :nodes='node.children'/>
            </v-list-group>            
            <v-list-item v-else :key="i" class="v-list-item--link">
                <v-tooltip right>
                    <template v-slot:activator="{ on }">
                        <v-icon v-on="on" class="mr-2" v-animate-css.hover="'rubberBand'" v-text="node.icon"></v-icon>
                    </template>
                    <span>{{node.text}}</span>
                </v-tooltip>
                <v-list-item-content>
                    <v-list-tile-title v-text="node.text"></v-list-tile-title>
                </v-list-item-content>
            </v-list-item> 
        </template>
    </v-list>
</template>

<script>
export default {
    name: 'node-list',
    props: ['nodes'],
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