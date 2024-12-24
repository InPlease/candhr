import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PageHomeVideoComponent } from "./page.home.video.component";

describe("PageHomeVideoComponent", () => {
	let component: PageHomeVideoComponent;
	let fixture: ComponentFixture<PageHomeVideoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PageHomeVideoComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PageHomeVideoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
