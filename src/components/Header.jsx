import logo from '../assets/images/logo.svg';
import FontMenu from './FontMenu';
import ThemeButton from './ThemeButton';

export default function Header() {
	return (
		<nav className='flex justify-between items-center'>
			<img src={logo} />
			<div className='flex gap-6 items-center'>
				<FontMenu />
				<ThemeButton />
			</div>
		</nav>
	);
}
