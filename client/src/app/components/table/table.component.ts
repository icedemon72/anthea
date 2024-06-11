import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
		NgIcon,
		RouterLink
	],
  templateUrl: './table.component.html'
})

export class TableComponent {
	@Input() index: boolean = true;
	@Input() head: Array<string> = [];
	@Input() values: any;
	@Input() keys: Array<string> = [];
	@Input() actions: boolean = false;
	
	@Input() editLink: string = '';
	@Output() delete: EventEmitter<boolean> = new EventEmitter();
	
	onDelete(): void {
		this.delete.emit(true);
	}
}
