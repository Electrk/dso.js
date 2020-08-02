import ObjectFactory from '~/ObjectFactory/ObjectFactory.js';
import OpcodeSet     from '~/OpcodeSet/OpcodeSet.js';


class OpcodeSetFactory extends ObjectFactory
{
	constructor ()
	{
		super (OpcodeSet);
	}

	/**
	 * @param   {string} key
	 * @returns {Object}
	 */
	create ( key )
	{
		const config = this.configMap.get (key);

		return super.create (key, config.opnames, config.version);
	}
}


export default OpcodeSetFactory;
