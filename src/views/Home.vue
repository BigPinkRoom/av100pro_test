<template>
  <div class="main">
    <SettingsTitle />
    <OtherSettings />
  </div>
</template>

<script>
import SettingsTitle from '@/components/SettingsTitle.vue';
import OtherSettings from '@/components/OtherSettings.vue';

export default {
  name: 'Home',
  components: {
    SettingsTitle,
    OtherSettings,
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  margin: auto;
  max-width: 1890px;
}
</style>
