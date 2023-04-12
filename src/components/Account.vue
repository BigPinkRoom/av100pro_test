<template>
  <div class="account">
    <p class="account__title">Учетная запись</p>
    <div class="account__wrapper">
      <div class="account__container">
        <p class="account__subtitle">Компания</p>
        <v-text-field
          class="account__text"
          outlined
          color="green"
          disabled
          value="Частное лицо"
        ></v-text-field>
      </div>
      <div class="account__container">
        <p class="account__subtitle">Логин</p>
        <v-text-field
          class="account__text"
          outlined
          color="green"
          disabled
          value="89001001010"
        ></v-text-field>
      </div>
      <div class="account__container">
        <p class="account__subtitle">Номер телефона</p>
        <v-text-field
          outlined
          color="green"
          class="account__text"
        ></v-text-field>
      </div>
      <div class="account__container">
        <p class="account__subtitle">Имя</p>
        <v-text-field
          outlined
          color="green"
          class="account__text"
          value="Анонимус-2"
        ></v-text-field>
      </div>
      <div class="account__container">
        <p class="account__subtitle">Фамилия</p>
        <v-text-field
          outlined
          color="green"
          class="account__text"
        ></v-text-field>
      </div>
      <div class="account__unnecessary">*Не обязательно</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Account',
};
</script>

<style lang="scss" scoped>
.account {
  display: flex;
  margin-bottom: 40px;
  padding-right: 90px;

  font-size: 18px;
  font-weight: 600;

  &__wrapper {
    display: flex;
    flex-direction: column;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    width: 270px;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  }

  &__subtitle {
    font-size: 14px;
    font-weight: 500;
    width: 130px;
  }

  &__text {
    font-size: 14px;
    font-weight: 400;
  }

  &__unnecessary {
    margin-left: auto;

    color: #a3a3a3;
    font-size: 12px;
  }
}
</style>
<style lang="scss">
.account .v-text-field.v-text-field--enclosed {
  height: 70px;
}
</style>
