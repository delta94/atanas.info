module.exports = {
	preset: 'ts-jest',
	moduleDirectories: ['node_modules', 'src'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: {
		'\\.(css|less|sass|scss)$': '<rootDir>/test-config/style-mock.js',
		'\\.(jpg|jpeg|png|gif|ico|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/test-config/file-mock.js'
	},
	setupFiles: ['<rootDir>/test-config/index.js', '<rootDir>/test-config/local-storage-mock.js'],
	snapshotSerializers: ['enzyme-to-json/serializer'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
		'\\.(css|less|sass|scss)$': '<rootDir>/test-config/style-mock.js',
		'\\.(jpg|jpeg|png|gif|ico|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/test-config/file-mock.js'
	},
	verbose: false,
	testRegex: '.*\\.(test|spec)\\.(j|tsx?)$',
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/', '<rootDir>/test-config/'],
	collectCoverageFrom: [
		'<rootDir>/src/**/*.{ts,tsx}',
		'!<rootDir>/src/**/*.{d.ts,d.tsx}',
		'!<rootDir>/src/index.tsx',
		'!<rootDir>/src/scripts/canvas.ts',
		'!<rootDir>/src/scripts/fetch-music.ts',
		'!<rootDir>/src/scripts/gitlab-contributions.ts',
		'!<rootDir>/src/scripts/music.ts',
		'!<rootDir>/src/scripts/projects.ts',
		'!<rootDir>/src/scripts/skills.ts',
		'!<rootDir>/src/scripts/socials.ts',
		'!<rootDir>/src/scripts/tracks.ts',
		'!<rootDir>/src/components/index.ts',
		'!<rootDir>/src/utilities/index.ts'
	],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 90,
			lines: 90,
			statements: 90
		}
	},
	coverageReporters: ['lcov', 'html', 'cobertura']
};
