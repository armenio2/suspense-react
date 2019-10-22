import React, { Suspense } from 'react';
import useAxios from 'axios-hooks'


const Home = () => {

    const [{ data }, refetch] = useAxios(
        'https://api.myjson.com/bins/820fc'
    )

    return (
        <div>
            <button onClick={refetch}>refetch</button>
            <Suspense fallback={<div>Loading...</div>}>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </Suspense>
        </div>
    );
}

export default Home;
