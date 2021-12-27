import classes from "./style/toggle.module.css";

export default function Toggle({ className }) {
    return (
        <div className={className}>
            <div className={classes.title}>View toggle</div>
            <div className={classes.toggleIco}>
                <div className={classes.IcoAlign}>
                    <span className="material-icons">article</span>
                </div>
                <div className={`${classes.IcoAlign} ${classes.active}`}>
                    <span className="material-icons">format_list_bulleted</span>
                </div>
            </div>
        </div>
    );
}
