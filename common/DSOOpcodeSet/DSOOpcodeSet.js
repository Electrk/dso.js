import { has } from '~/util/has.js';

import enumerate from '~/util/enumerate.js';

import * as getOpSize from '~/DSOOpcodeSet/getOpSize.js';


class DSOOpcodeSet
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
	 * @param   {string} opname
	 * @returns {integer|null} null if invalid opname
	 */
	getOpcode ( opname )
	{
		return this.isOpcode (opname) ? this.opcodes[opname] : null;
	}

	/**
	 * @param   {string} opcode
	 * @returns {integer|null} null if invalid opcode
	 */
	getOpname ( opcode )
	{
		return this.isOpcode (opcode) ? this.opnames[opcode] : null;
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

Object.assign (DSOOpcodeSet.prototype, { ...getOpSize });


export default DSOOpcodeSet;
