import DSOLoader        from '~/DSOLoader/DSOLoader.js';
import DSOControlBlock  from '~/DSOControlBlock/DSOControlBlock.js';
import DSODisassembler  from '~/DSODisassembler/DSODisassembler.js';
import DSOParser        from '~/DSOParser/DSOParser.js';
import DSOCodeGenerator from '~/DSOCodeGenerator/DSOCodeGenerator.js';

import createOpcodeSet from '~/DSOOpcodeSet/createOpcodeSet.js';

import
{
	DSODecompilerError,
	DSOLoaderError,
	DSODisassemblerError,
	DSOParserError,
	DSOCodeGeneratorError,
}
from '~/decompiler/errors.js';

import * as blv21 from '~/DSOLoader/readFuncs/blockland-v21.js';


/**
 * Decompiles a DSO file from a buffer.
 *
 * For browsers, use the `buffer` npm package.
 * For Node.js, use the native Buffer class.
 *
 * @param {Buffer}        buffer
 * @param {Object}        [options={}]
 * @param {string|Object} [options.opcodeSet]   - Game-specific opcodes.
 * @param {Function}      [options.readFunc]    - @see {DSOLoader}
 * @param {boolean}       [options.outputArray] - Whether to output a code string or code array.
 *
 * @returns {string|Array} Either a code string or code array, depending on the options set.
 */
const decompileDSO = ( buffer, options = {} ) =>
{
	const
	{
		opcodeSet   = 'blockland-v21',
		readFunc    = blv21.readFunc,
		outputArray = false,
	}
	= options;

	const loader = new DSOLoader (buffer, createOpcodeSet (opcodeSet), readFunc);

	loader.read ();

	const controlBlock = new DSOControlBlock (0, loader.code.length);

	controlBlock.scan (loader);
	controlBlock.analyzeJumps ();

	const disassembler = new DSODisassembler (loader, controlBlock);
	const tokens       = disassembler.disassemble ();

	const parser   = new DSOParser (tokens, controlBlock);
	const astNodes = parser.parse ();

	const generator = new DSOCodeGenerator (astNodes);

	if ( outputArray )
	{
		return generator.generateCodeArray ();
	}

	return generator.generateCode ();
};


export
{
	decompileDSO,

	DSOLoader,
	DSOControlBlock,
	DSODisassembler,
	DSOParser,
	DSOCodeGenerator,

	DSODecompilerError,
	DSOLoaderError,
	DSODisassemblerError,
	DSOParserError,
	DSOCodeGeneratorError,
};
