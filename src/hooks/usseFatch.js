import { useEffect, useState } from "react";

export default function useFetch(url, method) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [Api, setApi] = useState([]);

    useEffect(() => {
        async function requestFetch() {
            try {
                const response = await fetch(url, {
                    method: method || "GET",
                });
                setApi(await response.json());
                setLoading(true);
                setError(false);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }
        requestFetch();
    }, [method, url]);

    return {
        loading,
        error,
        Api,
    };
}
