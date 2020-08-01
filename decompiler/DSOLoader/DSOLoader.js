import assert from '~/util/assert.js';

import readFuncBLv21 from '~/DSOLoader/readFuncs/blockland-v21.js';

import { DSOLoaderError } from '~/decompiler/errors.js';

import * as getTableValue from '~/DSOLoader/getTableValue.js';
import * as readNumber    from '~/DSOLoader/readNumber.js';
import * as readString    from '~/DSOLoader/readString.js';


/**
 * Reads raw DSO file buffer and unencrypts string tables -- does not parse opcodes.
 *
 * @usage Create a DSOLoader instance with a file buffer as the argument, then call .read()
 */
class DSOLoader
{
	/**
	 * @param {Buffer}       buffer     - File buffer for open DSO file.
	 * @param {DSOOpcodeSet} opcodeSet  - Opcode set we're using.
	 * @param {Function}     [readFunc] - Version-specific function for reading DSOs.
	 */
	constructor ( buffer = null, opcodeSet = null, readFunc = readFuncBLv21 )
	{
		if ( buffer === null )
		{
			throw new DSOLoaderError ('Missing required argument: `buffer`');
		}

		if ( opcodeSet === null )
		{
			throw new DSOLoaderError ('Missing required argument: `opcodeSet`');
		}

		this.buffer    = buffer;
		this.opcodeSet = opcodeSet;
		this.readFunc  = readFunc;

		this.currPos = 0;

		this.code = [];

		this.globalStringTable   = null;
		this.functionStringTable = null;

		this.globalFloatTable   = null;
		this.functionFloatTable = null;

		this.lineBreakPairs = [];
		this.identTable     = {};
	}

	read ()
	{
		this.readFunc ();
	}

	readVersion ()
	{
		const fileVersion = this.readInteger (true);

		const { version } = this.opcodeSet;

		if ( fileVersion !== version )
		{
			throw new DSOLoaderError (`Invalid DSO version: Expected ${version}, got ${fileVersion}`);
		}
	}

	readCode ( codeSize )
	{
		for ( let i = 0; i < codeSize; i++ )
		{
			this.code.push (this.readCodeByte ());
		}
	}

	readLineBreaks ( codeSize, numPairs )
	{
		const totalSize = codeSize + numPairs * 2;

		for ( let i = codeSize; i < totalSize; i++ )
		{
			this.lineBreakPairs.push (this.readInteger (true));
		}
	}

	readIdentTable ( numIdent )
	{
		while ( numIdent-- )
		{
			let index = this.readInteger (true);
			let count = this.readInteger (true);

			while ( count-- )
			{
				const ip = this.readInteger (true);

				this.code[ip]       = index;
				this.identTable[ip] = index;
			}
		}
	}

	advance ( amount = 1 )
	{
		if ( amount < 1 )
		{
			throw new DSOLoaderError (`Cannot advance ${amount} bytes - must be greater than 0`);
		}

		if ( this.currPos + amount > this.buffer.length )
		{
			throw new DSOLoaderError (`Cannot advance ${amount} bytes - exceeds buffer length`);
		}

		this.currPos += amount;

		return this.buffer[this.currPos - amount];
	}
}

Object.assign (DSOLoader.prototype, { ...getTableValue, ...readNumber, ...readString });


export default DSOLoader;
