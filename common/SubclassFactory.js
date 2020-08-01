class SubclassFactory
{
	/**
	 * @param {Function} classFunc
	 */
	constructor ( classFunc )
	{
		this.classFunc  = classFunc;
		this.subclasses = new Map ();
	}

	/**
	 * @param {Object}   config
	 * @param {string}   config.key
	 * @param {Function} config.createClass
	 *
	 * @returns {Function} Subclass function
	 */
	addSubclass ( config )
	{
		const { classFunc, subclasses } = this;
		const { key, createClass }      = config;

		if ( this.subclasses.has (key) )
		{
			throw new Error (`${classFunc.name} with key \`${key}\` already exists`);
		}

		const subclass = createClass (classFunc);

		this.subclasses.set (key, subclass);

		return subclass;
	},

	/**
	 * @param {string} key
	 * @param {...*}   args
	 */
	createInstance ( key, ...args )
	{
		const { subclasses } = this;

		if ( !subclasses.has (key) )
		{
			throw new Error (`${this.classFunc.name} with key \`${key}\` not found`);
		}

		return new subclasses.get (key) (...args);
	}
}


export default SubclassFactory;
