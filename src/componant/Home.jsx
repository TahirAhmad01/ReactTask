import { useState } from "react";
import "../assests/css/style.css";
import ToggleContext from "../contex/toggleContex";
import Content from "./content/content";
import LeftBar from "./leftBar/leftSidebar";

export default function Home() {
    const [toggle, setToogle] = useState("listView");

    const SwichButton = (e) => {
        const value = e.target.value;
        if (value === "listView") {
            setToogle("listView");
        } else {
            setToogle("cardView");
        }
    };

    return (
        <div className="main-body">
            <div className="row">
                <ToggleContext.Provider value={{ SwichButton, toggle }}>
                    <LeftBar />
                    <Content />
                </ToggleContext.Provider>
            </div>
        </div>
    );
}
