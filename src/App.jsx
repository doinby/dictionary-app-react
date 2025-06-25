import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { URL } from './ultils/ultils';
import HomeLayout from './layouts/HomeLayout';
import Searcn from './components/Search';
import Loading from './components/Loading';
import Entry from './components/Entry';
import Error from './components/Error';
import { Route, Routes } from 'react-router';

export default function App() {
	const [query, setQuery] = useState('');

	const { isLoading, isSuccess, isError, error, data } = useQuery({
		queryKey: ['query', query],
		queryFn: async () => {
			const res = await axios.get(URL + query);
			const data = await res.data;
			return data;
		},
		retry: 1,
		// Disables fetch until query changes
		enabled: !!query,
	});

	return (
		// <HomeLayout>
		// 	<Searcn query={query} setQuery={setQuery} />
		// 	{isLoading && <Loading />}
		// 	{isSuccess && <Entry data={data} setQuery={setQuery} />}
		// 	{isError && <Error error={error} />}
		// </HomeLayout>
		<Routes>
			<Route
				path='/'
				element={<HomeLayout query={query} setQuery={setQuery} />}
			>
				<Route
					index
					element={isSuccess && <Entry data={data} setQuery={setQuery} />}
				/>
			</Route>
		</Routes>
	);
}
