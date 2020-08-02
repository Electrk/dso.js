import DSOFactory from '~/decompiler/DSOFactory.js';


const DSOPlugins =
{
	/**
	 * @param {Object} plugins
	 */
	add ( plugins )
	{
		for ( let key in plugins )
		{
			const plugin = plugins[key];

			for ( let type in plugin )
			{
				const config = plugin[type];

				DSOFactory.addConfig (type, key, config);
			}
		}
	},
};


export default DSOPlugins;
