<template>
  <div class="main">
    <SettingsTitle />
    <div class="main__container">
      <OtherSettings />
      <GoToCard />
      <AlertsToNewCollections />
      <Account />
    </div>
  </div>
</template>

<script>
import SettingsTitle from '@/components/SettingsTitle.vue';
import OtherSettings from '@/components/OtherSettings.vue';
import GoToCard from '@/components/GoToCard.vue';
import AlertsToNewCollections from '@/components/AlertsToNewCollections';
import Account from '@/components/Account.vue';

export default {
  name: 'Home',
  components: {
    SettingsTitle,
    OtherSettings,
    GoToCard,
    AlertsToNewCollections,
    Account,
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1890px;

  &__container {
    max-width: 752px;
    margin: 0 16px;
  }
}
</style>
