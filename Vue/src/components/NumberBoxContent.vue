<script setup lang="ts">
import { ref } from 'vue';
import DxNumberBox from 'devextreme-vue/number-box';
import type { DxNumberBoxTypes } from 'devextreme-vue/number-box';
import notify from 'devextreme/ui/notify';

const initialValue = ref<number>(261991);

const onValueChanged = (e: DxNumberBoxTypes.ValueChangedEvent): void => {
  if (e.value) {
    notify(
      `The sum is $${e.value}`,
      'info',
      2000,
    );
  }
};
</script>

<template>
  <div id="app-container">
    <DxNumberBox
      label="Enter a sum in dollars"
      label-mode="floating"
      :value="initialValue"
      format="$ #,##0.##"
      :min="0"
      :max="1000000"
      :step="5"
      :show-spin-buttons="true"
      :show-clear-button="true"
      @value-changed="onValueChanged"
    />
  </div>
</template>

<style scoped>
#app-container {
  width: 900px;
  position: relative;
  margin: 50px;
  padding: 20px;
  border: 1px solid #ddd;
}

#number-box {
  margin-top: 20px;
}
</style>
