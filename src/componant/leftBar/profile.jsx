import classes from "./style/profile.module.css";

export default function Profile({ className }) {
    return (
        <>
            <div className={`${className} d-flex align-items-center`}>
                <div>
                    <div className={classes.avater}></div>
                </div>
                <div className={classes.avaterInfo}>
                    <div className={classes.avaterName}>Hi Reader</div>
                    <div className={classes.avaterLine}>Hear's your news!</div>
                </div>
            </div>
        </>
    );
}
