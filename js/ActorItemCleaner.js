const _0x476a=['_list','fa-trash','.search','render','find','.veapp__list','\x20data\x20will\x20be\x20permanently\x20deleted.</p>','EVNT_VALCHANGE','filterBox','[name=btn-filter]','name','bindSelectAllCheckbox','absorbFnGetData','\x20and\x20','_$btnReset','Item\x20Cleaner','bind','notifications','items','_handleFilterChange','tool-actor-item-cleaner','input','doAbsorbItems','click','getData','toDisplay','values','initBtnSortHandlers','Delete','getValues','_rows','\x20item','_actor','_$iptSearch','checked','pGetConfirmation','prop','val','close','forEach','pInitFilterBox','length','deleteEmbeddedEntity','_pageFilter','type','reset','activateListeners','data','_activateListeners_initListAndFilters','_activateListeners_initBtnReset','_activateListeners_initBtnRun','its','map','ele','filter','then','pHandleButtonClick','MODULE_LOCATION','[data-name=\x22wrp-btns-sort\x22]','teardown'];(function(_0x564474,_0x476ac2){const _0x572e4a=function(_0x88e7c3){while(--_0x88e7c3){_0x564474['push'](_0x564474['shift']());}};_0x572e4a(++_0x476ac2);}(_0x476a,0x1ce));const _0x572e=function(_0x564474,_0x476ac2){_0x564474=_0x564474-0x0;let _0x572e4a=_0x476a[_0x564474];return _0x572e4a;};'use strict';import{SharedConsts}from'../shared/SharedConsts.js';import{UtilApplications}from'./UtilApplications.js';import{UtilList2}from'./UtilList2.js';import{AppFilterBasic}from'./FilterApplications.js';import{Util}from'./Util.js';class ActorItemCleaner extends Application{static[_0x572e('0xe')](_0x423415,_0x28af50,_0x19f83b,_0x1d85a2){const _0x4e51ae=new ActorItemCleaner(_0x28af50['actor']);_0x4e51ae[_0x572e('0x15')](!![]);}constructor(_0xbe7a1){super({'title':_0x572e('0x21'),'template':SharedConsts[_0x572e('0xf')]+'/template/ActorItemCleaner.handlebars','width':0x1e0,'height':Util['getMaxWindowHeight'](),'resizable':!![]});this[_0x572e('0x32')]=_0xbe7a1;this['_pageFilter']=new AppFilterBasic();this['_list']=null;this[_0x572e('0x20')]=null;this[_0x572e('0x33')]=null;}[_0x572e('0x25')](){const _0x38a7b3=this[_0x572e('0x1')][_0x572e('0x1a')][_0x572e('0x2f')]();this['_list'][_0x572e('0xc')](_0x126d73=>this['_pageFilter'][_0x572e('0x2b')](_0x38a7b3,this[_0x572e('0x30')][_0x126d73['ix']]));}['activateListeners'](_0x16d553){super[_0x572e('0x4')](_0x16d553);this[_0x572e('0x8')](_0x16d553);this[_0x572e('0x7')](_0x16d553);this[_0x572e('0x6')](_0x16d553);}[_0x572e('0x8')](_0x33b521){_0x33b521[_0x572e('0x16')]('[name=\x22btn-run\x22]')[_0x572e('0x29')](async()=>{if(!this[_0x572e('0x12')])return;const _0x51b3d9=this['_list'][_0x572e('0x24')][_0x572e('0xc')](_0x4925fa=>$(_0x4925fa[_0x572e('0xb')])[_0x572e('0x16')](_0x572e('0x27'))[_0x572e('0x36')](_0x572e('0x34')))[_0x572e('0xa')](_0x2fe107=>({'name':_0x2fe107[_0x572e('0x1c')],'id':_0x2fe107[_0x572e('0x2c')]['id']}));const _0x3c7ebf=_0x51b3d9[_0x572e('0x3b')]!==0x1?'s':'';const _0x8ee741=await UtilApplications[_0x572e('0x35')]({'title':'Delete\x20Item'+_0x3c7ebf,'content':'<h3>Are\x20you\x20sure?</h3><p>'+_0x51b3d9[_0x572e('0x3b')]+_0x572e('0x31')+_0x3c7ebf+_0x572e('0x1f')+(_0x3c7ebf?'their':_0x572e('0x9'))+_0x572e('0x18'),'confirmText':_0x572e('0x2e'),'faIcon':_0x572e('0x13')});if(!_0x8ee741)return;this[_0x572e('0x38')]();await this['_actor'][_0x572e('0x0')]('OwnedItem',_0x51b3d9[_0x572e('0xa')](_0x381816=>_0x381816['id']));ui[_0x572e('0x23')]['info']('Deleted\x20'+_0x51b3d9['length']+_0x572e('0x31')+(_0x51b3d9['length']===0x1?'':'s'));});}[_0x572e('0x7')](_0x5aa416){this[_0x572e('0x20')]=_0x5aa416[_0x572e('0x16')]('[name=\x22btn-reset\x22]')[_0x572e('0x29')](()=>{_0x5aa416[_0x572e('0x16')](_0x572e('0x14'))[_0x572e('0x37')]('');if(this['_list'])this[_0x572e('0x12')][_0x572e('0x3')]();});}[_0x572e('0x6')](_0x3a474c){this[_0x572e('0x33')]=_0x3a474c['find'](_0x572e('0x14'));this[_0x572e('0x12')]=new List({'$iptSearch':this[_0x572e('0x33')],'$wrpList':_0x3a474c[_0x572e('0x16')](_0x572e('0x17'))});SortUtil[_0x572e('0x2d')](_0x3a474c['find'](_0x572e('0x10')),this[_0x572e('0x12')]);ModalFilter[_0x572e('0x1d')](_0x3a474c[_0x572e('0x16')]('[name=\x22cb-select-all\x22]'),this[_0x572e('0x12')]);this[_0x572e('0x1')][_0x572e('0x3a')]({'$iptSearch':this[_0x572e('0x33')],'$btnReset':this[_0x572e('0x20')],'$btnOpen':_0x3a474c['find'](_0x572e('0x1b')),'$btnToggleSummaryHidden':_0x3a474c['find']('[name=btn-toggle-summary]'),'$wrpMiniPills':_0x3a474c[_0x572e('0x16')]('.fltr__mini-view'),'namespace':_0x572e('0x26')})[_0x572e('0xd')](()=>{this[_0x572e('0x30')][_0x572e('0x39')](_0x100a95=>this[_0x572e('0x1')]['addToFilters'](_0x100a95));this[_0x572e('0x12')][_0x572e('0x28')](this[_0x572e('0x30')],{'fnGetName':_0x42d414=>_0x42d414[_0x572e('0x1c')],'fnGetValues':_0xad78c2=>({'id':_0xad78c2['id']}),'fnGetData':UtilList2[_0x572e('0x1e')],'fnBindListeners':_0x23069d=>UtilList2['absorbFnBindListeners'](this[_0x572e('0x12')],_0x23069d)});this[_0x572e('0x12')]['init']();this[_0x572e('0x1')]['filterBox']['render']();$(this[_0x572e('0x1')][_0x572e('0x1a')])['on'](FilterBox[_0x572e('0x19')],this[_0x572e('0x25')][_0x572e('0x22')](this));this[_0x572e('0x25')]();});}[_0x572e('0x2a')](){this['_rows']=this[_0x572e('0x32')][_0x572e('0x24')][_0x572e('0xa')]((_0x153bd7,_0x20e5c0)=>({'name':_0x153bd7[_0x572e('0x1c')],'id':_0x153bd7['id'],'type':MiscUtil['get'](_0x153bd7,_0x572e('0x5'),_0x572e('0x2')),'ix':_0x20e5c0}));return{...super[_0x572e('0x2a')](),'rows':this[_0x572e('0x30')]};}[_0x572e('0x38')](..._0x334a1c){super[_0x572e('0x38')](..._0x334a1c);this[_0x572e('0x1')][_0x572e('0x11')]();}}export{ActorItemCleaner};