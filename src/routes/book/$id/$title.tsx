import { useParams } from 'react-router';

export default () => {
    const params = useParams();

    return <>
        <h1>Book:</h1>
        <h1>{params.id}</h1>
        <h1>Title:</h1>
        <h1>{params.title}</h1>
    </>
}