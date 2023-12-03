const path = require('path');
const tailwindConfig = process.env.HUGO_FILE_TAILWIND_CONFIG_JS || path.join(__dirname, 'tailwind.config.js');
const tailwind = require('tailwindcss')(tailwindConfig);

module.exports = {
	plugins: [tailwind],
};