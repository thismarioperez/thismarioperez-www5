const path = require("path");
const createNextPluginPreval = require("next-plugin-preval/config");
const withNextPluginPreval = createNextPluginPreval();
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
        return [
            {
                source: "/home",
                destination: "/",
                permanent: true,
            },
        ];
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
        prependData: `@import "styles/global.scss";`,
    },
	webpack: (config) => {
		// camel-case style names from css modules
		config.module.rules
			.find(({oneOf}) => !!oneOf).oneOf
			.filter(({use}) => JSON.stringify(use)?.includes('css-loader'))
			.reduce((acc, {use}) => acc.concat(use), [])
			.forEach(({options}) => {
				if (options.modules) {
					options.modules.exportLocalsConvention = 'camelCase';
				}
			});

		return config;
	},
};

module.exports = withNextPluginPreval(nextConfig);
