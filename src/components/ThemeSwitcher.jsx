import { useContext } from 'react';
import darkMode from '../assets/images/icon-moon.svg';
import { ThemeContext } from '../ultils/ultils';

export default function ThemeSwitcher() {
	const { theme, setTheme } = useContext(ThemeContext);

	function handleClick() {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	}

	return (
		<form className='flex'>
			<img src={darkMode} className='h-5' />
		</form>
	);
}
