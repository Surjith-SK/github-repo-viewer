import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[appHover]'
})
export class HoverDirective {

    constructor(public elementRef: ElementRef) {
    }

    @Input('appHover') hoverClass: any;
	@Input('appHoverRemove') hoverClassRemove: any;


    @HostListener('mouseenter') onMouseEnter() {
        this.update('add');
		this.oppositeUpdate('remove')
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.update('remove');
		this.oppositeUpdate('add');
    }

    protected update(action: string): void {
        this.hoverClass?.split(' ').forEach((item: any) => this.elementRef.nativeElement.classList[action](item));
    }

	protected oppositeUpdate(action: string): void {
		this.hoverClassRemove?.split(' ').forEach((item: any) => this.elementRef.nativeElement.classList[action](item));
	}
}
