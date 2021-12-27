import { useEffect, useState } from "react";
import ListView from "./listview";

export default function Listviews() {
    const [error, setError] = useState(null);
    const [loading, setIsLoaded] = useState(false);
    const [Api, setApi] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setApi(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!loading) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {Api.map((item) => (
                    <ListView
                        key={item.id}
                        title={item.title}
                        body={item.body}
                    />
                ))}
            </ul>
        );
    }
}
