import EntrySynonym from './EntrySynonym';

export default function EntryDefinition({ meanings, setQuery }) {
	return (
		<>
			{meanings.map(
				({
					partOfSpeech,
					definitions: [{ definition, example }],
					synonyms,
					antonyms,
				}) => {
					return (
						<div key={partOfSpeech} className='space-y-6'>
							<fieldset className='border-t-1 border-slate-200 dark:border-slate-800'>
								<legend className='text-lg font-bold italic'>
									{partOfSpeech}
								</legend>
							</fieldset>
							<h3 className='list-none text-lg text-slate-500'>Meaning</h3>
							<ul className='ml-4 space-y-3 list-disc list-inside'>
								<li>{definition}</li>
								{example && <q className='ml-3 text-slate-500'>{example}</q>}
							</ul>
							{(synonyms.length > 0 && (
								<EntrySynonym synonyms={synonyms} setQuery={setQuery} />
							)) ||
								(antonyms.length > 0 && (
									<EntrySynonym antonyms={antonyms} setQuery={setQuery} />
								))}
						</div>
					);
				}
			)}
		</>
	);
}
