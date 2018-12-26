module.exports = {
	presets: ["@babel/preset-env", "@babel/preset-react"],
	plugins: ["emotion", "@babel/plugin-proposal-class-properties"],
	env: {
		development: {
			plugins: []
		},
		production: {
			plugins: ["transform-react-remove-prop-types"]
		}
	}
}
