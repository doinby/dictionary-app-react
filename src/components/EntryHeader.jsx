import playBtn from '../assets/images/icon-play.svg';
import { getDisplayStyle } from '../ultils/ultils';

export default function EntryHeader({ word, phonetic }) {
	return (
		<div className='flex justify-between'>
			<div>
				<h2 className='text-4xl font-bold'>{word}</h2>
				<p
					className={`${getDisplayStyle(phonetic)} text-lavender`}
				>{`${phonetic}`}</p>
			</div>
			<button>
				<img src={playBtn} />
			</button>
		</div>
	);
}
