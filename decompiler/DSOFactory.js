import ObjectFactory from '~/ObjectFactory/ObjectFactory.js';
import OpcodeSet     from '~/OpcodeSet/OpcodeSet.js';

import DSOLoader        from '~/DSOLoader/DSOLoader.js';
import DSOControlBlock  from '~/DSOControlBlock/DSOControlBlock.js';
import DSODisassembler  from '~/DSODisassembler/DSODisassembler.js';
import DSOParser        from '~/DSOParser/DSOParser.js';
import DSOCodeGenerator from '~/DSOCodeGenerator/DSOCodeGenerator.js';

import defaultSet from '~/OpcodeSet/defaultSet.js';


const DSOFactory = new ObjectFactory ();

DSOFactory.register ('opcodeSet', function ( key )
{
	const config = this.config.opcodeSet.get (key);

	return new OpcodeSet (config.opnames, config.version);
});

DSOFactory.register ('loader',        ( key, ...args ) => new DSOLoader (...args));
DSOFactory.register ('controlBlock',  ( key, ...args ) => new DSOControlBlock (...args));
DSOFactory.register ('disassembler',  ( key, ...args ) => new DSODisassembler (...args));
DSOFactory.register ('parser',        ( key, ...args ) => new DSOParser (...args));
DSOFactory.register ('codeGenerator', ( key, ...args ) => new DSOCodeGenerator (...args));

DSOFactory.addConfig ('opcodeSet',     'default', defaultSet);
DSOFactory.addConfig ('loader',        'default', {});
DSOFactory.addConfig ('controlBlock',  'default', {});
DSOFactory.addConfig ('disassembler',  'default', {});
DSOFactory.addConfig ('parser',        'default', {});
DSOFactory.addConfig ('codeGenerator', 'default', {});


export default DSOFactory;
