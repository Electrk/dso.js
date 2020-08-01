/**
 * @param {integer[]} code
 * @param {integer}   ip
 *
 * @returns {integer} How many positions it takes up. 0 if invalid opcode.
 */
const getOpSize = function ( code, ip )
{
	const op      = code[ip];
	const type    = this.getOpcodeType (op);
	const subtype = this.getOpcodeSubtype (op);

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
			if ( op === this.opcodes.OP_ADVANCE_STR_APPENDCHAR )
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
};


export { getOpSize };
