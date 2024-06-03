import { DecimalPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { getIconsFromMIME } from '../../../shared/mimeType';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [
		NgIcon,
		DecimalPipe,
	],
  templateUrl: './upload.component.html'
})

export class UploadComponent implements OnInit {
	@Input() id!: number;
	@Input() file!: File;
	@Output() deleted: EventEmitter<boolean> = new EventEmitter();
	image: string = "_blank.png";

	ngOnInit(): void {
		console.log(this.file.type);
		this.image = getIconsFromMIME(this.file.type);
	}

	onDelete(): void {
		this.deleted.emit(true);
	}
}
