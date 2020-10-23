import React from "react";
import "../styles/classesNav.css"

import druid from "../data/druid/images/druid.jpg"
import hunter from "../data/hunter/images/hunter.jpg"
import mage from "../data/mage/images/mage.jpg"
import paladin from "../data/paladin/images/paladin.jpg"
import priest from "../data/priest/images/priest.jpg"
import rogue from "../data/rogue/images/rogue.jpg"
import shaman from "../data/shaman/images/shaman.jpg"
import warlock from "../data/warlock/images/warlock.jpg"
import warrior from "../data/warrior/images/warrior.jpg"

const ClassesNav = () => {
    const iconArray = [druid, hunter, mage, paladin, priest, rogue, shaman, warlock, warrior]

return <div id="tc-classes"><div id="tc-classes-outer" style={{display: "block"}}><div id="tc-classes-inner">{iconArray.map((classIcon) => {
    return <img className="iconMedium" src={classIcon} />
})}</div></div></div>
}

export default ClassesNav

// <div className="iconMedium"><img src={druid}/></div>