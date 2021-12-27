import "../assests/css/style.css";
import Content from "./content/content";
import LeftBar from "./leftBar/leftSidebar";

export default function Home() {
    return (
        <div className="main-body">
            <div className="row">
                <LeftBar />
                <Content />
            </div>
        </div>
    );
}
