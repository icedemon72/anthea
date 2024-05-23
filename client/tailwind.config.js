/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,ts}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'mosaic-pattern': "url('assets/img/mosaic.jpg')",
				'mosaic-pattern-anthea': "url('assets/img/mosaic_2.jpg')"
			},
			colors: {
				'anthea': {
					'50': '#fdf5fe',
					'100': '#fbeafd',
					'200': '#f6d4fa',
					'300': '#f2b2f5',
					'400': '#ea85ed',
					'500': '#e16ee4',
					'600': '#c336c3',
					'700': '#a12a9f',
					'800': '#842481',
					'900': '#6d2269',
					'950': '#470b44',
				},
				'royal-blue': {
					'50': '#eff5ff',
					'100': '#dce8fd',
					'200': '#c1d7fc',
					'300': '#96bffa',
					'400': '#649cf6',
					'500': '#3f78f2',
					'600': '#305ee7',
					'700': '#2145d4',
					'800': '#2139ac',
					'900': '#213587',
					'950': '#182253',
				},

			}
		},
	},
	plugins: [],
}

