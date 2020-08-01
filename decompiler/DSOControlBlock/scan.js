import assert from '~/util/assert.js';

import { getOpcodeSubtype } from '~/common/opcodes/getOpcodeType.js';


/**
 * Initial scan to add jump sources and determine the control block's type.
 *
 * @param {DSOLoader} loader
 */
const scan = function ( loader )
{
	const { end } = this;

	const { code, opcodeSet } = loader;

	let ip = this.start;

	if ( this.type === 'root' )
	{
		this.jumps.clear ();
		this.blocks.clear ();
	}
	else
	{
		ip += 2;
	}

	while ( ip < end )
	{
		const op      = code[ip];
		const subtype = getOpcodeSubtype (opcodeSet.getOpname (op));

		if ( subtype === 'OpcodeJumpIfNot' )
		{
			this.addBlock (ip, code[ip + 1], this).scan (loader);
			ip = code[ip + 1];
		}
		else
		{
			if ( subtype === 'OpcodeJump' || subtype === 'OpcodeLogicJump' )
			{
				const jump = this.addJump (ip, code[ip + 1], this);

				if ( subtype === 'OpcodeLogicJump' )
				{
					jump.setType ('logicOp');
				}
			}
			else if ( subtype === 'OpcodeLoopJump' )
			{
				assert (this.type !== 'root', `OP_JMPIF(F) outside of loop at ${ip}`);

				this.type = 'loop';
			}

			const size = opcodeSet.getOpSize (code, ip);

			assert (size > 0, `Invalid opcode ${op} at ${ip}`);

			ip += size;
		}
	}
};


export { scan };
