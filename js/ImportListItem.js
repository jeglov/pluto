const _0x3513=['importEntity','sourceJsonToFull','all','_attunementCategory','text-center','rarity','Custom\x20URL','string','get','DataSourceUrl','5etools-items','pGetItemItem','itemValueToFull','isStreamerMode','source','split','pInit','Unknown','special','sourceShort','SOURCE_TYP_OFFICIAL_ALL','push','items','isTemp','populatePropertyAndTypeReference','_pageFilter','_pImportEntry_pGetFolderId','poison','itemFluff','Unknown\x20Rarity','fluff','notifications',')\x20into\x20constituent\x20items:\x20','attunement','toTitleCase','_content','_pImportEntry_pImportToActor','join','1-5','filter','\x22)\x20imported\x20with\x20errors!\x20','PG_ITEMS','page','hover','_list','Cost','URL_TO_HASH_BUILDER','name','Items','getData','_vType','isAddPermission','SOURCE_TYP_CUSTOM','itemTypeToFull','OwnedItem','pGetItems','cost','Rarity','pGetSources','_pack','srd','createEmbeddedEntity','Type','type','Source','SOURCE_TYP_BREW','doAbsorbItems','folder','Error(s)\x20when\x20breaking\x20','_pImportEntry_pImportToItems','sourceJsonToAbv','_typeListText','packContents','error','_fluffLookup','quantity','SRD','Importing\x20item\x20\x22','5etools','value','pGetItemFluff','DataSourceFile','absorbFnBindListeners','sheet','forEach','3-2','\x22\x20(from\x20\x22','isToken','Upload\x20File','Name','Unknown\x20Type','weight','_actor','DataSourceSpecial','weightValueToNumber','typeText','absorbFnGetData','stringify','pCacheAndGet','item','itemWeightToFull','Unhandled\x20pack\x20contents\x20type\x20\x22','map','0-5','enhanceItem'];(function(_0x5384a0,_0x3513f0){const _0x313add=function(_0x561cc2){while(--_0x561cc2){_0x5384a0['push'](_0x5384a0['shift']());}};_0x313add(++_0x3513f0);}(_0x3513,0x1c3));const _0x313a=function(_0x5384a0,_0x3513f0){_0x5384a0=_0x5384a0-0x0;let _0x313add=_0x3513[_0x5384a0];return _0x313add;};'use strict';import{ImportList}from'./ImportList.js';import{Vetools}from'./Vetools.js';import{LGT}from'./Util.js';import{DataConverter}from'./DataConverter.js';import{Config}from'./Config.js';import{UtilList2}from'./UtilList2.js';class ImportListItem extends ImportList{constructor(_0x3215e3){_0x3215e3=_0x3215e3||{};super({'title':'Import\x20Items'},_0x3215e3,{'namespace':_0x313a('0x44'),'searchTitle':'items','sidebarTab':'items','gameProp':_0x313a('0x60'),'defaultFolderPath':[_0x313a('0x11')],'folderType':'Item','fnListSort':PageFilterItems['sortItems'],'pageFilter':new PageFilterItems()});this[_0x313a('0x2b')]=null;}async[_0x313a('0x1b')](){const _0x3115d8={'pPostLoad':async _0x17fb0b=>{return Renderer[_0x313a('0x44')]['getItemsFromHomebrew'](_0x17fb0b);}};return[new ImportList[(_0x313a('0x3e'))](Config[_0x313a('0x52')]('ui',_0x313a('0x57'))?_0x313a('0x2d'):_0x313a('0x2f'),async()=>(await Vetools[_0x313a('0x18')]())[_0x313a('0x44')],{'cacheKey':_0x313a('0x54'),'filterTypes':[ImportList[_0x313a('0x5e')]]}),new ImportList[(_0x313a('0x53'))](_0x313a('0x50'),'',{..._0x3115d8,'filterTypes':[ImportList[_0x313a('0x15')]]}),new ImportList[(_0x313a('0x32'))](_0x313a('0x39'),{'filterTypes':[ImportList[_0x313a('0x15')]]}),...(await Vetools['pGetHomebrewSources']('item'))[_0x313a('0x47')](({name,url})=>new ImportList['DataSourceUrl'](name,url,{..._0x3115d8,'filterTypes':[ImportList[_0x313a('0x22')]]}))];}[_0x313a('0x12')](){return{...super[_0x313a('0x12')](),'cols':[{'name':_0x313a('0x3a'),'width':0x3,'field':_0x313a('0x10')},{'name':'Type','width':_0x313a('0x36'),'field':_0x313a('0x20')},{'name':_0x313a('0xe'),'width':'1-4','field':_0x313a('0x19'),'rowClassName':_0x313a('0x4e')},{'name':'Weight','width':'1-4','field':_0x313a('0x3c'),'rowClassName':'text-center'},{'name':'A.','width':_0x313a('0x48'),'field':_0x313a('0x2'),'rowClassName':_0x313a('0x4e')},{'name':_0x313a('0x1a'),'width':_0x313a('0x7'),'field':_0x313a('0x4f')},{'name':_0x313a('0x21'),'width':0x1,'field':'source','titleProp':'sourceLong','displayProp':_0x313a('0x5d'),'rowClassName':_0x313a('0x4e')}],'rows':this[_0x313a('0x4')]['map']((_0x55bdc,_0x53ea59)=>{this[_0x313a('0x63')]['mutateForFilters'](_0x55bdc);_0x55bdc[_0x313a('0x13')]=_0x55bdc[_0x313a('0x28')]['join'](',\x20')['uppercaseFirst']();return{'name':_0x55bdc[_0x313a('0x10')],'type':_0x55bdc['_vType'],'cost':_0x55bdc[_0x313a('0x30')]||_0x55bdc['valueMult']?Parser[_0x313a('0x56')](_0x55bdc,!![])['replace'](/ +/g,'\u00a0'):'—','weight':Parser[_0x313a('0x45')](_0x55bdc,!![])||'—','rarity':(_0x55bdc[_0x313a('0x4f')]||_0x313a('0x5b'))['toTitleCase'](),'attunement':_0x55bdc[_0x313a('0x4d')]==='No'?'':'×','source':_0x55bdc[_0x313a('0x58')],'sourceShort':Parser[_0x313a('0x27')](_0x55bdc[_0x313a('0x58')]),'sourceLong':Parser[_0x313a('0x4b')](_0x55bdc['source']),'ix':_0x53ea59};})};}['_activateListeners_absorbListItems'](){this[_0x313a('0xd')][_0x313a('0x23')](this[_0x313a('0x4')],{'fnGetName':_0x30bf68=>_0x30bf68[_0x313a('0x10')],'fnGetValues':_0x306803=>({'source':_0x306803[_0x313a('0x58')],'type':_0x306803[_0x313a('0x13')],'cost':_0x306803[_0x313a('0x30')]||0x0,'rarity':_0x306803[_0x313a('0x4f')],'attunement':_0x306803['_attunementCategory']!=='No','weight':Parser[_0x313a('0x3f')](_0x306803[_0x313a('0x3c')])}),'fnGetData':UtilList2[_0x313a('0x41')],'fnBindListeners':_0x4ec034=>UtilList2[_0x313a('0x33')](this[_0x313a('0xd')],_0x4ec034)});}async[_0x313a('0x5a')](){await super[_0x313a('0x5a')]();this[_0x313a('0x2b')]={};const _0x4faff0=await Vetools[_0x313a('0x31')]();_0x4faff0[_0x313a('0x66')][_0x313a('0x35')](_0x1a2e92=>(this[_0x313a('0x2b')][_0x1a2e92[_0x313a('0x58')]]=this[_0x313a('0x2b')][_0x1a2e92[_0x313a('0x58')]]||{})[_0x1a2e92[_0x313a('0x10')]]=_0x1a2e92);await Renderer[_0x313a('0x44')][_0x313a('0x62')]();}['getFolderPathMeta'](){return{...super['getFolderPathMeta'](),'rarity':{'label':'Rarity','getter':_0x254f3b=>(!_0x254f3b[_0x313a('0x4f')]||_0x254f3b[_0x313a('0x4f')]===_0x313a('0x5b')?_0x313a('0x67'):_0x254f3b[_0x313a('0x4f')])[_0x313a('0x3')]()},'type':{'label':_0x313a('0x1f'),'getter':_0x4fab48=>{if(_0x4fab48[_0x313a('0x20')])return Parser[_0x313a('0x16')](_0x4fab48[_0x313a('0x20')])[_0x313a('0x3')]();else if(_0x4fab48[_0x313a('0x40')])return _0x4fab48[_0x313a('0x40')];else if(_0x4fab48['wondrous'])return'Wondrous\x20Item';else if(_0x4fab48[_0x313a('0x65')])return'Poison';else return _0x313a('0x3b');}}};}async['pImportEntry'](_0x161584,_0x5b9ca1){_0x5b9ca1=_0x5b9ca1||{};console['log'](...LGT,_0x313a('0x2e')+_0x161584[_0x313a('0x10')]+_0x313a('0x37')+Parser[_0x313a('0x27')](_0x161584[_0x313a('0x58')])+'\x22)');const _0x3f0e0b=_0x161584[_0x313a('0x68')]||MiscUtil[_0x313a('0x52')](this[_0x313a('0x2b')],_0x161584[_0x313a('0x58')],_0x161584['name']);const _0x2ab2da={'fluff':_0x3f0e0b};if(_0x5b9ca1['isTemp'])return this[_0x313a('0x26')](_0x161584,_0x5b9ca1,_0x2ab2da);else if(this['_actor'])return this[_0x313a('0x5')](_0x161584,_0x5b9ca1,_0x2ab2da);else return this[_0x313a('0x26')](_0x161584,_0x5b9ca1,_0x2ab2da);}async[_0x313a('0x5')](_0x49bc4a,_0x1a8a0e,_0x2d3e48){if(_0x49bc4a[_0x313a('0x29')]){const _0x4170d2=[];const _0xafe2a4=await Promise[_0x313a('0x4c')](_0x49bc4a[_0x313a('0x29')][_0x313a('0x47')](async _0x124e51=>{const _0x28aa3b=_0x124e51[_0x313a('0x2c')]||0x1;if(_0x124e51['item']||typeof _0x124e51===_0x313a('0x51')){let [_0x37c43d,_0x5ea5fe]=(_0x124e51[_0x313a('0x44')]||_0x124e51)[_0x313a('0x59')]('|');if(!_0x5ea5fe)_0x5ea5fe=SRC_DMG;const _0x2b438c=UrlUtil[_0x313a('0xf')][UrlUtil[_0x313a('0xa')]]({'name':_0x37c43d,'source':_0x5ea5fe});const _0x3fbd17=await Renderer[_0x313a('0xc')][_0x313a('0x43')](UrlUtil[_0x313a('0xa')],_0x5ea5fe,_0x2b438c);return DataConverter[_0x313a('0x55')](_0x3fbd17,{..._0x2d3e48,'quantity':_0x28aa3b});}else if(_0x124e51[_0x313a('0x5c')]){const _0x6cf3a9={'name':_0x124e51[_0x313a('0x5c')][_0x313a('0x3')](),'type':'G','source':_0x49bc4a['source'],'page':_0x49bc4a[_0x313a('0xb')],'srd':_0x49bc4a[_0x313a('0x1d')]};Renderer[_0x313a('0x44')][_0x313a('0x49')](_0x6cf3a9);return DataConverter['pGetItemItem'](_0x6cf3a9,{..._0x2d3e48,'quantity':_0x28aa3b});}else{_0x4170d2[_0x313a('0x5f')](_0x313a('0x46')+JSON[_0x313a('0x42')](_0x124e51)+'\x22');}}));await this['_actor']['createEmbeddedEntity'](_0x313a('0x17'),_0xafe2a4[_0x313a('0x8')](Boolean),{});if(_0x4170d2['length']){ui[_0x313a('0x0')][_0x313a('0x2a')]('Item\x20\x22'+_0x49bc4a[_0x313a('0x10')]+_0x313a('0x37')+Parser[_0x313a('0x27')](_0x49bc4a[_0x313a('0x58')])+_0x313a('0x9')+VeCt['STR_SEE_CONSOLE']);console[_0x313a('0x2a')](...LGT,_0x313a('0x25')+_0x49bc4a['name']+'\x20('+_0x49bc4a[_0x313a('0x58')]+_0x313a('0x1')+_0x4170d2[_0x313a('0x6')](';\x20'));}}else{await this[_0x313a('0x3d')][_0x313a('0x1e')](_0x313a('0x17'),await DataConverter['pGetItemItem'](_0x49bc4a,_0x2d3e48),{});}if(this[_0x313a('0x3d')][_0x313a('0x38')])this['_actor'][_0x313a('0x34')]['render']();return{'name':_0x49bc4a[_0x313a('0x10')],'actor':this['_actor']};}async[_0x313a('0x26')](_0x1275b4,_0x238344,_0x551ce1){_0x551ce1[_0x313a('0x14')]=!![];const _0x415952=await DataConverter[_0x313a('0x55')](_0x1275b4,_0x551ce1);if(_0x238344['isTemp']||!this[_0x313a('0x1c')]){if(!_0x238344[_0x313a('0x61')]){const _0x395371=await this[_0x313a('0x64')](_0x1275b4);if(_0x395371)_0x415952[_0x313a('0x24')]=_0x395371;}const _0x2982e2=await Item['create'](_0x415952,{'renderSheet':!!_0x238344[_0x313a('0x61')],'temporary':!!_0x238344[_0x313a('0x61')]});if(!_0x238344[_0x313a('0x61')])await game[_0x313a('0x60')]['insert'](_0x2982e2);return _0x2982e2;}else{const _0x19c19b=new Item(_0x415952);await this[_0x313a('0x1c')][_0x313a('0x4a')](_0x19c19b);return _0x19c19b;}}}export{ImportListItem};