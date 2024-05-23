import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {PageLayout} from "./PageLayout";

@Injectable(
	{
		providedIn: 'root'
	}
)
export class PageLayoutService {
	private layoutSubject = new BehaviorSubject<PageLayout>(PageLayout.Blank);
	public layout$ = this.layoutSubject.asObservable();

	setLayout(layout: PageLayout): void {
		this.layoutSubject.next(layout);
	}
}
