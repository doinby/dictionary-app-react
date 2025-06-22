import { useContext } from 'react';
import { ThemeContext } from '../ultils/ultils';
import darkMode from '../assets/images/icon-moon.svg';
import { Switch } from '@headlessui/react';

export default function ThemeSwitcher() {
	const { theme, setTheme } = useContext(ThemeContext);
	const isChecked = theme === 'dark' ? true : false;

	function handleOnChange() {
		theme === 'light' ? setTheme('dark') : setTheme('light');
		return isChecked;
	}

	return (
		<div className='flex gap-3'>
			<Switch
				checked={isChecked}
				onChange={handleOnChange}
				className='group inline-flex h-6 w-11 items-center rounded-full bg-slate-300 transition data-checked:bg-lavender'
			>
				<span className='size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6' />
			</Switch>
			<img
				id='dark-mode-icon'
				src={darkMode}
				className='h-5 dark:fill-lavender'
			/>
		</div>
	);
}
