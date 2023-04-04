"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[9475],{9475:(R,J,a)=>{a.r(J),a.d(J,{ImpuestosModule:()=>T});var b=a(3238),e=a(7392),S=a(9818),Q=a(74),f=a(8455),Z=a(9203),C=a(3239),A=a(7686),O=a(1256),D=a(5208),F=a(2793),E=a(7462),v=a(6308),y=a(9132),t=a(4650);class h{constructor(){}}h.\u0275fac=function(i){return new(i||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["impuestos"]],decls:1,vars:0,template:function(i,o){1&i&&t._UZ(0,"router-outlet")},dependencies:[y.lC],encapsulation:2,changeDetection:0});var u=a(4006),N=a(8288),l=a(7579),g=a(2722),s=a(8372),c=a(3900),m=a(4004),B=a(6451),j=a(2287),q=a(2340),w=a(1135),k=a(8505),L=a(5698),z=a(2843),K=a(9646),G=a(9300),$=a(529),Y=a(7495);class _{constructor(i,o){this._httpClient=i,this._userService=o,this._pagination=new w.X(null),this._impuesto=new w.X(null),this._impuestos=new w.X(null),this._apiHost=q.N.apiUrl+"/business/v1"}get pagination$(){return this._pagination.asObservable()}get impuesto$(){return this._impuesto.asObservable()}get impuestos$(){return this._impuestos.asObservable()}getImpuestos(i=0,o=10,r="name",p="asc",d=""){return this._httpClient.get(this._apiHost+"/opr/cat/impuestos",{params:{page:""+i,size:""+o,sort:r,order:p,search:d}}).pipe((0,k.b)(I=>{this._pagination.next(I.paginacion),this._impuestos.next(I.productos)}))}getImpuestoById(i){return this._impuestos.pipe((0,L.q)(1),(0,m.U)(o=>{const r=o.find(p=>p.id===i)||null;return this._impuesto.next(r),r}),(0,c.w)(o=>o?(0,K.of)(o):(0,z._)("Could not found impuesto with id of "+i+"!")))}createImpuesto(){return this.impuestos$.pipe((0,L.q)(1),(0,c.w)(i=>this._httpClient.post(this._apiHost+"/opr/cat/impuestos",{empresa:this._userService.userO.empresa.id}).pipe((0,m.U)(o=>(this._impuestos.next([o,...i]),o)))))}updateImpuesto(i,o){return o.empresa=this._userService.userO.empresa,this.impuestos$.pipe((0,L.q)(1),(0,c.w)(r=>this._httpClient.patch(this._apiHost+"/opr/cat/impuestos",o).pipe((0,m.U)(p=>{const d=r.findIndex(I=>I.id===i);return r[d]=p,this._impuestos.next(r),p}),(0,c.w)(p=>this.impuesto$.pipe((0,L.q)(1),(0,G.h)(d=>d&&d.id===i),(0,k.b)(()=>(this._impuesto.next(p),p)))))))}deleteImpuesto(i){return this.impuestos$.pipe((0,L.q)(1),(0,c.w)(o=>this._httpClient.delete(this._apiHost+"/opr/cat/impuestos/"+i).pipe((0,m.U)(r=>{const p=o.findIndex(d=>d.id===i);return o.splice(p,1),this._impuestos.next(o),r}))))}}_.\u0275fac=function(i){return new(i||_)(t.LFG($.eN),t.LFG(Y.K))},_.\u0275prov=t.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"});var H=a(4363),P=a(6895);function W(n,i){1&n&&(t.TgZ(0,"div",14),t._UZ(1,"mat-progress-bar",15),t.qZA()),2&n&&(t.xp6(1),t.Q6J("mode","indeterminate"))}function V(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){t.CHM(o);const p=t.oxw();return t.KtG(p.createImpuesto())}),t._UZ(1,"mat-icon",17),t.TgZ(2,"span",18),t._uU(3,"Nuevo"),t.qZA()()}2&n&&(t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:plus"))}function X(n,i){1&n&&(t.ynx(0),t._UZ(1,"mat-icon",30),t.BQk()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check"))}function tt(n,i){1&n&&(t.ynx(0),t._UZ(1,"mat-icon",31),t.BQk()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:x"))}function et(n,i){1&n&&t.GkF(0)}const ot=function(n){return{$implicit:n}};function it(n,i){if(1&n&&(t.ynx(0),t.YNc(1,et,1,0,"ng-container",32),t.BQk()),2&n){const o=t.oxw().$implicit;t.oxw(4);const r=t.MAs(15);t.xp6(1),t.Q6J("ngTemplateOutlet",r)("ngTemplateOutletContext",t.VKq(2,ot,o))}}function nt(n,i){if(1&n){const o=t.EpF();t.ynx(0),t.TgZ(1,"div",26)(2,"div",27),t._uU(3),t.qZA(),t.TgZ(4,"div",27),t._uU(5),t.qZA(),t.TgZ(6,"div",27),t._uU(7),t.qZA(),t.TgZ(8,"div",27),t._uU(9),t.qZA(),t.TgZ(10,"div",27),t._uU(11),t.qZA(),t.TgZ(12,"div"),t.YNc(13,X,2,1,"ng-container",11),t.YNc(14,tt,2,1,"ng-container",11),t.qZA(),t.TgZ(15,"div")(16,"button",28),t.NdJ("click",function(){const d=t.CHM(o).$implicit,I=t.oxw(4);return t.KtG(I.toggleDetails(d.id))}),t._UZ(17,"mat-icon",29),t.qZA()()(),t.TgZ(18,"div",20),t.YNc(19,it,2,4,"ng-container",11),t.qZA(),t.BQk()}if(2&n){const o=i.$implicit,r=t.oxw(4);t.xp6(3),t.hij(" ",o.impuesto," "),t.xp6(2),t.hij(" ",o.nombreSAT," "),t.xp6(2),t.hij(" ",o.claveSAT," "),t.xp6(2),t.hij(" ",o.descripcion," "),t.xp6(2),t.hij(" ",o.tipo," "),t.xp6(2),t.Q6J("ngIf",o.activo),t.xp6(1),t.Q6J("ngIf",!o.activo),t.xp6(3),t.Q6J("svgIcon",(null==r.selectedImpuesto?null:r.selectedImpuesto.id)===o.id?"heroicons_solid:chevron-up":"heroicons_solid:chevron-down"),t.xp6(2),t.Q6J("ngIf",(null==r.selectedImpuesto?null:r.selectedImpuesto.id)===o.id)}}function at(n,i){if(1&n&&(t.ynx(0),t.YNc(1,nt,20,9,"ng-container",25),t.BQk()),2&n){const o=i.ngIf,r=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",o)("ngForTrackBy",r.trackByFn)}}const st=function(n){return{"pointer-events-none":n}},rt=function(){return[5,10,25,100]};function lt(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"div",20)(2,"div",21)(3,"div",22),t._uU(4," Impuesto "),t.qZA(),t.TgZ(5,"div",22),t._uU(6," Impuesto SAT "),t.qZA(),t.TgZ(7,"div",22),t._uU(8," Clave SAT "),t.qZA(),t.TgZ(9,"div",22),t._uU(10," Descripci\xf3n "),t.qZA(),t.TgZ(11,"div",22),t._uU(12," Tipo "),t.qZA(),t.TgZ(13,"div",22),t._uU(14," Activo "),t.qZA(),t.TgZ(15,"div",23),t._uU(16,"Detalles"),t.qZA()(),t.YNc(17,at,2,2,"ng-container",11),t.ALo(18,"async"),t.qZA(),t._UZ(19,"mat-paginator",24),t.BQk()),2&n){const o=t.oxw(2);t.xp6(3),t.Q6J("mat-sort-header","impuesto"),t.xp6(2),t.Q6J("mat-sort-header","nombreSAT"),t.xp6(2),t.Q6J("mat-sort-header","claveSAT"),t.xp6(2),t.Q6J("mat-sort-header","descripcion"),t.xp6(2),t.Q6J("mat-sort-header","tipo"),t.xp6(2),t.Q6J("mat-sort-header","activo"),t.xp6(4),t.Q6J("ngIf",t.lcZ(18,13,o.impuestos$)),t.xp6(2),t.Q6J("ngClass",t.VKq(15,st,o.isLoading))("length",o.pagination.length)("pageIndex",o.pagination.page)("pageSize",o.pagination.size)("pageSizeOptions",t.DdM(17,rt))("showFirstLastButtons",!0)}}function ct(n,i){if(1&n&&(t.ynx(0),t.YNc(1,lt,20,18,"ng-container",19),t.BQk()),2&n){const o=i.ngIf;t.oxw();const r=t.MAs(17);t.xp6(1),t.Q6J("ngIf",o.length>0)("ngIfElse",r)}}function pt(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"mat-option",43),t._uU(2),t.qZA(),t.BQk()),2&n){const o=i.$implicit;t.xp6(1),t.Q6J("value",o),t.xp6(1),t.AsE("",o.clave," - ",o.descripcion," ")}}function mt(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"button",58),t.NdJ("click",function(){t.CHM(o);const p=t.oxw(2);return t.KtG(p.deleteSelectedImpuesto())}),t._uU(1," Eliminar "),t.qZA()}2&n&&t.Q6J("color","warn")}function ut(n,i){1&n&&(t.ynx(0),t._UZ(1,"mat-icon",60),t.TgZ(2,"span",61),t._uU(3,"Registro actualizado"),t.qZA(),t.BQk()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_outline:check"))}function gt(n,i){1&n&&(t.ynx(0),t._UZ(1,"mat-icon",62),t.TgZ(2,"span",61),t._uU(3,"Hubo un error, intenta otra vez!"),t.qZA(),t.BQk()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_outline:x"))}function dt(n,i){if(1&n&&(t.TgZ(0,"div",59),t.YNc(1,ut,4,1,"ng-container",11),t.YNc(2,gt,4,1,"ng-container",11),t.qZA()),2&n){const o=t.oxw(2);t.xp6(1),t.Q6J("ngIf","success"===o.flashMessage),t.xp6(1),t.Q6J("ngIf","error"===o.flashMessage)}}function _t(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"button",63),t.NdJ("click",function(){t.CHM(o);const p=t.oxw(2);return t.KtG(p.updateSelectedImpuesto())}),t._uU(1," Actualizar "),t.qZA()}2&n&&t.Q6J("color","primary")}function ft(n,i){if(1&n){const o=t.EpF();t.TgZ(0,"div",33)(1,"div",34)(2,"form",35)(3,"div",36)(4,"div",37)(5,"div",38)(6,"div",39)(7,"mat-form-field",40)(8,"mat-label"),t._uU(9,"Impuesto"),t.qZA(),t._UZ(10,"input",41),t.qZA(),t.TgZ(11,"mat-form-field",40)(12,"mat-label"),t._uU(13,"Tipo"),t.qZA(),t.TgZ(14,"mat-select",42)(15,"mat-option",43),t._uU(16,"Tasa "),t.qZA(),t.TgZ(17,"mat-option",43),t._uU(18,"Cuota "),t.qZA(),t.TgZ(19,"mat-option",43),t._uU(20,"Exento "),t.qZA()()(),t.TgZ(21,"mat-form-field",40)(22,"mat-label"),t._uU(23,"Impuesto SAT"),t.qZA(),t.TgZ(24,"mat-select",44),t.NdJ("selectionChange",function(p){t.CHM(o);const d=t.oxw();return t.KtG(d.onTipoChange(p))}),t.YNc(25,pt,3,3,"ng-container",45),t.qZA()(),t.TgZ(26,"mat-form-field",40)(27,"mat-label"),t._uU(28,"Clave SAT"),t.qZA(),t._UZ(29,"input",46),t.qZA(),t.TgZ(30,"mat-form-field",47)(31,"mat-label"),t._uU(32,"Porcentaje"),t.qZA(),t._UZ(33,"input",41),t.qZA()(),t.TgZ(34,"div",39)(35,"mat-form-field",48)(36,"mat-label"),t._uU(37,"Descripcion"),t.qZA(),t._UZ(38,"input",41),t.qZA(),t.TgZ(39,"div",49)(40,"span",50),t._uU(41,"Status"),t.qZA(),t.TgZ(42,"mat-slide-toggle",51),t._uU(43),t.qZA()()()()()(),t.TgZ(44,"div",52)(45,"div",53),t.YNc(46,mt,2,1,"button",54),t.qZA(),t.TgZ(47,"div",55),t.YNc(48,dt,3,2,"div",56),t.YNc(49,_t,2,1,"button",57),t.qZA()()()()()}if(2&n){const o=t.oxw();t.xp6(2),t.Q6J("formGroup",o.selectedImpuestoForm),t.xp6(8),t.Q6J("formControlName","impuesto"),t.xp6(4),t.Q6J("formControlName","tipo"),t.xp6(1),t.Q6J("value","Tasa"),t.xp6(2),t.Q6J("value","Cuota"),t.xp6(2),t.Q6J("value","Exento"),t.xp6(5),t.Q6J("formControlName","nombreSAT")("compareWith",o.compareNombreSAT),t.xp6(1),t.Q6J("ngForOf",o.impuestos),t.xp6(4),t.Q6J("formControlName","claveSAT"),t.xp6(4),t.Q6J("formControlName","porcentaje"),t.xp6(5),t.Q6J("formControlName","descripcion"),t.xp6(4),t.Q6J("formControlName","activo")("color","primary"),t.xp6(1),t.hij(" ",!0===o.selectedImpuestoForm.get("activo").value?"Activo":"Inactivo"," "),t.xp6(3),t.Q6J("ngIf",o.permisos.includes("DELETE_IMPUESTO")),t.xp6(2),t.Q6J("ngIf",o.flashMessage),t.xp6(1),t.Q6J("ngIf",o.permisos.includes("PATCH_IMPUESTO"))}}function ht(n,i){1&n&&(t.TgZ(0,"div",64),t._uU(1,"No hay registros! "),t.qZA())}class M{constructor(i,o,r,p,d){this._changeDetectorRef=i,this._fuseConfirmationService=o,this._formBuilder=r,this._impuestosService=p,this._userService=d,this.flashMessage=null,this.isLoading=!1,this.searchInputControl=new u.NI,this.selectedImpuesto=null,this.tagsEditMode=!1,this._unsubscribeAll=new l.x,this.impuestos=[{clave:"001",descripcion:"ISR",tipo:"Tasa",retencion:!0,traslado:!1},{clave:"002",descripcion:"IVA",tipo:"Tasa",retencion:!0,traslado:!0},{clave:"003",descripcion:"IEPS",tipo:"Tasa",retencion:!0,traslado:!0}]}ngOnInit(){this.selectedImpuestoForm=this._formBuilder.group({id:[""],impuesto:["",[u.kI.required]],descripcion:[""],porcentaje:["",[u.kI.required]],nombreSAT:[{value:"",disabled:!1},[u.kI.required]],claveSAT:[{value:"",disabled:!0}],tipo:["",[u.kI.required]],activo:[!1]}),this.permisos=this._userService.userO.permisos,this.permisos.includes("PATCH_IMPUESTO")||this.selectedImpuestoForm.disable(),this._impuestosService.pagination$.pipe((0,g.R)(this._unsubscribeAll)).subscribe(i=>{this.pagination=i,this._changeDetectorRef.markForCheck()}),this.impuestos$=this._impuestosService.impuestos$,this.searchInputControl.valueChanges.pipe((0,g.R)(this._unsubscribeAll),(0,s.b)(300),(0,c.w)(i=>(this.closeDetails(),this.isLoading=!0,this._impuestosService.getImpuestos(0,10,"impuesto","asc",i))),(0,m.U)(()=>{this.isLoading=!1})).subscribe()}ngAfterViewInit(){this._sort&&this._paginator&&(this._sort.sort({id:"impuesto",start:"asc",disableClear:!0}),this._changeDetectorRef.markForCheck(),this._sort.sortChange.pipe((0,g.R)(this._unsubscribeAll)).subscribe(()=>{this._paginator.pageIndex=0,this.closeDetails()}),(0,B.T)(this._sort.sortChange,this._paginator.page).pipe((0,c.w)(()=>(this.closeDetails(),this.isLoading=!0,this._impuestosService.getImpuestos(this._paginator.pageIndex,this._paginator.pageSize,this._sort.active,this._sort.direction))),(0,m.U)(()=>{this.isLoading=!1})).subscribe())}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}toggleDetails(i){console.log("details"),this.selectedImpuesto&&this.selectedImpuesto.id===i?this.closeDetails():this._impuestosService.getImpuestoById(i).subscribe(o=>{this.selectedImpuesto=o,this.selectedImpuestoForm.reset(),this.selectedImpuestoForm.patchValue(o),this._changeDetectorRef.markForCheck()})}closeDetails(){this.selectedImpuesto=null}createImpuesto(){this._impuestosService.createImpuesto().subscribe(i=>{this.selectedImpuesto=i,this.selectedImpuestoForm.patchValue(i),this._changeDetectorRef.markForCheck()})}updateSelectedImpuesto(){if(!this.selectedImpuestoForm.valid)return void this._fuseConfirmationService.open({title:"Faltan datos",message:"Completa los datos obligatorios para el registro del impuesto!",icon:{color:"info"},actions:{confirm:{label:"OK"},cancel:{show:!1}}});let i=this.selectedImpuestoForm.getRawValue();i.nombreSAT=this.selectedImpuestoForm.get("nombreSAT").value.descripcion,this._impuestosService.updateImpuesto(i.id,i).subscribe(()=>{this.showFlashMessage("success")})}deleteSelectedImpuesto(){this._fuseConfirmationService.open({title:"Delete impuesto",message:"Seguro que deseas eliminar el impuestoo? Esta acci\xf3n no se se puede desahacer!",actions:{confirm:{label:"Delete"}}}).afterClosed().subscribe(o=>{if("confirmed"===o){const r=this.selectedImpuestoForm.getRawValue();this._impuestosService.deleteImpuesto(r.id).subscribe(()=>{this.closeDetails()})}})}showFlashMessage(i){this.flashMessage=i,this._changeDetectorRef.markForCheck(),setTimeout(()=>{this.flashMessage=null,this._changeDetectorRef.markForCheck()},3e3)}trackByFn(i,o){return o.id||i}compareNombreSAT(i,o){return!!o&&i.descripcion===o}onTipoChange(i){this.selectedImpuestoForm.get("claveSAT").patchValue(i.value.clave)}}M.\u0275fac=function(i){return new(i||M)(t.Y36(t.sBO),t.Y36(j.R),t.Y36(u.qu),t.Y36(_),t.Y36(Y.K))},M.\u0275cmp=t.Xpm({type:M,selectors:[["impuestos-list"]],viewQuery:function(i,o){if(1&i&&(t.Gf(A.cl,5),t.Gf(v.YE,5)),2&i){let r;t.iGM(r=t.CRH())&&(o._paginator=r.first),t.iGM(r=t.CRH())&&(o._sort=r.first)}},decls:18,vars:9,consts:[[1,"sm:absolute","sm:inset-0","flex","flex-col","flex-auto","min-w-0","sm:overflow-hidden","bg-card","dark:bg-transparent"],[1,"relative","flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","py-8","px-6","md:px-8","border-b"],["class","absolute inset-x-0 bottom-0",4,"ngIf"],[1,"text-4xl","font-extrabold","tracking-tight"],[1,"flex","shrink-0","items-center","mt-6","sm:mt-0","sm:ml-4"],[1,"fuse-mat-dense","fuse-mat-no-subscript","fuse-mat-rounded","min-w-64"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"formControl","autocomplete","placeholder"],["class","ml-4","mat-flat-button","",3,"color","click",4,"ngIf"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-col","flex-auto","sm:mb-18","overflow-hidden","sm:overflow-y-auto"],[4,"ngIf"],["rowDetailsTemplate",""],["noImpuestos",""],[1,"absolute","inset-x-0","bottom-0"],[3,"mode"],["mat-flat-button","",1,"ml-4",3,"color","click"],[3,"svgIcon"],[1,"ml-2","mr-1"],[4,"ngIf","ngIfElse"],[1,"grid"],["matSort","","matSortDisableClear","",1,"impuesto-grid","z-10","sticky","top-0","grid","gap-4","py-4","px-6","md:px-8","shadow","text-md","font-semibold","text-secondary","bg-gray-50","dark:bg-black","dark:bg-opacity-5"],[3,"mat-sort-header"],[1,"hidden","sm:block"],[1,"sm:absolute","sm:inset-x-0","sm:bottom-0","border-b","sm:border-t","sm:border-b-0","z-10","bg-gray-50","dark:bg-transparent",3,"ngClass","length","pageIndex","pageSize","pageSizeOptions","showFirstLastButtons"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"impuesto-grid","grid","items-center","gap-4","py-3","px-6","md:px-8","border-b"],[1,"truncate"],["mat-stroked-button","",1,"min-w-10","min-h-7","h-7","px-2","leading-6",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"text-green-400","icon-size-5",3,"svgIcon"],[1,"text-gray-400","icon-size-5",3,"svgIcon"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"shadow-lg","overflow-hidden"],[1,"flex","border-b"],[1,"flex","flex-col","w-full",3,"formGroup"],[1,"flex","flex-col","sm:flex-row","p-8"],[1,"flex","flex-auto","flex-wrap"],[1,"flex","flex-col","w-full","sm:pl-8"],[1,"flex"],[1,"w-1/3","mr-4"],["matInput","",3,"formControlName"],[3,"formControlName"],[3,"value"],[3,"formControlName","compareWith","selectionChange"],[4,"ngFor","ngForOf"],["matInput","",3,"value","formControlName"],[1,"w-1/3"],[1,"w-2/3"],[1,"flex","flex-col","w-full","lg:w-1/3","sm:pl-8"],[1,"font-semibold","mb-2"],[3,"formControlName","color"],[1,"flex","justify-between","w-full","border-t","px-8","py-4"],[1,"flex","justify-start","mr-4"],["class","-ml-4","mat-button","",3,"color","click",4,"ngIf"],[1,"flex","justify-end"],["class","flex items-center mr-4",4,"ngIf"],["mat-flat-button","",3,"color","click",4,"ngIf"],["mat-button","",1,"-ml-4",3,"color","click"],[1,"flex","items-center","mr-4"],[1,"text-green-500",3,"svgIcon"],[1,"ml-2"],[1,"text-red-500",3,"svgIcon"],["mat-flat-button","",3,"color","click"],[1,"p-8","sm:p-16","border-t","text-4xl","font-semibold","tracking-tight","text-center"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,W,2,1,"div",2),t.TgZ(3,"div",3),t._uU(4,"Impuestos"),t.qZA(),t.TgZ(5,"div",4)(6,"mat-form-field",5),t._UZ(7,"mat-icon",6)(8,"input",7),t.qZA(),t.YNc(9,V,4,2,"button",8),t.qZA()(),t.TgZ(10,"div",9)(11,"div",10),t.YNc(12,ct,2,2,"ng-container",11),t.ALo(13,"async"),t.YNc(14,ft,50,18,"ng-template",null,12,t.W1O),t.YNc(16,ht,2,0,"ng-template",null,13,t.W1O),t.qZA()()()),2&i&&(t.xp6(2),t.Q6J("ngIf",o.isLoading),t.xp6(5),t.Q6J("svgIcon","heroicons_solid:search"),t.xp6(1),t.Q6J("formControl",o.searchInputControl)("autocomplete","off")("placeholder","Buscar"),t.xp6(1),t.Q6J("ngIf",o.permisos.includes("POST_IMPUESTO")),t.xp6(3),t.Q6J("ngIf",t.lcZ(13,7,o.impuestos$)))},dependencies:[S.eB,f.v_,f.$V,f.g4,e.Hw,Z.k0,A.cl,O.eI,v.YE,v.nU,D.x8,H.CK,F.iZ,P.mk,P.sg,P.O5,P.tP,u._Y,u.Fj,u.JJ,u.JL,u.oH,u.sg,u.u,P.Ov],styles:[".impuesto-grid{grid-template-columns:100px auto 150px 45px 50px}@media (min-width: 600px){.impuesto-grid{grid-template-columns:100px auto 121px 100px 50px 50px}}@media (min-width: 960px){.impuesto-grid{grid-template-columns:100px 200px auto 150px 48px 50px}}@media (min-width: 1280px){.impuesto-grid{grid-template-columns:140px 120px 100px auto 70px 60px 60px}}\n"],encapsulation:2,data:{animation:N.L},changeDetection:0});var vt=a(262);class U{constructor(i,o){this._impuestoService=i,this._router=o}resolve(i,o){return this._impuestoService.getImpuestoById(i.paramMap.get("id")).pipe((0,vt.K)(r=>{console.error(r);const p=o.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(p),(0,z._)(r)}))}}U.\u0275fac=function(i){return new(i||U)(t.LFG(_),t.LFG(y.F0))},U.\u0275prov=t.Yz7({token:U,factory:U.\u0275fac,providedIn:"root"});class x{constructor(i){this._impuestoService=i}resolve(i,o){return this._impuestoService.getImpuestos()}}x.\u0275fac=function(i){return new(i||x)(t.LFG(_))},x.\u0275prov=t.Yz7({token:x,factory:x.\u0275fac,providedIn:"root"});const xt=[{path:"",component:h,children:[{path:"",component:M,resolve:{impuestos:x}}]}];var Tt=a(4466);class T{}T.\u0275fac=function(i){return new(i||T)},T.\u0275mod=t.oAB({type:T}),T.\u0275inj=t.cJS({imports:[y.Bz.forChild(xt),S.yu,Q.Zh,f.wp,e.Ps,Z.x4,C.jT,A.gf,O.jc,b.si,v.JX,D.uw,F.Wd,E.AA,Tt.m]})},7686:(R,J,a)=>{a.d(J,{cl:()=>u,gf:()=>N});var b=a(6895),e=a(4650),S=a(3238),Q=a(9818),f=a(5208),Z=a(7462),C=a(8739),A=a(8455),O=a(4363);function D(l,g){if(1&l&&(e.TgZ(0,"mat-option",19),e._uU(1),e.qZA()),2&l){const s=g.$implicit;e.Q6J("value",s),e.xp6(1),e.hij(" ",s," ")}}function F(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"mat-form-field",16)(1,"mat-select",17),e.NdJ("selectionChange",function(m){e.CHM(s);const B=e.oxw(2);return e.KtG(B._changePageSize(m.value))}),e.YNc(2,D,2,2,"mat-option",18),e.qZA()()}if(2&l){const s=e.oxw(2);e.Q6J("appearance",s._formFieldAppearance)("color",s.color),e.xp6(1),e.Q6J("value",s.pageSize)("disabled",s.disabled)("panelClass",s.selectConfig.panelClass||"")("disableOptionCentering",s.selectConfig.disableOptionCentering)("aria-label",s._intl.itemsPerPageLabel),e.xp6(1),e.Q6J("ngForOf",s._displayedPageSizeOptions)}}function E(l,g){if(1&l&&(e.TgZ(0,"div",20),e._uU(1),e.qZA()),2&l){const s=e.oxw(2);e.xp6(1),e.Oqu(s.pageSize)}}function v(l,g){if(1&l&&(e.TgZ(0,"div",12)(1,"div",13),e._uU(2),e.qZA(),e.YNc(3,F,3,8,"mat-form-field",14),e.YNc(4,E,2,1,"div",15),e.qZA()),2&l){const s=e.oxw();e.xp6(2),e.hij(" ",s._intl.itemsPerPageLabel," "),e.xp6(1),e.Q6J("ngIf",s._displayedPageSizeOptions.length>1),e.xp6(1),e.Q6J("ngIf",s._displayedPageSizeOptions.length<=1)}}function y(l,g){if(1&l){const s=e.EpF();e.TgZ(0,"button",21),e.NdJ("click",function(){e.CHM(s);const m=e.oxw();return e.KtG(m.firstPage())}),e.O4$(),e.TgZ(1,"svg",7),e._UZ(2,"path",22),e.qZA()()}if(2&l){const s=e.oxw();e.Q6J("matTooltip",s._intl.firstPageLabel)("matTooltipDisabled",s._previousButtonsDisabled())("matTooltipPosition","above")("disabled",s._previousButtonsDisabled()),e.uIk("aria-label",s._intl.firstPageLabel)}}function t(l,g){if(1&l){const s=e.EpF();e.O4$(),e.kcU(),e.TgZ(0,"button",23),e.NdJ("click",function(){e.CHM(s);const m=e.oxw();return e.KtG(m.lastPage())}),e.O4$(),e.TgZ(1,"svg",7),e._UZ(2,"path",24),e.qZA()()}if(2&l){const s=e.oxw();e.Q6J("matTooltip",s._intl.lastPageLabel)("matTooltipDisabled",s._nextButtonsDisabled())("matTooltipPosition","above")("disabled",s._nextButtonsDisabled()),e.uIk("aria-label",s._intl.lastPageLabel)}}const h=new e.OlP("MAT_LEGACY_PAGINATOR_DEFAULT_OPTIONS");let u=(()=>{class l extends C.n7{constructor(s,c,m){super(s,c,m),m&&null!=m.formFieldAppearance&&(this._formFieldAppearance=m.formFieldAppearance)}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(C.ye),e.Y36(e.sBO),e.Y36(h,8))},l.\u0275cmp=e.Xpm({type:l,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-paginator"],inputs:{disabled:"disabled"},exportAs:["matPaginator"],features:[e.qOj],decls:14,vars:14,consts:[[1,"mat-paginator-outer-container"],[1,"mat-paginator-container"],["class","mat-paginator-page-size",4,"ngIf"],[1,"mat-paginator-range-actions"],[1,"mat-paginator-range-label"],["mat-icon-button","","type","button","class","mat-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click",4,"ngIf"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-previous",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["viewBox","0 0 24 24","focusable","false",1,"mat-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-next",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["mat-icon-button","","type","button","class","mat-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click",4,"ngIf"],[1,"mat-paginator-page-size"],[1,"mat-paginator-page-size-label"],["class","mat-paginator-page-size-select",3,"appearance","color",4,"ngIf"],["class","mat-paginator-page-size-value",4,"ngIf"],[1,"mat-paginator-page-size-select",3,"appearance","color"],[3,"value","disabled","panelClass","disableOptionCentering","aria-label","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"mat-paginator-page-size-value"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(s,c){1&s&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,v,5,3,"div",2),e.TgZ(3,"div",3)(4,"div",4),e._uU(5),e.qZA(),e.YNc(6,y,3,5,"button",5),e.TgZ(7,"button",6),e.NdJ("click",function(){return c.previousPage()}),e.O4$(),e.TgZ(8,"svg",7),e._UZ(9,"path",8),e.qZA()(),e.kcU(),e.TgZ(10,"button",9),e.NdJ("click",function(){return c.nextPage()}),e.O4$(),e.TgZ(11,"svg",7),e._UZ(12,"path",10),e.qZA()(),e.YNc(13,t,3,5,"button",11),e.qZA()()()),2&s&&(e.xp6(2),e.Q6J("ngIf",!c.hidePageSize),e.xp6(3),e.hij(" ",c._intl.getRangeLabel(c.pageIndex,c.pageSize,c.length)," "),e.xp6(1),e.Q6J("ngIf",c.showFirstLastButtons),e.xp6(1),e.Q6J("matTooltip",c._intl.previousPageLabel)("matTooltipDisabled",c._previousButtonsDisabled())("matTooltipPosition","above")("disabled",c._previousButtonsDisabled()),e.uIk("aria-label",c._intl.previousPageLabel),e.xp6(3),e.Q6J("matTooltip",c._intl.nextPageLabel)("matTooltipDisabled",c._nextButtonsDisabled())("matTooltipPosition","above")("disabled",c._nextButtonsDisabled()),e.uIk("aria-label",c._intl.nextPageLabel),e.xp6(3),e.Q6J("ngIf",c.showFirstLastButtons))},dependencies:[b.sg,b.O5,Q.eB,A.v_,f.x8,O.CK,Z.Kd],styles:[".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{display:inline-block;width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-paginator-icon{fill:CanvasText}"],encapsulation:2,changeDetection:0}),l})(),N=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({providers:[C.ik],imports:[b.ez,Q.yu,f.uw,Z.AA,S.BQ]}),l})()}}]);