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


export { readFunc };
