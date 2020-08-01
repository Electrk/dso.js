const opcodeSubtypes =
{
	OP_STR_TO_UINT: 'OpcodeConvert',
	OP_STR_TO_FLT:  'OpcodeConvert',
	OP_FLT_TO_UINT: 'OpcodeConvert',
	OP_FLT_TO_STR:  'OpcodeConvert',
	OP_UINT_TO_FLT: 'OpcodeConvert',
	OP_UINT_TO_STR: 'OpcodeConvert',

	OP_STR_TO_NONE:   'OpcodeTypeToNone',
	OP_STR_TO_NONE_2: 'OpcodeTypeToNone',
	OP_FLT_TO_NONE:   'OpcodeTypeToNone',
	OP_UINT_TO_NONE:  'OpcodeTypeToNone',

	OP_LOADIMMED_UINT:  'OpcodeLoadImmed',
	OP_LOADIMMED_FLT:   'OpcodeLoadImmed',
	OP_LOADIMMED_STR:   'OpcodeLoadImmed',
	OP_LOADIMMED_IDENT: 'OpcodeLoadImmed',
	OP_TAG_TO_STR:      'OpcodeLoadImmed',

	OP_JMP: 'OpcodeJump',

	OP_JMPIF:  'OpcodeLoopJump',
	OP_JMPIFF: 'OpcodeLoopJump',

	OP_JMPIFNOT:  'OpcodeJumpIfNot',
	OP_JMPIFFNOT: 'OpcodeJumpIfNot',

	OP_JMPIF_NP:    'OpcodeLogicJump',
	OP_JMPIFNOT_NP: 'OpcodeLogicJump',

	OP_NOT:            'OpcodeUnary',
	OP_NOTF:           'OpcodeUnary',
	OP_NEG:            'OpcodeUnary',
	OP_ONESCOMPLEMENT: 'OpcodeUnary',

	OP_ADD:    'OpcodeBinary',
	OP_SUB:    'OpcodeBinary',
	OP_DIV:    'OpcodeBinary',
	OP_MUL:    'OpcodeBinary',
	OP_MOD:    'OpcodeBinary',
	OP_BITAND: 'OpcodeBinary',
	OP_BITOR:  'OpcodeBinary',
	OP_XOR:    'OpcodeBinary',
	OP_SHL:    'OpcodeBinary',
	OP_SHR:    'OpcodeBinary',
	OP_CMPLT:  'OpcodeBinary',
	OP_CMPGR:  'OpcodeBinary',
	OP_CMPGE:  'OpcodeBinary',
	OP_CMPLE:  'OpcodeBinary',
	OP_CMPEQ:  'OpcodeBinary',
	OP_CMPNE:  'OpcodeBinary',
	OP_OR:     'OpcodeBinary',
	OP_AND:    'OpcodeBinary',

	OP_COMPARE_STR: 'OpcodeCompareStr',

	OP_SAVEVAR_STR:  'OpcodeSaveVar',
	OP_SAVEVAR_UINT: 'OpcodeSaveVar',
	OP_SAVEVAR_FLT:  'OpcodeSaveVar',

	OP_LOADVAR_STR:  'OpcodeLoadVar',
	OP_LOADVAR_UINT: 'OpcodeLoadVar',
	OP_LOADVAR_FLT:  'OpcodeLoadVar',

	OP_SAVEFIELD_STR:  'OpcodeSaveField',
	OP_SAVEFIELD_UINT: 'OpcodeSaveField',
	OP_SAVEFIELD_FLT:  'OpcodeSaveField',

	OP_LOADFIELD_STR:  'OpcodeLoadField',
	OP_LOADFIELD_UINT: 'OpcodeLoadField',
	OP_LOADFIELD_FLT:  'OpcodeLoadField',

	OP_SETCURVAR:        'OpcodeSetCurVar',
	OP_SETCURVAR_CREATE: 'OpcodeSetCurVar',

	OP_SETCURFIELD: 'OpcodeSetCurField',

	OP_SETCURVAR_ARRAY:        'OpcodeSetVarArr',
	OP_SETCURVAR_ARRAY_CREATE: 'OpcodeSetVarArr',

	OP_SETCURFIELD_ARRAY: 'OpcodeSetFieldArr',

	OP_SETCUROBJECT:     'OpcodeSetCurObject',
	OP_SETCUROBJECT_NEW: 'OpcodeSetCurObject',

	OP_ADVANCE_STR:            'OpcodeStringStart',
	OP_ADVANCE_STR_APPENDCHAR: 'OpcodeStringStart',
	OP_ADVANCE_STR_COMMA:      'OpcodeStringStart',

	OP_REWIND_STR:           'OpcodeStringEnd',
	OP_TERMINATE_REWIND_STR: 'OpcodeStringEnd',

	OP_FUNC_DECL: 'OpcodeFuncDecl',

	OP_CALLFUNC:         'OpcodeFuncCall',
	OP_CALLFUNC_RESOLVE: 'OpcodeFuncCall',

	OP_CREATE_OBJECT: 'OpcodeCreateObj',

	OP_ADD_OBJECT: 'OpcodeObjSection',
	OP_END_OBJECT: 'OpcodeObjSection',

	OP_PUSH_FRAME: 'OpcodePushFrame',
	OP_PUSH:       'OpcodePush',

	OP_RETURN: 'OpcodeReturn',

	OP_ADVANCE_STR_NUL: 'OpcodeSkip',

	OP_INVALID: 'OpcodeError',
	OP_BREAK:   'OpcodeMisc',
};


export default opcodeSubtypes;
