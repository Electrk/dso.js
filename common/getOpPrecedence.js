import { has } from '~/util/has.js';


const precedence =
{
	OP_NOT: 1, OP_NOTF: 1, OP_NEG: 1, OP_ONESCOMPLEMENT: 1,
	OP_MUL: 2, OP_DIV:  2, OP_MOD: 2,
	OP_ADD: 3, OP_SUB:  3,
	OP_SHL: 4, OP_SHR:  4,

	OP_COMPARE_STR: 5,

	OP_CMPLT: 6, OP_CMPLE: 6, OP_CMPGR: 6, OP_CMPGE: 6,
	OP_CMPEQ: 7, OP_CMPNE: 7,

	OP_BITAND: 8,

	OP_XOR: 9,

	OP_BITOR: 10,

	OP_AND: 11, OP_JMPIFNOT_NP: 11,
	OP_OR:  12, OP_JMPIF_NP:    12,
};



/**
 * @param   {string} op
 * @returns {integer} Infinity if no precedence specified.
 */
const getOpPrecedence = op =>
{
	if ( has (precedence, op) )
	{
		return precedence[op];
	}

	return Infinity;
};


export default getOpPrecedence;
