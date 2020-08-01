import { createOpset } from '~/common/opcodes.js';


const opcodeSubtypes =
{
	OpcodeConvert:
	[
		'OP_STR_TO_UINT',
		'OP_STR_TO_FLT',

		'OP_FLT_TO_UINT',
		'OP_FLT_TO_STR',

		'OP_UINT_TO_FLT',
		'OP_UINT_TO_STR',
	],

	OpcodeTypeToNone:
	[
		'OP_STR_TO_NONE',
		'OP_STR_TO_NONE_2',
		'OP_FLT_TO_NONE',
		'OP_UINT_TO_NONE',
	],

	OpcodeLoadImmed:
	[
		'OP_LOADIMMED_UINT',
		'OP_LOADIMMED_FLT',
		'OP_LOADIMMED_STR',
		'OP_LOADIMMED_IDENT',
		'OP_TAG_TO_STR',
	],

	OpcodeJump:
	[
		'OP_JMP',
	],

	OpcodeLoopJump:
	[
		'OP_JMPIF',
		'OP_JMPIFF',
	],

	OpcodeJumpIfNot:
	[
		'OP_JMPIFNOT',
		'OP_JMPIFFNOT',
	],

	OpcodeLogicJump:
	[
		'OP_JMPIF_NP',
		'OP_JMPIFNOT_NP',
	],

	OpcodeUnary:
	[
		'OP_NOT',
		'OP_NOTF',
		'OP_ONESCOMPLEMENT',
		'OP_NEG',
	],

	OpcodeBinary:
	[
		'OP_ADD',
		'OP_SUB',
		'OP_DIV',
		'OP_MUL',
		'OP_MOD',

		'OP_BITAND',
		'OP_BITOR',
		'OP_XOR',
		'OP_SHL',
		'OP_SHR',

		'OP_CMPLT',
		'OP_CMPGR',
		'OP_CMPGE',
		'OP_CMPLE',
		'OP_CMPEQ',
		'OP_CMPNE',

		'OP_OR',
		'OP_AND',
	],

	OpcodeCompareStr:
	[
		'OP_COMPARE_STR',
	],

	OpcodeSaveVar:
	[
		'OP_SAVEVAR_STR',
		'OP_SAVEVAR_UINT',
		'OP_SAVEVAR_FLT',
	],

	OpcodeLoadVar:
	[
		'OP_LOADVAR_STR',
		'OP_LOADVAR_UINT',
		'OP_LOADVAR_FLT',
	],

	OpcodeSaveField:
	[
		'OP_SAVEFIELD_STR',
		'OP_SAVEFIELD_UINT',
		'OP_SAVEFIELD_FLT',
	],

	OpcodeLoadField:
	[
		'OP_LOADFIELD_STR',
		'OP_LOADFIELD_UINT',
		'OP_LOADFIELD_FLT',
	],

	OpcodeSetCurVar:
	[
		'OP_SETCURVAR',
		'OP_SETCURVAR_CREATE',
	],

	OpcodeSetCurField:
	[
		'OP_SETCURFIELD',
	],

	OpcodeSetVarArr:
	[
		'OP_SETCURVAR_ARRAY',
		'OP_SETCURVAR_ARRAY_CREATE',
	],

	OpcodeSetFieldArr:
	[
		'OP_SETCURFIELD_ARRAY',
	],

	OpcodeSetCurObject:
	[
		'OP_SETCUROBJECT',
		'OP_SETCUROBJECT_NEW',
	],

	OpcodeStringStart:
	[
		'OP_ADVANCE_STR',
		'OP_ADVANCE_STR_APPENDCHAR',
		'OP_ADVANCE_STR_COMMA',
	],

	OpcodeStringEnd:
	[
		'OP_REWIND_STR',
		'OP_TERMINATE_REWIND_STR',
	],

	OpcodeFuncDecl:
	[
		'OP_FUNC_DECL',
	],

	OpcodeFuncCall:
	[
		'OP_CALLFUNC',
		'OP_CALLFUNC_RESOLVE',
	],

	OpcodeCreateObj:
	[
		'OP_CREATE_OBJECT',
	],

	OpcodeObjSection:
	[
		'OP_ADD_OBJECT',
		'OP_END_OBJECT',
	],

	OpcodePushFrame:
	[
		'OP_PUSH_FRAME',
	],

	OpcodePush:
	[
		'OP_PUSH',
	],

	OpcodeReturn:
	[
		'OP_RETURN',
	],

	// Opcodes we can skip.
	OpcodeSkip:
	[
		'OP_ADVANCE_STR_NUL',
	],

	// Opcodes that throw an error should we come across them.
	OpcodeError:
	[
		'OP_INVALID',
	],

	OpcodeMisc:
	[
		'OP_BREAK',
	],
};


export default opcodeSubtypes;
