const defaultConfig = require( '@wordpress/scripts/config/jest-unit.config' );

const config = {
	...defaultConfig,
	moduleNameMapper: {
		...defaultConfig.moduleNameMapper,
		// Force module uuid to resolve with the CJS entry point, because
		// Jest does not support package.json.exports.
		// See https://github.com/uuidjs/uuid/issues/451
		uuid: require.resolve( 'uuid' ),
	},
};

module.exports = config;
