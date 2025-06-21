import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import HomeLayout from './layouts/HomeLayout';
import Searcn from './components/Search';
import Loading from './components/Loading';
import Entry from './components/Entry';
import Error from './components/Error';

export default function App() {
	const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
	const [query, setQuery] = useState('');

	const { isLoading, isSuccess, isError, error, data } = useQuery({
		queryKey: ['query', query],
		queryFn: async () => {
			const res = await axios.get(URL + query);
			const data = await res.data;
			return data;
		},
		// Disables fetch until query changes
		enabled: !!query,
	});
	// console.log(localStorage.getItem('theme'));

	return (
		<HomeLayout>
			<Searcn setQuery={setQuery} />
			{isLoading && <Loading />}
			{isSuccess && <Entry data={data} />}
			{isError && <Error error={error} />}
		</HomeLayout>
	);
}
