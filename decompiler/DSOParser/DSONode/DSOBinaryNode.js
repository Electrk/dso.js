import assert from '~/util/assert.js';

import { DSOExprNode } from '~/DSONode/DSONode.js';

import { getOpPrecedence } from '~/common/opcodes/precedence.js';
import { isOpAssociative } from '~/common/opcodes/associativity.js';


class DSOBinaryNode extends DSOExprNode
{
	constructor ( left, right, op )
	{
		super ();

		this.left  = left;
		this.right = right;
		this.op    = op;
	}

	isAssociative ()
	{
		return isOpAssociative (this.op);
	}

	getPrecedence ()
	{
		return getOpPrecedence (this.op);
	}
}


export default DSOBinaryNode;
