### Installation

- Copy the directory containing this README to `%appdata%/../Local/FoundryVTT/Data/modules`
- Restart Foundry
- In Foundry, go to the "Settings" ("?") tab, click "Manage Modules," and enable "Plutonium." Be sure to save the changes by clicking "Update Modules."

### Server-Side Modding

_**Note: Local installs only!** You cannot use this with hosting services such as Forge. Turn back now._

Plutonium comes with a server-side mod to enable mass-downloading via the built-in Art Browser. To install this:

- Find Foundry's `main.js` file in:
   - If you installed "for current user only" on Windows: `%appdata%/../Local/Programs/FoundryVTT/resources/app`
   - If you installed "for all users" on Windows: `Program Files/FoundryVTT/resources/app`
- Edit the file, changing the final line from:
```js
require("init")(process.argv, global.paths, initLogging);
```

to

```js
require("init")(process.argv, global.paths, initLogging)
	.then(() => {
		const {json: jsonBodyParser} = require("express");
		const {Plutonium} = require("plutonium-backend");
		const router = global.express.app._router;
		const ixJsonParser = router.stack.findIndex(it => it.name === "jsonParser");
		// Replace the original JSON body parser with our version
		global.express.app.use(jsonBodyParser({limit: "5mb"}));
		router.stack[ixJsonParser] = router.stack.pop();
		router.post("/api/plutonium", Plutonium.post.bind(Plutonium));
	});
```
- Copy the `plutonium-backend.js` file from `server/` to the folder containing `main.js`
- Launch Foundry, and pray that nothing explodes
