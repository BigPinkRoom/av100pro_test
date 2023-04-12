<template>
  <div class="other-settings">
    <p class="other-settings__title">Прочие настройки</p>
    <div class="other-settings__wrapper">
      <div class="other-settings__time">
        <p class="other-settings__subtitle">Часовой пояс</p>
        <v-select
          color="#E1E1E3"
          outlined
          dense
          :items="items"
          top="116px"
        ></v-select>
      </div>
      <div class="other-settings__options">
        <div class="other-settings__container">
          <v-checkbox
            label="Автоматически переходить к новым объявлениям"
            color="#2DC574"
          />
          <v-tooltip v-model="show" bottom color="#2DC574">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon color="grey lighten-1">
                  mdi-information-outline
                </v-icon>
              </v-btn>
            </template>
            <span>Лента будет автоматически обновляться 1 раз в 3 секунды</span>
          </v-tooltip>
        </div>
        <div class="other-settings__container">
          <v-checkbox label="Включить цвета в ленте" color="#2DC574" />
          <v-tooltip v-model="show" bottom color="#2DC574">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon color="grey lighten-1">
                  mdi-information-outline
                </v-icon>
              </v-btn>
            </template>
            <span>Включение зеленого/желтого цвета</span>
          </v-tooltip>
        </div>
      </div>
      <div class="other-settings__tooltips"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherSettings',
  data() {
    return {
      items: [
        'Калининград',
        'Москва',
        'Самара',
        'Екатеринбург',
        'Омск',
        'Красноярск',
        'Иркутск',
        'Якутск',
        'Владивосток',
        'Магадан',
        'Камчатка',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.other-settings {
  display: flex;
  margin-bottom: 40px;

  font-size: 18px;
  font-weight: 600;

  &__wrapper {
    flex-direction: column;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    width: 270px;
  }

  &__subtitle {
    margin-top: 10px;
    margin-right: 30px;
  }

  &__time {
    display: flex;
    margin-right: 25px;

    font-size: 14px;
    font-weight: 500;
  }
}
</style>
<style lang="scss">
.v-text-field--outlined fieldset {
  bottom: 8px;
  top: 4px;
  border-color: #e1e1e3;
}
.theme--light.v-icon {
  color: #47cc85;
}
.theme--light.v-sheet {
  background-color: #2dc574;
}

.theme--light.v-list-item:not(.v-list-item--active):hover:not(
    .v-list-item--disabled
  ) {
  background-color: #22a860;
}
.v-list-item__title {
  color: #ffffff;
}
.v-menu__content {
  /* width */
  ::-webkit-scrollbar {
    width: 20px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 10px;
  }
}
.v-label {
  font-size: 12px;
  font-weight: 500;
}
</style>
