import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import HomeLayout from './layouts/HomeLayout';
import Searcn from './components/Search';
import Entry from './components/Entry';

export default function App() {
	const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
	const [query, setQuery] = useState('');

	const { isLoading, isFetched, error, data } = useQuery({
		queryKey: ['query', query],
		queryFn: async () => {
			const res = await axios.get(URL + query);
			const data = await res.data;
			return data;
		},
		// Disables fetch until query changes
		enabled: !!query,
	});

	if (isLoading) {
		return (
			<HomeLayout>
				<Searcn setQuery={setQuery} />
				<>Loading</>
			</HomeLayout>
		);
	}

	return (
		<HomeLayout>
			<Searcn setQuery={setQuery} />
			{isFetched ? <Entry data={data} error={error} /> : <></>}
		</HomeLayout>
	);
}
