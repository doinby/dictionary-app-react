import { useContext, useState } from 'react';
import arrowDown from '../assets/images/icon-arrow-down.svg';
import { ThemeContext } from '../ultils/ultils';
import { FONTS } from '../ultils/ultils';

export default function FontMenu() {
	const { font, setFont } = useContext(ThemeContext);
	const btnLabel = FONTS.find((f) => f.ref === font).name;
	const fontOptions = FONTS.filter((f) => f.ref !== font);

	const [isHidden, setIsHidden] = useState(true);
	const menuDisplay = isHidden ? 'hidden' : 'block';
	function toggleMenu() {
		setIsHidden(!isHidden);
	}

	return (
		<div className='relative'>
			<button
				onClick={toggleMenu}
				className='px-3 py-2 flex gap-2 items-baseline cursor-pointer'
			>
				{btnLabel}
				<img src={arrowDown} className='w-4' />
			</button>
			<ul
				className={`absolute right-0 z-1 bg-lavender text-white cursor-pointer ${menuDisplay}`}
			>
				{fontOptions.map(({ name: label, ref }) => (
					<li key={ref}>
						<button
							onClick={() => setFont(ref)}
							className='min-w-30 px-4 py-2 text-left cursor-pointer'
						>
							{label}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
