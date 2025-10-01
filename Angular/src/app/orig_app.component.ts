import { Component } from "@angular/core";
import notify from "devextreme/ui/notify";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    onValueChanged(e: { value: number; }) {
        if (e.value) {
            notify({ 
                message: "The sum is $" + e.value 
            });
        }
    }
}