import ToggleButton from "../toggleButton";
import classes from "./style/toggle.module.css";

export default function Toggle({ className }) {
    return (
        <div className={className}>
            <div className={classes.title}>View toggle</div>
            <div className={classes.toggleIco}>
                <ToggleButton />
            </div>
        </div>
    );
}
