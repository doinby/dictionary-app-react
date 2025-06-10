import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeContext } from '../ultils/ultils';

export default function HomeLayout({ children }) {
	const [font, setFont] = useState('font-sans');

	return (
		<ThemeContext value={{ font: font, setFont: setFont }}>
			<Header />
			<main className={`grow space-y-12 ${font}`}>{children}</main>
			<Footer />
		</ThemeContext>
	);
}
