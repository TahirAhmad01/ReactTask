import Feedback from "./feedBack";
import Profile from "./profile";
import classes from "./style/leftbar.module.css";
import Toggle from "./toggle";

export default function LeftBar() {
    return (
        <div className={`${classes.leftBar} inner-padding`}>
            <div className="space">
                <Profile className={`${classes.Card}`} />
                <Toggle className={`${classes.Card}`} />
                <Feedback className={`${classes.Card}`} />
            </div>
        </div>
    );
}
