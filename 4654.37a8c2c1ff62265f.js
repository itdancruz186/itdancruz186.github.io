"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[4654],{4654:(Te,ne,u)=>{u.d(ne,{pN:()=>D,hD:()=>Y,O_:()=>p,Kb:()=>y,fo:()=>C,QJ:()=>Q,Z4:()=>H,qM:()=>J,fe:()=>T,Af:()=>A,D5:()=>k,xN:()=>K,s$:()=>b,r2:()=>P,_J:()=>ee,Sq:()=>I,zC:()=>U,HT:()=>ve,Hx:()=>oe,T$:()=>O,$E:()=>E,FT:()=>M,bH:()=>x,pF:()=>Z,nl:()=>L,oF:()=>q});var ie=u(445),v=u(1281),m=u(5017),re=u(3353),$=u(7376),le=u(6895),t=u(4650),j=u(7579),ce=u(2076),ae=u(1135),de=u(9751),W=u(576),z=u(9646),g=u(2722),V=u(5698);const fe=[[["caption"]],[["colgroup"],["col"]]],he=["caption","colgroup, col"];function _e(o,i){if(1&o&&(t.TgZ(0,"th",3),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.Udp("text-align",e.justify),t.xp6(1),t.hij(" ",e.headerText," ")}}function we(o,i){if(1&o&&(t.TgZ(0,"td",4),t._uU(1),t.qZA()),2&o){const e=i.$implicit,s=t.oxw();t.Udp("text-align",s.justify),t.xp6(1),t.hij(" ",s.dataAccessor(e,s.name)," ")}}function N(o){return class extends o{constructor(...i){super(...i),this._sticky=!1,this._hasStickyChanged=!1}get sticky(){return this._sticky}set sticky(i){const e=this._sticky;this._sticky=(0,v.Ig)(i),this._hasStickyChanged=e!==this._sticky}hasStickyChanged(){const i=this._hasStickyChanged;return this._hasStickyChanged=!1,i}resetStickyChanged(){this._hasStickyChanged=!1}}}const D=new t.OlP("CDK_TABLE"),me=new t.OlP("text-column-options");let p=(()=>{class o{constructor(e){this.template=e}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.Rgc))},o.\u0275dir=t.lG2({type:o,selectors:[["","cdkCellDef",""]]}),o})(),k=(()=>{class o{constructor(e){this.template=e}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.Rgc))},o.\u0275dir=t.lG2({type:o,selectors:[["","cdkHeaderCellDef",""]]}),o})(),H=(()=>{class o{constructor(e){this.template=e}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.Rgc))},o.\u0275dir=t.lG2({type:o,selectors:[["","cdkFooterCellDef",""]]}),o})();class Ce{}const Re=N(Ce);let C=(()=>{class o extends Re{constructor(e){super(),this._table=e,this._stickyEnd=!1}get name(){return this._name}set name(e){this._setNameInput(e)}get stickyEnd(){return this._stickyEnd}set stickyEnd(e){const s=this._stickyEnd;this._stickyEnd=(0,v.Ig)(e),this._hasStickyChanged=s!==this._stickyEnd}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(D,8))},o.\u0275dir=t.lG2({type:o,selectors:[["","cdkColumnDef",""]],contentQueries:function(e,s,n){if(1&e&&(t.Suo(n,p,5),t.Suo(n,k,5),t.Suo(n,H,5)),2&e){let r;t.iGM(r=t.CRH())&&(s.cell=r.first),t.iGM(r=t.CRH())&&(s.headerCell=r.first),t.iGM(r=t.CRH())&&(s.footerCell=r.first)}},inputs:{sticky:"sticky",name:["cdkColumnDef","name"],stickyEnd:"stickyEnd"},features:[t._Bn([{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:o}]),t.qOj]}),o})();class B{constructor(i,e){e.nativeElement.classList.add(...i._columnCssClassName)}}let A=(()=>{class o extends B{constructor(e,s){super(e,s)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(C),t.Y36(t.SBq))},o.\u0275dir=t.lG2({type:o,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[t.qOj]}),o})(),Q=(()=>{class o extends B{constructor(e,s){if(super(e,s),1===e._table?._elementRef.nativeElement.nodeType){const n=e._table._elementRef.nativeElement.getAttribute("role");s.nativeElement.setAttribute("role","grid"===n||"treegrid"===n?"gridcell":"cell")}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(C),t.Y36(t.SBq))},o.\u0275dir=t.lG2({type:o,selectors:[["cdk-footer-cell"],["td","cdk-footer-cell",""]],hostAttrs:[1,"cdk-footer-cell"],features:[t.qOj]}),o})(),Y=(()=>{class o extends B{constructor(e,s){if(super(e,s),1===e._table?._elementRef.nativeElement.nodeType){const n=e._table._elementRef.nativeElement.getAttribute("role");s.nativeElement.setAttribute("role","grid"===n||"treegrid"===n?"gridcell":"cell")}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(C),t.Y36(t.SBq))},o.\u0275dir=t.lG2({type:o,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[t.qOj]}),o})();class X{constructor(){this.tasks=[],this.endTasks=[]}}const L=new t.OlP("_COALESCED_STYLE_SCHEDULER");let q=(()=>{class o{constructor(e){this._ngZone=e,this._currentSchedule=null,this._destroyed=new j.x}schedule(e){this._createScheduleIfNeeded(),this._currentSchedule.tasks.push(e)}scheduleEnd(e){this._createScheduleIfNeeded(),this._currentSchedule.endTasks.push(e)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_createScheduleIfNeeded(){this._currentSchedule||(this._currentSchedule=new X,this._getScheduleObservable().pipe((0,g.R)(this._destroyed)).subscribe(()=>{for(;this._currentSchedule.tasks.length||this._currentSchedule.endTasks.length;){const e=this._currentSchedule;this._currentSchedule=new X;for(const s of e.tasks)s();for(const s of e.endTasks)s()}this._currentSchedule=null}))}_getScheduleObservable(){return this._ngZone.isStable?(0,ce.D)(Promise.resolve(void 0)):this._ngZone.onStable.pipe((0,V.q)(1))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(t.R0b))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})(),G=(()=>{class o{constructor(e,s){this.template=e,this._differs=s}ngOnChanges(e){if(!this._columnsDiffer){const s=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(s).create(),this._columnsDiffer.diff(s)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof b?e.headerCell.template:this instanceof T?e.footerCell.template:e.cell.template}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.Rgc),t.Y36(t.ZZ4))},o.\u0275dir=t.lG2({type:o,features:[t.TTD]}),o})();class ye extends G{}const De=N(ye);let b=(()=>{class o extends De{constructor(e,s,n){super(e,s),this._table=n}ngOnChanges(e){super.ngOnChanges(e)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.Rgc),t.Y36(t.ZZ4),t.Y36(D,8))},o.\u0275dir=t.lG2({type:o,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:["cdkHeaderRowDef","columns"],sticky:["cdkHeaderRowDefSticky","sticky"]},features:[t.qOj,t.TTD]}),o})();class ge extends G{}const pe=N(ge);let T=(()=>{class o extends pe{constructor(e,s,n){super(e,s),this._table=n}ngOnChanges(e){super.ngOnChanges(e)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.Rgc),t.Y36(t.ZZ4),t.Y36(D,8))},o.\u0275dir=t.lG2({type:o,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:["cdkFooterRowDef","columns"],sticky:["cdkFooterRowDefSticky","sticky"]},features:[t.qOj,t.TTD]}),o})(),I=(()=>{class o extends G{constructor(e,s,n){super(e,s),this._table=n}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.Rgc),t.Y36(t.ZZ4),t.Y36(D,8))},o.\u0275dir=t.lG2({type:o,selectors:[["","cdkRowDef",""]],inputs:{columns:["cdkRowDefColumns","columns"],when:["cdkRowDefWhen","when"]},features:[t.qOj]}),o})(),y=(()=>{class o{constructor(e){this._viewContainer=e,o.mostRecentCellOutlet=this}ngOnDestroy(){o.mostRecentCellOutlet===this&&(o.mostRecentCellOutlet=null)}}return o.mostRecentCellOutlet=null,o.\u0275fac=function(e){return new(e||o)(t.Y36(t.s_b))},o.\u0275dir=t.lG2({type:o,selectors:[["","cdkCellOutlet",""]]}),o})(),K=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,s){1&e&&t.GkF(0,0)},dependencies:[y],encapsulation:2}),o})(),J=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["cdk-footer-row"],["tr","cdk-footer-row",""]],hostAttrs:["role","row",1,"cdk-footer-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,s){1&e&&t.GkF(0,0)},dependencies:[y],encapsulation:2}),o})(),ee=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,s){1&e&&t.GkF(0,0)},dependencies:[y],encapsulation:2}),o})(),P=(()=>{class o{constructor(e){this.templateRef=e,this._contentClassName="cdk-no-data-row"}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.Rgc))},o.\u0275dir=t.lG2({type:o,selectors:[["ng-template","cdkNoDataRow",""]]}),o})();const te=["top","bottom","left","right"];class ke{constructor(i,e,s,n,r=!0,l=!0,c){this._isNativeHtmlTable=i,this._stickCellCss=e,this.direction=s,this._coalescedStyleScheduler=n,this._isBrowser=r,this._needsPositionStickyOnElement=l,this._positionListener=c,this._cachedCellWidths=[],this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(i,e){const s=[];for(const n of i)if(n.nodeType===n.ELEMENT_NODE){s.push(n);for(let r=0;r<n.children.length;r++)s.push(n.children[r])}this._coalescedStyleScheduler.schedule(()=>{for(const n of s)this._removeStickyStyle(n,e)})}updateStickyColumns(i,e,s,n=!0){if(!i.length||!this._isBrowser||!e.some(f=>f)&&!s.some(f=>f))return void(this._positionListener&&(this._positionListener.stickyColumnsUpdated({sizes:[]}),this._positionListener.stickyEndColumnsUpdated({sizes:[]})));const r=i[0],l=r.children.length,c=this._getCellWidths(r,n),a=this._getStickyStartColumnPositions(c,e),w=this._getStickyEndColumnPositions(c,s),d=e.lastIndexOf(!0),_=s.indexOf(!0);this._coalescedStyleScheduler.schedule(()=>{const f="rtl"===this.direction,R=f?"right":"left",be=f?"left":"right";for(const S of i)for(let h=0;h<l;h++){const se=S.children[h];e[h]&&this._addStickyStyle(se,R,a[h],h===d),s[h]&&this._addStickyStyle(se,be,w[h],h===_)}this._positionListener&&(this._positionListener.stickyColumnsUpdated({sizes:-1===d?[]:c.slice(0,d+1).map((S,h)=>e[h]?S:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:-1===_?[]:c.slice(_).map((S,h)=>s[h+_]?S:null).reverse()}))})}stickRows(i,e,s){if(!this._isBrowser)return;const n="bottom"===s?i.slice().reverse():i,r="bottom"===s?e.slice().reverse():e,l=[],c=[],a=[];for(let d=0,_=0;d<n.length;d++){if(!r[d])continue;l[d]=_;const f=n[d];a[d]=this._isNativeHtmlTable?Array.from(f.children):[f];const R=f.getBoundingClientRect().height;_+=R,c[d]=R}const w=r.lastIndexOf(!0);this._coalescedStyleScheduler.schedule(()=>{for(let d=0;d<n.length;d++){if(!r[d])continue;const _=l[d],f=d===w;for(const R of a[d])this._addStickyStyle(R,s,_,f)}"top"===s?this._positionListener?.stickyHeaderRowsUpdated({sizes:c,offsets:l,elements:a}):this._positionListener?.stickyFooterRowsUpdated({sizes:c,offsets:l,elements:a})})}updateStickyFooterContainer(i,e){if(!this._isNativeHtmlTable)return;const s=i.querySelector("tfoot");this._coalescedStyleScheduler.schedule(()=>{e.some(n=>!n)?this._removeStickyStyle(s,["bottom"]):this._addStickyStyle(s,"bottom",0,!1)})}_removeStickyStyle(i,e){for(const n of e)i.style[n]="",i.classList.remove(this._borderCellCss[n]);te.some(n=>-1===e.indexOf(n)&&i.style[n])?i.style.zIndex=this._getCalculatedZIndex(i):(i.style.zIndex="",this._needsPositionStickyOnElement&&(i.style.position=""),i.classList.remove(this._stickCellCss))}_addStickyStyle(i,e,s,n){i.classList.add(this._stickCellCss),n&&i.classList.add(this._borderCellCss[e]),i.style[e]=`${s}px`,i.style.zIndex=this._getCalculatedZIndex(i),this._needsPositionStickyOnElement&&(i.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(i){const e={top:100,bottom:10,left:1,right:1};let s=0;for(const n of te)i.style[n]&&(s+=e[n]);return s?`${s}`:""}_getCellWidths(i,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;const s=[],n=i.children;for(let r=0;r<n.length;r++)s.push(n[r].getBoundingClientRect().width);return this._cachedCellWidths=s,s}_getStickyStartColumnPositions(i,e){const s=[];let n=0;for(let r=0;r<i.length;r++)e[r]&&(s[r]=n,n+=i[r]);return s}_getStickyEndColumnPositions(i,e){const s=[];let n=0;for(let r=i.length;r>0;r--)e[r]&&(s[r]=n,n+=i[r]);return s}}const Z=new t.OlP("CDK_SPL");let O=(()=>{class o{constructor(e,s){this.viewContainer=e,this.elementRef=s}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.s_b),t.Y36(t.SBq))},o.\u0275dir=t.lG2({type:o,selectors:[["","rowOutlet",""]]}),o})(),M=(()=>{class o{constructor(e,s){this.viewContainer=e,this.elementRef=s}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.s_b),t.Y36(t.SBq))},o.\u0275dir=t.lG2({type:o,selectors:[["","headerRowOutlet",""]]}),o})(),E=(()=>{class o{constructor(e,s){this.viewContainer=e,this.elementRef=s}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.s_b),t.Y36(t.SBq))},o.\u0275dir=t.lG2({type:o,selectors:[["","footerRowOutlet",""]]}),o})(),x=(()=>{class o{constructor(e,s){this.viewContainer=e,this.elementRef=s}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.s_b),t.Y36(t.SBq))},o.\u0275dir=t.lG2({type:o,selectors:[["","noDataRowOutlet",""]]}),o})(),U=(()=>{class o{constructor(e,s,n,r,l,c,a,w,d,_,f,R){this._differs=e,this._changeDetectorRef=s,this._elementRef=n,this._dir=l,this._platform=a,this._viewRepeater=w,this._coalescedStyleScheduler=d,this._viewportRuler=_,this._stickyPositioningListener=f,this._ngZone=R,this._onDestroy=new j.x,this._columnDefsByName=new Map,this._customColumnDefs=new Set,this._customRowDefs=new Set,this._customHeaderRowDefs=new Set,this._customFooterRowDefs=new Set,this._headerRowDefChanged=!0,this._footerRowDefChanged=!0,this._stickyColumnStylesNeedReset=!0,this._forceRecalculateCellWidths=!0,this._cachedRenderRowsMap=new Map,this.stickyCssClass="cdk-table-sticky",this.needsPositionStickyOnElement=!0,this._isShowingNoDataRow=!1,this._multiTemplateDataRows=!1,this._fixedLayout=!1,this.contentChanged=new t.vpe,this.viewChange=new ae.X({start:0,end:Number.MAX_VALUE}),r||this._elementRef.nativeElement.setAttribute("role","table"),this._document=c,this._isNativeHtmlTable="TABLE"===this._elementRef.nativeElement.nodeName}get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&this._switchDataSource(e)}get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=(0,v.Ig)(e),this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}get fixedLayout(){return this._fixedLayout}set fixedLayout(e){this._fixedLayout=(0,v.Ig)(e),this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}ngOnInit(){this._setupStickyStyler(),this._isNativeHtmlTable&&this._applyNativeTableSections(),this._dataDiffer=this._differs.find([]).create((e,s)=>this.trackBy?this.trackBy(s.dataIndex,s.data):s),this._viewportRuler.change().pipe((0,g.R)(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentChecked(){this._cacheRowDefs(),this._cacheColumnDefs();const s=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||s,this._forceRecalculateCellWidths=s,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}ngOnDestroy(){[this._rowOutlet.viewContainer,this._headerRowOutlet.viewContainer,this._footerRowOutlet.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._onDestroy.next(),this._onDestroy.complete(),(0,m.Z9)(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();const e=this._dataDiffer.diff(this._renderRows);if(!e)return this._updateNoDataRow(),void this.contentChanged.next();const s=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,s,(n,r,l)=>this._getEmbeddedViewArgs(n.item,l),n=>n.item.data,n=>{1===n.operation&&n.context&&this._renderCellTemplateForItem(n.record.item.rowDef,n.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(n=>{s.get(n.currentIndex).context.$implicit=n.item.data}),this._updateNoDataRow(),this._ngZone&&t.R0b.isInAngularZone()?this._ngZone.onStable.pipe((0,V.q)(1),(0,g.R)(this._onDestroy)).subscribe(()=>{this.updateStickyColumnStyles()}):this.updateStickyColumnStyles(),this.contentChanged.next()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){const e=this._getRenderedRows(this._headerRowOutlet),n=this._elementRef.nativeElement.querySelector("thead");n&&(n.style.display=e.length?"":"none");const r=this._headerRowDefs.map(l=>l.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,r,"top"),this._headerRowDefs.forEach(l=>l.resetStickyChanged())}updateStickyFooterRowStyles(){const e=this._getRenderedRows(this._footerRowOutlet),n=this._elementRef.nativeElement.querySelector("tfoot");n&&(n.style.display=e.length?"":"none");const r=this._footerRowDefs.map(l=>l.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,r,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,r),this._footerRowDefs.forEach(l=>l.resetStickyChanged())}updateStickyColumnStyles(){const e=this._getRenderedRows(this._headerRowOutlet),s=this._getRenderedRows(this._rowOutlet),n=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this._fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...s,...n],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((r,l)=>{this._addStickyColumnStyles([r],this._headerRowDefs[l])}),this._rowDefs.forEach(r=>{const l=[];for(let c=0;c<s.length;c++)this._renderRows[c].rowDef===r&&l.push(s[c]);this._addStickyColumnStyles(l,r)}),n.forEach((r,l)=>{this._addStickyColumnStyles([r],this._footerRowDefs[l])}),Array.from(this._columnDefsByName.values()).forEach(r=>r.resetStickyChanged())}_getAllRenderRows(){const e=[],s=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let n=0;n<this._data.length;n++){let r=this._data[n];const l=this._getRenderRowsForData(r,n,s.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(let c=0;c<l.length;c++){let a=l[c];const w=this._cachedRenderRowsMap.get(a.data);w.has(a.rowDef)?w.get(a.rowDef).push(a):w.set(a.rowDef,[a]),e.push(a)}}return e}_getRenderRowsForData(e,s,n){return this._getRowDefs(e,s).map(l=>{const c=n&&n.has(l)?n.get(l):[];if(c.length){const a=c.shift();return a.dataIndex=s,a}return{data:e,rowDef:l,dataIndex:s}})}_cacheColumnDefs(){this._columnDefsByName.clear(),F(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(s=>{this._columnDefsByName.has(s.name),this._columnDefsByName.set(s.name,s)})}_cacheRowDefs(){this._headerRowDefs=F(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=F(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=F(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);const e=this._rowDefs.filter(s=>!s.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){const e=(l,c)=>l||!!c.getColumnsDiff(),s=this._rowDefs.reduce(e,!1);s&&this._forceRenderDataRows();const n=this._headerRowDefs.reduce(e,!1);n&&this._forceRenderHeaderRows();const r=this._footerRowDefs.reduce(e,!1);return r&&this._forceRenderFooterRows(),s||n||r}_switchDataSource(e){this._data=[],(0,m.Z9)(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;(0,m.Z9)(this.dataSource)?e=this.dataSource.connect(this):function ue(o){return!!o&&(o instanceof de.y||(0,W.m)(o.lift)&&(0,W.m)(o.subscribe))}(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=(0,z.of)(this.dataSource)),this._renderChangeSubscription=e.pipe((0,g.R)(this._onDestroy)).subscribe(s=>{this._data=s||[],this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,s)=>this._renderRow(this._headerRowOutlet,e,s)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,s)=>this._renderRow(this._footerRowOutlet,e,s)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,s){const n=Array.from(s.columns||[]).map(c=>this._columnDefsByName.get(c)),r=n.map(c=>c.sticky),l=n.map(c=>c.stickyEnd);this._stickyStyler.updateStickyColumns(e,r,l,!this._fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){const s=[];for(let n=0;n<e.viewContainer.length;n++){const r=e.viewContainer.get(n);s.push(r.rootNodes[0])}return s}_getRowDefs(e,s){if(1==this._rowDefs.length)return[this._rowDefs[0]];let n=[];if(this.multiTemplateDataRows)n=this._rowDefs.filter(r=>!r.when||r.when(s,e));else{let r=this._rowDefs.find(l=>l.when&&l.when(s,e))||this._defaultRowDef;r&&n.push(r)}return n}_getEmbeddedViewArgs(e,s){return{templateRef:e.rowDef.template,context:{$implicit:e.data},index:s}}_renderRow(e,s,n,r={}){const l=e.viewContainer.createEmbeddedView(s.template,r,n);return this._renderCellTemplateForItem(s,r),l}_renderCellTemplateForItem(e,s){for(let n of this._getCellTemplates(e))y.mostRecentCellOutlet&&y.mostRecentCellOutlet._viewContainer.createEmbeddedView(n,s);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){const e=this._rowOutlet.viewContainer;for(let s=0,n=e.length;s<n;s++){const l=e.get(s).context;l.count=n,l.first=0===s,l.last=s===n-1,l.even=s%2==0,l.odd=!l.even,this.multiTemplateDataRows?(l.dataIndex=this._renderRows[s].dataIndex,l.renderIndex=s):l.index=this._renderRows[s].dataIndex}}_getCellTemplates(e){return e&&e.columns?Array.from(e.columns,s=>{const n=this._columnDefsByName.get(s);return e.extractCellTemplate(n)}):[]}_applyNativeTableSections(){const e=this._document.createDocumentFragment(),s=[{tag:"thead",outlets:[this._headerRowOutlet]},{tag:"tbody",outlets:[this._rowOutlet,this._noDataRowOutlet]},{tag:"tfoot",outlets:[this._footerRowOutlet]}];for(const n of s){const r=this._document.createElement(n.tag);r.setAttribute("role","rowgroup");for(const l of n.outlets)r.appendChild(l.elementRef.nativeElement);e.appendChild(r)}this._elementRef.nativeElement.appendChild(e)}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){const e=(s,n)=>s||n.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){this._stickyStyler=new ke(this._isNativeHtmlTable,this.stickyCssClass,this._dir?this._dir.value:"ltr",this._coalescedStyleScheduler,this._platform.isBrowser,this.needsPositionStickyOnElement,this._stickyPositioningListener),(this._dir?this._dir.change:(0,z.of)()).pipe((0,g.R)(this._onDestroy)).subscribe(s=>{this._stickyStyler.direction=s,this.updateStickyColumnStyles()})}_getOwnDefs(e){return e.filter(s=>!s._table||s._table===this)}_updateNoDataRow(){const e=this._customNoDataRow||this._noDataRow;if(!e)return;const s=0===this._rowOutlet.viewContainer.length;if(s===this._isShowingNoDataRow)return;const n=this._noDataRowOutlet.viewContainer;if(s){const r=n.createEmbeddedView(e.templateRef),l=r.rootNodes[0];1===r.rootNodes.length&&l?.nodeType===this._document.ELEMENT_NODE&&(l.setAttribute("role","row"),l.classList.add(e._contentClassName))}else n.clear();this._isShowingNoDataRow=s}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.ZZ4),t.Y36(t.sBO),t.Y36(t.SBq),t.$8M("role"),t.Y36(ie.Is,8),t.Y36(le.K0),t.Y36(re.t4),t.Y36(m.k),t.Y36(L),t.Y36($.rL),t.Y36(Z,12),t.Y36(t.R0b,8))},o.\u0275cmp=t.Xpm({type:o,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(e,s,n){if(1&e&&(t.Suo(n,P,5),t.Suo(n,C,5),t.Suo(n,I,5),t.Suo(n,b,5),t.Suo(n,T,5)),2&e){let r;t.iGM(r=t.CRH())&&(s._noDataRow=r.first),t.iGM(r=t.CRH())&&(s._contentColumnDefs=r),t.iGM(r=t.CRH())&&(s._contentRowDefs=r),t.iGM(r=t.CRH())&&(s._contentHeaderRowDefs=r),t.iGM(r=t.CRH())&&(s._contentFooterRowDefs=r)}},viewQuery:function(e,s){if(1&e&&(t.Gf(O,7),t.Gf(M,7),t.Gf(E,7),t.Gf(x,7)),2&e){let n;t.iGM(n=t.CRH())&&(s._rowOutlet=n.first),t.iGM(n=t.CRH())&&(s._headerRowOutlet=n.first),t.iGM(n=t.CRH())&&(s._footerRowOutlet=n.first),t.iGM(n=t.CRH())&&(s._noDataRowOutlet=n.first)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(e,s){2&e&&t.ekj("cdk-table-fixed-layout",s.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:"multiTemplateDataRows",fixedLayout:"fixedLayout"},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[t._Bn([{provide:D,useExisting:o},{provide:m.k,useClass:m.yy},{provide:L,useClass:q},{provide:Z,useValue:null}])],ngContentSelectors:he,decls:6,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(e,s){1&e&&(t.F$t(fe),t.Hsn(0),t.Hsn(1,1),t.GkF(2,0)(3,1)(4,2)(5,3))},dependencies:[O,M,E,x],styles:[".cdk-table-fixed-layout{table-layout:fixed}"],encapsulation:2}),o})();function F(o,i){return o.concat(Array.from(i))}let oe=(()=>{class o{constructor(e,s){this._table=e,this._options=s,this.justify="start",this._options=s||{}}get name(){return this._name}set name(e){this._name=e,this._syncColumnDefName()}ngOnInit(){this._syncColumnDefName(),void 0===this.headerText&&(this.headerText=this._createDefaultHeaderText()),this.dataAccessor||(this.dataAccessor=this._options.defaultDataAccessor||((e,s)=>e[s])),this._table&&(this.columnDef.cell=this.cell,this.columnDef.headerCell=this.headerCell,this._table.addColumnDef(this.columnDef))}ngOnDestroy(){this._table&&this._table.removeColumnDef(this.columnDef)}_createDefaultHeaderText(){const e=this.name;return this._options&&this._options.defaultHeaderTextTransform?this._options.defaultHeaderTextTransform(e):e[0].toUpperCase()+e.slice(1)}_syncColumnDefName(){this.columnDef&&(this.columnDef.name=this.name)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(U,8),t.Y36(me,8))},o.\u0275cmp=t.Xpm({type:o,selectors:[["cdk-text-column"]],viewQuery:function(e,s){if(1&e&&(t.Gf(C,7),t.Gf(p,7),t.Gf(k,7)),2&e){let n;t.iGM(n=t.CRH())&&(s.columnDef=n.first),t.iGM(n=t.CRH())&&(s.cell=n.first),t.iGM(n=t.CRH())&&(s.headerCell=n.first)}},inputs:{name:"name",headerText:"headerText",dataAccessor:"dataAccessor",justify:"justify"},decls:3,vars:0,consts:[["cdkColumnDef",""],["cdk-header-cell","",3,"text-align",4,"cdkHeaderCellDef"],["cdk-cell","",3,"text-align",4,"cdkCellDef"],["cdk-header-cell",""],["cdk-cell",""]],template:function(e,s){1&e&&(t.ynx(0,0),t.YNc(1,_e,2,3,"th",1),t.YNc(2,we,2,3,"td",2),t.BQk())},dependencies:[p,k,C,Y,A],encapsulation:2}),o})(),ve=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[$.Cl]}),o})()}}]);