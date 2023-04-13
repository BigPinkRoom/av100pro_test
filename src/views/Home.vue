<template>
  <div class="main">
    <v-alert dense text type="success" class="main__alert js-alert">
      Сохранено
    </v-alert>
    <SettingsTitle />
    <div class="main__container">
      <Save @save="alertShow" />
      <OtherSettings />
      <GoToCard />
      <AlertsToNewCollections />
      <Account />
      <Sip />
    </div>
  </div>
</template>

<script>
import SettingsTitle from '@/components/SettingsTitle.vue';
import OtherSettings from '@/components/OtherSettings.vue';
import GoToCard from '@/components/GoToCard.vue';
import AlertsToNewCollections from '@/components/AlertsToNewCollections';
import Account from '@/components/Account.vue';
import Sip from '@/components/Sip.vue';
import Save from '@/components/SaveButton.vue';

export default {
  name: 'Home',
  components: {
    SettingsTitle,
    OtherSettings,
    GoToCard,
    AlertsToNewCollections,
    Account,
    Sip,
    Save,
  },
  methods: {
    alertShow() {
      const alert = document.querySelector('.js-alert');
      alert.style.display = 'flex';
      setTimeout(() => {
        alert.style.display = 'none';
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1890px;

  &__alert {
    position: fixed;
    z-index: 1000;

    display: none;
    justify-content: center;
    align-items: center;
    left: 50%;

    transform: translateX(-50%);
  }

  &__container {
    max-width: 752px;
    margin: 0 16px;
  }
}
</style>
