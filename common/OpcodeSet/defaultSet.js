const opnames =
[
	'OP_FUNC_DECL',                /*  0x00  */
	'OP_CREATE_OBJECT',            /*  0x01  */
	'OP_ADD_OBJECT',               /*  0x02  */
	'OP_END_OBJECT',               /*  0x03  */
	'OP_JMPIFFNOT',                /*  0x04  */
	'OP_JMPIFNOT',                 /*  0x05  */
	'OP_JMPIFF',                   /*  0x06  */
	'OP_JMPIF',                    /*  0x07  */
	'OP_JMPIFNOT_NP',              /*  0x08  */
	'OP_JMPIF_NP',                 /*  0x09  */
	'OP_JMP',                      /*  0x0A  */
	'OP_RETURN',                   /*  0x0B  */
	'OP_CMPEQ',                    /*  0x0C  */
	'OP_CMPGR',                    /*  0x0D  */
	'OP_CMPGE',                    /*  0x0E  */
	'OP_CMPLT',                    /*  0x0F  */
	'OP_CMPLE',                    /*  0x10  */
	'OP_CMPNE',                    /*  0x11  */
	'OP_XOR',                      /*  0x12  */
	'OP_MOD',                      /*  0x13  */
	'OP_BITAND',                   /*  0x14  */
	'OP_BITOR',                    /*  0x15  */
	'OP_NOT',                      /*  0x16  */
	'OP_NOTF',                     /*  0x17  */
	'OP_ONESCOMPLEMENT',           /*  0x18  */
	'OP_SHR',                      /*  0x19  */
	'OP_SHL',                      /*  0x1A  */
	'OP_AND',                      /*  0x1B  */
	'OP_OR',                       /*  0x1C  */
	'OP_ADD',                      /*  0x1D  */
	'OP_SUB',                      /*  0x1E  */
	'OP_MUL',                      /*  0x1F  */
	'OP_DIV',                      /*  0x20  */
	'OP_NEG',                      /*  0x21  */
	'OP_SETCURVAR',                /*  0x22  */
	'OP_SETCURVAR_CREATE',         /*  0x23  */
	'OP_SETCURVAR_ARRAY',          /*  0x24  */
	'OP_SETCURVAR_ARRAY_CREATE',   /*  0x25  */
	'OP_LOADVAR_UINT',             /*  0x26  */
	'OP_LOADVAR_FLT',              /*  0x27  */
	'OP_LOADVAR_STR',              /*  0x28  */
	'OP_SAVEVAR_UINT',             /*  0x29  */
	'OP_SAVEVAR_FLT',              /*  0x2A  */
	'OP_SAVEVAR_STR',              /*  0x2B  */
	'OP_SETCUROBJECT',             /*  0x2C  */
	'OP_SETCUROBJECT_NEW',         /*  0x2D  */
	'OP_SETCURFIELD',              /*  0x2E  */
	'OP_SETCURFIELD_ARRAY',        /*  0x2F  */
	'OP_LOADFIELD_UINT',           /*  0x30  */
	'OP_LOADFIELD_FLT',            /*  0x31  */
	'OP_LOADFIELD_STR',            /*  0x32  */
	'OP_SAVEFIELD_UINT',           /*  0x33  */
	'OP_SAVEFIELD_FLT',            /*  0x34  */
	'OP_SAVEFIELD_STR',            /*  0x35  */
	'OP_STR_TO_UINT',              /*  0x36  */
	'OP_STR_TO_FLT',               /*  0x37  */
	'OP_STR_TO_NONE',              /*  0x38  */
	'OP_FLT_TO_UINT',              /*  0x39  */
	'OP_FLT_TO_STR',               /*  0x3A  */
	'OP_FLT_TO_NONE',              /*  0x3B  */
	'OP_UINT_TO_FLT',              /*  0x3C  */
	'OP_UINT_TO_STR',              /*  0x3D  */
	'OP_UINT_TO_NONE',             /*  0x3E  */
	'OP_LOADIMMED_UINT',           /*  0x3F  */
	'OP_LOADIMMED_FLT',            /*  0x40  */
	'OP_TAG_TO_STR',               /*  0x41  */
	'OP_LOADIMMED_STR',            /*  0x42  */
	'OP_LOADIMMED_IDENT',          /*  0x43  */
	'OP_CALLFUNC_RESOLVE',         /*  0x44  */
	'OP_CALLFUNC',                 /*  0x45  */
	'OP_ADVANCE_STR',              /*  0x46  */
	'OP_ADVANCE_STR_APPENDCHAR',   /*  0x47  */
	'OP_ADVANCE_STR_COMMA',        /*  0x48  */
	'OP_ADVANCE_STR_NUL',          /*  0x49  */
	'OP_REWIND_STR',               /*  0x4A  */
	'OP_TERMINATE_REWIND_STR',     /*  0x4B  */
	'OP_COMPARE_STR',              /*  0x4C  */
	'OP_PUSH',                     /*  0x4D  */
	'OP_PUSH_FRAME',               /*  0x4E  */
	'OP_BREAK',                    /*  0x4F  */
	'OP_INVALID',                  /*  0x50  */
];

const version = 36;

const defaultSet = { opnames, version };


export default defaultSet;
