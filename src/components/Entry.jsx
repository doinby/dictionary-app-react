import EntryDefinition from './EntryDefinition';
import EntryHeader from './EntryHeader';

export default function Entry({ data, error }) {
	if (error) {
		const {
			response: {
				data: { title, message, resolution },
			},
		} = error;
		return (
			<>
				<p>{title}</p>
				<p>{message}</p>
				<p>{resolution}</p>
			</>
		);
	}

	const { word, phonetic, phonetics, origin, meanings } = data ? data[0] : {};

	return (
		<article className='space-y-6'>
			<EntryHeader word={word} phonetic={phonetic} />
			<EntryDefinition meanings={meanings} />
		</article>
	);
}
