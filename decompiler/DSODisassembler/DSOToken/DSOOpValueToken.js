import DSOToken from '~/DSOToken/DSOToken.js';

import { getOpSubtype } from '~/common/ops/getOpType.js';


class DSOOpValueToken extends DSOToken
{
	constructor ( opname, value )
	{
		super (getOpSubtype (opname));

		this.op    = opname;
		this.value = value;
	}
}


export default DSOOpValueToken;
