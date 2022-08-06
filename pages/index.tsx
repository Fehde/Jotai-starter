import { useAtom } from 'jotai';
import type { GetServerSideProps, NextPage } from 'next';
import { countAtom, countMinusAtom } from '../components/atoms';

type TParams = {};
export const getServerSideProps: GetServerSideProps<TParams> = async () => {
    return {
        props: {},
    };
};

const Home: NextPage = () => {
    const [countState, setCountState] = useAtom(countAtom);
    const [countMinusState] = useAtom(countMinusAtom);

    return (
        <div>
            <p suppressHydrationWarning>countState: {countState}</p>
            <p suppressHydrationWarning>countMinusState: {countMinusState}</p>
            <button onClick={() => setCountState((c) => c + 1)}>Count Up !</button>
        </div>
    );
};

export default Home;
