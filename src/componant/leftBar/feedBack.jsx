import classes from "./style/feedBack.module.css";

export default function Feedback({ className }) {
    return (
        <div className={className}>
            <div className={classes.title}>Have a Feedback?</div>
            <div className={classes.button}>
                <button>We're Listening!</button>
            </div>
        </div>
    );
}
