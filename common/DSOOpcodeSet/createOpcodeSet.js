import DSOOpcodeSet from '~/DSOOpcodeSet/DSOOpcodeSet.js';

import * as blv21 from '~/DSOOpcodeSet/opcodes/blockland-v21.js';


/**
 * @param   {string} setName
 * @returns {DSOOpcodeSet}
 */
const createOpcodeSet = setName =>
{
	let opcodes;
	let version;

	switch ( setName )
	{
		case 'blockland-v21':
		{
			opcodes = blv21.opcodes;
			version = blv21.version;

			break;
		}

		default:
		{
			throw new Error (`Invalid opcode set name \`${setName}\``);
		}
	}

	return new DSOOpcodeSet (opcodes, version);
};


export default createOpcodeSet;
