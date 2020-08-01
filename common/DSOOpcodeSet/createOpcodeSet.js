import DSOOpcodeSet from '~/DSOOpcodeSet/DSOOpcodeSet.js';

import * as blv20 from '~/DSOOpcodeSet/opcodes/blockland-v20.js';
import * as blv21 from '~/DSOOpcodeSet/opcodes/blockland-v21.js';


/**
 * @param   {string|Object} nameOrObject
 * @param   {string[]}      [nameOrObject.opcodes] - List of opcode names.
 * @param   {integer}       [nameOrObject.version] - DSO version to require.
 *
 * @returns {DSOOpcodeSet}
 */
const createOpcodeSet = nameOrObject =>
{
	let opcodes;
	let version;

	if ( typeof nameOrObject === 'object' )
	{
		opcodes = nameOrObject.opcodes;
		version = nameOrObject.version;
	}
	else
	{
		switch ( nameOrObject )
		{
			case 'blockland-v20':
			{
				opcodes = blv20.opcodes;
				version = blv20.version;

				break;
			}

			case 'blockland-v21':
			{
				opcodes = blv21.opcodes;
				version = blv21.version;

				break;
			}

			default:
			{
				throw new Error (`Invalid opcode set name \`${nameOrObject}\``);
			}
		}
	}

	return new DSOOpcodeSet (opcodes, version);
};


export default createOpcodeSet;
