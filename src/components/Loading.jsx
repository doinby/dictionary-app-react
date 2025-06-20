import { SyncLoader } from 'react-spinners';

export default function Loading() {
	return (
		<div className='h-[30%] flex items-center justify-center'>
			<SyncLoader color={'#a445ed'} cssOverride={{ opacity: '70%' }} />
		</div>
	);
}

// fancy skeleton loader
// https://github.com/danilowoz/react-content-loader
