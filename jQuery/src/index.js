$(() => {
  const numberBox = $('#number-box').dxNumberBox({
    label: 'Enter a sum in dollars',
    labelMode: 'floating',
    value: 261991,
    format: '$ #,##0.##',
    min: 0,
    max: 1000000,
    step: 5,
    showSpinButtons: true,
    showClearButton: true,
    onValueChanged(e) {
      if (e.value) {
        DevExpress.ui.notify(
          `The sum is $${e.value}`,
          'info',
          2000,
        );
      }
    },
  }).dxNumberBox('instance');
});
