import React from "react";

import "../styles/mainContent.css"

const MainContent = () => {
    return <div id="tc-itself" className="tc-default">
        <div className="tc-sidebar-anchor"><div className="tc-sidebar rconers"><tt/><strong /><var/><em /> <div className="tc-sidebar-inner"><a className="tc-button-reset">Reset</a></div></div></div>
        <div className="tc-upper rcorners"><tt /><strong /><var /><em />
        <span className="tc-upper-class"><b>Classname</b><b>(0/0/0)</b></span><span className="tc-upper-ptsleft">Points left: <b>51</b></span><span classNam="tc-upper-reqlevel">Required level: <b>-</b></span></div>
    <div className="tc-main">
        <div id="firstTree" style={{display: "none"}}>
            <div style={{backgroundRepeat: "no-repeat", float: "left", backgroundImage: null, backgroundSize: "240px 360px"}}><div style={{overflow: "hidden", width: "240px"}}><table><tbody><tr><td><div className="iconMedium" style={{backgroundColor: "red"}}></div></td></tr></tbody></table></div></div>
        </div>
    </div>
    </div>
}

export default MainContent