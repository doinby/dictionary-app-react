import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Entry from './Entry';

export default function Search() {
	const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
	const [query, setQuery] = useState('keyboard');

	const { isPending, error, data } = useQuery({
		queryKey: ['repoData'],
		queryFn: () => fetch(URL + query).then((res) => res.json()),
	});

	if (isPending) return 'Loading...';

	if (error) return 'An error has occurred: ' + error.message;

	function handleChange(e) {
		setQuery(e.target.value);
	}

	return (
		<>
			<form>
				<input onChange={handleChange} className='bg-slate-300' />
			</form>
			<Entry data={data} />
		</>
	);
}
