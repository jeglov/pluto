var _0x594d=['_filterBox','filterBox','teardown','mutateForFilters','toDisplay','_pPopulateBoxOptions','_typeFilter','pInitFilterBox','Unimplemented!','type','addToFilters','Type'];(function(_0x455f56,_0x594d1){var _0x8dddb6=function(_0x25c1b2){while(--_0x25c1b2){_0x455f56['push'](_0x455f56['shift']());}};_0x8dddb6(++_0x594d1);}(_0x594d,0x187));var _0x8ddd=function(_0x455f56,_0x594d1){_0x455f56=_0x455f56-0x0;var _0x8dddb6=_0x594d[_0x455f56];return _0x8dddb6;};'use strict';class AppFilter{constructor(){this[_0x8ddd('0x5')]=null;}get[_0x8ddd('0x6')](){return this[_0x8ddd('0x5')];}['mutateAndAddToFilters'](_0x24be2d,_0x4a828d,_0xcc8927){this[_0x8ddd('0x8')](_0x24be2d,_0xcc8927);this[_0x8ddd('0x3')](_0x24be2d,_0x4a828d,_0xcc8927);}[_0x8ddd('0x8')](_0x405d54,_0x58c416){throw new Error(_0x8ddd('0x1'));}[_0x8ddd('0x3')](_0x298ebe,_0x16adff,_0x1e2e47){throw new Error(_0x8ddd('0x1'));}[_0x8ddd('0x9')](_0xf5c240,_0x1cee67){throw new Error(_0x8ddd('0x1'));}async[_0x8ddd('0xa')](){throw new Error(_0x8ddd('0x1'));}async[_0x8ddd('0x0')](_0xc3ce33){_0xc3ce33=_0xc3ce33||{};await this[_0x8ddd('0xa')](_0xc3ce33);this['_filterBox']=new FilterBox(_0xc3ce33);await this[_0x8ddd('0x5')]['pDoLoadState']();return this['_filterBox'];}[_0x8ddd('0x7')](){this[_0x8ddd('0x5')]['teardown']();}}class AppFilterBasic extends AppFilter{constructor(){super();this['_typeFilter']=new Filter({'header':_0x8ddd('0x4')});}[_0x8ddd('0x3')](_0x4c7b7e,_0x546430){if(_0x546430)return;this['_typeFilter']['addItem'](_0x4c7b7e[_0x8ddd('0x2')]);}async[_0x8ddd('0xa')](_0x581616){_0x581616['filters']=[this[_0x8ddd('0xb')]];}[_0x8ddd('0x9')](_0x1662d4,_0x29767c){return this[_0x8ddd('0x5')][_0x8ddd('0x9')](_0x1662d4,_0x29767c[_0x8ddd('0x2')]);}}export{AppFilter,AppFilterBasic};