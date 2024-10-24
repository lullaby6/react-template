import { useParams } from 'react-router-dom'

export function Component() {
    const { id } = useParams()

    return <h1>User {id}</h1>
}