import assert from '~/util/assert.js';


class ObjectStore
{
	constructor ()
	{
		this.map = new Map ();
	}

	/**
	 * @param {string} key
	 * @param {Object} object
	 */
	add ( key, object )
	{
		assert (!this.has (key), `Object with key \`${key}\` already exists`);

		this.map.set (key, object);
	}

	/**
	 * @param   {string} key
	 * @returns {Object|null} null if invalid key
	 */
	get ( key )
	{
		return this.has (key) ? this.map.get (key) : null;
	}

	/**
	 * @param   {string} key
	 * @returns {boolean}
	 */
	has ( key )
	{
		return this.map.has (key);
	}
}


export default ObjectStore;
