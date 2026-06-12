import { Component, ChangeDetectionStrategy } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { DxNumberBoxTypes } from 'devextreme-angular/ui/number-box';

import { DxNumberBoxModule } from 'devextreme-angular/ui/number-box';

@Component({
    selector: 'app-root',
    imports: [DxNumberBoxModule],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Getting Started with DevExtreme Angular NumberBox';

  initialValue = 261991;

  onValueChanged(e: DxNumberBoxTypes.ValueChangedEvent): void {
    if (e.value) {
      notify(
        `The sum is $${e.value}`,
        'info',
        2000,
      );
    }
  }
}
