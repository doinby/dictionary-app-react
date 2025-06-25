export default function Error({ error }) {
	if (error.status === 404) {
		const {
			data: { message, resolution },
		} = error.response;
		return (
			<article className='h-[40%] flex flex-col gap-8 justify-center items-center text-center'>
				<h3 className='text-5xl'>😕</h3>
				<h3 className='text-2xl font-bold'>No Definition Found</h3>
				<p>{`${message} ${resolution}`}</p>
			</article>
		);
	}

	return (
		<article className='h-[40%] flex flex-col gap-8 justify-center items-center text-center'>
			<h3 className='text-2xl font-bold'>{error.code}</h3>
			<p>{error.message}</p>
		</article>
	);
}
