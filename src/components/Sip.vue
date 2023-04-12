<template>
  <div class="sip">
    <div class="sip__title">
      <div class="sip__subtitle">Звонок через SIP</div>
      <v-switch class="sip__switch" inset color="#2DC574"></v-switch>
    </div>
    <div class="sip__wrapper">
      Включите эту функцию чтобы Авито и другие площадки не блокировали ваш
      аккаунт. Будет выглядеть так, будто звонки совершаются с разных номеров.
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sip',
};
</script>

<style lang="scss" scoped>
.sip {
  display: flex;
  margin-bottom: 40px;
  padding-right: 90px;

  font-size: 18px;
  font-weight: 600;

  &__wrapper {
    font-size: 14px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
  }

  &__title {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: flex-left;
    width: 270px;
  }

  &__switch {
    margin-left: 20px;
  }
}
</style>
