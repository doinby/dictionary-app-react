import EntryDefinition from './EntryDefinition';
import EntryHeader from './EntryHeader';

export default function Entry({ data, setQuery }) {
	const { word, phonetic, phonetics, meanings } = data[0];

	return (
		<article className='space-y-6'>
			<EntryHeader word={word} phonetic={phonetic} phonetics={phonetics} />
			<EntryDefinition meanings={meanings} setQuery={setQuery} />
		</article>
	);
}
