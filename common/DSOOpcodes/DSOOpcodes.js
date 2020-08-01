import { has } from '~/util/has.js';

import enumerate from '~/util/enumerate.js';

import * as getOpcodeType from '~/DSOOpcodes/getOpcodeType.js';
import * as getOpSize     from '~/DSOOpcodes/getOpSize.js';
import * as operatorToStr from '~/DSOOpcodes/operatorToStr.js';


class DSOOpcodes
{
	/**
	 * @param {string[]} opnames - A list of opcode names.
	 * @param {integer}  version - DSO version.
	 */
	constructor ( opnames, version )
	{
		this.opnames = opnames;
		this.opcodes = enumerate (opnames);
		this.version = version;
	}

	/**
	 * Checks if it's a valid opcode.
	 *
	 * @param   {string|integer} op
	 * @returns {boolean}
	 */
	isOpcode ( op )
	{
		const { opcodes } = this;

		if ( typeof op === 'number' )
		{
			return op >= 0 && op < this.opnames.length;
		}

		return has (opcodes, op);
	}
}

Object.assign (DSOOpcodes.prototype,
{
	...getOpcodeType, ...getOpSize,
	...operatorToStr,
});


export default DSOOpcodes;
