const _0x43c0=['_pImportEntry_pImportToItems','pImportEntry','createEmbeddedEntity','Source','getData','sourceJsonToAbv','type','_fOrder','SRD','SOURCE_TYP_CUSTOM','_list','_actor','map','source','psionic','Name','DataSourceUrl','_activateListeners_absorbListItems','sheet','5etools','DATA_URL_PSIONICS','Type','Import\x20Psionics','sourceJsonToFull','get','insert','_content','OwnedItem','psionics','render','sourceShort','Importing\x20psionic\x20\x22','Custom\x20URL','getPsionicItem','doAbsorbItems','folder','sourceLong','Upload\x20File','isToken','short','name','_pImportEntry_pImportToActor','getPsionicItems','pGetHomebrewSources','isTemp','absorbFnBindListeners','Item','_pack','absorbFnGetData','items','psiTypeToMeta','mutateForFilters','Order','Psionics'];(function(_0x118aab,_0x43c05b){const _0xa484e6=function(_0x24ab89){while(--_0x24ab89){_0x118aab['push'](_0x118aab['shift']());}};_0xa484e6(++_0x43c05b);}(_0x43c0,0xad));const _0xa484=function(_0x118aab,_0x43c05b){_0x118aab=_0x118aab-0x0;let _0xa484e6=_0x43c0[_0x118aab];return _0xa484e6;};'use strict';import{ImportList}from'./ImportList.js';import{Vetools}from'./Vetools.js';import{LGT}from'./Util.js';import{DataConverter}from'./DataConverter.js';import{Config}from'./Config.js';import{UtilList2}from'./UtilList2.js';class ImportListPsionic extends ImportList{constructor(_0x547a06){_0x547a06=_0x547a06||{};super({'title':_0xa484('0xb')},_0x547a06,{'props':['psionic'],'searchTitle':_0xa484('0x11'),'sidebarTab':_0xa484('0x26'),'gameProp':_0xa484('0x26'),'defaultFolderPath':[_0xa484('0x2a')],'folderType':_0xa484('0x23'),'pageFilter':new PageFilterPsionics()});}async['pGetSources'](){return[new ImportList[(_0xa484('0x5'))](Config[_0xa484('0xd')]('ui','isStreamerMode')?_0xa484('0x33'):_0xa484('0x8'),Vetools[_0xa484('0x9')],{'filterTypes':[ImportList['SOURCE_TYP_OFFICIAL_ALL']]}),new ImportList['DataSourceUrl'](_0xa484('0x15'),'',{'filterTypes':[ImportList['SOURCE_TYP_CUSTOM']]}),new ImportList['DataSourceFile'](_0xa484('0x1a'),{'filterTypes':[ImportList[_0xa484('0x34')]]}),...(await Vetools[_0xa484('0x20')](_0xa484('0x3')))[_0xa484('0x1')](({name,url})=>new ImportList[(_0xa484('0x5'))](name,url,{'filterTypes':[ImportList['SOURCE_TYP_BREW']]}))];}[_0xa484('0x2f')](){return{...super[_0xa484('0x2f')](),'cols':[{'name':_0xa484('0x4'),'width':0x4,'field':'name'},{'name':_0xa484('0xa'),'width':0x3,'field':_0xa484('0x31')},{'name':_0xa484('0x29'),'width':0x3,'field':'order'},{'name':_0xa484('0x2e'),'width':0x1,'field':'source','titleProp':_0xa484('0x19'),'displayProp':_0xa484('0x13'),'rowClassName':'text-center'}],'rows':this[_0xa484('0xf')][_0xa484('0x1')]((_0x581aad,_0x3fc15b)=>{this['_pageFilter'][_0xa484('0x28')](_0x581aad);return{'name':_0x581aad[_0xa484('0x1d')],'type':Parser[_0xa484('0x27')](_0x581aad[_0xa484('0x31')])[_0xa484('0x1c')],'order':_0x581aad[_0xa484('0x32')],'source':_0x581aad[_0xa484('0x2')],'sourceShort':Parser[_0xa484('0x30')](_0x581aad[_0xa484('0x2')]),'sourceLong':Parser[_0xa484('0xc')](_0x581aad[_0xa484('0x2')]),'ix':_0x3fc15b};})};}[_0xa484('0x6')](){this[_0xa484('0x35')][_0xa484('0x17')](this[_0xa484('0xf')],{'fnGetName':_0x3da9d7=>_0x3da9d7['name'],'fnGetValues':_0x56a241=>({'source':_0x56a241['source'],'type':Parser[_0xa484('0x27')](_0x56a241[_0xa484('0x31')])['full'],'order':_0x56a241[_0xa484('0x32')]}),'fnGetData':UtilList2[_0xa484('0x25')],'fnBindListeners':_0x16a340=>UtilList2[_0xa484('0x22')](this[_0xa484('0x35')],_0x16a340)});}async[_0xa484('0x2c')](_0x1c8bd3,_0x475b5f){_0x475b5f=_0x475b5f||{};console['log'](...LGT,_0xa484('0x14')+_0x1c8bd3[_0xa484('0x1d')]+'\x22\x20(from\x20\x22'+Parser['sourceJsonToAbv'](_0x1c8bd3['source'])+'\x22)');if(_0x475b5f['isTemp'])return this['_pImportEntry_pImportToItems'](_0x1c8bd3,_0x475b5f);else if(this[_0xa484('0x0')])return this[_0xa484('0x1e')](_0x1c8bd3,_0x475b5f);else return this[_0xa484('0x2b')](_0x1c8bd3,_0x475b5f);}async[_0xa484('0x1e')](_0x2882b6,_0x4ee15f){const _0x28cf33=DataConverter[_0xa484('0x1f')](_0x2882b6);await this[_0xa484('0x0')][_0xa484('0x2d')](_0xa484('0x10'),_0x28cf33,{});if(this[_0xa484('0x0')][_0xa484('0x1b')])this[_0xa484('0x0')][_0xa484('0x7')][_0xa484('0x12')]();return{'name':_0x2882b6[_0xa484('0x1d')],'actor':this['_actor']};}async[_0xa484('0x2b')](_0x264b14,_0x3695ae){const _0x2a3a20=DataConverter[_0xa484('0x16')](_0x264b14,{'isAddPermission':!![]});if(_0x3695ae['isTemp']||!this[_0xa484('0x24')]){if(!_0x3695ae['isTemp']){const _0xe9c3bd=await this['_pImportEntry_pGetFolderId'](_0x264b14);if(_0xe9c3bd)_0x2a3a20[_0xa484('0x18')]=_0xe9c3bd;}const _0x92eb2c=await Item['create'](_0x2a3a20,{'renderSheet':!!_0x3695ae['isTemp'],'temporary':!!_0x3695ae[_0xa484('0x21')]});if(!_0x3695ae['isTemp'])await game[_0xa484('0x26')][_0xa484('0xe')](_0x92eb2c);return _0x92eb2c;}else{const _0x18639b=new Item(_0x2a3a20);await this[_0xa484('0x24')]['importEntity'](_0x18639b);return _0x18639b;}}}export{ImportListPsionic};