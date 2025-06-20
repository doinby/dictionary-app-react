export default function Error({ error }) {
	const {
		response: {
			data: { title, message, resolution },
		},
	} = error;
	return (
		<>
			<p>{title}</p>
			<p>{message}</p>
			<p>{resolution}</p>
		</>
	);
}
