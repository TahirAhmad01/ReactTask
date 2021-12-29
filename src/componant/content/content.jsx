import { useContext } from "react";
import ToggleContext from "../../contex/toggleContex";
import CardViews from "./cardviews";
import ListViews from "./listviews";
import PageNumber from "./pageNumber";
import classes from "./style/content.module.css";

export default function Content() {
    const { toggle } = useContext(ToggleContext);
    return (
        <div className={`${classes.content} inner-padding`}>
            <div className="space">
                <div>
                    <div>
                        {toggle === "listView" ? <ListViews /> : <CardViews />}
                    </div>
                    <div>
                        <PageNumber />
                    </div>
                </div>
            </div>
        </div>
    );
}
