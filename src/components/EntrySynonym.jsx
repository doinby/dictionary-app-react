export default function EntrySynonym({ synonyms, antonyms, setQuery }) {
	function displaySynonyms(arr) {
		return (
			arr
				// Remove duplicate word
				.filter((item, index) => arr.indexOf(item) === index)
				// Map words and add hyperlink
				.map((word) => (
					<button
						key={word}
						onClick={() => setQuery(word)}
						className='text-lavender'
					>
						{word}
					</button>
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
