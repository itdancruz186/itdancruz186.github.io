"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[1948],{1948:(z,k,c)=>{c.d(k,{$6:()=>m,Fk:()=>T,XD:()=>v,_J:()=>g,hr:()=>f});var i=c(4650),n=c(3238),s=(c(2687),c(1281)),x=(c(5017),c(4006),c(6895));const D=["input"];let h=0;class p{constructor(d,e){this.source=d,this.value=e}}const m=new i.OlP("MatRadioGroup"),g=new i.OlP("mat-radio-default-options",{providedIn:"root",factory:function B(){return{color:"accent"}}});let f=(()=>{class r{constructor(e){this._changeDetector=e,this._value=null,this._name="mat-radio-group-"+h++,this._selected=null,this._isInitialized=!1,this._labelPosition="after",this._disabled=!1,this._required=!1,this._controlValueAccessorChangeFn=()=>{},this.onTouched=()=>{},this.change=new i.vpe}get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition="before"===e?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=(0,s.Ig)(e),this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=(0,s.Ig)(e),this._markRadiosForCheck()}ngAfterContentInit(){this._isInitialized=!0}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){this._radios&&(null===this._selected||this._selected.value!==this._value)&&(this._selected=null,this._radios.forEach(o=>{o.checked=this.value===o.value,o.checked&&(this._selected=o)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new p(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}}return r.\u0275fac=function(e){return new(e||r)(i.Y36(i.sBO))},r.\u0275dir=i.lG2({type:r,inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:"disabled",required:"required"},outputs:{change:"change"}}),r})();class C{constructor(d){this._elementRef=d}}const E=(0,n.Kr)((0,n.sb)(C));let v=(()=>{class r extends E{constructor(e,o,a,t,u,_,b,l){super(o),this._changeDetector=a,this._focusMonitor=t,this._radioDispatcher=u,this._providerOverride=b,this._uniqueId="mat-radio-"+ ++h,this.id=this._uniqueId,this.change=new i.vpe,this._checked=!1,this._value=null,this._removeUniqueSelectionListener=()=>{},this.radioGroup=e,this._noopAnimations="NoopAnimations"===_,l&&(this.tabIndex=(0,s.su)(l,0))}get checked(){return this._checked}set checked(e){const o=(0,s.Ig)(e);this._checked!==o&&(this._checked=o,o&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!o&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),o&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,null!==this.radioGroup&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}get disabled(){return this._disabled||null!==this.radioGroup&&this.radioGroup.disabled}set disabled(e){this._setDisabled((0,s.Ig)(e))}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){this._required=(0,s.Ig)(e)}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._providerOverride&&this._providerOverride.color||"accent"}set color(e){this._color=e}get inputId(){return`${this.id||this._uniqueId}-input`}focus(e,o){o?this._focusMonitor.focusVia(this._inputElement,o,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,o)=>{e!==this.id&&o===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new p(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputClick(e){e.stopPropagation()}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){const o=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),o&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_updateTabIndex(){const e=this.radioGroup;let o;if(o=e&&e.selected&&!this.disabled?e.selected===this?this.tabIndex:-1:this.tabIndex,o!==this._previousTabIndex){const a=this._inputElement?.nativeElement;a&&(a.setAttribute("tabindex",o+""),this._previousTabIndex=o)}}}return r.\u0275fac=function(e){i.$Z()},r.\u0275dir=i.lG2({type:r,viewQuery:function(e,o){if(1&e&&i.Gf(D,5),2&e){let a;i.iGM(a=i.CRH())&&(o._inputElement=a.first)}},inputs:{id:"id",name:"name",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"],checked:"checked",value:"value",labelPosition:"labelPosition",disabled:"disabled",required:"required",color:"color"},outputs:{change:"change"},features:[i.qOj]}),r})(),T=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=i.oAB({type:r}),r.\u0275inj=i.cJS({imports:[n.BQ,x.ez,n.si,n.BQ]}),r})()}}]);