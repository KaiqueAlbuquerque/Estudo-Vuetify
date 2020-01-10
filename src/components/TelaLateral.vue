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
export default {
    props: ['drawerRight'],
}
</script>