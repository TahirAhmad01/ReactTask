import classes from "./style/pagebutton.module.css";

export default function PageNumber() {
    return (
        <div
            className={`d-flex justify-content-center align-items-center ${classes.topSpace}`}
        >
            <button className={`${classes.pageButton} ${classes.active} `}>
                1
            </button>
            <button className={classes.pageButton}>2</button>
            <button className={classes.pageButton}>3</button>
            <button className={classes.nextBtn}>
                <span className="material-icons-two-tone">double_arrow</span>
            </button>
        </div>
    );
}
