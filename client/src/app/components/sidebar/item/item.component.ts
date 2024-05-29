import {booleanAttribute, Component,  Input} from '@angular/core';
import {  RouterLink, RouterLinkActive } from '@angular/router';
import {NgIcon} from "@ng-icons/core";

@Component({
  selector: 'app-item',
  standalone: true,
	imports: [
		NgIcon,
		RouterLink,
		RouterLinkActive
	],
  templateUrl: './item.component.html',
})
export class ItemComponent {
	@Input() name!: string;
	@Input() icon!: string;
	@Input() link?: string;
	@Input() isLink: boolean = true;
	@Input({transform: booleanAttribute}) active: boolean = false;

}
