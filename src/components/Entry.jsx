export default function Entry({ data }) {
	const { word, phonetic, phonetics, origin, meanings } = data;
	const { text, audio } = phonetics || {};

	return <></>;
}
