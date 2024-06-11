import { Component, Input, OnInit } from '@angular/core';
import { getIconsFromMIME } from '../../../shared/mimeType';
import { File } from '../../../models/file';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-file-post',
  standalone: true,
  imports: [
		DecimalPipe
	],
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit  {
	@Input() file!: File;
	image: string = '_blank.png';
	ngOnInit(): void {
		this.image = getIconsFromMIME(this.file.mimetype);
	}
}
