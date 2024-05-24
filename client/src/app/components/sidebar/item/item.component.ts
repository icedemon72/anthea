import {booleanAttribute, Component,  Input} from '@angular/core';
import {  RouterLink } from '@angular/router';
import {NgIcon} from "@ng-icons/core";

@Component({
  selector: 'app-item',
  standalone: true,
	imports: [
		NgIcon,
		RouterLink
	],
  templateUrl: './item.component.html',
})
export class ItemComponent {
	@Input() name!: string;
	@Input() icon!: string;
	@Input() link?: string;
	@Input({transform: booleanAttribute}) active!: boolean;
}
