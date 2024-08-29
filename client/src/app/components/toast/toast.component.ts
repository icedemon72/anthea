import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { trigger, state, style, transition, animate } from '@angular/animations';
import {Toast, ToastService} from "../../services/toast.service";

@Component({
	selector: 'app-toast',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './toast.component.html',
	animations: [
		trigger('toastAnimation', [
			state('void', style({ opacity: 0, transform: 'translateY(100%)' })),
			transition(':enter', [
				animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
			]),
			transition(':leave', [
				animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(100%)' }))
			])
		])
	]
})
export class ToastComponent {
	toasts$: Observable<Toast[]>;

	constructor(private toastService: ToastService) {
		this.toasts$ = this.toastService.toasts$;
	}

	removeToast(id: number) {
		this.toastService.removeToast(id);
	}
}
