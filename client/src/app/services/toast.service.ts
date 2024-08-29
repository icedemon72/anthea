import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
	id: number;
	message: string;
	type: 'success' | 'error';
	duration?: number;
}

@Injectable({
	providedIn: 'root'
})
export class ToastService {
	private toastsSubject = new BehaviorSubject<Toast[]>([]);
	public toasts$ = this.toastsSubject.asObservable();
	private counter = 0;

	addToast(message: string, type: 'success' | 'error' = 'success', duration: number = 2500) {
		const toast: Toast = { id: this.counter++, message, type, duration };
		const currentToasts = this.toastsSubject.getValue();
		this.toastsSubject.next([...currentToasts, toast]);

		setTimeout(() => this.removeToast(toast.id), duration);
	}

	removeToast(id: number) {
		const updatedToasts = this.toastsSubject.getValue().filter(toast => toast.id !== id);
		this.toastsSubject.next(updatedToasts);
	}
}
