const _0x5e95=['log','Upload\x20File','sourceJsonToAbv','sourceJsonToFull','getData','pGetHomebrewSources','doAbsorbItems','_pageFilter','_pack','DATA_URL_VARIANTRULES','JournalEntry','variantrule','DataSourceUrl','name','variant\x20or\x20optional\x20rule','getVariantRuleJournal','_list','_content','SRD','isTemp','sourceShort','importEntity','folder','_actor','Importing\x20variantrule\x20\x22','isStreamerMode','SOURCE_TYP_CUSTOM','Name','insert','Custom\x20URL','map','DataSourceFile','Variant\x20&\x20Optional\x20Rules','Cannot\x20import\x20rule\x20to\x20actor!','Import\x20Variant\x20&\x20Optional\x20Rules','absorbFnGetData','SOURCE_TYP_BREW','source','_activateListeners_absorbListItems','5etools','get','SOURCE_TYP_OFFICIAL_ALL','mutateForFilters','_pImportEntry_pGetFolderId','\x22\x20(from\x20\x22'];(function(_0x488385,_0x5e9524){const _0x3516cf=function(_0x33cedc){while(--_0x33cedc){_0x488385['push'](_0x488385['shift']());}};_0x3516cf(++_0x5e9524);}(_0x5e95,0x194));const _0x3516=function(_0x488385,_0x5e9524){_0x488385=_0x488385-0x0;let _0x3516cf=_0x5e95[_0x488385];return _0x3516cf;};'use strict';import{ImportList}from'./ImportList.js';import{Vetools}from'./Vetools.js';import{LGT}from'./Util.js';import{DataConverter}from'./DataConverter.js';import{Config}from'./Config.js';import{UtilList2}from'./UtilList2.js';class ImportListVariantRule extends ImportList{constructor(_0x365522){_0x365522=_0x365522||{};super({'title':_0x3516('0x23')},_0x365522,{'props':['variantrule'],'searchTitle':_0x3516('0xf'),'sidebarTab':'journal','gameProp':'journal','defaultFolderPath':[_0x3516('0x21')],'folderType':_0x3516('0xb'),'pageFilter':new PageFilterVariantRules()});}async['pGetSources'](){return[new ImportList[(_0x3516('0xd'))](Config[_0x3516('0x29')]('ui',_0x3516('0x1a'))?_0x3516('0x13'):_0x3516('0x28'),Vetools[_0x3516('0xa')],{'filterTypes':[ImportList[_0x3516('0x2a')]]}),new ImportList[(_0x3516('0xd'))](_0x3516('0x1e'),'',{'filterTypes':[ImportList[_0x3516('0x1b')]]}),new ImportList[(_0x3516('0x20'))](_0x3516('0x2'),{'filterTypes':[ImportList[_0x3516('0x1b')]]}),...(await Vetools[_0x3516('0x6')](_0x3516('0xc')))[_0x3516('0x1f')](({name,url})=>new ImportList['DataSourceUrl'](name,url,{'filterTypes':[ImportList[_0x3516('0x25')]]}))];}['getData'](){return{...super[_0x3516('0x5')](),'cols':[{'name':_0x3516('0x1c'),'width':0x9,'field':_0x3516('0xe')},{'name':'Source','width':0x2,'field':_0x3516('0x26'),'titleProp':'sourceLong','displayProp':_0x3516('0x15'),'rowClassName':'text-center'}],'rows':this['_content'][_0x3516('0x1f')]((_0x289ec2,_0x4c298e)=>{this[_0x3516('0x8')][_0x3516('0x2b')](_0x289ec2);return{'name':_0x289ec2[_0x3516('0xe')],'source':_0x289ec2[_0x3516('0x26')],'sourceShort':Parser[_0x3516('0x3')](_0x289ec2[_0x3516('0x26')]),'sourceLong':Parser[_0x3516('0x4')](_0x289ec2['source']),'ix':_0x4c298e};})};}[_0x3516('0x27')](){this[_0x3516('0x11')][_0x3516('0x7')](this[_0x3516('0x12')],{'fnGetName':_0x3b3d3b=>_0x3b3d3b[_0x3516('0xe')],'fnGetValues':_0x16ab50=>({'source':_0x16ab50['source']}),'fnGetData':UtilList2[_0x3516('0x24')],'fnBindListeners':_0x510fd8=>UtilList2['absorbFnBindListeners'](this[_0x3516('0x11')],_0x510fd8)});}async['pImportEntry'](_0x350ce9,_0x546bf1){_0x546bf1=_0x546bf1||{};console[_0x3516('0x1')](...LGT,_0x3516('0x19')+_0x350ce9[_0x3516('0xe')]+_0x3516('0x0')+Parser[_0x3516('0x3')](_0x350ce9[_0x3516('0x26')])+'\x22)');if(this[_0x3516('0x18')])throw new Error(_0x3516('0x22'));const _0x421953=DataConverter[_0x3516('0x10')](_0x350ce9,{'isAddPermission':!![]});if(_0x546bf1[_0x3516('0x14')]||!this[_0x3516('0x9')]){if(!_0x546bf1[_0x3516('0x14')]){const _0x4cda46=await this[_0x3516('0x2c')](_0x350ce9);if(_0x4cda46)_0x421953[_0x3516('0x17')]=_0x4cda46;}const _0x36487d=await JournalEntry['create'](_0x421953,{'renderSheet':!!_0x546bf1['isTemp'],'temporary':!!_0x546bf1[_0x3516('0x14')]});if(!_0x546bf1[_0x3516('0x14')])await game['journal'][_0x3516('0x1d')](_0x36487d);return _0x36487d;}else{const _0x203e7a=new JournalEntry(_0x421953);await this[_0x3516('0x9')][_0x3516('0x16')](_0x203e7a);return _0x203e7a;}}}export{ImportListVariantRule};