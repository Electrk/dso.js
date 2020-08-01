import { has } from '~/util/has.js';

import opcodeTypes    from '~/DSOOpcodes/types.js';
import opcodeSubtypes from '~/DSOOpcodes/subtypes.js';


/**
 * @param   {string|integer} op
 * @returns {string|null} null if not found
 */
const getOpcodeType = function ( op )
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
const getOpcodeSubtype = function ( op )
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
