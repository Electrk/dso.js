import DSOFactory from '~/decompiler/DSOFactory.js';
import DSOPlugins from '~/decompiler/DSOPlugins.js';

import { DSODecompilerError } from '~/decompiler/errors.js';


const decompileDSO = ( buffer, config = {} ) =>
{
	const { outputArray = false } = config;

	const keys =
	{
		opcodeSet:     'default',
		loader:        'default',
		controlBlock:  'default',
		disassembler:  'default',
		parser:        'default',
		codeGenerator: 'default',
	};

	for ( let type in config )
	{
		keys[type] = config[type];
	}

	const { create } = DSOFactory;

	const opcodeSet = create.opcodeSet (keys.opcodeSet);
	const loader    = create.loader (keys.loader, buffer, opcodeSet);

	loader.read ();

	const controlBlock = create.controlBlock (keys.controlBlock, 0, loader.code.length);

	controlBlock.scan (loader);
	controlBlock.analyzeJumps ();

	const disassembler = create.disassembler (keys.disassembler, loader, controlBlock);
	const tokens       = disassembler.disassemble ();

	const parser   = create.parser (keys.parser, tokens, controlBlock);
	const astNodes = parser.parse ();

	const generator = create.codeGenerator (keys.codeGenerator, astNodes);

	if ( outputArray )
	{
		return generator.generateCodeArray ();
	}

	return generator.generateCode ();
};


export
{
	decompileDSO,

	DSOPlugins as plugins,
};
