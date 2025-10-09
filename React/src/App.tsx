import { useCallback, useState } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import NumberBox from 'devextreme-react/number-box';
import type { NumberBoxTypes } from 'devextreme-react/number-box';
import notify from 'devextreme/ui/notify';

function App(): JSX.Element {
  const [initialValue] = useState<number>(261991);

  const onValueChanged = useCallback((e: NumberBoxTypes.ValueChangedEvent) => {
    if (e.value) {
      notify(
        `The sum is $${e.value}`,
        'info',
        2000,
      );
    }
  }, []);

  return (
    <div id="app-container">
      <NumberBox
        label="Enter a sum in dollars"
        labelMode="floating"
        value={initialValue}
        format="$ #,##0.##"
        min={0}
        max={1000000}
        step={5}
        showSpinButtons={true}
        showClearButton={true}
        onValueChanged={onValueChanged}
      />
    </div>
  );
}

export default App;
