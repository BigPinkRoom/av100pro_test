<template>
  <div class="alerts-to-new-collections">
    <p class="alerts-to-new-collections__title">Оповещения о новых подборках</p>
    <div class="alerts-to-new-collections__wrapper">
      <div class="alerts-to-new-collections__time">
        <p class="alerts-to-new-collections__subtitle">
          Выберите, куда будут приходить уведомления при появлении автомобилей,
          которые подходят под критерии вашей подборки.
        </p>
        <p class="alerts-to-new-collections__text-subtitle">Уведомления</p>
      </div>
      <div class="alerts-to-new-collections__options">
        <v-radio-group>
          <div class="alerts-to-new-collections__container">
            <v-radio value="radio1" label="Выкл" color="#0075FF" />
          </div>
          <v-divider class="alerts-to-new-collections__divider"></v-divider>
          <div class="alerts-to-new-collections__container">
            <v-radio value="radio2" label="Push" disabled color="#0075FF" />
            <v-tooltip bottom color="#2DC574">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon color="grey lighten-1">
                    mdi-information-outline
                  </v-icon>
                </v-btn>
              </template>
              <span>Можно установить только в приложении</span>
            </v-tooltip>
          </div>
          <v-divider class="alerts-to-new-collections__divider"></v-divider>
          <div class="alerts-to-new-collections__container">
            <v-radio value="radio3" label="Email" color="#0075FF" />
            <div
              v-if="!emailOpen"
              class="alerts-to-new-collections__email-container"
            >
              <v-icon
                color="green"
                dense
                class="alerts-to-new-collections__text"
                @click="emailOpen = true"
              >
                mdi-pencil
              </v-icon>
              <div class="alerts-to-new-collections__text-email">
                {{ email }}
              </div>
            </div>
            <v-text-field
              v-model="email"
              class="alerts-to-new-collections__text-input"
              v-else-if="emailOpen === true"
              outlined
            ></v-text-field>
          </div>
          <v-divider class="alerts-to-new-collections__divider"></v-divider>
          <div class="alerts-to-new-collections__container">
            <v-radio
              value="radio4"
              label="Telegram ID"
              ref="telegramID"
              color="#0075FF"
            />
            <v-icon
              v-if="!telegramIDOpen"
              class="alerts-to-new-collections__text"
              color="green"
              dense
              @click="telegramIDOpen = true"
            >
              mdi-pencil
            </v-icon>
            <v-text-field
              v-model="telegramID"
              class="alerts-to-new-collections__text-input"
              v-else-if="telegramIDOpen === true"
              outlined
            ></v-text-field>
          </div>
        </v-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlertsToNewCollections',
  data() {
    return {
      emailOpen: false,
      telegramIDOpen: false,
      email: '',
      telegramID: '',
    };
  },
  watch: {
    email(newValue) {
      this.$store.commit('SET_TEMP_EMAIL', newValue);
    },
  },
  async mounted() {
    await this.getEmail();
  },
  methods: {
    /**
     * Get email from store and set email from data.
     */
    async getEmail() {
      await this.$store.dispatch('getEmail');
      this.email = this.$store.state.email;
    },
  },
};
</script>

<style lang="scss" scoped>
.alerts-to-new-collections {
  display: flex;
  margin-bottom: 40px;
  padding-right: 90px;

  font-size: 18px;
  font-weight: 600;

  @media all and (max-width: 580px) {
    padding-right: 0;
  }

  &__wrapper {
    flex-direction: column;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__divider {
    margin-bottom: 10px;
    margin-top: 10px;
  }

  &__title {
    width: 270px;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    @media all and (max-width: 952px) {
      font-size: 15px;
    }

    @media all and (max-width: 768px) {
      display: none;
    }
  }

  &__subtitle {
    margin-right: 30px;

    @media all and (max-width: 952px) {
      font-size: 11px;
    }
  }

  &__time {
    display: flex;
    flex-direction: column;

    font-size: 14px;
    font-weight: 500;
  }

  &__text-subtitle {
    font-size: 15px;
    font-weight: 600;
  }

  &__email-container {
    display: flex;
    flex-direction: row-reverse;

    font-weight: 400;
  }

  &__text-input {
    font-size: 14px;
    font-weight: 400;
  }

  &__text {
    padding-left: 10px;

    cursor: pointer;
  }
}
</style>
<style lang="scss">
.alerts-to-new-collections__container .theme--light.v-icon {
  color: #0075ff;
}

.alerts-to-new-collections .v-text-field.v-text-field--enclosed {
  height: 66px;
}

.alerts-to-new-collections .v-radio {
  min-width: 120px;
}
</style>
