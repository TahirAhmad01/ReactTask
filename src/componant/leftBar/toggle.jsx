import { useContext } from "react";
import ToggleContext from "../../contex/toggleContex";
import classes from "./style/toggle.module.css";

export default function Toggle({ className }) {
    const { SwichButton, toggle } = useContext(ToggleContext);
    return (
        <div className={className}>
            <div className={classes.title}>View toggle</div>
            <div className={classes.toggleIco}>
                <button
                    className={
                        toggle === "cardView"
                            ? `${classes.IcoAlign} ${classes.active}`
                            : `${classes.IcoAlign}`
                    }
                    onClick={SwichButton}
                    value="cardView"
                >
                    <span className="material-icons">article</span>
                </button>
                <button
                    className={
                        toggle === "listView"
                            ? `${classes.IcoAlign} ${classes.active}`
                            : `${classes.IcoAlign}`
                    }
                    onClick={SwichButton}
                    value="listView"
                >
                    <span className="material-icons">format_list_bulleted</span>
                </button>
            </div>
            ;
        </div>
    );
}
