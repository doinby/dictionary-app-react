import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeContext } from '../ultils/ultils';

export default function HomeLayout({ children }) {
	const [font, setFont] = useState('font-sans');
	const [theme, setTheme] = useState(() => {
		// On page load, check if localStorage has preference for light or dark
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			return 'dark';
		} else {
			return 'light';
		}
	});

	// console.log(localStorage.theme);

	// console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);

	// Add or remove dark class when theme variable changes
	useEffect(() => {
		const rootElement = document.getElementsByTagName('html')[0];
		if (theme === 'light') {
			rootElement.classList.remove('dark');
		} else {
			rootElement.classList.add('dark');
		}
		localStorage.theme = theme;
	}, [theme]);

	return (
		<ThemeContext
			value={{ font: font, setFont: setFont, theme: theme, setTheme: setTheme }}
		>
			<Header />
			<main className={`grow space-y-12 ${font}`}>{children}</main>
			<Footer />
		</ThemeContext>
	);
}
