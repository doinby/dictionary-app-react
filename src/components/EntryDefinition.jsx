import { getDisplayStyle } from '../ultils/ultils';
import EntrySynonym from './EntrySynonym';

export default function EntryDefinition({ meanings }) {
	// console.log('meanings:', meanings);
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
							<fieldset className='border-t-1 border-slate-200'>
								<legend className='text-lg font-bold italic'>
									{partOfSpeech}
								</legend>
							</fieldset>
							<ul className='space-y-3 list-disc list-inside'>
								<li className='list-none text-lg text-slate-500'>Meaning</li>
								<li className=''>{definition}</li>
								<li className={`${getDisplayStyle(example)}`}>
									<q className='ml-4 text-slate-500'>{example}</q>
								</li>
							</ul>
							<EntrySynonym synonyms={synonyms} />
							<EntrySynonym antonyms={antonyms} />
						</div>
					);
				}
			)}
		</>
	);
}
