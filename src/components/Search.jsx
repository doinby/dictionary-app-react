import { useState } from 'react';
import searchIcon from '../assets/images/icon-search.svg';
import { Input } from '@headlessui/react';

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
			{/* <input
				onChange={handleChange}
				value={input}
				className='w-full px-4 py-2 rounded-md bg-slate-200 dark:bg-slate-900'
			/> */}
			<Input
				name='search-query'
				type='text'
				value={input}
				onChange={handleChange}
				className='w-full px-4 py-2 rounded-md bg-slate-200 active:border-lavender focus:border-lavender focus:outline-lavender dark:bg-slate-900'
			/>
		</form>
	);
}
