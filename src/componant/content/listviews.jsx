import useFetch from "../../hooks/usseFatch";
import ListView from "./listview";

export default function Listviews() {
    const { loading, error, Api } = useFetch();

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!loading) {
        return (
            <div className="preloader">
                <div className="loader"></div>
            </div>
        );
    } else {
        return (
            <>
                {Api.map((item) => (
                    <ListView
                        key={item.id}
                        title={item.title}
                        body={item.body}
                    />
                ))}
            </>
        );
    }
}
