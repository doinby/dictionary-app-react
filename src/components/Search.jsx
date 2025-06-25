import { useState } from 'react';
import searchIcon from '../assets/images/icon-search.svg';
import { Input } from '@headlessui/react';
import { useEffect } from 'react';

export default function Search({ query, setQuery }) {
	const [input, setInput] = useState('');

	useEffect(() => {
		setInput(query);
	}, [query]);

	function handleChange(e) {
		setInput(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		setQuery(input);
	}

	return (
		<form onSubmit={handleSubmit} className='relative flex items-center'>
			<button type='submit' className='absolute right-3 '>
				<img src={searchIcon} className='h-3.5' />
			</button>
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
