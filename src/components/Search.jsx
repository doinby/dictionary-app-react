import searchIcon from '../assets/images/icon-search.svg';

export default function Search({ setQuery }) {
	function handleChange(e) {
		setQuery(e.target.value);
	}

	return (
		<form className='relative flex items-center'>
			<img src={searchIcon} className='absolute right-3 h-3.5' />
			<input
				onChange={handleChange}
				className='w-full px-4 py-2 rounded-md bg-slate-200'
			/>
		</form>
	);
}
