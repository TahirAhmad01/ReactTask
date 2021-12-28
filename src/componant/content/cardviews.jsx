import useFetch from "../../hooks/usseFatch";
import CardView from "./cardView";
import classes from "./style/CardViews.module.css";

export default function CardViews() {
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
                <div className={classes.cardHolder}>
                    {Api.map((item) => (
                        <CardView
                            key={item.id}
                            title={item.title}
                            body={item.body}
                        />
                    ))}
                </div>
            </>
        );
    }
}
