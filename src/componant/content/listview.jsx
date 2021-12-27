import classes from "./style/listView.module.css";

export default function ListView({ key, title, body }) {
    return (
        <div className={`${classes.Listview} d-flex align-items-center`}>
            <div
                className={`${classes.ListCard} d-flex align-items-center`}
                key={key}
            >
                <div>
                    <div className={classes.thumnailImg}></div>
                </div>
                <div className={classes.newsBody}>
                    <div className={classes.newsTitle}>{title}</div>
                    <div className={classes.newsDes}>{body}</div>
                    <div className={classes.newsTime}>
                        Mon, 21 Dec 2020 14:57 GMT
                    </div>
                </div>
            </div>
            <div className={classes.delete}>
                <div className={classes.removeIco}>
                    <span className="material-icons-two-tone">clear</span>
                </div>
            </div>
        </div>
    );
}
