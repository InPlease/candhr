// Dependencies
import { Injectable } from "@angular/core";
import { io } from "socket.io-client";
import { Observable } from "rxjs";

// Enviroments
import { environment } from "@environments/environment.development";

@Injectable({
	providedIn: "root",
})
export class SocketService {
	private socket;

	constructor() {
		this.socket = io(environment.BE_URL);
	}

	public sendMessage(message: string) {
		this.socket.emit("message", message);
	}

	public initStream(eventName: string): Observable<{
		message: string;
	}> {
		return new Observable((observer) => {
			this.socket.on(eventName, (message) => {
				observer.next(message);
			});
		});
	}
}
