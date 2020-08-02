import assert from '~/util/assert.js';


class ObjectFactory
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
	add ( key, config )
	{
		assert (!this.has (key), `${this.classFunc.name} config with key \`${key}\` already exists`);

		this.configMap.set (key, config);
	}

	/**
	 * @param   {string} key
	 * @returns {Object|null} null if invalid key
	 */
	get ( key )
	{
		return this.has (key) ? this.configMap.get (key) : null;
	}

	/**
	 * @param   {string} key
	 * @returns {boolean}
	 */
	has ( key )
	{
		return this.configMap.has (key);
	}

	/**
	 * @param {string} key
	 * @param {...*}   args
	 *
	 * @returns {Object}
	 */
	create ( key, ...args )
	{
		const config = this.get (key);

		assert (config !== null, `${this.classFunc.name} config with key \`${key}\` not found`);

		const instance = Object.assign (new this.classFunc (...args), config);

		instance.key     = key;
		instance.factory = this;

		return instance;
	}
}


export default ObjectFactory;
