import { useState } from 'react';
import searchIcon from '../assets/images/icon-search.svg';

export default function Search({ setQuery }) {
	const [input, setInput] = useState('');

	function handleChange(e) {
		// setTimeout(() => setInput(e.target.value), 1000);
		setInput(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		setQuery(input);
	}

	return (
		<form onSubmit={handleSubmit} className='relative flex items-center'>
			<button type='submit' className='absolute right-3 cursor-pointer'>
				<img src={searchIcon} className='h-3.5' />
			</button>
			<input
				onChange={handleChange}
				value={input}
				className='w-full px-4 py-2 rounded-md bg-slate-200'
			/>
		</form>
	);
}
