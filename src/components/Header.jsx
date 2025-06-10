import logo from '../assets/images/logo.svg';
import darkMode from '../assets/images/icon-moon.svg';
import FontMenu from './FontMenu';

export default function Header() {
	return (
		<nav className='flex justify-between items-center'>
			<img src={logo} />
			<div className='flex gap-6 items-center'>
				<FontMenu />
				<img src={darkMode} className='h-5' />
			</div>
		</nav>
	);
}
