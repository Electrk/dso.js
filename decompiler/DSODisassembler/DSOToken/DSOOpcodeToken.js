import DSOToken from '~/DSOToken/DSOToken.js';

import { getOpSubtype } from '~/common/ops/getOpType.js';


class DSOOpcodeToken extends DSOToken
{
	constructor ( opname )
	{
		super (getOpSubtype (opname));
		this.op = opname;
	}
}


export default DSOOpcodeToken;
