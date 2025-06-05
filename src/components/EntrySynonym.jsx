import { getDisplayStyle } from '../ultils/ultils';

export default function EntrySynonym({ synonyms, antonyms }) {
	if (!synonyms && antonyms?.length) {
		return (
			<div className={'flex items-baseline gap-4'}>
				<h3 className='text-lg text-slate-500'>Antonyms</h3>
				{antonyms.map((word) => {
					return <p key={word}>{word}</p>;
				})}
			</div>
		);
	} else if (synonyms?.length) {
		return (
			<div className={'flex items-baseline gap-4'}>
				<h3 className='text-lg text-slate-500'>Synonyms</h3>
				{synonyms.map((word) => {
					return <p key={word}>{word}</p>;
				})}
			</div>
		);
	}
}
