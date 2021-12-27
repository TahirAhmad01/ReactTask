import ListViews from "./listviews";
import PageNumber from "./pageNumber";
import classes from "./style/content.module.css";

export default function Content() {
    return (
        <div className={`${classes.content} inner-padding`}>
            <div className="space">
                <div>
                    <div>
                        <ListViews />
                        {/* <CardView /> */}
                    </div>
                    <div>
                        <PageNumber />
                    </div>
                </div>
            </div>
        </div>
    );
}
