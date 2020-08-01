import { has } from '~/util/has.js';


const opToStr =
{
	'OP_NOT':            '!',
	'OP_NOTF':           '!',
	'OP_NEG':            '<NEG>',  // To prevent conflicts with OP_SUB
	'OP_ONESCOMPLEMENT': '~',

	'OP_ADD': '+',
	'OP_SUB': '-',
	'OP_DIV': '/',
	'OP_MUL': '*',
	'OP_MOD': '%',

	'OP_BITAND': '&',
	'OP_BITOR':  '|',
	'OP_XOR':    '^',
	'OP_SHL':    '<<',
	'OP_SHR':    '>>',

	'OP_CMPLT': '<',
	'OP_CMPGR': '>',
	'OP_CMPGE': '>=',
	'OP_CMPLE': '<=',
	'OP_CMPEQ': '==',
	'OP_CMPNE': '!=',

	'OP_COMPARE_STR': '$=',

	'OP_OR':          '||',
	'OP_AND':         '&&',
	'OP_JMPIF_NP':    '||',
	'OP_JMPIFNOT_NP': '&&',
};


/**
 * @param   {string} op
 * @returns {string|null} null if invalid opname.
 */
const operatorToStr = op =>
{
	return has (opToStr, op) ? opToStr[op] : null;
};


export default operatorToStr;
