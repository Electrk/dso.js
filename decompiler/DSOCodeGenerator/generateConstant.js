const generateConstant = function ( node )
{
	const { op, value } = node;

	let quoteChar = '';

	if ( op === 'OP_LOADIMMED_STR' )
	{
		// Since number literals get converted to strings a lot of the time.
		if ( String (parseFloat (value)) !== value )
		{
			quoteChar = '"';
		}
	}
	else if ( op === 'OP_TAG_TO_STR' )
	{
		quoteChar = '\'';
	}

	return quoteChar + String (value) + quoteChar;
};


export { generateConstant };
