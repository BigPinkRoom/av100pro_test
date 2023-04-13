<template>
  <div class="save">
    <p class="save__title"></p>
    <div class="save__wrapper">
      <v-btn
        class="save__button"
        block
        depressed
        color="#2DC574"
        @click="saveInformation"
        >Сохранить</v-btn
      >
      <v-divider></v-divider>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Save',
  data() {
    return {};
  },
  methods: {
    saveInformation() {
      this.axios({
        method: 'PUT',
        url: ' https://av100.pro/settings',
        headers: {
          'X-API-KEY': '8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9',
          'X-Device-OS': 'web',
          'X-User-Token': '32e7a8fd-a134-4899-bb48-a8125730bc58',
        },
        body: {
          text: 'text',
        },
      })
        .then((response) => {
          console.log(response.data);
        })
        .finally(() => {
          this.$emit('save');
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.save {
  display: flex;
  margin-bottom: 40px;
  margin-top: 40px;
  padding-right: 90px;

  font-size: 18px;
  font-weight: 600;

  @media all and (max-width: 580px) {
    padding-right: 0;
  }

  &__wrapper {
    flex-direction: column;
    width: 100%;
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

    @media all and (max-width: 768px) {
      width: auto;
    }
  }

  &__button {
    color: #ffffff;
    font-weight: 600;

    text-transform: none;
  }
}
</style>
