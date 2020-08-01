import { has } from '~/util/has.js';

import opTypes    from '~/common/ops/types.js';
import opSubtypes from '~/common/ops/subtypes.js';


/**
 * @param   {string} op
 * @returns {string|null} null if not found
 */
const getOpType = op =>
{
	if ( has (opTypes, op) )
	{
		return opTypes[op];
	}

	return null;
};

/**
 * @param   {string} op
 * @returns {string|null} null if not found
 */
const getOpSubtype = op =>
{
	if ( has (opSubtypes, op) )
	{
		return opSubtypes[op];
	}

	return null;
};


export { getOpType, getOpSubtype };
