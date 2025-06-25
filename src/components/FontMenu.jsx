import { useContext } from 'react';
import arrowDown from '../assets/images/icon-arrow-down.svg';
import { ThemeContext } from '../ultils/ultils';
import { FONTS } from '../ultils/ultils';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

export default function FontMenu() {
	const { font, setFont } = useContext(ThemeContext);
	const menuLabel = FONTS.find((f) => f.ref === font).name;
	const fontOptions = FONTS.filter((f) => f.ref !== font);

	return (
		<Menu>
			<MenuButton
				className={`px-3 py-2 w-[132px] flex gap-2 items-baseline justify-end  ${font}`}
			>
				{menuLabel}
				<img src={arrowDown} className='w-4' />
			</MenuButton>
			<MenuItems
				anchor='bottom'
				className={`flex flex-col items-start rounded  bg-white shadow dark:bg-lavender dark:text-white ${font}`}
			>
				{fontOptions.map(({ name: label, ref }) => (
					<MenuItem key={ref}>
						<button
							onClick={() => {
								setFont(ref);
								localStorage.font = ref;
							}}
							className='px-4 py-3 '
						>
							{label}
						</button>
					</MenuItem>
				))}
			</MenuItems>
		</Menu>
	);
}
