export default function EntrySynonym({ synonyms, antonyms }) {
	function displaySynonyms(arr) {
		return (
			arr
				// Remove duplicate word
				.filter((item, index) => arr.indexOf(item) === index)
				// Map words and add hyperlink
				.map((word) => (
					<p key={word} className='text-lavender'>
						{word}
					</p>
				))
		);
	}

	return (
		<div className={'flex flex-wrap items-baseline gap-4'}>
			{synonyms && !antonyms ? (
				<>
					<h3 className='text-lg text-slate-500'>Synnonyms</h3>
					{displaySynonyms(synonyms)}
				</>
			) : (
				<>
					<h3 className='text-lg text-slate-500'>Antonyms</h3>
					{displaySynonyms(antonyms)}
				</>
			)}
		</div>
	);
}
