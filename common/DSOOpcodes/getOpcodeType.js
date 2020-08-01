import { has } from '~/util/has.js';

import mapOpsToValue  from '~/common/mapOpsToValue.js';
import opcodeTypes    from '~/decompiler/opcodes/types.js';
import opcodeSubtypes from '~/decompiler/opcodes/subtypes.js';

const opToType    = mapOpsToValue (opcodeTypes);
const opToSubtype = mapOpsToValue (opcodeSubtypes);


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

	if ( has (opToType, op) )
	{
		return opToType[op];
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

	if ( has (opToSubtype, op) )
	{
		return opToSubtype[op];
	}

	return null;
};


export { getOpcodeType, getOpcodeSubtype };
