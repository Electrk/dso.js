const opTypes =
{
	OP_STR_TO_UINT:   'OpcodeSingle',
	OP_STR_TO_FLT:    'OpcodeSingle',
	OP_STR_TO_NONE:   'OpcodeSingle',
	OP_STR_TO_NONE_2: 'OpcodeSingle',

	OP_FLT_TO_UINT: 'OpcodeSingle',
	OP_FLT_TO_STR:  'OpcodeSingle',
	OP_FLT_TO_NONE: 'OpcodeSingle',

	OP_UINT_TO_FLT:  'OpcodeSingle',
	OP_UINT_TO_STR:  'OpcodeSingle',
	OP_UINT_TO_NONE: 'OpcodeSingle',

	OP_NOT:            'OpcodeSingle',
	OP_NOTF:           'OpcodeSingle',
	OP_NEG:            'OpcodeSingle',
	OP_ONESCOMPLEMENT: 'OpcodeSingle',

	OP_ADD: 'OpcodeSingle',
	OP_SUB: 'OpcodeSingle',
	OP_MUL: 'OpcodeSingle',
	OP_DIV: 'OpcodeSingle',
	OP_MOD: 'OpcodeSingle',

	OP_BITAND: 'OpcodeSingle',
	OP_BITOR:  'OpcodeSingle',
	OP_XOR:    'OpcodeSingle',

	OP_CMPLT: 'OpcodeSingle',
	OP_CMPGR: 'OpcodeSingle',
	OP_CMPGE: 'OpcodeSingle',
	OP_CMPLE: 'OpcodeSingle',
	OP_CMPEQ: 'OpcodeSingle',
	OP_CMPNE: 'OpcodeSingle',

	OP_OR:  'OpcodeSingle',
	OP_AND: 'OpcodeSingle',

	OP_SHL: 'OpcodeSingle',
	OP_SHR: 'OpcodeSingle',

	OP_COMPARE_STR: 'OpcodeSingle',

	OP_SAVEVAR_STR:  'OpcodeSingle',
	OP_SAVEVAR_UINT: 'OpcodeSingle',
	OP_SAVEVAR_FLT:  'OpcodeSingle',

	OP_LOADVAR_STR:  'OpcodeSingle',
	OP_LOADVAR_UINT: 'OpcodeSingle',
	OP_LOADVAR_FLT:  'OpcodeSingle',

	OP_SAVEFIELD_STR:  'OpcodeSingle',
	OP_SAVEFIELD_UINT: 'OpcodeSingle',
	OP_SAVEFIELD_FLT:  'OpcodeSingle',

	OP_LOADFIELD_STR:  'OpcodeSingle',
	OP_LOADFIELD_UINT: 'OpcodeSingle',
	OP_LOADFIELD_FLT:  'OpcodeSingle',

	OP_ADVANCE_STR_NUL: 'OpcodeSingle',

	OP_SETCURVAR_ARRAY:        'OpcodeSingle',
	OP_SETCURVAR_ARRAY_CREATE: 'OpcodeSingle',

	OP_SETCURFIELD_ARRAY: 'OpcodeSingle',

	OP_SETCUROBJECT:     'OpcodeSingle',
	OP_SETCUROBJECT_NEW: 'OpcodeSingle',

	OP_PUSH_FRAME: 'OpcodeSingle',
	OP_PUSH:       'OpcodeSingle',

	OP_RETURN: 'OpcodeSingle',

	OP_BREAK: 'OpcodeSingle',

	OP_LOADIMMED_UINT:  'OpcodeSinglePrefix',
	OP_LOADIMMED_FLT:   'OpcodeSinglePrefix',
	OP_LOADIMMED_STR:   'OpcodeSinglePrefix',
	OP_LOADIMMED_IDENT: 'OpcodeSinglePrefix',
	OP_TAG_TO_STR:      'OpcodeSinglePrefix',

	OP_JMP: 'OpcodeSinglePrefix',

	OP_JMPIF:  'OpcodeSinglePrefix',
	OP_JMPIFF: 'OpcodeSinglePrefix',

	OP_JMPIF_NP:    'OpcodeSinglePrefix',
	OP_JMPIFNOT_NP: 'OpcodeSinglePrefix',

	OP_SETCURVAR:        'OpcodeSinglePrefix',
	OP_SETCURVAR_CREATE: 'OpcodeSinglePrefix',
	OP_SETCURFIELD:      'OpcodeSinglePrefix',

	OP_ADD_OBJECT: 'OpcodeSinglePrefix',
	OP_END_OBJECT: 'OpcodeSinglePrefix',

	OP_CALLFUNC:         'OpcodeTriplePrefix',
	OP_CALLFUNC_RESOLVE: 'OpcodeTriplePrefix',

	OP_CREATE_OBJECT: 'OpcodeTriplePrefix',

	OP_ADVANCE_STR:            'OpcodeStringStart',
	OP_ADVANCE_STR_APPENDCHAR: 'OpcodeStringStart',
	OP_ADVANCE_STR_COMMA:      'OpcodeStringStart',

	OP_REWIND_STR:           'OpcodeStringEnd',
	OP_TERMINATE_REWIND_STR: 'OpcodeStringEnd',

	OP_JMPIFNOT:  'OpcodeJumpIfNot',
	OP_JMPIFFNOT: 'OpcodeJumpIfNot',

	OP_FUNC_DECL: 'OpcodeFuncDecl',

	OP_INVALID: 'OpcodeError',
};


export default opTypes;
