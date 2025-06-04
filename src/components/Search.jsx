import Entry from './Entry';
import { useState } from 'react';
import data from '../data.js';

export default function Searcn() {
	const [query, setQuery] = useState('hello');
	// const [data, setData] = useState(JSON.parse(word));

	return (
		<>
			<input className='bg-slate-300' />
			<Entry data={data} />
		</>
	);
}
