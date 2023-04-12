<template>
  <div class="go-to-card">
    <p class="go-to-card__title">Переход в карточку</p>
    <div class="go-to-card__wrapper">
      <div class="go-to-card__time">
        <p class="go-to-card__subtitle">
          Выберите, каким образом будет открываться детальное представление
          выбранного вами транспорта.
        </p>
      </div>
      <div class="go-to-card__options">
        <v-radio-group v-model="radio">
          <div class="go-to-card__container">
            <v-radio
              value="radio1"
              label="В карточку в текущем окне"
              color="#0075FF"
            />
          </div>
          <v-divider class="go-to-card__divider"></v-divider>
          <div class="go-to-card__container">
            <v-radio
              value="radio2"
              label="В карточку в отдельном окне"
              color="#0075FF"
            />
          </div>
          <v-divider class="go-to-card__divider"></v-divider>
          <div class="go-to-card__container">
            <v-radio value="radio3" label="На источник" color="#0075FF" />
            <v-tooltip v-model="show" bottom color="#2DC574">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon color="grey lighten-1">
                    mdi-information-outline
                  </v-icon>
                </v-btn>
              </template>
              <span>Прямой переход в объявление на источнике</span>
            </v-tooltip>
          </div>
        </v-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoToCard',
  data() {
    return {
      radio: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.go-to-card {
  display: flex;
  margin-bottom: 40px;
  padding-right: 90px;

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

  &__divider {
    margin-bottom: 10px;
    margin-top: 10px;
  }

  &__title {
    width: 270px;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  }

  &__subtitle {
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
.go-to-card__container .theme--light.v-icon {
  color: #0075ff;
}
</style>
