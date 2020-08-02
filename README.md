# dso.js

A DSO decompiler for the Torque Game Engine.

It currently only supports games made in TGE, so TGEA, Torque3D, etc. are not supported.


## Installation

`npm install dso.js`


## Usage

For client-side, use with the [`buffer`](https://npmjs.com/package/buffer) package.

For server-side, you can just use the native `Buffer` class.


### Basic Examples

#### Browser:

```js
import { Buffer }     from 'buffer/';
import { decompiler } from 'dso.js';


// An HTML <input> element with the type "file" and an ID of "fileUpload"
document.getElementById ('fileUpload').onchange = function ( event )
{
	if ( event.target.files.length <= 0 )
	{
		return;
	}

	const file   = event.target.files[0];
	const reader = new FileReader ();

	reader.readAsArrayBuffer (file);

	reader.onload = function ( readerEvent )
	{
		const buffer = Buffer.from (readerEvent.target.result);

		let codeString;

		try
		{
			codeString = decompiler.decompileDSO (buffer);
		}
		catch ( error )
		{
			console.error ('Decompiler Error:', error);
			return;
		}

		console.log (codeString);
	};
};

```


#### Node.js:

```js
const fs = require ('fs');

const { decompiler } = require ('dso.js');


fs.readFile ('./myFile.cs.dso', ( error, buffer ) =>
{
	if ( error )
	{
		console.error (error);
		return;
	}

	let codeString;

	try
	{
		codeString = decompiler.decompileDSO (buffer);
	}
	catch ( decompilerError )
	{
		console.error ('[!] Decompiler Error:', decompilerError);
		return;
	}

	fs.writeFileSync ('./myFile.cs', codeString);
});
```

### Plugins

This decompiler supports plugins for different games/versions.  You can mix and match different opcode sets, loaders, parsers, etc.


#### Example:

```js
import { decompiler } from 'dso.js';

import blocklandDSO from 'blockland-dso.js';


// Add the plugin to the decompiler.
decompiler.plugins.add (blocklandDSO);

// ...

// Decompilation with plugins.
decompiler.decompileDSO (buffer,
{
	plugins:
	{
		opcodeSet: 'blockland-v21',
		loader:    'blockland-common',
	},
});

```
