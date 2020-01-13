<template>
    <v-navigation-drawer
        v-model="drawerRight"
        fixed
        right
        width="800"
    > 
        <slot>

        </slot>
    </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState({
            drawerRight: state => state.drawerRight
        }),
    },
}
</script>