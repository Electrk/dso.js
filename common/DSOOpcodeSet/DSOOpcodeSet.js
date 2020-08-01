import enumerate from '~/util/enumerate.js';

import { has }       from '~/util/has.js';
import { getOpType } from '~/common/ops/getOpType.js';


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

	/**
	 * @param {integer[]} code
	 * @param {integer}   ip
	 *
	 * @returns {integer} How many positions it takes up. 0 if invalid opcode.
	 */
	getOpSize ( code, ip )
	{
		const op   = this.getOpname (code[ip]);
		const type = getOpType (op);

		switch ( type )
		{
			case 'OpcodeSinglePrefix':
			case 'OpcodeJumpIfNot':
			{
				return 2;
			}

			case 'OpcodeTriplePrefix':
			{
				return 4;
			}

			case 'OpcodeSingle':
			case 'OpcodeStringStart':
			case 'OpcodeStringEnd':
			{
				if ( op === 'OP_ADVANCE_STR_APPENDCHAR' )
				{
					return 2;
				}

				return 1;
			}

			case 'OpcodeFuncDecl':
			{
				return 7 + code[ip + 6];
			}
		}

		return 0;
	}
}


export default DSOOpcodeSet;
