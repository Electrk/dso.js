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

		this.create[objectType] = function ( key, ...args )
		{
			const config = factory.config[objectType].get (key);

			return Object.assign (factoryFunc (...args), { key, factory, ...config });
		};

		this.config[objectType] = new ObjectStore ();
	}
}


export default ObjectFactory;
