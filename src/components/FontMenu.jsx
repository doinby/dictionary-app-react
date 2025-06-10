import { useContext } from 'react';
import arrowDown from '../assets/images/icon-arrow-down.svg';
import { ThemeContext } from '../ultils/ultils';
import { FONTS } from '../ultils/ultils';

export default function FontMenu() {
	const { font, setFont } = useContext(ThemeContext);
	const btnLabel = FONTS.find((f) => f.ref === font).name;
	const fontOptions = FONTS.filter((f) => f.ref !== font);

	return (
		<div className='relative'>
			<button className='px-3 py-2 flex gap-2 items-baseline'>
				{btnLabel}
				<img src={arrowDown} className='w-4' />
			</button>
			<ul className='absolute right-0 px-4 py-2 z-1 bg-lavender text-white'>
				{fontOptions.map(({ name, ref }) => (
					<li key={ref}>
						<button onClick={() => setFont(ref)}>{name}</button>
					</li>
				))}
			</ul>
		</div>
	);
}
