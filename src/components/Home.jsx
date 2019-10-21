import React from 'react';
import useAxios from 'axios-hooks'

const Home = () => {

    const [{ data, loading, error }, refetch] = useAxios(
        'https://api.myjson.com/bins/820fc'
    )

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <div>
            <button onClick={refetch}>refetch</button>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default Home;
