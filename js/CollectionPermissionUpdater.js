const _0x165b=['addEventListener','ele','allPlayerPermissions','label[data-permu-type=\x22lbl-player-all-entities\x22]','push','bind','...','input[data-permu-player-id]','disabled','.veapp__list','toDisplay','checked','Fvtt','label[data-permu-type=\x22lbl-entity-player\x22]','click','_pHandleBtnClick_reset','DUR_INLINE_NOTIFY','style','Updating\x20','text','visibleItems','Please\x20make\x20some\x20changes\x20first!','prop','Save','permission','folder','_$iptSearch','find','close','setAttribute','_collectionName','input[name=\x22permu__cb-each-player-all-entities\x22]','_pUpdateItemPermissions','items','scroll','users','getPermissionsEnum','findIndex','_collection','_pageFilter','getData','select[data-permu-type=\x22sel-player-all-entities\x22]','value','cbsPlayers','_$cbEach','_setMassAllPlayerCheckboxValues','SELECT','doAbsorbItems','_list','.permu__row-ent','_$rowMass','_entities','entities','mergeMap','input','getMaxWindowHeight','allPlayerUpdate','_$cbAll','pRunTasks','Saving...','getValues','tagName','.permu__cell-ent-name','playerPermissions','_handleFilterChange','_$btnReset','data','unknown','selsPlayers','.search','ascSortLowerSafe','render','name','target','select[data-permu-type=\x22sel-entity\x22]','data-permu-player-id','label[data-permu-type=\x22lbl-entity-all-players\x22]','/template/CollectionPermissionUpdater.handlebars','_pHandleBtnClick_run','.permu__cell-player','notifications','children','length','Collection\x20Permission\x20Updater','map','Updating...','_setMassCheckboxValues','[name=btn-filter]','closest','teardown','slice','left','select[data-permu-type=\x22sel-entity-each-player\x22]','filterBox','_players','default','select[data-permu-type=\x22sel-entity-all-players\x22]','metasPlayerUpdates','values','getFolderPath','input[name=\x22permu__cb-all-players-all-entities\x22]','_sortEntities','[name=\x22btn-reset\x22]','val','selAllPlayers','EVNT_VALCHANGE','attr','forEach','pInitFilterBox','entityMeta','handleSelectClick','[name=btn-toggle-summary]','get','update','_$btnRun','scrollLeft','then','tool-permissions_','type','Updated\x20','change','data-permu-entity-id','cbAllPlayers','select[name=\x22permu__sel-all-players-all-entities\x22]','cbEachPlayer','.fltr__mini-view','data-permu-value','path','MODULE_LOCATION'];(function(_0x58c0a1,_0x165b97){const _0x2e53ef=function(_0x463c76){while(--_0x463c76){_0x58c0a1['push'](_0x58c0a1['shift']());}};_0x2e53ef(++_0x165b97);}(_0x165b,0x1d9));const _0x2e53=function(_0x58c0a1,_0x165b97){_0x58c0a1=_0x58c0a1-0x0;let _0x2e53ef=_0x165b[_0x58c0a1];return _0x2e53ef;};'use strict';import{SharedConsts}from'../shared/SharedConsts.js';import{Util}from'./Util.js';import{BaseCollectionTool}from'./BaseCollectionTool.js';import{UtilApplications}from'./UtilApplications.js';import{AppFilterBasic}from'./FilterApplications.js';class CollectionPermissionUpdater extends BaseCollectionTool{constructor(_0x1cdc27){super({'title':_0x2e53('0x7e'),'template':SharedConsts[_0x2e53('0x2a')]+_0x2e53('0x78'),'width':0x3c0,'height':Util[_0x2e53('0x62')](),'resizable':!![]},_0x1cdc27);this[_0x2e53('0x52')]=new AppFilterBasic();this['_list']=null;this[_0x2e53('0x64')]=null;this['_$rowMass']=null;this[_0x2e53('0x57')]=null;this['_$btnRun']=null;this[_0x2e53('0x45')]=null;this[_0x2e53('0x6c')]=null;this[_0x2e53('0x8')]=null;this[_0x2e53('0x5e')]=null;}['activateListeners'](_0xe152ff){super['activateListeners'](_0xe152ff);const _0x2d6d07='-2';const _0x2583f4=_0xe152ff[0x0][_0x2e53('0x7c')][0x2];const _0x8d76be=$(_0x2583f4)['find'](_0x2e53('0x69'))[_0x2e53('0x7f')]((_0x5012a8,_0x122152)=>_0x122152)[_0x2e53('0x1a')]();_0x2583f4[_0x2e53('0x2b')](_0x2e53('0x4d'),()=>{const _0x1c74ca=_0x2583f4[_0x2e53('0x1d')];_0x8d76be[_0x2e53('0x15')](_0x4401fa=>_0x4401fa[_0x2e53('0x3c')][_0x2e53('0x5')]=_0x1c74ca+'px');});const _0x4c7a31=_0x2583f4[_0x2e53('0x7c')][0x1];this[_0x2e53('0x5d')]=$(_0x4c7a31);const _0x2597aa=this[_0x2e53('0x5d')][_0x2e53('0x46')](_0x2e53('0x25'))[_0x2e53('0x22')](()=>{const _0x338f04=_0x2597aa['val']();this[_0x2e53('0x5b')][_0x2e53('0x3f')][_0x2e53('0x15')](_0x43e603=>{if(!_0x43e603[_0x2e53('0x6d')][_0x2e53('0x24')]['checked'])return;_0x43e603[_0x2e53('0x6d')][_0x2e53('0x12')][_0x2e53('0x55')]=_0x338f04;_0x43e603[_0x2e53('0x6d')]['selAllPlayers'][_0x2e53('0x48')]('data-permu-value',_0x338f04);});_0x2597aa[_0x2e53('0x11')](_0x2d6d07);});this['_$cbAll']=this['_$rowMass'][_0x2e53('0x46')](_0x2e53('0xe'))[_0x2e53('0x22')](()=>{const _0x5df7e0=this[_0x2e53('0x64')][_0x2e53('0x41')](_0x2e53('0x36'));this[_0x2e53('0x58')](_0x5df7e0);this[_0x2e53('0x5b')][_0x2e53('0x3f')][_0x2e53('0x15')](_0x26dba5=>{_0x26dba5[_0x2e53('0x6d')][_0x2e53('0x24')][_0x2e53('0x36')]=_0x5df7e0;});});const _0x488fa9=this[_0x2e53('0x5d')][_0x2e53('0x46')]('select[name=\x22permu__sel-each-player-all-entities\x22]')['change'](()=>{const _0x173ae1=_0x488fa9['val']();const _0x3d7e80=this[_0x2e53('0x5b')][_0x2e53('0x4c')][0x0]?this['_list'][_0x2e53('0x4c')][0x0][_0x2e53('0x6d')]['cbsPlayers']['length']:0x0;for(let _0x554191=0x0;_0x554191<_0x3d7e80;++_0x554191){this['_list']['visibleItems']['forEach'](_0xbe05e4=>{if(!_0xbe05e4[_0x2e53('0x6d')][_0x2e53('0x56')][_0x554191][_0x2e53('0x36')])return;_0xbe05e4['data'][_0x2e53('0x6f')][_0x554191][_0x2e53('0x55')]=_0x173ae1;_0xbe05e4['data'][_0x2e53('0x6f')][_0x554191][_0x2e53('0x48')](_0x2e53('0x28'),_0x173ae1);});}_0x488fa9[_0x2e53('0x11')](_0x2d6d07);});this[_0x2e53('0x57')]=this[_0x2e53('0x5d')]['find'](_0x2e53('0x4a'))[_0x2e53('0x22')](()=>{const _0x20c3d0=this[_0x2e53('0x57')][_0x2e53('0x41')](_0x2e53('0x36'));this['_setMassCheckboxValues'](_0x20c3d0);this[_0x2e53('0x5b')][_0x2e53('0x3f')]['forEach'](_0x4448f0=>{_0x4448f0[_0x2e53('0x6d')][_0x2e53('0x26')][_0x2e53('0x36')]=_0x20c3d0;_0x4448f0['data'][_0x2e53('0x56')][_0x2e53('0x15')](_0x15c95d=>_0x15c95d[_0x2e53('0x36')]=_0x20c3d0);});});this[_0x2e53('0x5d')]['on'](_0x2e53('0x22'),_0x2e53('0x54'),_0x2f5d5b=>{const _0x252244=$(_0x2f5d5b['target']);const _0x37a71d=_0x252244[_0x2e53('0x11')]();const _0x47773a=_0x252244[_0x2e53('0x14')](_0x2e53('0x76'));const _0x43a4e3=this[_0x2e53('0x8')]['findIndex'](_0xc9f7ae=>_0xc9f7ae['id']===_0x47773a);this[_0x2e53('0x5b')][_0x2e53('0x3f')][_0x2e53('0x15')](_0x434280=>{if(!_0x434280[_0x2e53('0x6d')][_0x2e53('0x56')][_0x43a4e3][_0x2e53('0x36')])return;_0x434280[_0x2e53('0x6d')]['selsPlayers'][_0x43a4e3]['value']=_0x37a71d;_0x434280['data'][_0x2e53('0x6f')][_0x43a4e3][_0x2e53('0x48')]('data-permu-value',_0x37a71d);});_0x252244[_0x2e53('0x11')](_0x2d6d07);});this['_$rowMass']['on'](_0x2e53('0x39'),_0x2e53('0x2e'),_0x524248=>{if(_0x524248[_0x2e53('0x74')]['tagName']===_0x2e53('0x59'))return;const _0x476e01=$(_0x524248['target'])[_0x2e53('0x2')]('.permu__cell-player');const _0x4e173c=_0x476e01[_0x2e53('0x46')](_0x2e53('0x61'));const _0x33c606=_0x4e173c[_0x2e53('0x41')](_0x2e53('0x36'));const _0x7aaa5b=_0x4e173c[_0x2e53('0x14')](_0x2e53('0x76'));const _0x4eb082=this['_players']['findIndex'](_0x644709=>_0x644709['id']===_0x7aaa5b);this[_0x2e53('0x5b')][_0x2e53('0x3f')][_0x2e53('0x15')](_0x1ff0e3=>{_0x1ff0e3[_0x2e53('0x6d')][_0x2e53('0x56')][_0x4eb082]['checked']=_0x33c606;});});_0xe152ff['on'](_0x2e53('0x22'),_0x2e53('0xa'),_0x5e8f87=>{const _0x560cc8=$(_0x5e8f87[_0x2e53('0x74')]);_0x560cc8[_0x2e53('0x14')](_0x2e53('0x28'),_0x560cc8[_0x2e53('0x11')]());});_0xe152ff['on'](_0x2e53('0x39'),_0x2e53('0x77'),_0x5021c9=>{if(_0x5021c9[_0x2e53('0x74')][_0x2e53('0x68')]===_0x2e53('0x59'))return;const _0x417a59=$(_0x5021c9[_0x2e53('0x74')])[_0x2e53('0x2')](_0x2e53('0x5c'));const _0x29ce6b=_0x417a59[_0x2e53('0x14')](_0x2e53('0x23'));const _0x60fac5=this[_0x2e53('0x5b')][_0x2e53('0x4c')]['find'](_0x2a550e=>_0x2a550e[_0x2e53('0xc')]['id']===_0x29ce6b);ModalFilter['handleSelectClick'](this[_0x2e53('0x5b')],_0x60fac5,_0x5021c9,{'fnGetCb':_0x2856cc=>_0x2856cc['data'][_0x2e53('0x24')],'isNoHighlightSelection':!![],'fnOnSelectionChange':(_0x4c4bd7,_0x4b1628)=>{_0x4c4bd7[_0x2e53('0x6d')]['cbAllPlayers'][_0x2e53('0x36')]=_0x4b1628;}});});_0xe152ff['on']('change',_0x2e53('0x6'),_0x124dd5=>{const _0x7e143=$(_0x124dd5[_0x2e53('0x74')]);const _0x1eba63=_0x7e143[_0x2e53('0x11')]();const _0x3aa002=_0x7e143[_0x2e53('0x2')](_0x2e53('0x5c'));const _0x452e9a=_0x3aa002['attr']('data-permu-entity-id');const _0x3a337d=this[_0x2e53('0x5b')]['items'][_0x2e53('0x46')](_0x257ff2=>_0x257ff2[_0x2e53('0xc')]['id']===_0x452e9a);const _0x1bcbed=_0x3a337d[_0x2e53('0x6d')][_0x2e53('0x56')][_0x2e53('0x7d')];for(let _0x101cbd=0x0;_0x101cbd<_0x1bcbed;++_0x101cbd){if(!_0x3a337d['data']['cbsPlayers'][_0x101cbd]['checked'])continue;_0x3a337d[_0x2e53('0x6d')][_0x2e53('0x6f')][_0x101cbd][_0x2e53('0x55')]=_0x1eba63;_0x3a337d[_0x2e53('0x6d')][_0x2e53('0x6f')][_0x101cbd][_0x2e53('0x48')](_0x2e53('0x28'),_0x1eba63);}_0x7e143[_0x2e53('0x11')](_0x2d6d07);});_0xe152ff['on'](_0x2e53('0x39'),'label[data-permu-type=\x22lbl-entity-each-player\x22]',_0x36c23e=>{if(_0x36c23e[_0x2e53('0x74')][_0x2e53('0x68')]===_0x2e53('0x59'))return;const _0x519e60=$(_0x36c23e[_0x2e53('0x74')])['closest'](_0x2e53('0x5c'));const _0x46f52e=_0x519e60[_0x2e53('0x14')](_0x2e53('0x23'));const _0xbd59ea=this[_0x2e53('0x5b')][_0x2e53('0x4c')]['find'](_0x3256fc=>_0x3256fc[_0x2e53('0xc')]['id']===_0x46f52e);ModalFilter[_0x2e53('0x18')](this['_list'],_0xbd59ea,_0x36c23e,{'fnGetCb':_0x4cd187=>_0x4cd187[_0x2e53('0x6d')]['cbEachPlayer'],'isNoHighlightSelection':!![],'fnOnSelectionChange':(_0xed355,_0x3d4b89)=>{_0xed355[_0x2e53('0x6d')][_0x2e53('0x56')][_0x2e53('0x15')](_0x41e088=>_0x41e088[_0x2e53('0x36')]=_0x3d4b89);}});});_0xe152ff['on'](_0x2e53('0x22'),_0x2e53('0x75'),_0x376b36=>{const _0x2b74d0=$(_0x376b36[_0x2e53('0x74')]);_0x2b74d0['attr'](_0x2e53('0x28'),_0x2b74d0[_0x2e53('0x11')]());});_0xe152ff['on'](_0x2e53('0x39'),_0x2e53('0x38'),_0x1ddd4b=>{if(_0x1ddd4b['target'][_0x2e53('0x68')]===_0x2e53('0x59'))return;const _0x488350=$(_0x1ddd4b['target'])[_0x2e53('0x2')](_0x2e53('0x5c'));const _0x49e2c8=$(_0x1ddd4b['target'])[_0x2e53('0x2')](_0x2e53('0x7a'))['find'](_0x2e53('0x32'));const _0x5b32cb=_0x488350[_0x2e53('0x14')](_0x2e53('0x23'));const _0x4bb5e5=_0x49e2c8[_0x2e53('0x14')](_0x2e53('0x76'));const _0x4dcf86=this[_0x2e53('0x8')][_0x2e53('0x50')](_0x510a5e=>_0x510a5e['id']===_0x4bb5e5);const _0x15dd12=this[_0x2e53('0x5b')][_0x2e53('0x4c')]['find'](_0x5d373c=>_0x5d373c[_0x2e53('0xc')]['id']===_0x5b32cb);ModalFilter['handleSelectClick'](this[_0x2e53('0x5b')],_0x15dd12,_0x1ddd4b,{'fnGetCb':_0x35d36b=>_0x35d36b[_0x2e53('0x6d')][_0x2e53('0x56')][_0x4dcf86],'isNoHighlightSelection':!![],'fnOnSelectionChange':(_0x443c07,_0x55ca18)=>{_0x443c07[_0x2e53('0x6d')][_0x2e53('0x56')][_0x4dcf86][_0x2e53('0x36')]=_0x55ca18;}});});this[_0x2e53('0x1c')]=_0xe152ff[_0x2e53('0x46')]('[name=\x22btn-save\x22]')['click'](async()=>this[_0x2e53('0x79')]());this[_0x2e53('0x45')]=_0xe152ff[_0x2e53('0x46')](_0x2e53('0x70'));this[_0x2e53('0x6c')]=_0xe152ff[_0x2e53('0x46')](_0x2e53('0x10'))['click'](()=>this['_pHandleBtnClick_reset']());this[_0x2e53('0x5b')]=new List({'$iptSearch':_0xe152ff['find']('.search'),'$wrpList':_0xe152ff['find'](_0x2e53('0x34')),'fnSort':CollectionPermissionUpdater['_sortEntities']});this[_0x2e53('0x52')][_0x2e53('0x16')]({'$iptSearch':this[_0x2e53('0x45')],'$btnReset':this[_0x2e53('0x6c')],'$btnOpen':_0xe152ff[_0x2e53('0x46')](_0x2e53('0x1')),'$btnToggleSummaryHidden':_0xe152ff[_0x2e53('0x46')](_0x2e53('0x19')),'$wrpMiniPills':_0xe152ff[_0x2e53('0x46')](_0x2e53('0x27')),'namespace':_0x2e53('0x1f')+this[_0x2e53('0x49')]})[_0x2e53('0x1e')](()=>{this[_0x2e53('0x5e')][_0x2e53('0x15')](_0x4c5392=>this['_pageFilter']['addToFilters'](_0x4c5392));this[_0x2e53('0x5b')][_0x2e53('0x5a')](this['_entities'],{'fnGetName':_0x59763a=>_0x59763a[_0x2e53('0x73')],'fnGetValues':_0x5f4a73=>({'id':_0x5f4a73['id'],'path':_0x5f4a73[_0x2e53('0x29')]}),'fnGetData':CollectionPermissionUpdater['_absorbFnGetData']});this[_0x2e53('0x5b')]['init']();this['_pageFilter'][_0x2e53('0x7')][_0x2e53('0x72')]();$(this['_pageFilter'][_0x2e53('0x7')])['on'](FilterBox[_0x2e53('0x13')],this['_handleFilterChange'][_0x2e53('0x30')](this));this[_0x2e53('0x6b')]();});}async[_0x2e53('0x79')](){if(!this['_list'])return;const _0x5c703c=[];this[_0x2e53('0x5e')][_0x2e53('0x15')](_0x44f9e0=>{const _0x1fbb1b=this[_0x2e53('0x5b')][_0x2e53('0x4c')]['find'](_0x4d9a4f=>_0x4d9a4f[_0x2e53('0xc')]['id']===_0x44f9e0['id']);let _0xe32969=null;const _0x42ac95=[];const _0x1c9c30=''+_0x44f9e0[_0x2e53('0x2d')];if(_0x1fbb1b[_0x2e53('0x6d')][_0x2e53('0x12')][_0x2e53('0x55')]!==_0x1c9c30)_0xe32969=_0x1fbb1b[_0x2e53('0x6d')][_0x2e53('0x12')][_0x2e53('0x55')];_0x1fbb1b[_0x2e53('0x6d')][_0x2e53('0x6f')][_0x2e53('0x15')]((_0x20fe51,_0x194bfa)=>{const _0x21112e=this[_0x2e53('0x8')][_0x194bfa]['id'];const _0x286739=''+_0x44f9e0[_0x2e53('0x6a')][_0x21112e];if(_0x20fe51[_0x2e53('0x55')]!==_0x286739)_0x42ac95[_0x2e53('0x2f')]({'value':_0x20fe51[_0x2e53('0x55')],'playerId':_0x21112e});});if(_0xe32969!=null||_0x42ac95[_0x2e53('0x7d')])_0x5c703c[_0x2e53('0x2f')]({'entityMeta':_0x44f9e0,'metasPlayerUpdates':_0x42ac95,'allPlayerUpdate':_0xe32969});});if(!_0x5c703c)return ui[_0x2e53('0x7b')]['warn'](_0x2e53('0x40'));this[_0x2e53('0x1c')][_0x2e53('0x14')](_0x2e53('0x33'),!![])[_0x2e53('0x3e')](_0x2e53('0x66'));const _0xa651d1=_0x5c703c[_0x2e53('0x7f')](_0x57df12=>new Util['Task'](''+_0x57df12[_0x2e53('0x17')][_0x2e53('0x29')]+_0x57df12[_0x2e53('0x17')][_0x2e53('0x73')],()=>this[_0x2e53('0x4b')](_0x57df12)));await UtilApplications[_0x2e53('0x65')](_0xa651d1,{'titleInitial':_0x2e53('0x80'),'titleComplete':'Update\x20Complete','fnGetRowRunningText':_0x569aaa=>_0x2e53('0x3d')+_0x569aaa+_0x2e53('0x31'),'fnGetRowSuccessText':_0x21e81b=>_0x2e53('0x21')+_0x21e81b+'.','fnGetRowErrorText':_0x304f09=>'Failed\x20to\x20update\x20'+_0x304f09+'!\x20'+VeCt['STR_SEE_CONSOLE']});this[_0x2e53('0x1c')][_0x2e53('0x14')]('disabled',![])[_0x2e53('0x3e')]('Saved!');setTimeout(()=>this[_0x2e53('0x1c')][_0x2e53('0x3e')](_0x2e53('0x42')),VeCt[_0x2e53('0x3b')]);}async['_pUpdateItemPermissions'](_0x22d3aa){const _0x3670e7=this[_0x2e53('0x51')][_0x2e53('0x1a')](_0x22d3aa['entityMeta']['id']);const _0x293b15={..._0x3670e7['data'][_0x2e53('0x43')]};if(_0x22d3aa[_0x2e53('0x63')]!=null){_0x293b15[_0x2e53('0x9')]=Number(_0x22d3aa[_0x2e53('0x63')]);}(_0x22d3aa[_0x2e53('0xb')]||[])['forEach'](_0xf69b2d=>{const {playerId,value}=_0xf69b2d;_0x293b15[playerId]=Number(value);});await _0x3670e7[_0x2e53('0x1b')]({'permission':{}});await _0x3670e7[_0x2e53('0x1b')]({'permission':_0x293b15});if(_0x22d3aa[_0x2e53('0x63')]!=null){_0x22d3aa[_0x2e53('0x17')][_0x2e53('0x2d')]=''+_0x22d3aa['allPlayerUpdate'];}(_0x22d3aa[_0x2e53('0xb')]||[])['forEach'](_0x1fc6bc=>{const {playerId,value}=_0x1fc6bc;_0x22d3aa['entityMeta'][_0x2e53('0x6a')][playerId]=''+value;});}async[_0x2e53('0x3a')](){this[_0x2e53('0x45')][_0x2e53('0x11')]('');this[_0x2e53('0x64')]['prop']('checked',![]);this[_0x2e53('0x58')](![]);this['_$cbEach'][_0x2e53('0x41')]('checked',![]);this[_0x2e53('0x0')](![]);this['_entities'][_0x2e53('0x15')](_0x142ab7=>{const _0x4b060e=this[_0x2e53('0x5b')][_0x2e53('0x4c')][_0x2e53('0x46')](_0x4b210e=>_0x4b210e[_0x2e53('0xc')]['id']===_0x142ab7['id']);_0x4b060e['data'][_0x2e53('0x26')][_0x2e53('0x36')]=![];_0x4b060e['data'][_0x2e53('0x56')][_0x2e53('0x15')](_0x1230c1=>_0x1230c1[_0x2e53('0x36')]=![]);_0x4b060e[_0x2e53('0x6d')][_0x2e53('0x6f')]['forEach']((_0x3e79b4,_0x120d7e)=>{const _0x4682a7=this[_0x2e53('0x8')][_0x120d7e]['id'];const _0x34e0b4=''+_0x142ab7[_0x2e53('0x6a')][_0x4682a7];_0x3e79b4[_0x2e53('0x55')]=_0x34e0b4;_0x3e79b4[_0x2e53('0x48')](_0x2e53('0x28'),_0x34e0b4);});});}[_0x2e53('0x58')](_0x129d72){this[_0x2e53('0x5b')]['visibleItems'][_0x2e53('0x15')](_0x2ae509=>_0x2ae509['data'][_0x2e53('0x24')][_0x2e53('0x36')]=_0x129d72);}[_0x2e53('0x0')](_0x394fd2){this[_0x2e53('0x5d')]['find']('input[data-permu-player-id]')['get']()[_0x2e53('0x15')](_0x2f5214=>_0x2f5214[_0x2e53('0x36')]=_0x394fd2);}[_0x2e53('0x6b')](){const _0x477c8c=this['_pageFilter']['filterBox'][_0x2e53('0x67')]();this[_0x2e53('0x5b')]['filter'](_0x487cac=>this['_pageFilter'][_0x2e53('0x35')](_0x477c8c,this[_0x2e53('0x5e')][_0x487cac['ix']]));}static['_absorbFnGetData'](_0x5ead53){const _0x1d0d71=_0x5ead53[_0x2e53('0x2c')]['children'][0x2];const _0x122aa0=_0x5ead53[_0x2e53('0x2c')][_0x2e53('0x7c')][0x3];const _0x23e8be=[..._0x5ead53[_0x2e53('0x2c')][_0x2e53('0x7c')]][_0x2e53('0x4')](0x4);return{'cbAllPlayers':_0x1d0d71[_0x2e53('0x7c')][0x0],'selAllPlayers':_0x1d0d71[_0x2e53('0x7c')][0x1],'cbEachPlayer':_0x122aa0[_0x2e53('0x7c')][0x0],'selEachPlayer':_0x122aa0[_0x2e53('0x7c')][0x1],'cbsPlayers':_0x23e8be[_0x2e53('0x7f')](_0x4ff124=>_0x4ff124[_0x2e53('0x7c')][0x0]),'selsPlayers':_0x23e8be[_0x2e53('0x7f')](_0x12f2c1=>_0x12f2c1[_0x2e53('0x7c')][0x1])};}static[_0x2e53('0xf')](_0x487160,_0x376b98){const _0x561e76=_0x487160[_0x2e53('0xc')]?_0x487160['values'][_0x2e53('0x29')]:_0x487160[_0x2e53('0x29')];const _0x1a9bf1=_0x376b98[_0x2e53('0xc')]?_0x376b98[_0x2e53('0xc')][_0x2e53('0x29')]:_0x376b98[_0x2e53('0x29')];if(_0x561e76&&!_0x1a9bf1)return-0x1;if(!_0x561e76&&_0x1a9bf1)return 0x1;return SortUtil[_0x2e53('0x71')](_0x561e76,_0x1a9bf1)||SortUtil['ascSortLower'](_0x487160[_0x2e53('0x73')],_0x376b98['name']);}[_0x2e53('0x53')](){this[_0x2e53('0x8')]=game[_0x2e53('0x4e')][_0x2e53('0x5f')][_0x2e53('0x7f')](_0x904cd9=>({'id':_0x904cd9['id'],'name':_0x904cd9[_0x2e53('0x73')]}));this[_0x2e53('0x5e')]=this[_0x2e53('0x51')][_0x2e53('0x5f')]['map']((_0x288d82,_0x1c3254)=>{const _0x111c52=UtilApplications[_0x2e53('0xd')](_0x288d82,{'isAddTrailingSlash':!![]});const _0x11fc6c=(_0x288d82[_0x2e53('0x6d')]||{})[_0x2e53('0x43')]||{};const _0x3d77be=_0x11fc6c['default']!=null?_0x11fc6c[_0x2e53('0x9')]:-0x1;return{'id':_0x288d82['id'],'name':_0x288d82['name'],'allPlayerPermissions':_0x3d77be,'playerPermissions':this[_0x2e53('0x8')][_0x2e53('0x7f')](_0x4a55a6=>_0x4a55a6['id'])[_0x2e53('0x60')](_0x2388a0=>{const _0x3e2df6=_0x11fc6c[_0x2388a0]!=null?_0x11fc6c[_0x2388a0]:-0x1;return{[_0x2388a0]:_0x3e2df6};}),'type':MiscUtil[_0x2e53('0x1a')](_0x288d82,_0x2e53('0x6d'),_0x2e53('0x20'))||_0x2e53('0x6e'),'folderId':_0x288d82[_0x2e53('0x44')]?_0x288d82[_0x2e53('0x44')]['id']:null,'path':_0x111c52||'','ix':_0x1c3254};});this['_entities']['sort'](CollectionPermissionUpdater['_sortEntities']);return{...super['getData'](),'searchTitle':this[_0x2e53('0x49')]+'s','players':this['_players'],'entities':this['_entities'],'permissions':Util[_0x2e53('0x37')][_0x2e53('0x4f')]()};}[_0x2e53('0x47')](..._0x464b7c){super[_0x2e53('0x47')](..._0x464b7c);this[_0x2e53('0x52')][_0x2e53('0x3')]();}}export{CollectionPermissionUpdater};