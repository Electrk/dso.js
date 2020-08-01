import DSOToken from '~/DSOToken/DSOToken.js';

import { getOpcodeSubtype } from '~/common/opcodes/getOpcodeType.js';


class DSOOpcodeToken extends DSOToken
{
	constructor ( opname )
	{
		super (getOpcodeSubtype (opname));
		this.op = opname;
	}
}


export default DSOOpcodeToken;
