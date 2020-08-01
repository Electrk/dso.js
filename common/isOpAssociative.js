const associative = new Set (
[
	'OP_ADD',
	'OP_MUL',
	'OP_BITAND',
	'OP_BITOR',
	'OP_XOR',
	'OP_AND',
	'OP_OR',
	'OP_JMPIFNOT_NP',
	'OP_JMPIF_NP',
]);


/**
 * @param   {string} op
 * @returns {boolean}
 */
const isOpAssociative = op =>
{
	return associative.has (op);
};


export default isOpAssociative;
