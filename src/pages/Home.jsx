import Loading from '../components/Loading';

export default function Home({ isLoading }) {
	return <>{isLoading && <Loading />}</>;
}
