import { has } from '~/util/has.js';

import opcodeTypes    from '~/common/opcodes/types.js';
import opcodeSubtypes from '~/common/opcodes/subtypes.js';


/**
 * @param   {string|integer} op
 * @returns {string|null} null if not found
 */
const getOpcodeType = op =>
{
	if ( typeof op === 'number' )
	{
		op = this.opnames[op];
	}

	if ( has (opcodeTypes, op) )
	{
		return opcodeTypes[op];
	}

	return null;
};

/**
 * @param   {string|integer} op
 * @returns {string|null} null if not found
 */
const getOpcodeSubtype = op =>
{
	if ( typeof op === 'number' )
	{
		op = this.opnames[op];
	}

	if ( has (opcodeSubtypes, op) )
	{
		return opcodeSubtypes[op];
	}

	return null;
};


export { getOpcodeType, getOpcodeSubtype };
