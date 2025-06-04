import playBtn from '../assets/images/icon-play.svg';

export default function Entry({ data }) {
	const { word, phonetic, phonetics, origin, meanings } = data;

	return (
		<article className='space-y-6'>
			<div className='flex justify-between'>
				<div>
					<h2 className='text-4xl font-bold'>{word}</h2>
					<p className='text-lavender'>{`/${phonetic}/`}</p>
				</div>
				<button>
					<img src={playBtn} />
				</button>
			</div>
			{meanings?.map(
				({
					idx,
					partOfSpeech,
					definitions: [{ definition, example, synonyms, antonyms }],
				}) => {
					// const { definition, example, synonyms, antonyms } = definitions[0];
					return (
						<div key={idx}>
							<fieldset className='my-6 border-t-1 border-slate-200'>
								<legend className='pr-6 text-lg font-bold'>
									{partOfSpeech}
								</legend>
							</fieldset>
							<ul>
								<h3 className='text-lg text-slate-500'>Meaning</h3>
								<li className='list-disc'>{definition}</li>
							</ul>
							<p>{example}</p>
							<p>{synonyms}</p>
							<p>{antonyms}</p>
						</div>
					);
				}
			)}
		</article>
	);
}
