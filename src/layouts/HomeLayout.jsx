import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeContext } from '../ultils/ultils';
import moonIcon from '../assets/images/icon-moon.svg';
import moonIconDark from '../assets/images/icon-moon-dark.svg';

export default function HomeLayout({ children }) {
	const isDarkMode =
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) &&
			window.matchMedia('(prefers-color-scheme: dark)').matches)
			? true
			: false;
	const [font, setFont] = useState('font-sans');
	const [theme, setTheme] = useState(isDarkMode ? 'dark' : 'light');
	const [themeIcon, setThemeIcon] = useState(
		isDarkMode ? moonIconDark : moonIcon
	);

	useEffect(() => {
		const rootElement = document.getElementsByTagName('html')[0];
		// Add or remove dark class when theme variable changes
		if (theme === 'light') {
			rootElement.classList.remove('dark');
			setThemeIcon(moonIcon);
		} else {
			rootElement.classList.add('dark');
			setThemeIcon(moonIconDark);
		}
		localStorage.theme = theme;
		localStorage.font !== font && setFont(localStorage.font);
	}, [theme, font]);

	return (
		<ThemeContext
			value={{
				font: font,
				setFont: setFont,
				theme: theme,
				setTheme: setTheme,
				themeIcon: themeIcon,
			}}
		>
			<Header />
			<main className={`grow space-y-12 ${font}`}>{children}</main>
			<Footer />
		</ThemeContext>
	);
}
