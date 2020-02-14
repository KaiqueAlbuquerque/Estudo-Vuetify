<template>
  <v-layout class="user-info" id="icon-user-info" v-if="user">
    <v-menu
      offset-y
      :nudge-bottom="10"
      origin="center center"
      transition="scroll-x-transition"
      :max-width="240"
    >
      <template v-slot:activator="{ on }">
        <div v-on="on" class="user-info__photo">
          <v-img class="user-info__icon" :src="photo"></v-img>
          <v-icon class="arrow">keyboard_arrow_down</v-icon>

          <span>{{ user.name }}</span>
        </div>
        <v-icon style="margin-left:10px;" class="arrow" @click="changeColor()"
          >invert_colors</v-icon
        >
      </template>

      <v-list class="pa-0 rounded-0" dense>
        <v-list-item>
          <v-list-item-content class="text-center">
            <v-list-item-subtitle class="text--primary">{{
              user.name
            }}</v-list-item-subtitle>
            <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list class="pa-0 rounded-0">
        <v-list-item @click="logoff()" dense ripple>
          <v-icon color="primary" class="mr-2">power_settings_new</v-icon>
          <v-list-item-content>
            <v-list-item-title>Sair</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-layout>
</template>

<script>
export default {
  props: {
    innerWidth: { type: Number, default: 0 }
  },

  data() {
    return {
      user: {
        name: "Kaique Albuquerque",
        email: "kaiquealbuqueque@hotmail.com"
      }
    };
  },

  computed: {
    photo() {
      if (this.user) {
        return this.user.photo
          ? this.user.photo
          : "/static/images/icon-user.jpg";
      }

      return "/static/images/icon-user.jpg";
    }
  },

  methods: {
    changeColor() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-menu__content {
  overflow: visible;
  contain: initial;
  max-width: 90%;
  border-bottom: 3px solid var(--v-primary-base);

  &:after {
    bottom: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(136, 183, 213, 0);
    border-width: 8px;
    transform: translateX(-50%);
  }
}

.user-info {
  .user-info__photo {
    display: flex;
    align-items: center;
    height: 100%;
    span {
      font-size: 14px;
    }
  }
  cursor: pointer;
}

.user-info__icon {
  width: 32px;
  height: 32px;
  position: relative;
  border-radius: 50%;
  margin-right: 4px;
}

.theme--dark {
  .v-menu__content {
    &:after {
      border-bottom-color: #424242;
    }
  }
}

.theme--light {
  .v-menu__content {
    &:after {
      border-bottom-color: #ffffff;
    }
  }
}
</style>
