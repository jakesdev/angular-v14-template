import { Component, ElementRef, Inject, Input, Optional, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { SvgIconsRegistry } from '@app/core/services';
//

@Component({
    selector: 'app-svg-icon',
    template: '<ng-content></ng-content>',
    standalone: true,
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconComponent {
    @HostBinding('style.width') _widthProperty: string = '20px';
    @HostBinding('style.color') _colorProperty: string = '';

    private _name: string = '';
    @Input()
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
        //
        this.generateIcon();
    }

    private _data: string = '';
    @Input()
    get data(): string {
        return this._data;
    }
    set data(data: string) {
        this._data = data;
        //
        this.generateIcon();
    }


    // Style
    @Input()
    set width(value: number) {
        this._widthProperty = value + 'px' ?? '20px';
    }

    @Input()
    set color(value: string) {
        this._colorProperty = value ?? null;
    }

    private _svgIcon!: SVGElement;

    constructor(@Optional() @Inject(DOCUMENT) private _document: any,
                private _elementRef: ElementRef,
                private _svgIconRegistry: SvgIconsRegistry) {
    }

    private generateIcon() {
        if (this._svgIcon) {
            this._elementRef.nativeElement.removeChild(this._svgIcon);
        }
        const svgData: string | undefined = !!this.name
            ? this._svgIconRegistry.getIcon(this.name)
            : this.data
                ? this.data : '';
        //
        if (typeof svgData === 'string') {
          this._svgIcon = this.svgElementFromString(svgData);
          this._elementRef.nativeElement.appendChild(this._svgIcon);
        }
    }

    private svgElementFromString(svgContent: string): SVGElement {
        if (!svgContent) {
            return this._document.createElementNS('http://www.w3.org/2000/svg', 'path');
        }
        //
        const div = this._document.createElement('div');
        div.innerHTML = svgContent;
        return div.querySelector('svg')
            || this._document.createElementNS('http://www.w3.org/2000/svg', 'path');
    }
}
