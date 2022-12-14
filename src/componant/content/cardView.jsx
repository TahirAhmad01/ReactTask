import classes from "./style/cardView.module.css";

export default function CardView({ key, title, body }) {
    return (
      <div className={classes.card} key={key}>
        <div className={classes.clear}>
          <span className="material-symbols-outlined">close</span>
          <span class="material-symbols-outlined">close</span>
        </div>
        <div className={classes.contentFix}>
          <div>
            <div className={classes.title}>{title}</div>
            <div className={classes.body}>{body}</div>
            <div className={classes.time}>Mon, 21 Dec 2020 14:57 GMT</div>
          </div>
          <div className={classes.grow}>
            <div className={classes.cardImage}></div>
          </div>
        </div>
      </div>
    );
}
