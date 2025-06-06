import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Entry from './Entry';
import searchIcon from '../assets/images/icon-search.svg';

export default function Search() {
	const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
	const [query, setQuery] = useState('keyboard');

	const { isPending, error, data } = useQuery({
		queryKey: ['repoData'],
		queryFn: () => fetch(URL + query).then((res) => res.json()),
	});

	if (isPending) return <main className='grow'>Loading...</main>;

	if (error)
		return (
			<main className='grow'>{`An error has occured ${error.message}`}</main>
		);

	function handleChange(e) {
		setQuery(e.target.value);
	}

	return (
		<main className='grow space-y-12'>
			<form className='relative flex items-center'>
				<img src={searchIcon} className='absolute right-3 h-3.5' />
				<input
					onChange={handleChange}
					className='w-full px-4 py-2 rounded-md bg-slate-200'
				/>
			</form>
			<Entry data={data} />
		</main>
	);
}
