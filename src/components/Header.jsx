import logo from '../assets/images/logo.svg';
import darkMode from '../assets/images/icon-moon.svg';
import arrowDown from '../assets/images/icon-arrow-down.svg';

export default function Header() {
	return (
		<nav className='flex justify-between items-center'>
			<img src={logo} />
			<div className='flex gap-6 items-center'>
				<button className='flex gap-2 items-baseline'>
					San Serif
					<img src={arrowDown} className='w-4' />
				</button>
				<img src={darkMode} className='h-5' />
			</div>
		</nav>
	);
}
