import EntryDefinition from './EntryDefinition';
import EntryHeader from './EntryHeader';

export default function Entry({ data }) {
	const { word, phonetic, phonetics, origin, meanings } = data[0];

	return (
		<article className='space-y-6'>
			<EntryHeader word={word} phonetic={phonetic} phonetics={phonetics} />
			<EntryDefinition meanings={meanings} />
		</article>
	);
}
