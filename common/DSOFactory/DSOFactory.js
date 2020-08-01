class DSOFactory
{
	/**
	 * @param {Function} classFunc
	 */
	constructor ( classFunc )
	{
		this.classFunc = classFunc;
		this.configMap = new Map ();
	}

	/**
	 * @param {string} key
	 * @param {Object} config
	 */
	addConfig ( key, config )
	{
		if ( this.configMap.has (key) )
		{
			throw new Error (`${this.classFunc.name} config with key \`${key}\` already exists`);
		}

		this.configMap.set (key, config);
	}

	/**
	 * @param {string} key
	 * @param {...*}   args
	 */
	createInstance ( key, ...args )
	{
		const { classFunc, configMap } = this;

		if ( !configMap.has (key) )
		{
			throw new Error (`${classFunc.name} config with key \`${key}\` not found`);
		}

		return Object.assign (new classFunc (...args), configMap.get (key));
	}
}


export default DSOFactory;
