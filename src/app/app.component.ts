// Dependencies
import { RouterOutlet } from "@angular/router";
import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	imports: [RouterOutlet],
	standalone: true,
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {}
