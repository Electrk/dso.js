import { DSODisassemblerError } from '~/decompiler/errors.js';

import { getOpType, getOpSubtype } from '~/common/ops/getOpType.js';


const scanNext = function ()
{
	const { ip } = this;

	const opcode  = this.advance ();
	const opname  = this.opcodeSet.getOpname (opcode);

	const type    = getOpType (opname);
	const subtype = getOpSubtype (opname);

	this.handleMarkers (ip);

	switch ( type )
	{
		case 'OpcodeSingle':
		case 'OpcodeStringEnd':
		{
			return this.handleSingle (opname, subtype);
		}

		case 'OpcodeSinglePrefix':
		{
			return this.handleSinglePrefix (opname, subtype, ip);
		}

		case 'OpcodeTriplePrefix':
		{
			return this.handleTriplePrefix (opname, subtype, ip);
		}

		case 'OpcodeJumpIfNot':
		{
			return this.handleJumpIfNot (opname, subtype, ip);
		}

		case 'OpcodeStringStart':
		{
			return this.handleStringStart (opname, subtype, ip);
		}

		case 'OpcodeFuncDecl':
		{
			return this.handleFuncDecl ();
		}

		case 'OpcodeError':
		{
			throw new DSODisassemblerError (`Invalid opcode ${opcode} at ${ip}`);
		}

		case null:
		{
			throw new DSODisassemblerError (`Non-existent opcode ${opcode} at ${ip}`);
		}

		default:
		{
			throw new DSODisassemblerError (`Unhandled opcode ${opcode} at ${ip}`);
		}
	}
};


export { scanNext };
