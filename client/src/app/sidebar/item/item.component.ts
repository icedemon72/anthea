import {booleanAttribute, Component, Input} from '@angular/core';
import {NgIcon} from "@ng-icons/core";

@Component({
  selector: 'app-item',
  standalone: true,
	imports: [
		NgIcon
	],
  templateUrl: './item.component.html',
})
export class ItemComponent {
	@Input() name!: string;
	@Input() icon!: string;
	@Input({transform: booleanAttribute}) active!: boolean;
}
