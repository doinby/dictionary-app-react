import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from './components/Header';
import Searcn from './components/Search';
import Entry from './components/Entry';
import Footer from './components/Footer';
import axios from 'axios';

export default function App() {
	const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
	const [query, setQuery] = useState('');

	const { isSuccess, error, data } = useQuery({
		queryKey: ['query', query],
		queryFn: async () => {
			// return fetch(URL + query).then((res) => res.json());
			const res = await axios.get(URL + query);
			const data = await res.data;
			return data;
		},
		// Disables fetch until query changes
		enabled: !!query,
	});
	console.log(error?.message);

	return (
		<>
			<Header />
			<main className='grow space-y-12'>
				<Searcn setQuery={setQuery} />
				{isSuccess ? <Entry data={data} /> : <>Error</>}
			</main>
			<Footer />
		</>
	);
}
