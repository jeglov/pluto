const _0x2a9c=['render','_doRenderSettings_addPlayerConfigButton','_MODAL_STACK','isStreamerMode','keys','prototype','insertBefore','_onEscape','.game-system','menu','_ELEMENTS_WITH_FOCUS','Could\x20not\x20determine\x20z-index\x20for\x20app\x20','duration','button[data-action=\x22configure\x22]','isGM','call','Plutonium\x20','releaseAll','z-index','windows','SRD\x20Module','cacheMethod','_doRenderSettings_handleConfigFixEscapeKey','close','zIndex','insertAfter','number','get','isFixEscapeKey','_handleConfigUpdate_handleFastAnimations','key','activeLayer','renderRollTableDirectory','saveFog','nodeName','ready','text','sort','_handleConfigUpdate_handleFixEscapeKey','#compendium','remove','_handled','.compendium-footer','element','renderItemDirectory','each','length','_controlled','isEscapeable','restoreCachedMethod','preventDefault','.directory-footer','renderSettings','appId','.ui__wrp-player-settings','user','keyboard','pHandleButtonClick','isFastAnimations','toggle','<button><i\x20class=\x22fas\x20fa-cogs\x22></i>\x20Configure\x20','context','filter','find','_init_addCompendiumObfuscation','getCachedMethod','renderJournalDirectory','style','_init_addDirectoryWrapper','.ui__btn-open-menu','click','$getDirButton','appendTo','target','blur','add','settings','hasFocus','init','animate','TEXTAREA','<button\x20class=\x22ui__btn-open-menu\x22><i\x20class=\x22fas\x20fa-bars\x22></i>\x20Open\x20Main\x20Menu</button>','warn','_handleConfigUpdate','</button>'];(function(_0x2c58e6,_0x2a9c01){const _0x5efdd8=function(_0x1f381b){while(--_0x1f381b){_0x2c58e6['push'](_0x2c58e6['shift']());}};_0x5efdd8(++_0x2a9c01);}(_0x2a9c,0x11e));const _0x5efd=function(_0x2c58e6,_0x2a9c01){_0x2c58e6=_0x2c58e6-0x0;let _0x5efdd8=_0x2a9c[_0x2c58e6];return _0x5efdd8;};'use strict';import{Config}from'./Config.js';import{ChooseImporter}from'./ChooseImporter.js';import{MenuCollectionTools}from'./MenuCollectionTools.js';import{SharedConsts}from'../shared/SharedConsts.js';import{UtilPatch}from'./UtilPatch.js';class UtilUi{static[_0x5efd('0x2f')](){if(game['user'][_0x5efd('0x44')]){UtilUi[_0x5efd('0x25')]('renderActorDirectory');UtilUi[_0x5efd('0x25')](_0x5efd('0xd'));UtilUi[_0x5efd('0x25')](_0x5efd('0x23'));UtilUi[_0x5efd('0x25')](_0x5efd('0x1'));}UtilUi[_0x5efd('0x21')]();Hooks['on']('plutonium.configUpdate',()=>this['_handleConfigUpdate']());this[_0x5efd('0x34')]();}static[_0x5efd('0x21')](){const _0x1ec367='('+SharedConsts['MODULE_NAME']+')';Hooks['on']('renderCompendiumDirectory',()=>{if(!Config[_0x5efd('0x51')]('ui',_0x5efd('0x39')))return;$(_0x5efd('0x8'))[_0x5efd('0x20')](_0x5efd('0xb'))[_0x5efd('0xe')]((_0x1f0c6a,_0x2184da)=>{$(_0x2184da)[_0x5efd('0x20')]('span')['filter']((_0x2bbb07,_0x432881)=>$(_0x432881)['text']()['trim']()===_0x1ec367)[_0x5efd('0x5')]('\x20(Expanded\x20SRD)');});});}static[_0x5efd('0x25')](_0x322b06){Hooks['on'](_0x322b06,(_0x152721,_0x172d59)=>{_0x172d59[_0x5efd('0x20')]('.dir__wrp-footer')[_0x5efd('0x9')]();$$`<div class="flex-col dir__wrp-footer w-100 no-shrink min-w-100">
				<hr class="w-100 m-1">
				<div class="flex w-100">
					${ChooseImporter[_0x5efd('0x28')](_0x322b06)}
					${MenuCollectionTools[_0x5efd('0x28')](_0x322b06)}
					${Config[_0x5efd('0x28')](_0x322b06)}
				</div>
			</div>`[_0x5efd('0x29')](_0x172d59[_0x5efd('0x20')](_0x5efd('0x14')));});Hooks['on'](_0x5efd('0x15'),(_0x399d62,_0x1dee06)=>{this[_0x5efd('0x4c')](_0x399d62,_0x1dee06);this['_doRenderSettings_addPlayerConfigButton'](_0x399d62,_0x1dee06);});}static['_handleConfigUpdate'](){this[_0x5efd('0x53')]();this[_0x5efd('0x7')]();}static[_0x5efd('0x53')](){UtilPatch[_0x5efd('0x4b')]($[_0x5efd('0x3b')],_0x5efd('0x30'));if(!Config[_0x5efd('0x51')]('ui',_0x5efd('0x1b'))){UtilPatch[_0x5efd('0x12')]($[_0x5efd('0x3b')],_0x5efd('0x30'));return;}$['prototype']['animate']=function(..._0x4b5ccc){const _0xa73b29=[..._0x4b5ccc];for(let _0x2721bb=0x0;_0x2721bb<_0xa73b29[_0x5efd('0xf')];++_0x2721bb){const _0x2a5633=_0xa73b29[_0x2721bb];if(typeof _0x2a5633==='object'&&_0x2a5633[_0x5efd('0x42')]!=null){if(_0x2a5633['duration']>0x21)_0x2a5633['duration']=0x21;}else if(typeof _0x2a5633===_0x5efd('0x50')){if(_0x2a5633>0x21)_0xa73b29[_0x2721bb]=0x21;}}const _0x19d8f7=UtilPatch[_0x5efd('0x22')]($[_0x5efd('0x3b')],_0x5efd('0x30'));_0x19d8f7[_0x5efd('0x45')](this,..._0xa73b29);};}static[_0x5efd('0x7')](){ui[_0x5efd('0x2d')][_0x5efd('0x36')]();UtilPatch[_0x5efd('0x4b')](game[_0x5efd('0x19')],_0x5efd('0x3d'),{'isBind':!![]});if(!Config[_0x5efd('0x51')]('ui',_0x5efd('0x52'))){game[_0x5efd('0x19')][_0x5efd('0x3d')]=function(_0x3033fd,_0x53d0f1,_0xf248e7){if(UiUtil[_0x5efd('0x38')]&&UiUtil[_0x5efd('0x38')][_0x5efd('0xf')])return;UtilPatch['getCachedMethod'](game[_0x5efd('0x19')],_0x5efd('0x3d'))(_0x3033fd,_0x53d0f1,_0xf248e7);};return;}game[_0x5efd('0x19')]['_onEscape']=function(_0x4eaa42,_0x3e596a,_0x5f2e84){if(UiUtil['_MODAL_STACK']&&UiUtil['_MODAL_STACK'][_0x5efd('0xf')])return;if(_0x3e596a)return;if(_0x5f2e84[_0x5efd('0x2e')]&&UtilUi[_0x5efd('0x40')]['has'](_0x4eaa42[_0x5efd('0x2a')][_0x5efd('0x3')])){_0x4eaa42['target'][_0x5efd('0x2b')]();return;}if(canvas[_0x5efd('0x4')])canvas['sight'][_0x5efd('0x2')]();if(ui[_0x5efd('0x1e')]&&ui[_0x5efd('0x1e')][_0x5efd('0x3f')][_0x5efd('0xf')])ui[_0x5efd('0x1e')][_0x5efd('0x4d')]();else if(canvas[_0x5efd('0x4')]&&Object[_0x5efd('0x3a')](canvas[_0x5efd('0x0')][_0x5efd('0x10')])['length']){_0x4eaa42[_0x5efd('0x13')]();canvas['activeLayer'][_0x5efd('0x47')]();}else if(Object['values'](ui[_0x5efd('0x49')])[_0x5efd('0x1f')](_0x194317=>_0x194317[_0x5efd('0x11')]==null||_0x194317[_0x5efd('0x11')]===!![])[_0x5efd('0xf')]){const _0x229881=Object['entries'](ui[_0x5efd('0x49')])['filter'](([_0xe06621,_0x3cd709])=>_0x3cd709[_0x5efd('0x11')]==null||_0x3cd709[_0x5efd('0x11')]===!![])['map'](([_0x4ac1e0,_0x37e2d7])=>{const _0x4a035f=Number(((_0x37e2d7[_0x5efd('0xc')][0x0]||{})[_0x5efd('0x24')]||{})[_0x5efd('0x48')]||-0x1);if(isNaN(_0x4a035f)||!~_0x4a035f)console[_0x5efd('0x33')](_0x5efd('0x41')+_0x4ac1e0);return{'appId':_0x4ac1e0,'zIndex':isNaN(_0x4a035f)?-0x1:_0x4a035f};})[_0x5efd('0x6')]((_0x451583,_0x1ca5be)=>SortUtil['ascSort'](_0x1ca5be['zIndex'],_0x451583[_0x5efd('0x4e')]));ui[_0x5efd('0x49')][_0x229881[0x0][_0x5efd('0x16')]][_0x5efd('0x4d')]();}else ui[_0x5efd('0x3f')][_0x5efd('0x1c')]();this[_0x5efd('0xa')][_0x5efd('0x2c')](_0x5f2e84[_0x5efd('0x54')]);};}static[_0x5efd('0x4c')](_0x3f8401,_0x337715){if(!Config[_0x5efd('0x51')]('ui',_0x5efd('0x52'))){return _0x337715[_0x5efd('0x20')](_0x5efd('0x26'))['remove']();}if(_0x337715[_0x5efd('0x20')](_0x5efd('0x26'))[_0x5efd('0xf')])return;$(_0x5efd('0x32'))[_0x5efd('0x27')](()=>{const _0x5d9787=ui[_0x5efd('0x3f')]['element'];if(!_0x5d9787[_0x5efd('0xf')])ui['menu'][_0x5efd('0x36')](!![]);else _0x5d9787['slideDown'](0x96);})[_0x5efd('0x3c')](_0x337715[_0x5efd('0x20')](_0x5efd('0x43')));}static[_0x5efd('0x37')](_0x79f5d0,_0x156bd3){if(game[_0x5efd('0x18')][_0x5efd('0x44')])return;if(_0x156bd3[_0x5efd('0x20')](_0x5efd('0x17'))[_0x5efd('0xf')])return;const _0x5125f0=$(_0x5efd('0x1d')+(Config[_0x5efd('0x51')]('ui',_0x5efd('0x39'))?_0x5efd('0x4a'):_0x5efd('0x46'))+_0x5efd('0x35'))[_0x5efd('0x27')](_0x4a540d=>Config[_0x5efd('0x1a')](_0x4a540d));$$`<div class="ui__wrp-player-settings">${_0x5125f0}</div>`[_0x5efd('0x4f')](_0x156bd3[_0x5efd('0x20')](_0x5efd('0x3e')));}}UtilUi[_0x5efd('0x40')]=new Set(['INPUT',_0x5efd('0x31')]);export{UtilUi};