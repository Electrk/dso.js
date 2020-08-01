import DSOToken from '~/DSOToken/DSOToken.js';

import { getOpcodeSubtype } from '~/common/opcodes/getOpcodeType.js';


class DSOOpValueToken extends DSOToken
{
	constructor ( opname, value )
	{
		super (getOpcodeSubtype (opname));

		this.op    = opname;
		this.value = value;
	}
}


export default DSOOpValueToken;
