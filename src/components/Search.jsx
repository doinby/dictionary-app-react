import Entry from './Entry';
import data from '../data.json';
import { useState } from 'react';

export default function Searcn() {
	const [query, setQuery] = useState('hello');

	return (
		<>
			<input className='bg-slate-300' />
			<Entry data={data} />
		</>
	);
}
