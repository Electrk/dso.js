import ObjectStore from '~/ObjectStore/ObjectStore.js';

import assert from '~/util/assert.js';

import { has } from '~/util/has.js';


class ObjectFactory
{
	constructor ()
	{
		this.config = {};
		this.create = {};
	}

	/**
	 * @param {string}   objectType
	 * @param {Function} factoryFunc
	 */
	register ( objectType, factoryFunc )
	{
		assert (!has (this.create, objectType), `Factory \`${objectType}\` already registered`);

		const factory = this;

		factoryFunc = factoryFunc.bind (this);

		this.create[objectType] = function ( key, ...args )
		{
			const config = factory.config[objectType].get (key);

			return Object.assign (factoryFunc (key, ...args), { key, factory, ...config });
		};

		this.config[objectType] = new ObjectStore ();
	}

	/**
	 * Shortcut Functions
	 */

	/**
	 * @param {string} objectType
	 * @param {string} key
	 * @param {Object} config
	 */
	addConfig ( objectType, key, config )
	{
		assert (has (this.config, objectType), `Object type \`${objectType}\` not registered`);

		this.config[objectType].add (key, config);
	}

	/**
	 * @param {string} objectType
	 * @param {string} key
	 * @param {...*}   args
	 *
	 * @returns {Object}
	 */
	createObject ( objectType, key, ...args )
	{
		assert (has (this.create, objectType), `Object type \`${objectType}\` not registered`);

		return this.create[objectType] (key, ...args);
	}
}


export default ObjectFactory;
