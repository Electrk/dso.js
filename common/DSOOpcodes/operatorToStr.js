const opToStr =
{
	'OP_NOT':            '!',
	'OP_NOTF':           '!',
	'OP_ONESCOMPLEMENT': '~',
	'OP_NEG':            '<NEG>',  // To prevent conflicts with OP_SUB

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
 * @param   {string|integer} op
 * @returns {string|null} null if not a valid opcode.
 */
const operatorToStr = function ( op )
{
	if ( typeof op === 'number' )
	{
		op = this.opnames[op];
	}

	if ( !this.isOpcode (op) )
	{
		return null;
	}

	return opToStr[op];
};


export { operatorToStr };
