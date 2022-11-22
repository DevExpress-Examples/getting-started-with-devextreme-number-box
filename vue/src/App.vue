<template>
    <DxNumberBox
        label="Enter a sum in dollars"
        :label-mode="floating"
        :value="261991"
        format="$ #,##0.##"
        :min="0"
        :max="1000000"
        :step="5"
        :show-spin-buttons="true"
        :show-clear-button="true"
        @value-changed="onValueChanged($event)"
    />
</template>

<script>
import "devextreme/dist/css/dx.light.css";
import { DxNumberBox } from "devextreme-vue/number-box";
import notify from "devextreme/ui/notify";

export default {
    components: {
        DxNumberBox
    },
    methods: {
        onValueChanged(e) {
            if (e.value) {
                notify({
                    message: "The sum is $" + e.value
                });
            }
        }
    }
}
</script>