const ENCRYPTION_KEY = 'cl3buotro';


const readFunc = function ()
{
	this.readVersion ();

	this.globalStringTable   = this.readStringTable ();
	this.globalFloatTable    = this.readFloatTable ();
	this.functionStringTable = this.readStringTable ();
	this.functionFloatTable  = this.readFloatTable ();

	const codeSize      = this.readInteger (true);
	const numLineBreaks = this.readInteger (true);

	this.readCode (codeSize);
	this.readLineBreaks (codeSize, numLineBreaks);
	this.readIdentTable (this.readInteger (true));
};

/**
 * Blockland's two-way string encryption.
 *
 * @param {string} string - Encrypted or unencrypted string -- the opposite will be returned.
 *
 * @returns {string|null} null if invalid string
 */
const encryptFunc = function ( string )
{
	if ( typeof string !== 'string' )
	{
		return null;
	}

	let encrypted = '';

	const { length } = string;

	for ( let i = 0; i < length; i++ )
	{
		encrypted += String.fromCharCode (string.charCodeAt (i) ^ ENCRYPTION_KEY.charCodeAt (i % 9));
	}

	return encrypted;
};


export { readFunc, encryptFunc };
