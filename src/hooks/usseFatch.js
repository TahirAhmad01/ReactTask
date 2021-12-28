import { useEffect, useState } from "react";

export default function useFetch() {
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

    return {
        loading,
        error,
        Api,
    };
}
