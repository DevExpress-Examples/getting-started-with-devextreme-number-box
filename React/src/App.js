import React, { useCallback } from "react";
import "devextreme/dist/css/dx.light.css";

import { NumberBox } from "devextreme-react/number-box";
import notify from "devextreme/ui/notify";

function App() {
    const onValueChanged = useCallback((e) => {
        if (e.value) {
            notify({
                message: "The sum is $" + e.value,
            });
        }
    }, []);
    
    return (
        <NumberBox 
            label="Enter a sum in dollars"
            labelMode="floating"
            value={261991}
            format="$ #,##0.##"
            min={0}
            max={1000000}
            step={5}
            showSpinButtons={true}
            showClearButton={true}
            onValueChanged={onValueChanged}
        />
    );
}

export default App;
