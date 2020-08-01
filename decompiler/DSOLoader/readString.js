import escapeChars from '~/common/strings/escapeChars.js';

import { DSOLoaderError } from '~/decompiler/errors.js';


/**
 * @param {integer} [chars=1]           - Number of characters to read.
 * @param {string}  [encoding="binary"] - You almost certainly won't need to change this.
 */
const readString = function ( chars = 1, encoding = 'binary' )
{
	if ( chars <= 0 )
	{
		throw new DSOLoaderError (`Cannot advance ${chars} chars - must be greater than 0`);
	}

	if ( this.currPos + chars >= this.buffer.length )
	{
		throw new DSOLoaderError (`Cannot advance ${chars} chars - exceeds buffer length from current index`);
	}

	const string = this.buffer.toString (encoding, this.currPos, this.currPos + chars);

	this.advance (chars);

	return string;
};

const readStringTable = function ()
{
	let strings = '';

	const size = this.readInteger (true);

	if ( size > 0 )
	{
		strings = this.readString (size);
	}

	return strings;
};

const buildStringTable = function ( strings )
{
	const table = {};

	let currString = '';
	let currIndex  = 0;

	const { length } = strings;

	for ( let i = 0; i < length; i++ )
	{
		const char = strings.charAt (i);

		if ( char === '\0' )
		{
			table[currIndex] = currString;

			currString = '';
			currIndex  = i + 1;
		}
		else
		{
			currString += char;
		}
	}

	for ( let i in table )
	{
		table[i] = escapeChars (table[i]);
	}

	return table;
};


export { readString, readStringTable, buildStringTable };
