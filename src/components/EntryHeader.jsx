import playBtn from '../assets/images/icon-play.svg';

export default function EntryHeader({ word, phonetics }) {
	return (
		<div className='space-y-6'>
			<h2 className='text-4xl font-bold'>{word}</h2>
			<div className='flex gap-8'>
				{phonetics.map((phonetic, idx) => {
					if (!phonetic.text || !phonetic.audio) {
						return;
					}
					return (
						<div key={`${word}-${idx}`} className='flex gap-2 items-center'>
							<p className='text-lavender'>{phonetic.text}</p>
							<button onClick={() => new Audio(phonetic.audio).play()}>
								<img
									src={playBtn}
									className='w-6 dark:brightness-200 dark:hue-rotate-200'
								/>
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}
