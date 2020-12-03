"use strict";

class SharedConsts {}

// TODO(future) modify this when we can install to local directory again
SharedConsts.IS_ATROPOS_COOL = false;

SharedConsts.MODULE_TITLE = "Plutonium";
SharedConsts.MODULE_NAME = "plutonium";
SharedConsts.MODULE_DIR = "./dist/plutonium";
SharedConsts.MODULE_SCRIPT = "plutonium-main.js";

SharedConsts.PACKS_CREATURES = "./packs/creatures.db";
SharedConsts.PACKS_SPELLS = "./packs/spells.db";
SharedConsts.PACKS_ITEMS = "./packs/items.db";

SharedConsts.FILE_BESTIARY_TOKEN_LOOKUP = "bestiary-token-lookup.json";

SharedConsts.MODULE_LOCATION = SharedConsts.IS_ATROPOS_COOL ? `public/modules/${SharedConsts.MODULE_NAME}` : `modules/${SharedConsts.MODULE_NAME}`;

export {SharedConsts}
