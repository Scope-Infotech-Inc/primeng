import { AfterViewInit, OnDestroy, EventEmitter, ElementRef, Renderer2, QueryList, AfterContentInit, TemplateRef, ChangeDetectorRef } from '@angular/core';
export declare class Sidebar implements AfterViewInit, AfterContentInit, OnDestroy {
    el: ElementRef;
    renderer: Renderer2;
    cd: ChangeDetectorRef;
    appendTo: any;
    blockScroll: boolean;
    style: any;
    styleClass: string;
    ariaCloseLabel: string;
    autoZIndex: boolean;
    baseZIndex: number;
    modal: boolean;
    dismissible: boolean;
    showCloseIcon: boolean;
    closeOnEscape: boolean;
    transitionOptions: string;
    templates: QueryList<any>;
    onShow: EventEmitter<any>;
    onHide: EventEmitter<any>;
    visibleChange: EventEmitter<any>;
    initialized: boolean;
    _visible: boolean;
    _position: string;
    _fullScreen: boolean;
    container: HTMLDivElement;
    transformOptions: any;
    mask: HTMLDivElement;
    maskClickListener: Function;
    documentEscapeListener: Function;
    contentTemplate: TemplateRef<any>;
    constructor(el: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    get visible(): boolean;
    set visible(val: boolean);
    get position(): string;
    set position(value: string);
    get fullScreen(): boolean;
    set fullScreen(value: boolean);
    show(): void;
    hide(): void;
    close(event: Event): void;
    enableModality(): void;
    disableModality(): void;
    onAnimationStart(event: any): void;
    appendContainer(): void;
    bindDocumentEscapeListener(): void;
    unbindDocumentEscapeListener(): void;
    unbindMaskClickListener(): void;
    unbindGlobalListeners(): void;
    ngOnDestroy(): void;
}
export declare class SidebarModule {
}
