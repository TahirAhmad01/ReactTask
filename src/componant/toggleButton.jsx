import { useState } from "react";
import classes from "../assests/css/button.module.css";

export default function ToggleButton() {
    const [state, setState] = useState("cardView");
    return (
        <>
            <button
                className={
                    state === "cardView"
                        ? `${classes.IcoAlign} ${classes.active}`
                        : `${classes.IcoAlign}`
                }
                onClick={() => setState("cardView")}
            >
                <span className="material-icons">article</span>
            </button>
            <button
                className={
                    state === "listview"
                        ? `${classes.IcoAlign} ${classes.active}`
                        : `${classes.IcoAlign}`
                }
                onClick={() => setState("listview")}
            >
                <span className="material-icons">format_list_bulleted</span>
            </button>
        </>
    );
}
