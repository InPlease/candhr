import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { PasswordModule } from "primeng/password";
import { FloatLabelModule } from "primeng/floatlabel";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, FormsModule, PasswordModule, FloatLabelModule],
	standalone: true,
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	value1!: string;

	value2!: string;

	value3!: string;
}
