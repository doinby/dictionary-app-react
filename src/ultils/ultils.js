import { createContext } from 'react';

export const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export const ThemeContext = createContext({
	font: '',
	setFont: () => {},
	theme: '',
	setTheme: () => {},
	themeIcon: '',
});

// export function getDisplayStyle(object) {
// 	if (!object?.length) {
// 		return 'hidden';
// 	}

// 	return !object ? 'hidden' : 'block';
// }

export const FONTS = [
	{ name: 'Serif', ref: 'font-serif' },
	{ name: 'Monospace', ref: 'font-mono' },
	{ name: 'Sans-Serif', ref: 'font-sans' },
];
