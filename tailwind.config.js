module.exports = {
	purge: ["./src/components/**/*.js", "./pages/**/*.js"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
    minHeight: {
      '60vh': "60vh"
    }
	},
	variants: {
		extend: {},
	},
	plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
	plugins: [],
};
