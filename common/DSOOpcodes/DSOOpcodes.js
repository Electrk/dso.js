import { has } from '~/util/has.js';

import enumerate from '~/util/enumerate.js';

import * as getOpcodeType from '~/DSOOpcodes/getOpcodeType.js';
import * as getOpSize     from '~/DSOOpcodes/getOpSize.js';
import * as precedence    from '~/DSOOpcodes/precedence.js';
import * as associativity from '~/DSOOpcodes/associativity.js';
import * as operatorToStr from '~/DSOOpcodes/operatorToStr.js';


class DSOOpcodes
{
	/**
	 * @param {string[]} opnames
	 */
	constructor ( opnames )
	{
		this.opnames = opnames;
		this.opcodes = enumerate (opnames);
	}

	/**
	 * Checks if it's a non-filler opcode.
	 *
	 * @param   {string|integer} op
	 * @returns {boolean}
	 */
	isOpcode ( op )
	{
		const { opcodes } = this;

		if ( typeof op === 'number' )
		{
			return op >= 0 && op < this.opnames.length &&
			       op !== opcodes.FILLER1 && op !== opcodes.FILLER2;
		}

		return has (opcodes, op) && op !== 'FILLER1' && op !== 'FILLER2';
	}
}

Object.assign (DSOOpcodes.prototype,
{
	...getOpcodeType, ...getOpSize,
	...precedence,    ...associativity,
	...operatorToStr,
});


export default DSOOpcodes;
